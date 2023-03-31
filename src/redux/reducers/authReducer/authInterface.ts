export interface AuthState {
  isLoading: boolean;
  authStatus: AuthStatus;
  user:{
    email: string;
  };
};

export type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';