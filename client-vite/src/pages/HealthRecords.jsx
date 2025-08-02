import React, { useState } from 'react';
import { Table, Card, Container, Button, Badge, Modal, Form, Alert } from 'react-bootstrap';

const HealthRecords = () => {
    const [showForm, setShowForm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [form, setForm] = useState({ student: '', allergies: '', medications: '' });
    const [errors, setErrors] = useState({});

    const records = [
        { id: 1, student: 'John Doe', allergies: 'None', medications: 'None', lastUpdate: '2024-01-15' },
        { id: 2, student: 'Jane Smith', allergies: 'Peanuts', medications: 'EpiPen', lastUpdate: '2024-01-10' },
        { id: 3, student: 'Mike Johnson', allergies: 'Dairy', medications: 'None', lastUpdate: '2024-01-05' },
    ];

    const handleShowForm = () => {
        setForm({ student: '', allergies: '', medications: '' });
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
                <h1>Health Records</h1>
                <Button variant="primary" onClick={handleShowForm}>Add New Record</Button>
            </div>
            {showSuccess && <Alert variant="success">Thêm hồ sơ sức khỏe thành công!</Alert>}
            <Card>
                <Card.Header>
                    <h5 className="mb-0">Health Records List</h5>
                </Card.Header>
                <Card.Body>
                    <Table responsive striped hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Student</th>
                                <th>Allergies</th>
                                <th>Medications</th>
                                <th>Last Update</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map((record) => (
                                <tr key={record.id}>
                                    <td>{record.id}</td>
                                    <td>{record.student}</td>
                                    <td>{record.allergies}</td>
                                    <td>{record.medications}</td>
                                    <td>{record.lastUpdate}</td>
                                    <td>
                                        <Button size="sm" variant="outline-primary" className="me-2">
                                            View
                                        </Button>
                                        <Button size="sm" variant="outline-success">
                                            Edit
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
                    <Modal.Title>Thêm hồ sơ sức khỏe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Student</Form.Label>
                            <Form.Control name="student" value={form.student} onChange={handleChange} isInvalid={!!errors.student} />
                            <Form.Control.Feedback type="invalid">{errors.student}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Allergies</Form.Label>
                            <Form.Control name="allergies" value={form.allergies} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Medications</Form.Label>
                            <Form.Control name="medications" value={form.medications} onChange={handleChange} />
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

export default HealthRecords; 