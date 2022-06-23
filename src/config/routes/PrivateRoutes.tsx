import { Navigate, Outlet } from "react-router-dom";
import { useAuthenticated } from "@src/hooks/useAuthenticated";

export const PrivateRoute = () => {
  const auth = useAuthenticated();
  return auth ? <Outlet /> : <Navigate to="/Login" />;
};
