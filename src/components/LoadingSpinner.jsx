import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = ({ size = 'lg', variant = 'primary', text = 'Loading...' }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-4">
      <Spinner 
        animation="border" 
        variant={variant} 
        size={size}
        className="mb-3"
      />
      <p className="text-muted mb-0">{text}</p>
    </div>
  );
};

export default LoadingSpinner;