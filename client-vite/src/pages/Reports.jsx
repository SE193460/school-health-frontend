import React from 'react';
import { Card, Container, Button, Row, Col } from 'react-bootstrap';

const Reports = () => {
    const reports = [
        { id: 1, title: 'Monthly Health Summary', type: 'Monthly', lastGenerated: '2024-01-31', status: 'Available' },
        { id: 2, title: 'Vaccination Compliance Report', type: 'Quarterly', lastGenerated: '2024-01-15', status: 'Available' },
        { id: 3, title: 'Medical Events Analysis', type: 'Weekly', lastGenerated: '2024-01-28', status: 'Available' },
        { id: 4, title: 'Supplies Inventory Report', type: 'Monthly', lastGenerated: '2024-01-30', status: 'Available' },
    ];

    return (
        <Container fluid>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Reports</h1>
                <Button variant="primary">Generate New Report</Button>
            </div>

            <Row>
                {reports.map((report) => (
                    <Col key={report.id} xs={12} md={6} lg={4} className="mb-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>{report.title}</Card.Title>
                                <Card.Text>
                                    <strong>Type:</strong> {report.type}<br />
                                    <strong>Last Generated:</strong> {report.lastGenerated}<br />
                                    <strong>Status:</strong> {report.status}
                                </Card.Text>
                                <div className="d-grid gap-2">
                                    <Button variant="outline-primary" size="sm">
                                        View Report
                                    </Button>
                                    <Button variant="outline-success" size="sm">
                                        Download PDF
                                    </Button>
                                    <Button variant="outline-info" size="sm">
                                        Generate New
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row className="mt-4">
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-0">Quick Reports</h5>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-grid gap-2">
                                <Button variant="outline-secondary">Student Health Summary</Button>
                                <Button variant="outline-secondary">Vaccination Status</Button>
                                <Button variant="outline-secondary">Medical Events Log</Button>
                                <Button variant="outline-secondary">Supplies Status</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-0">Report Settings</h5>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-grid gap-2">
                                <Button variant="outline-warning">Configure Auto Reports</Button>
                                <Button variant="outline-info">Email Notifications</Button>
                                <Button variant="outline-dark">Export Settings</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Reports; 