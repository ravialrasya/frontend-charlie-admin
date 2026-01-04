export interface Company {
  id: string;
  company: string;
  email: string;
  phone: string;
  person_in_charge: string;
  total_hour?: number;
}

export interface CompanyResponse {
  status: boolean;
  message: string[];
  data: Company[];
  error: string | null;
}

export interface CompanyDetail {
  id: string;
  company: string;
  email: string;
  address: string;
  phone: string;
  person_in_charge: string;
  createdAt: string;
  updatedAt: string;
  projects: Project[];
}

export interface Project {
  id: string;
  project: string;
  start_date: string;
  status: boolean;
  total_hour?: number;
}
