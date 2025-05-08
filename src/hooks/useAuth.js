import { useState, useEffect } from 'react';

let setGlobalAuth; // External reference to force update

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!localStorage.getItem('user'));

  useEffect(() => {
    setGlobalAuth = setIsAuthenticated;

    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem('user'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      setGlobalAuth = null;
    };
  }, []);

  return { isAuthenticated };
};

// Export helper to manually update auth state
export const triggerAuthUpdate = () => {
  if (setGlobalAuth) {
    setGlobalAuth(!!localStorage.getItem('user'));
  }
};
