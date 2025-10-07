import { QueryClient } from "@tanstack/react-query";

async function throwErrorIfNotOk(response: Response) {
  if (!response.ok) {
    const text = await response.text();
    try {
      const body = JSON.parse(text);
      throw new Error(body.message || response.statusText);
    } catch {
      throw new Error(response.statusText);
    }
  }
}

export async function apiRequest(
  url: string,
  options?: RequestInit
): Promise<any> {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    credentials: "include",
  });

  await throwErrorIfNotOk(response);

  if (response.headers.get("content-type")?.includes("application/json")) {
    return response.json();
  }

  return response.text();
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const response = await fetch(queryKey[0] as string, {
          credentials: "include",
        });

        await throwErrorIfNotOk(response);

        return response.json();
      },
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});
