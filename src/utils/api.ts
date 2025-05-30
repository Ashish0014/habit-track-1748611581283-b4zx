interface FetchOptions extends RequestInit {
  params?: Record<string, string>;
}

export async function fetchApi<T>(
  endpoint: string,
  { params, ...options }: FetchOptions = {}
): Promise<T> {
  const url = new URL(endpoint, import.meta.env.VITE_API_URL);
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}