import { Navigate, Outlet } from "react-router-dom";

export default function PrivateGuard() {
  const authenticated = true;

  return authenticated ? <Outlet /> : <Navigate to="/" replace/>;
}
