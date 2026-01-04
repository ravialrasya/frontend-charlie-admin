// src/store/projectStore.ts
import { create } from "zustand";
import type {
  Project,
  ProjectByCompanyResponse,
} from "../types/projek";

const BASE_URL = "https://api.kapct.co.id/api/v1/company";

type ProjectStore = {
  projects: Project[];
  selectedProject: Project | null;
  totalAllHour: number;
  loading: boolean;

  fetchAllProjects: () => Promise<void>;
  fetchProjectsByCompany: (companyId: string) => Promise<void>;
  fetchProjectById: (id: string) => Promise<void>;

  createProject: (payload: {
    project: string;
    company_id: string;
    start_date: string;
  }) => Promise<void>;

  updateProject: (
    id: string,
    payload: { project: string; start_date: string }
  ) => Promise<void>;

  changeProjectStatus: (id: string) => Promise<void>;
};

export const useProjectStore = create<ProjectStore>((set, get) => ({
  projects: [],
  selectedProject: null,
  totalAllHour: 0,
  loading: false,

  /* ===== GET ALL PROJECT ===== */
  fetchAllProjects: async () => {
    set({ loading: true });
    const res = await fetch(`${BASE_URL}/project/all`);
    const json = await res.json();
    set({ projects: json.data, loading: false });
  },

  /* ===== GET PROJECT BY COMPANY ===== */
  fetchProjectsByCompany: async (companyId) => {
    set({ loading: true });
    const res = await fetch(`${BASE_URL}/all_project/${companyId}`);
    const json = await res.json();
    const result: ProjectByCompanyResponse = json.data;

    set({
      projects: result.data,
      totalAllHour: result.total_all_hour,
      loading: false,
    });
  },

  /* ===== GET PROJECT BY ID ===== */
  fetchProjectById: async (id) => {
    set({ loading: true });
    const res = await fetch(`${BASE_URL}/project/${id}`);
    const json = await res.json();
    set({ selectedProject: json.data, loading: false });
  },

  /* ===== CREATE PROJECT ===== */
  createProject: async (payload) => {
    await fetch(`${BASE_URL}/project`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // refresh list
    get().fetchAllProjects();
  },

  /* ===== UPDATE PROJECT ===== */
  updateProject: async (id, payload) => {
    await fetch(`${BASE_URL}/project/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    get().fetchAllProjects();
  },

  /* ===== CHANGE STATUS ===== */
  changeProjectStatus: async (id) => {
    await fetch(`${BASE_URL}/project/status/${id}`, {
      method: "PATCH",
    });

    get().fetchAllProjects();
  },
}));
