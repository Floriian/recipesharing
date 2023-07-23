import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};
export function UserLayout({ children }: Props) {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) return <Navigate to="/" />;
  return <div className="flex w-full justify-center gap-4">{children}</div>;
}
