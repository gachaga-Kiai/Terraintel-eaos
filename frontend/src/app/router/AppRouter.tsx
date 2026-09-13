import { BrowserRouter, Routes, Route } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex h-screen items-center justify-center text-3xl font-bold">
      TerraIntel Dashboard
    </div>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}