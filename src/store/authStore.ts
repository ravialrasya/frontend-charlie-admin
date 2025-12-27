import { create } from "zustand";
import type { LoginPayload, LoginResponse } from "../types/auth";

interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;

  login: (payload: LoginPayload) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  loading: false,
  error: null,

  login: async (payload) => {
    set({ loading: true, error: null });

    try {
      const res = await fetch(
        "https://api.kapct.co.id/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        throw new Error("Login gagal");
      }

      const json: LoginResponse = await res.json();

      if (json.status) {
        set({
          isAuthenticated: true,
          loading: false,
        });
      } else {
        set({
          error: json.message || "Login gagal",
          loading: false,
        });
      }
    } catch (err: any) {
      set({
        error: err.message,
        loading: false,
      });
    }
  },

  logout: () => {
    set({ isAuthenticated: false });
  },
}));
