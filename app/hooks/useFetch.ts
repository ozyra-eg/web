import { useState, useEffect } from "react";
import { ApiResponse } from "../types";

export function useFetch<resource>(url: string | null) {
    // TODO: generalize this hook
    const [data, setData] = useState<ApiResponse<resource> | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Don't fetch if URL is null
        if (!url) {
            setLoading(false);
            return;
        }

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