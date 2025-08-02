import React from 'react';
import { Row, Col, Breadcrumb } from 'react-bootstrap';

const PageHeader = ({ 
  title, 
  subtitle = null, 
  breadcrumbs = [], 
  actions = null,
  icon = null 
}) => {
  return (
    <div className="mb-4">
      {breadcrumbs.length > 0 && (
        <Breadcrumb className="mb-2">
          {breadcrumbs.map((crumb, index) => (
            <Breadcrumb.Item 
              key={index} 
              active={index === breadcrumbs.length - 1}
              href={crumb.href}
            >
              {crumb.label}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      )}
      
      <Row className="align-items-center">
        <Col>
          <div className="d-flex align-items-center mb-2">
            {icon && <div className="me-3 fs-1 text-primary">{icon}</div>}
            <div>
              <h1 className="text-gradient mb-1">{title}</h1>
              {subtitle && <p className="text-muted mb-0">{subtitle}</p>}
            </div>
          </div>
        </Col>
        {actions && (
          <Col xs="auto">
            {actions}
          </Col>
        )}
      </Row>
    </div>
  );
};

export default PageHeader;