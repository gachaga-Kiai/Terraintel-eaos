import { api } from "./client";

export interface DashboardSummary {
  livestock: number;
  milkToday: number;
  revenue: number;
  health: number;
}

export function getDashboardSummary() {
  return api<DashboardSummary>("/dashboard");
}