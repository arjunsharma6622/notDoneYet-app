import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { API_HEAD } from "@/utils/utils";
import Toast from "react-native-toast-message";
import { router } from "expo-router";

interface AuthProps {
  authState?: { accessToken: string | null; refreshToken: string | null; authenticated: boolean | null; user: any };
  onLogin?: (email: string, password: string) => void;
  onLogout?: () => void;
  isLoading?: boolean;
}

const ACCESS_TOKEN = 'ACCESS_TOKEN';
const REFRESH_TOKEN = 'REFRESH_TOKEN';

const AuthContext = createContext<AuthProps>({});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, setAuthState] = useState<{
    accessToken: string | null;
    refreshToken: string | null;
    authenticated: boolean | null;
    user: any;
  }>({
    accessToken: null,
    refreshToken: null,
    authenticated: null,
    user: null,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadToken = async () => {
      const accessToken = await SecureStore.getItemAsync(ACCESS_TOKEN);
      const refreshToken = await SecureStore.getItemAsync(REFRESH_TOKEN);
      const userString = await SecureStore.getItemAsync('user');

      // console.log(`ACCESS - ${accessToken}, REFRESH - ${refreshToken}, USER - ${userString}`);

      if (accessToken && refreshToken && userString) {
        const user = JSON.parse(userString);
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        axios.defaults.baseURL = API_HEAD;
        setAuthState({ accessToken, refreshToken, authenticated: true, user });
      }
      setIsLoading(false);
    };
    loadToken();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_HEAD}/auth/login`, { email, password });
      const { user, accessToken, refreshToken } = response?.data?.data;
      setAuthState({ accessToken, refreshToken , authenticated: true, user });
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      await SecureStore.setItemAsync(ACCESS_TOKEN, accessToken);
      await SecureStore.setItemAsync(REFRESH_TOKEN, refreshToken);
      await SecureStore.setItemAsync('user', JSON.stringify(user));
      Toast.show({
        type: 'success',
        text1: 'Login Successful',
      });
      router.replace('/home');
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2: error?.response?.data?.message || 'Something went wrong',
        visibilityTime: 2000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    // call the logout API to remove the refresh token from the database
    // remove the data from the secure store
    await SecureStore.deleteItemAsync(ACCESS_TOKEN);
    await SecureStore.deleteItemAsync(REFRESH_TOKEN);
    await SecureStore.deleteItemAsync('user');

    axios.defaults.headers.common['Authorization'] = '';
    setAuthState({ accessToken: null, refreshToken: null, authenticated: false, user: null });
    router.replace('/(auth)/signin');
  };

  const value = {
    authState,
    isLoading,
    onLogin: login,
    onLogout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};