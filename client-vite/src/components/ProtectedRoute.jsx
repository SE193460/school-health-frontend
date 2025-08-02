import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
    // Mock authentication - in real app, this would check actual auth state
    const isAuthenticated = true; // Mock: always authenticated for demo
    const userRole = 'admin'; // Mock: admin role for demo

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(userRole)) {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};

export default ProtectedRoute; 