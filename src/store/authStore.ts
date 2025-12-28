import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { LoginPayload, LoginResponse } from "../types/auth";
import { api } from "../lib/axios";

interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;

  login: (payload: LoginPayload) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      loading: false,
      error: null,

      login: async (payload: LoginPayload) => {
        set({ loading: true, error: null });

        try {
          const res = await api.post<LoginResponse>("/auth/login", payload);

          if (res.data.status) {
            set({
              isAuthenticated: true,
              loading: false,
            });
          } else {
            set({
              error: "Login gagal",
              loading: false,
            });
          }
        } catch (err: any) {
          console.error("LOGIN ERROR:", err);

          set({
            error:
              err.response?.data?.message ||
              err.message ||
              "Terjadi kesalahan",
            loading: false,
          });
        }
      },

      logout: () => {
        set({ isAuthenticated: false });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
