
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthForm } from '../components/AuthForm';
import { useAuth } from './hooks/useAuth'; // Corrected path
import { AppRoutes } from '../constants';

export const LoginPage: React.FC = () => {
  const { login, isLoading, user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate(AppRoutes.Dashboard, { replace: true });
    }
  }, [user, navigate]);

  const handleLogin = async (email: string, pass: string) => {
    try {
      await login(email, pass);
      // Navigation is handled by useEffect
    } catch (error) {
      // Error is handled by AuthForm
      console.error("Login failed:", error);
    }
  };

  if (user) return null; // Avoid rendering form if user is already logged in and redirecting

  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
      <AuthForm formType="login" onSubmitHandler={handleLogin} isLoading={isLoading} />
      <p className="mt-6 text-center text-sm text-gray-400">
        Don't have an account?{' '}
        <Link to={AppRoutes.Register} className="font-medium text-yellow-500 hover:text-yellow-400">
          Register here
        </Link>
      </p>
    </div>
  );
};
