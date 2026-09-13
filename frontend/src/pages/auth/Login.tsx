import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useLogin } from "@/services/hooks/useLogin";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useLogin();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    setError("");

    try {
      const tokens = await mutateAsync({
        username,
        password,
      });

      localStorage.setItem("access", tokens.access);
      localStorage.setItem("refresh", tokens.refresh);

      navigate("/");
    } catch {
      setError("Invalid username or password.");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg space-y-5"
      >
        <h1 className="text-center text-3xl font-bold">
          TerraIntel EAOS
        </h1>

        <p className="text-center text-slate-500">
          Sign in to continue
        </p>

        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-sm text-red-600">
            {error}
          </p>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={isPending}
        >
          {isPending ? "Signing in..." : "Login"}
        </Button>
        <div className="mt-6 text-center">
  <span className="text-sm text-slate-500">
    Don't have an account?{" "}
  </span>

  <Link
    to="/register"
    className="font-medium text-blue-600 hover:underline"
  >
    Sign Up
  </Link>
</div>
      </form>
    </div>
  );
}