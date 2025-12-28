import { create } from "zustand";
import type { DashboardData, DashboardResponse } from "../types/dashboard";
import { api } from "../lib/axios";

interface DashboardState {
  data: DashboardData | null;
  loading: boolean;
  error: string | null;

  fetchDashboard: () => Promise<void>;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchDashboard: async () => {
    set({ loading: true, error: null });

    try {
      const res = await api.get<DashboardResponse>(
        "/company/dashboard", { withCredentials: true }
      );

      console.log(res, "GET DATA");

      if (res.data.status) {
        set({
          data: res.data.data,
          loading: false,
        });
      } else {
        set({
          error: "Response status false",
          loading: false,
        });
      }
    } catch (err: any) {
      console.error("ERROR:", err);

      set({
        error:
          err.response?.data?.message ||
          err.message ||
          "Terjadi kesalahan",
        loading: false,
      });
    }
  },
}));
