import { create } from "zustand";
import type { DashboardData, DashboardResponse } from "../types/dashboard";

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
      const res = await fetch(
        "https://api.kapct.co.id/api/v1/company/dashboard"
      );

      if (!res.ok) {
        throw new Error("Gagal mengambil dashboard");
      }

      const json: DashboardResponse = await res.json();

      if (json.status) {
        set({
          data: json.data,
          loading: false,
        });
      } else {
        set({
          error: "Response status false",
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
}));
