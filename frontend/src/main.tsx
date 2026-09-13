import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App";

import QueryProvider from "@/app/providers/QueryProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/features/authentication/context/AuthContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <AuthProvider>
        <TooltipProvider>
          <App />
        </TooltipProvider>
      </AuthProvider>
    </QueryProvider>
  </StrictMode>
);