// //1. currect version for apply form
// const API_URL ="http://localhost:5000/api";
// export const apiClient = {
//   async get<T>(endpoint: string): Promise<T> {
//     const response = await fetch(`${API_URL}${endpoint}`);
//     if (!response.ok) {
//       throw new Error(`API error: ${response.status}`);
//     }
//     return response.json();
//   },

// async post<T>(
//   endpoint: string,
//   data: unknown
// ): Promise<T> {

//   const response = await fetch(
//     `${API_URL}${endpoint}`,
//     {
//       method: "POST",

//       headers: {
//         "Content-Type": "application/json",

//         "x-user-id":
//           localStorage.getItem("userId") || "",
//       },

//       body: JSON.stringify(data),
//     }
//   );

//   if (!response.ok) {

//     const errorData =
//       await response.json();

//     throw new Error(
//       errorData.message ||
//       `API error: ${response.status}`
//     );
//   }

//   return response.json();
// }

                     // 2. changes
//   async post<T>(endpoint: string, data: unknown): Promise<T> {
//     const response = await fetch(`${API_URL}${endpoint}`, {
//       method: 'POST',
//       headers: {
//   "Content-Type": "application/json",

//  "x-user-id": localStorage.getItem("userId") || "",
// },
//       body: JSON.stringify(data),
//     });
    
//     if (!response.ok) {
//       throw new Error(`API error: ${response.status}`);
//     }
//     return response.json();
//   },


// updated code for applied job -:

const BASE = process.env.NEXT_PUBLIC_BASE_URL ||"http://localhost:5000/api";

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
