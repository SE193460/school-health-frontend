import React, { useState } from 'react';
import { Table, Card, Container, Button, Badge, Modal, Form, Alert } from 'react-bootstrap';

const Students = () => {
    const [showForm, setShowForm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [form, setForm] = useState({ name: '', grade: '', age: '', healthStatus: 'Good' });
    const [errors, setErrors] = useState({});

    const students = [
        { id: 1, name: 'John Doe', grade: '10th', age: 16, healthStatus: 'Good', lastCheck: '2024-01-15' },
        { id: 2, name: 'Jane Smith', grade: '11th', age: 17, healthStatus: 'Good', lastCheck: '2024-01-10' },
        { id: 3, name: 'Mike Johnson', grade: '9th', age: 15, healthStatus: 'Warning', lastCheck: '2024-01-05' },
        { id: 4, name: 'Sarah Wilson', grade: '12th', age: 18, healthStatus: 'Good', lastCheck: '2024-01-12' },
        { id: 5, name: 'David Brown', grade: '10th', age: 16, healthStatus: 'Good', lastCheck: '2024-01-08' },
    ];

    const getStatusBadge = (status) => {
        const variant = status === 'Good' ? 'success' : 'warning';
        return <Badge bg={variant}>{status}</Badge>;
    };

    const handleShowForm = () => {
        setForm({ name: '', grade: '', age: '', healthStatus: 'Good' });
        setErrors({});
        setShowForm(true);
    };
    const handleCloseForm = () => setShowForm(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const errs = {};
        if (!form.name) errs.name = 'Name is required';
        if (!form.grade) errs.grade = 'Grade is required';
        if (!form.age || isNaN(form.age) || form.age < 5 || form.age > 25) errs.age = 'Valid age required (5-25)';
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
                <h1>Students</h1>
                <Button variant="primary" onClick={handleShowForm}>Add New Student</Button>
            </div>
            {showSuccess && <Alert variant="success">Thêm học sinh thành công!</Alert>}
            <Card>
                <Card.Header>
                    <h5 className="mb-0">Student List</h5>
                </Card.Header>
                <Card.Body>
                    <Table responsive striped hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Grade</th>
                                <th>Age</th>
                                <th>Health Status</th>
                                <th>Last Health Check</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.grade}</td>
                                    <td>{student.age}</td>
                                    <td>{getStatusBadge(student.healthStatus)}</td>
                                    <td>{student.lastCheck}</td>
                                    <td>
                                        <Button size="sm" variant="outline-primary" className="me-2">
                                            View
                                        </Button>
                                        <Button size="sm" variant="outline-success" className="me-2">
                                            Edit
                                        </Button>
                                        <Button size="sm" variant="outline-info">
                                            Health Record
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
                    <Modal.Title>Thêm học sinh mới</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" value={form.name} onChange={handleChange} isInvalid={!!errors.name} />
                            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Grade</Form.Label>
                            <Form.Control name="grade" value={form.grade} onChange={handleChange} isInvalid={!!errors.grade} />
                            <Form.Control.Feedback type="invalid">{errors.grade}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Age</Form.Label>
                            <Form.Control name="age" value={form.age} onChange={handleChange} isInvalid={!!errors.age} />
                            <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Health Status</Form.Label>
                            <Form.Select name="healthStatus" value={form.healthStatus} onChange={handleChange}>
                                <option value="Good">Good</option>
                                <option value="Warning">Warning</option>
                            </Form.Select>
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button variant="secondary" onClick={handleCloseForm} className="me-2">Hủy</Button>
                            <Button type="submit" variant="primary">Thêm</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default Students; 