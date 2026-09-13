import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    navigate("/login");
  }

  return (
    <Button
      variant="outline"
      onClick={logout}
    >
      Logout
    </Button>
  );
}