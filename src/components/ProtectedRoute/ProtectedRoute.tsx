import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "../../hooks/useAuthState";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuthState();

  if (loading) {
    // While checking auth state, show a loader or empty screen
    return (
      <div className="  flex min-h-screen items-center justify-center bg-[#F2EDE9]">
        <div className="flex justify-center items-center h-screen text-xl font-serif text-[#9B6946]">
          Loading...
        </div>
      </div>
    );
  }

  if (!user) {
    // Not logged in
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
