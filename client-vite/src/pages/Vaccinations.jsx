import React, { useState } from 'react';
import { Table, Card, Container, Button, Badge, Modal, Form, Alert } from 'react-bootstrap';

const Vaccinations = () => {
    const [showForm, setShowForm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [form, setForm] = useState({ student: '', vaccine: '', dueDate: '', status: 'Scheduled' });
    const [errors, setErrors] = useState({});

    const vaccinations = [
        { id: 1, student: 'John Doe', vaccine: 'MMR', dueDate: '2024-02-15', status: 'Scheduled' },
        { id: 2, student: 'Jane Smith', vaccine: 'Tetanus', dueDate: '2024-01-20', status: 'Completed' },
        { id: 3, student: 'Mike Johnson', vaccine: 'Flu Shot', dueDate: '2024-01-10', status: 'Overdue' },
    ];

    const getStatusBadge = (status) => {
        const variant = status === 'Completed' ? 'success' : status === 'Overdue' ? 'danger' : 'warning';
        return <Badge bg={variant}>{status}</Badge>;
    };

    const handleShowForm = () => {
        setForm({ student: '', vaccine: '', dueDate: '', status: 'Scheduled' });
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
        if (!form.vaccine) errs.vaccine = 'Vaccine is required';
        if (!form.dueDate) errs.dueDate = 'Due date is required';
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
                <h1>Vaccinations</h1>
                <Button variant="primary" onClick={handleShowForm}>Schedule Vaccination</Button>
            </div>
            {showSuccess && <Alert variant="success">Lên lịch tiêm chủng thành công!</Alert>}
            <Card>
                <Card.Header>
                    <h5 className="mb-0">Vaccination Schedule</h5>
                </Card.Header>
                <Card.Body>
                    <Table responsive striped hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Student</th>
                                <th>Vaccine</th>
                                <th>Due Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vaccinations.map((vaccination) => (
                                <tr key={vaccination.id}>
                                    <td>{vaccination.id}</td>
                                    <td>{vaccination.student}</td>
                                    <td>{vaccination.vaccine}</td>
                                    <td>{vaccination.dueDate}</td>
                                    <td>{getStatusBadge(vaccination.status)}</td>
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
                    <Modal.Title>Lên lịch tiêm chủng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Student</Form.Label>
                            <Form.Control name="student" value={form.student} onChange={handleChange} isInvalid={!!errors.student} />
                            <Form.Control.Feedback type="invalid">{errors.student}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Vaccine</Form.Label>
                            <Form.Control name="vaccine" value={form.vaccine} onChange={handleChange} isInvalid={!!errors.vaccine} />
                            <Form.Control.Feedback type="invalid">{errors.vaccine}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control type="date" name="dueDate" value={form.dueDate} onChange={handleChange} isInvalid={!!errors.dueDate} />
                            <Form.Control.Feedback type="invalid">{errors.dueDate}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select name="status" value={form.status} onChange={handleChange}>
                                <option value="Scheduled">Scheduled</option>
                                <option value="Completed">Completed</option>
                                <option value="Overdue">Overdue</option>
                            </Form.Select>
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

export default Vaccinations; 