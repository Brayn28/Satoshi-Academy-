
import React, { useState } from 'react';
import { Button } from './Button';

interface AuthFormProps {
  formType: 'login' | 'register';
  onSubmitHandler: (email: string, password: string) => Promise<void>;
  isLoading: boolean;
}

export const AuthForm: React.FC<AuthFormProps> = ({ formType, onSubmitHandler, isLoading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    if (formType === 'register' && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!email || !password) {
        setError("Email and password are required.");
        return;
    }
    try {
      await onSubmitHandler(email, password);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-gray-900 rounded-lg shadow-xl w-full max-w-md">
      <h2 className="text-3xl font-bold text-center text-yellow-500">
        {formType === 'login' ? 'Login to Your Account' : 'Create Your Account'}
      </h2>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="appearance-none block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-gray-800 text-white"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete={formType === 'login' ? "current-password" : "new-password"}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="appearance-none block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-gray-800 text-white"
          placeholder="••••••••"
        />
      </div>

      {formType === 'register' && (
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="appearance-none block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-gray-800 text-white"
            placeholder="••••••••"
          />
        </div>
      )}

      {error && (
        <p className="text-sm text-red-400 text-center">{error}</p>
      )}

      <div>
        <Button type="submit" variant="primary" fullWidth disabled={isLoading}>
          {isLoading ? (formType === 'login' ? 'Logging in...' : 'Registering...') : (formType === 'login' ? 'Login' : 'Register')}
        </Button>
      </div>
    </form>
  );
};
