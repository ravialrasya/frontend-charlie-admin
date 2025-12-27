import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { LoginPayload, LoginResponse } from "../types/auth";

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

      login: async (payload: any) => {
        set({ loading: true, error: null });

        const res = await fetch(
          "https://api.kapct.co.id/api/v1/auth/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            credentials: "include",
          }
        );

        const json: LoginResponse = await res.json();

        if (json.status) {
          set({ isAuthenticated: true, loading: false });
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
