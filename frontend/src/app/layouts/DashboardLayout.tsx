import type { ReactNode } from "react";

import AppSidebar from "@/widgets/sidebar/AppSidebar";
import LogoutButton from "@/features/authentication/components/LogoutButton";
import { useCurrentUser } from "@/services/hooks/useCurrentUser";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const { data: user } = useCurrentUser();

  return (
    <div className="min-h-screen flex">
      <AppSidebar />

      <main className="flex-1">
        <header className="h-16 border-b flex items-center justify-between px-6">
          <h1 className="font-semibold">
            Enterprise Agriculture Operating System
          </h1>

          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600">
              Welcome, {user?.first_name || user?.username || "User"}
            </span>

            <LogoutButton />
          </div>
        </header>

        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}