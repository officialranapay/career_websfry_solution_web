// Simulated API client with artificial delay to mimic real network requests
// const DELAY_MS = 600;

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// export const apiClient = {
//   async get<T>(data: T): Promise<T> {
//     await delay(DELAY_MS);
//     return data;
//   },

//   async post<T>(data: T, shouldFail = false): Promise<T> {
//     await delay(DELAY_MS);
//     if (shouldFail) {
//       throw new Error("Simulated API failure");
//     }
//     return data;
//   },
// };


const API_URL ="http://localhost:5000/api";

export const apiClient = {
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return response.json();
  },

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return response.json();
  },
};



