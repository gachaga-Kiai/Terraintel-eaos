import api from "@/lib/api/client";

export interface CurrentUser {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
}

export async function getCurrentUser() {
  const response = await api.get<CurrentUser>(
    "/accounts/me/"
  );

  return response.data;
}