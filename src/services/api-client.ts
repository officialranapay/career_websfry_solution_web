// Simulated API client with artificial delay to mimic real network requests
const DELAY_MS = 600;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const apiClient = {
  async get<T>(data: T): Promise<T> {
    await delay(DELAY_MS);
    return data;
  },

  async post<T>(data: T, shouldFail = false): Promise<T> {
    await delay(DELAY_MS);
    if (shouldFail) {
      throw new Error("Simulated API failure");
    }
    return data;
  },
};
