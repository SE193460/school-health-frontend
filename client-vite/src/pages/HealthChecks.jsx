import React, { useState } from 'react';
import { Table, Card, Container, Button, Badge, Modal, Form, Alert } from 'react-bootstrap';

const HealthChecks = () => {
    const [showForm, setShowForm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [form, setForm] = useState({ student: '', type: '', date: '', status: 'Scheduled', result: '' });
    const [errors, setErrors] = useState({});

    const healthChecks = [
        { id: 1, student: 'John Doe', type: 'Annual', date: '2024-01-15', status: 'Completed', result: 'Good' },
        { id: 2, student: 'Jane Smith', type: 'Sports Physical', date: '2024-01-20', status: 'Scheduled', result: 'Pending' },
        { id: 3, student: 'Mike Johnson', type: 'Emergency', date: '2024-01-05', status: 'Completed', result: 'Follow-up needed' },
    ];

    const getStatusBadge = (status) => {
        const variant = status === 'Completed' ? 'success' : 'warning';
        return <Badge bg={variant}>{status}</Badge>;
    };

    const getResultBadge = (result) => {
        const variant = result === 'Good' ? 'success' : result === 'Follow-up needed' ? 'warning' : 'secondary';
        return <Badge bg={variant}>{result}</Badge>;
    };

    const handleShowForm = () => {
        setForm({ student: '', type: '', date: '', status: 'Scheduled', result: '' });
        setErrors({});
        setShowForm(true);
    };
    const handleCloseForm = () => setShowForm(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const errs = {};
        if (!form.student) errs.student = 'Student name is required';
        if (!form.type) errs.type = 'Type is required';
        if (!form.date) errs.date = 'Date is required';
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        setShowForm(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
    };

    return (
        <Container fluid>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Health Checks</h1>
                <Button variant="primary" onClick={handleShowForm}>Schedule Health Check</Button>
            </div>
            {showSuccess && <Alert variant="success">Lên lịch kiểm tra sức khỏe thành công!</Alert>}
            <Card>
                <Card.Header>
                    <h5 className="mb-0">Health Checks List</h5>
                </Card.Header>
                <Card.Body>
                    <Table responsive striped hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Student</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Result</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {healthChecks.map((check) => (
                                <tr key={check.id}>
                                    <td>{check.id}</td>
                                    <td>{check.student}</td>
                                    <td>{check.type}</td>
                                    <td>{check.date}</td>
                                    <td>{getStatusBadge(check.status)}</td>
                                    <td>{getResultBadge(check.result)}</td>
                                    <td>
                                        <Button size="sm" variant="outline-primary" className="me-2">
                                            View
                                        </Button>
                                        <Button size="sm" variant="outline-success" className="me-2">
                                            Schedule
                                        </Button>
                                        <Button size="sm" variant="outline-info">
                                            Record
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            <Modal show={showForm} onHide={handleCloseForm} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Lên lịch kiểm tra sức khỏe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Student</Form.Label>
                            <Form.Control name="student" value={form.student} onChange={handleChange} isInvalid={!!errors.student} />
                            <Form.Control.Feedback type="invalid">{errors.student}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Type</Form.Label>
                            <Form.Control name="type" value={form.type} onChange={handleChange} isInvalid={!!errors.type} />
                            <Form.Control.Feedback type="invalid">{errors.type}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" name="date" value={form.date} onChange={handleChange} isInvalid={!!errors.date} />
                            <Form.Control.Feedback type="invalid">{errors.date}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select name="status" value={form.status} onChange={handleChange}>
                                <option value="Scheduled">Scheduled</option>
                                <option value="Completed">Completed</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Result</Form.Label>
                            <Form.Control name="result" value={form.result} onChange={handleChange} />
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button variant="secondary" onClick={handleCloseForm} className="me-2">Hủy</Button>
                            <Button type="submit" variant="primary">Lên lịch</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default HealthChecks; 