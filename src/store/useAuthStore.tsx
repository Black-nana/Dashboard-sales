// authStore.js
import { create } from 'zustand';
import axios from 'axios';

export type User = {
  token: string;
  id: number;
  name: string;
  email: string;
  role: string;
};

export type UserData = {
  username: string;
  password: string;
};

type AuthStore = {
  isAuthenticated: boolean;
  user: User | null;
  login: (userData: UserData) => Promise<User>;
  logout: () => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (userData: UserData) => {
    const response = await axios.post(
      'https://fakestoreapi.com/auth/login',
      userData
    );
    const user = response.data as User;
    set({ isAuthenticated: true});
    return user;
  },
  logout: () => set({ isAuthenticated: false, user: null }),
}));

export default useAuthStore;
