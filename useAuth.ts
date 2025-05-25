
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext'; // Corrected path
import { AuthContextType } from '../../types'; // Corrected path for types as well, assuming types.ts is at the root

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};