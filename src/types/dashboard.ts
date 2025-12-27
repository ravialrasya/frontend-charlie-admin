export interface TopCompany {
  id: string;
  company: string;
  email: string;
  phone: string;
  person_in_charge: string;
  total_hour: number;
}

export interface ProjectCompany {
  id: string;
  company: string;
}

export interface TopProject {
  id: string;
  project: string;
  start_date: string;
  status: boolean;
  company: ProjectCompany;
  total_hour: number;
}

export interface DashboardData {
  top_companies: TopCompany[];
  top_projects: TopProject[];
  total_companies: number;
  total_projects: number;
  total_employees: number;
}

export interface DashboardResponse {
  status: boolean;
  message: string[];
  data: DashboardData;
  error: any;
}
