
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../pages/hooks/useAuth'; // Corrected path
import { AppRoutes } from '../constants';

interface ProtectedRouteProps {
  children?: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-10rem)] bg-black text-yellow-500 text-xl">
        Loading session...
      </div>
    );
  }

  if (!user) {
    return <Navigate to={AppRoutes.Login} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};
