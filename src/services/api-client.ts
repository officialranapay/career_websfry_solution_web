// updated code for applied job -:

const BASE = process.env.NEXT_PUBLIC_BASE_URL;

export const apiClient = {

  async get<T>(endpoint: string): Promise<T> {

    const headers: HeadersInit = {};

    // safe localStorage access

    if (typeof window !== "undefined") {

      const accessToken =
        localStorage.getItem("accessToken");

      if (accessToken) {
        headers["Authorization"] = `Bearer ${accessToken}`;
      }
    }

    const response = await fetch(
      `${BASE}${endpoint}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {

      const errorData =
        await response.json();

      throw new Error(
        errorData.message ||
        `API error: ${response.status}`
      );
    }

    return response.json();
  },

  async post<T>(
    endpoint: string,
    data: unknown
  ): Promise<T> {

    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    // safe localStorage access

    if (typeof window !== "undefined") {

     
      const accessToken =
        localStorage.getItem("accessToken");

      if (accessToken) {
        headers["Authorization"] = `Bearer ${accessToken}`;
      }
    }

    const response = await fetch(
      `${BASE}${endpoint}`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {

      const errorData =
        await response.json();

      throw new Error(
        errorData.message ||
        `API error: ${response.status}`
      );
    }

    return response.json();
  },

};
