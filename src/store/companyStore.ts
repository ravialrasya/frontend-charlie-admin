import { create } from "zustand";
import { api } from "../lib/axios";
import type { Company, CompanyDetail } from "../types/company";

interface CompanyState {
  companies: Company[];
  selectedCompany: CompanyDetail | null;
  loading: boolean;
  error: string | null;

  fetchCompanies: () => Promise<void>;
  fetchCompanyById: (id: string) => Promise<void>;
  createCompany: (payload: any) => Promise<void>;
  updateCompany: (id: string, payload: any) => Promise<void>;
  deleteCompany: (id: string) => Promise<void>;
}

export const useCompanyStore = create<CompanyState>((set) => ({
  companies: [],
  selectedCompany: null,
  loading: false,
  error: null,

  fetchCompanies: async () => {
    set({ loading: true });
    try {
      const res = await api.get("/company");
      set({ companies: res.data.data });
    } catch (err: any) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  fetchCompanyById: async (id) => {
    set({ loading: true });
    try {
      const res = await api.get(`/company/${id}?projects=true`);
      set({ selectedCompany: res.data.data });
    } catch (err: any) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  createCompany: async (payload) => {
    await api.post("/company", payload);
  },

  updateCompany: async (id, payload) => {
    await api.patch(`/company/${id}`, payload);
  },

  deleteCompany: async (id) => {
    await api.delete(`/company/${id}`);
    set((state) => ({
      companies: state.companies.filter((c) => c.id !== id),
    }));
  },
}));
