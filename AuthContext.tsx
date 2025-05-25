
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType } from '../types';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate checking for an existing session
    const storedUser = localStorage.getItem('satoshiUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, _pass: string): Promise<void> => {
    setIsLoading(true);
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser: User = { id: '1', email };
        setUser(mockUser);
        localStorage.setItem('satoshiUser', JSON.stringify(mockUser));
        setIsLoading(false);
        resolve();
      }, 1000);
    });
  };

  const register = async (email: string, _pass: string): Promise<void> => {
    setIsLoading(true);
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser: User = { id: '2', email }; // Use different ID for new user
        setUser(mockUser);
        localStorage.setItem('satoshiUser', JSON.stringify(mockUser));
        setIsLoading(false);
        resolve();
      }, 1000);
    });
  };

  const logout = (): void => {
    setUser(null);
    localStorage.removeItem('satoshiUser');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
