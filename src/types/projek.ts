// src/types/project.ts

/* ===== BASIC ===== */
export type Company = {
  id: string;
  company: string;
};

/* ===== PROJECT CORE ===== */
export type Project = {
  id: string;
  project: string;
  start_date: string;
  status: boolean;
  company?: Company;        // ada di GET all
  company_id?: string;      // ada di POST / GET by id
  total_hour?: number;      // ada di GET all
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
};

/* ===== RESPONSE TYPES ===== */

// POST create project
export type CreateProjectResponse = {
  id: string;
  project: string;
  company_id: string;
  start_date: string;
  status: boolean;
};

// PATCH edit / change status
export type UpdateProjectResponse = {
  update: number;
  rows: Project[];
};

// GET all project by company
export type ProjectByCompanyResponse = {
  data: Project[];
  total_all_hour: number;
};
