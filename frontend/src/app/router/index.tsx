import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "@/pages/auth/Login";
import Dashboard from "@/pages/dashboard/Dashboard";
import DashboardLayout from "@/app/layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import Register from "@/pages/auth/Register";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
  path="/register"
  element={<Register />}
/>
      </Routes>
    </BrowserRouter>
  );
}