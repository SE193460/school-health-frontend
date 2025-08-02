import React from 'react';
import { Card } from 'react-bootstrap';

const StatCard = ({ 
  title, 
  value, 
  icon, 
  color = 'primary', 
  trend = null,
  subtitle = null 
}) => {
  const colorClasses = {
    primary: 'text-primary',
    success: 'text-success', 
    warning: 'text-warning',
    danger: 'text-danger',
    info: 'text-info'
  };

  return (
    <Card className="h-100 fade-in-up">
      <Card.Body className="d-flex align-items-center">
        <div className="flex-grow-1">
          <div className={`display-6 fw-bold ${colorClasses[color]} mb-1`}>
            {value}
          </div>
          <div className="text-muted mb-1">{title}</div>
          {subtitle && (
            <small className="text-muted">{subtitle}</small>
          )}
          {trend && (
            <div className={`small ${trend > 0 ? 'text-success' : 'text-danger'}`}>
              {trend > 0 ? '↗' : '↘'} {Math.abs(trend)}%
            </div>
          )}
        </div>
        <div className={`fs-1 ${colorClasses[color]} opacity-75`}>
          {icon}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StatCard;