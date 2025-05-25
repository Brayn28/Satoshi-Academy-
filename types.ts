
export interface User {
  id: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, pass: string) => Promise<void>;
  register: (email: string, pass: string) => Promise<void>;
  logout: () => void;
}

// You can add more shared types here as the app grows.
