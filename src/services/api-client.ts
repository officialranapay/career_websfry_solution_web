const API_URL ="http://localhost:5000/api";

export const apiClient = {
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return response.json();
  },

                     // 1. changes
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

async post<T>(
  endpoint: string,
  data: unknown
): Promise<T> {

  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        "x-user-id":
          localStorage.getItem("userId") || "",
      },

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
}

// async post<T>(
//   endpoint: string,
//   data: unknown
// ): Promise<T> {

//   const headers: HeadersInit = {
//     "Content-Type": "application/json",
//   };

//   // only add user-id if available

//   const userId =
//     localStorage.getItem("userId");

//   if (userId) {

//     headers["x-user-id"] = userId;
//   }

//   const response = await fetch(
//     `${API_URL}${endpoint}`,
//     {
//       method: "POST",
//       headers,
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

// };



// const API_URL = "http://localhost:5000/api";

// export const apiClient = {

//   async get<T>(
//     endpoint: string
//   ): Promise<T> {

//     const headers: HeadersInit = {
//       "Content-Type": "application/json",
//     };

//     const userId =
//       localStorage.getItem("userId");

//     if (userId) {

//       headers["x-user-id"] = userId;
//     }

//     const response = await fetch(
//       `${API_URL}${endpoint}`,
//       {
//         method: "GET",
//         headers,
//       }
//     );

//     if (!response.ok) {

//       const errorData =
//         await response.json();

//       throw new Error(
//         errorData.message ||
//         `API error: ${response.status}`
//       );
//     }

//     return response.json();
//   },

//   async post<T>(
//     endpoint: string,
//     data: unknown
//   ): Promise<T> {

//     const headers: HeadersInit = {
//       "Content-Type": "application/json",
//     };

//     const userId =
//       localStorage.getItem("userId");

//     if (userId) {

//       headers["x-user-id"] = userId;
//     }

//     const response = await fetch(
//       `${API_URL}${endpoint}`,
//       {
//         method: "POST",
//         headers,
//         body: JSON.stringify(data),
//       }
//     );

//     if (!response.ok) {

//       const errorData =
//         await response.json();

//       throw new Error(
//         errorData.message ||
//         `API error: ${response.status}`
//       );
//     }

//     return response.json();
//   },
 };