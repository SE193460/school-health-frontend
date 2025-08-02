import React from 'react';
import { Card, Container, Button, Row, Col, Form } from 'react-bootstrap';

const Settings = () => {
    return (
        <Container fluid>
            <h1 className="mb-4">Settings</h1>

            <Row>
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Header>
                            <h5 className="mb-0">General Settings</h5>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>School Name</Form.Label>
                                    <Form.Control type="text" defaultValue="Sample School" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email Notifications</Form.Label>
                                    <Form.Check type="switch" id="email-notifications" defaultChecked />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Auto Backup</Form.Label>
                                    <Form.Check type="switch" id="auto-backup" defaultChecked />
                                </Form.Group>
                                <Button variant="primary">Save Changes</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Header>
                            <h5 className="mb-0">User Management</h5>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-grid gap-2">
                                <Button variant="outline-primary">Manage Users</Button>
                                <Button variant="outline-success">Add New User</Button>
                                <Button variant="outline-warning">Role Permissions</Button>
                                <Button variant="outline-info">Password Policy</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Header>
                            <h5 className="mb-0">System Settings</h5>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-grid gap-2">
                                <Button variant="outline-secondary">Database Settings</Button>
                                <Button variant="outline-secondary">Backup & Restore</Button>
                                <Button variant="outline-secondary">System Logs</Button>
                                <Button variant="outline-secondary">Performance</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Header>
                            <h5 className="mb-0">Notifications</h5>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Low Stock Alerts</Form.Label>
                                    <Form.Check type="switch" id="low-stock" defaultChecked />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Vaccination Reminders</Form.Label>
                                    <Form.Check type="switch" id="vaccination-reminders" defaultChecked />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Health Check Notifications</Form.Label>
                                    <Form.Check type="switch" id="health-checks" defaultChecked />
                                </Form.Group>
                                <Button variant="primary">Save Notifications</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Settings; 