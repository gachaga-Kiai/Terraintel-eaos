import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:8000/api/accounts/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            username,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.error ||
            data.detail ||
            "Registration failed."
        );
        return;
      }

      alert("Account created successfully!");

      navigate("/login");
    } catch (error) {
      console.error(error);

      setError(
        "Could not connect to the TerraIntel server."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        {/* Header */}

        <div className="text-center">

          <h1 className="text-4xl font-bold">
            TerraIntel EAOS
          </h1>

          <p className="mt-3 text-slate-500">
            Create your account
          </p>

        </div>

        {/* Error */}

        {error && (
          <div className="mt-6 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >

          {/* Names */}

          <div className="grid grid-cols-2 gap-4">

            <Input
              placeholder="First Name"
              value={firstName}
              onChange={(event) =>
                setFirstName(event.target.value)
              }
              required
            />

            <Input
              placeholder="Last Name"
              value={lastName}
              onChange={(event) =>
                setLastName(event.target.value)
              }
              required
            />

          </div>

          {/* Username */}

          <Input
            placeholder="Username"
            value={username}
            onChange={(event) =>
              setUsername(event.target.value)
            }
            required
          />

          {/* Email */}

          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
          />

          {/* Password */}

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            minLength={8}
            required
          />

          {/* Confirm Password */}

          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(event.target.value)
            }
            minLength={8}
            required
          />

          {/* Submit */}

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </Button>

        </form>

        {/* Login link */}

        <div className="mt-6 text-center">

          <span className="text-sm text-slate-500">
            Already have an account?{" "}
          </span>

          <Link
            to="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign In
          </Link>

        </div>

      </div>

    </div>
  );
}