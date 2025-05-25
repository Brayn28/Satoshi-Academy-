
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../pages/hooks/useAuth'; // Corrected path
import { AppRoutes, APP_NAME } from '../constants';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const { user, logout, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(AppRoutes.Home);
  };

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to={AppRoutes.Home} className="text-3xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors">
            {APP_NAME}
          </Link>
          <div className="flex items-center space-x-4">
            {isLoading ? (
              <div className="text-yellow-500">Loading...</div>
            ) : user ? (
              <>
                <Link
                  to={AppRoutes.Dashboard}
                  className="text-gray-300 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Dashboard
                </Link>
                <Button onClick={handleLogout} variant="outline" className="text-sm py-2 px-4">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  to={AppRoutes.Login}
                  className="text-gray-300 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Login
                </Link>
                <Button onClick={() => navigate(AppRoutes.Register)} variant="primary" className="text-sm py-2 px-4">
                  Register
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
