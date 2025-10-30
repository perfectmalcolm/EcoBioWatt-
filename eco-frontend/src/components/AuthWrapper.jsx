import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function AuthWrapper() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const userRole = localStorage.getItem('userRole');
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Role-based redirection
  if (userRole === 'admin' && location.pathname === '/user-input') {
    return <Navigate to="/admin" replace />;
  }
  if (userRole === 'user' && location.pathname === '/admin') {
    return <Navigate to="/user-input" replace />;
  }

  return <Outlet />;
}
