import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface AuthContextType {
  accessToken: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access")
  );

  function login(token: string) {
    localStorage.setItem("access", token);
    setAccessToken(token);
  }

  function logout() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setAccessToken(null);
  }

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within AuthProvider"
    );
  }

  return context;
}