import { useState, useEffect } from "react";
import { CategoriesResponse } from "../types";

export function useFetch(url: string) {
    const [data, setData] = useState<CategoriesResponse|null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string|null>(null);

    useEffect(() => {
        // async function inside useEffect
        // because useEffect callback can't be async directly
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);

                if (!response.ok) throw new Error('Failed to fetch');

                const result = await response.json();
                setData(result);
            } catch (err) {
                console.error(err);
                if (err instanceof Error) setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}