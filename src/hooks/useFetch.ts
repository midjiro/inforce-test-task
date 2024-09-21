import { useState, useEffect } from 'react';

interface FetchResponse<T> {
    data: T[] | null;
    loading: boolean;
    error: string | null;
}
const useFetch = <T>(urls: string[]): FetchResponse<T> => {
    const [data, setData] = useState<T[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all(
                    urls.map((url) => fetch(url))
                );
                const results = await Promise.all(
                    responses.map((res) => {
                        if (!res.ok) {
                            throw new Error('Network response was not ok');
                        }

                        return res.json();
                    })
                );

                setData(results);
            } catch (err) {
                setError(
                    err instanceof Error ? err.message : 'An error occurred'
                );
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};

export default useFetch;
