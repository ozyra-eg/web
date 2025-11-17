"use client";
// @ts-nocheck - file converted from JS to TSX; narrow typings and motion prop types are intentionally relaxed here

import React, {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useState,
} from "react";
import { motion, AnimatePresence, Transition } from "motion/react";

// Utility to combine classNames
function cn(...classes: Array<string | undefined | null | false>) {
    return classes.filter(Boolean).join(" ");
}

type StaggerFrom = "first" | "last" | "center" | "random" | number | string;

export interface RotatingTextRef {
    next: () => void;
    previous: () => void;
    jumpTo: (index: number) => void;
    reset: () => void;
}

interface motionValue {
    [key: string]: string | number;
}

export interface RotatingTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    texts: string[];
    // Limited, safer typings for motion props to avoid `any` while remaining flexible.
    transition?: Transition;
    initial?: motionValue;
    animate?: motionValue;
    exit?: motionValue;
    animatePresenceMode?: "wait" | "sync" | "popLayout" | undefined;
    animatePresenceInitial?: boolean;
    rotationInterval?: number;
    staggerDuration?: number;
    staggerFrom?: StaggerFrom;
    loop?: boolean;
    auto?: boolean;
    splitBy?: "characters" | "words" | "lines" | string;
    onNext?: (index: number) => void;
    mainClassName?: string;
    splitLevelClassName?: string;
    elementLevelClassName?: string;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>((props, ref) => {
    const {
        texts,
        transition = { type: "spring", damping: 25, stiffness: 300 },
        initial = { y: "100%", opacity: 0 },
        animate = { y: 0, opacity: 1 },
        exit = { y: "-120%", opacity: 0 },
        animatePresenceMode = "wait",
        animatePresenceInitial = false,
        rotationInterval = 2000,
        staggerDuration = 0,
        staggerFrom = "first",
        loop = true,
        auto = true,
        splitBy = "characters",
        onNext,
        mainClassName,
        splitLevelClassName,
        elementLevelClassName,
        ...rest
    } = props;

    const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

    const splitIntoCharacters = (text: string) => {
        // Prefer grapheme cluster segmentation if available. Avoid using `any` by
        // declaring a narrow shape for Segmenter.
        type SegmenterCtor = new (locale?: string, opts?: { granularity?: string }) => {
            segment: (input: string) => Iterable<{ segment: string }>;
        };

        const Segmenter = (Intl as unknown as { Segmenter?: SegmenterCtor }).Segmenter;
        if (typeof Intl !== "undefined" && Segmenter) {
            const segmenter = new Segmenter("en", { granularity: "grapheme" });
            return Array.from(segmenter.segment(text), (segment) => segment.segment);
        }
        return Array.from(text);
    };

    const elements = useMemo(() => {
        const currentText = texts[currentTextIndex];
        if (splitBy === "characters") {
            const words = currentText.split(" ");
            return words.map((word) => ({
                characters: splitIntoCharacters(word),
                needsSpace: true, // we'll adjust below per index
            }));
        }
        if (splitBy === "words") {
            return currentText.split(" ").map((word, i, arr) => ({
                characters: [word],
                needsSpace: i !== arr.length - 1,
            }));
        }
        if (splitBy === "lines") {
            return currentText.split("\n").map((line, i, arr) => ({
                characters: [line],
                needsSpace: i !== arr.length - 1,
            }));
        }

        return currentText.split(String(splitBy)).map((part, i, arr) => ({
            characters: [part],
            needsSpace: i !== arr.length - 1,
        }));
    }, [texts, currentTextIndex, splitBy]);

    // Fix needsSpace for characters split (we set true above)
    if (splitBy === "characters") {
        for (let i = 0; i < elements.length; i++) {
            elements[i].needsSpace = i !== elements.length - 1;
        }
    }

    const getStaggerDelay = useCallback(
        (index: number, totalChars: number) => {
            if (staggerFrom === "first") return index * (staggerDuration ?? 0);
            if (staggerFrom === "last") return (totalChars - 1 - index) * (staggerDuration ?? 0);
            if (staggerFrom === "center") {
                const center = Math.floor(totalChars / 2);
                return Math.abs(center - index) * (staggerDuration ?? 0);
            }
            if (staggerFrom === "random") {
                const randomIndex = Math.floor(Math.random() * totalChars);
                return Math.abs(randomIndex - index) * (staggerDuration ?? 0);
            }
            // numeric or string index
            const fromIndex = typeof staggerFrom === "number" ? staggerFrom : Number(staggerFrom);
            if (!Number.isNaN(fromIndex)) return Math.abs(fromIndex - index) * (staggerDuration ?? 0);
            return index * (staggerDuration ?? 0);
        },
        [staggerFrom, staggerDuration]
    );

    const handleIndexChange = useCallback(
        (newIndex: number) => {
            setCurrentTextIndex(newIndex);
            if (onNext) onNext(newIndex);
        },
        [onNext]
    );

    const next = useCallback(() => {
        const nextIndex =
            currentTextIndex === texts.length - 1 ? (loop ? 0 : currentTextIndex) : currentTextIndex + 1;
        if (nextIndex !== currentTextIndex) {
            handleIndexChange(nextIndex);
        }
    }, [currentTextIndex, texts.length, loop, handleIndexChange]);

    const previous = useCallback(() => {
        const prevIndex =
            currentTextIndex === 0 ? (loop ? texts.length - 1 : currentTextIndex) : currentTextIndex - 1;
        if (prevIndex !== currentTextIndex) {
            handleIndexChange(prevIndex);
        }
    }, [currentTextIndex, texts.length, loop, handleIndexChange]);

    const jumpTo = useCallback(
        (index: number) => {
            const validIndex = Math.max(0, Math.min(index, texts.length - 1));
            if (validIndex !== currentTextIndex) {
                handleIndexChange(validIndex);
            }
        },
        [texts.length, currentTextIndex, handleIndexChange]
    );

    const reset = useCallback(() => {
        if (currentTextIndex !== 0) {
            handleIndexChange(0);
        }
    }, [currentTextIndex, handleIndexChange]);

    useImperativeHandle(
        ref,
        () => ({
            next,
            previous,
            jumpTo,
            reset,
        }),
        [next, previous, jumpTo, reset]
    );

    useEffect(() => {
        if (!auto) return;
        const intervalId = setInterval(next, rotationInterval);
        return () => clearInterval(intervalId);
    }, [next, rotationInterval, auto]);

    return (
        // @ts-expect-error - spreading `rest` onto `motion.span` can trigger complex event-type mismatches
        <motion.span
            className={cn("flex flex-wrap whitespace-pre-wrap relative", mainClassName)}
            {...rest}
            layout

        >
            <span className="sr-only">{texts[currentTextIndex]}</span>
            <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
                <motion.span
                    key={currentTextIndex}
                    className={cn(
                        splitBy === "lines"
                            ? "flex flex-col w-full"
                            : "flex flex-wrap whitespace-pre-wrap relative"
                    )}
                    layout
                    aria-hidden="true"
                >
                    {elements.map((wordObj, wordIndex, array) => {
                        const previousCharsCount = array
                            .slice(0, wordIndex)
                            .reduce((sum, word) => sum + word.characters.length, 0);
                        const totalChars = array.reduce((sum, word) => sum + word.characters.length, 0);
                        return (
                            <span key={wordIndex} className={cn("inline-flex", splitLevelClassName)}>
                                {wordObj.characters.map((char, charIndex) => (
                                    <motion.span
                                        key={charIndex}
                                        initial={initial}
                                        animate={animate}
                                        exit={exit}
                                        transition={{
                                            ...(transition ?? {}),
                                        }}
                                        className={cn("inline-block", elementLevelClassName)}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                {wordObj.needsSpace && <span className="whitespace-pre"> </span>}
                            </span>
                        );
                    })}
                </motion.span>
            </AnimatePresence>
        </motion.span>
    );
});

RotatingText.displayName = "RotatingText";
export default RotatingText;
