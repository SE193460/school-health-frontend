import React, { useState } from 'react';
import { Table, Card, Container, Button, Badge, Modal, Form, Alert } from 'react-bootstrap';

const MedicalEvents = () => {
    const [showForm, setShowForm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [form, setForm] = useState({ student: '', event: '', severity: 'Low', date: '', status: 'Ongoing' });
    const [errors, setErrors] = useState({});

    const events = [
        { id: 1, student: 'John Doe', event: 'Fever', severity: 'Low', date: '2024-01-15', status: 'Resolved' },
        { id: 2, student: 'Jane Smith', event: 'Allergic Reaction', severity: 'High', date: '2024-01-10', status: 'Resolved' },
        { id: 3, student: 'Mike Johnson', event: 'Headache', severity: 'Medium', date: '2024-01-05', status: 'Ongoing' },
    ];

    const getSeverityBadge = (severity) => {
        const variant = severity === 'High' ? 'danger' : severity === 'Medium' ? 'warning' : 'info';
        return <Badge bg={variant}>{severity}</Badge>;
    };

    const getStatusBadge = (status) => {
        const variant = status === 'Resolved' ? 'success' : 'warning';
        return <Badge bg={variant}>{status}</Badge>;
    };

    const handleShowForm = () => {
        setForm({ student: '', event: '', severity: 'Low', date: '', status: 'Ongoing' });
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
        if (!form.event) errs.event = 'Event is required';
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
                <h1>Medical Events</h1>
                <Button variant="primary" onClick={handleShowForm}>Record New Event</Button>
            </div>
            {showSuccess && <Alert variant="success">Ghi nhận sự kiện y tế thành công!</Alert>}
            <Card>
                <Card.Header>
                    <h5 className="mb-0">Medical Events List</h5>
                </Card.Header>
                <Card.Body>
                    <Table responsive striped hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Student</th>
                                <th>Event</th>
                                <th>Severity</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map((event) => (
                                <tr key={event.id}>
                                    <td>{event.id}</td>
                                    <td>{event.student}</td>
                                    <td>{event.event}</td>
                                    <td>{getSeverityBadge(event.severity)}</td>
                                    <td>{event.date}</td>
                                    <td>{getStatusBadge(event.status)}</td>
                                    <td>
                                        <Button size="sm" variant="outline-primary" className="me-2">
                                            View
                                        </Button>
                                        <Button size="sm" variant="outline-success">
                                            Update
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
                    <Modal.Title>Ghi nhận sự kiện y tế</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Student</Form.Label>
                            <Form.Control name="student" value={form.student} onChange={handleChange} isInvalid={!!errors.student} />
                            <Form.Control.Feedback type="invalid">{errors.student}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event</Form.Label>
                            <Form.Control name="event" value={form.event} onChange={handleChange} isInvalid={!!errors.event} />
                            <Form.Control.Feedback type="invalid">{errors.event}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Severity</Form.Label>
                            <Form.Select name="severity" value={form.severity} onChange={handleChange}>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" name="date" value={form.date} onChange={handleChange} isInvalid={!!errors.date} />
                            <Form.Control.Feedback type="invalid">{errors.date}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select name="status" value={form.status} onChange={handleChange}>
                                <option value="Ongoing">Ongoing</option>
                                <option value="Resolved">Resolved</option>
                            </Form.Select>
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button variant="secondary" onClick={handleCloseForm} className="me-2">Hủy</Button>
                            <Button type="submit" variant="primary">Ghi nhận</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default MedicalEvents; 