import { Dog } from "@/types";
import { useState, useEffect } from "react";

const API_BASE_URL = "http://localhost:8080/api";

type Endpoint = "search" | "search/breed" | "search/name";

export const useSearch = (): {
  dogs: Dog[];
  loading: boolean;
  error: string | null;
  fetchDogs: (endpoint: Endpoint, queryParams: Record<string, any>) => void;
  resetDogs: () => void;
} => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDogs = async (
    endpoint: string,
    queryParams: Record<string, any>,
  ) => {
    setLoading(true);
    try {
      const url = new URL(`${API_BASE_URL}/${endpoint}`);
      Object.keys(queryParams).forEach((key) =>
        url.searchParams.append(key, queryParams[key]),
      );
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error("Failed to fetch dogs");
      }
      const data: Dog[] = await response.json();
      setDogs(data);
      setError(null);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const resetDogs = () => {
    setDogs([]);
    setError(null);
    setLoading(false);
  };

  return { dogs, loading, error, fetchDogs, resetDogs };
};
