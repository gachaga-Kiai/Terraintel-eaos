import api from "@/lib/api/client";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface TokenResponse {
  access: string;
  refresh: string;
}

export async function login(data: LoginRequest) {
  const response = await api.post<TokenResponse>(
    "/token/",
    data
  );

  return response.data;
}