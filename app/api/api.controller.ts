export async function fetchApiWithFallback(apiUrl: string, params: URLSearchParams, fallbackData: object) {
        // add the query parameters to the API url
        const apiUrlWithParams = new URL(apiUrl);
        params.forEach((value, key) => {
            apiUrlWithParams.searchParams.append(key, value);
        });
    
        console.log("API URL with Parameters:", apiUrlWithParams.toString());
    
        // try to fetch data from the API
        try {
            const apiResponse = await fetch(apiUrlWithParams.toString());
    
            if (!apiResponse.ok) {
                // if the API server does not exist, return static data
                //? did I really catch "connection refused" here?
                if (!apiResponse.status || apiResponse.status === 0) {
                    throw new Error(`API request failed with status ${apiResponse.status} ${apiResponse.statusText}`);
                }
    
                // for other errors, return the API response as is
                return apiResponse;
            }
    
            // if successful, return the data as JSON
            const data = await apiResponse.json();
            return Response.json(data);
        } catch (e: Error | unknown) {
            console.error("Error fetching from API:", e);
            return Response.json(fallbackData);
        }
}