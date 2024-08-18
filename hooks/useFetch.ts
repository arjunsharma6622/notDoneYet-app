import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Toast from 'react-native-toast-message';

type ApiResponse<T> = {
  success: boolean;
  data: T;
  message: string;
};

const useFetch = <T>(url: string, dependencies: any[] = []) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await axios.get<ApiResponse<T>>(url);
      const { success, data, message } = response.data;

      if (success) {
        setData(data);
      } else {
        throw new Error(message || "An unexpected error occurred");
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || "Error fetching data";
      setError(errorMessage);
      Toast.show({
        type: 'error',
        text1: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, dependencies);

  return { data, isLoading, error, refetch: fetchData };
};

export default useFetch;