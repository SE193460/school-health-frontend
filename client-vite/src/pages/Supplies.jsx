import React, { useState } from 'react';
import { Table, Card, Container, Button, Badge, Modal, Form, Alert } from 'react-bootstrap';

const Supplies = () => {
    const [showForm, setShowForm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [form, setForm] = useState({ item: '', quantity: '', unit: '', status: 'In Stock', lastRestocked: '' });
    const [errors, setErrors] = useState({});

    const supplies = [
        { id: 1, item: 'Bandages', quantity: 150, unit: 'pieces', status: 'In Stock', lastRestocked: '2024-01-10' },
        { id: 2, item: 'Antiseptic Wipes', quantity: 25, unit: 'boxes', status: 'Low Stock', lastRestocked: '2024-01-05' },
        { id: 3, item: 'Thermometers', quantity: 8, unit: 'pieces', status: 'In Stock', lastRestocked: '2024-01-15' },
        { id: 4, item: 'First Aid Kits', quantity: 3, unit: 'kits', status: 'Out of Stock', lastRestocked: '2024-01-01' },
    ];

    const getStockLevel = (status) => {
        const variant = status === 'In Stock' ? 'success' : status === 'Low Stock' ? 'warning' : 'danger';
        return <Badge bg={variant}>{status}</Badge>;
    };

    const handleShowForm = () => {
        setForm({ item: '', quantity: '', unit: '', status: 'In Stock', lastRestocked: '' });
        setErrors({});
        setShowForm(true);
    };
    const handleCloseForm = () => setShowForm(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const errs = {};
        if (!form.item) errs.item = 'Item name is required';
        if (!form.quantity || isNaN(form.quantity) || form.quantity <= 0) errs.quantity = 'Valid quantity required';
        if (!form.unit) errs.unit = 'Unit is required';
        if (!form.lastRestocked) errs.lastRestocked = 'Last restocked date is required';
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
                <h1>Medical Supplies</h1>
                <Button variant="primary" onClick={handleShowForm}>Add New Item</Button>
            </div>
            {showSuccess && <Alert variant="success">Thêm vật tư thành công!</Alert>}
            <Card>
                <Card.Header>
                    <h5 className="mb-0">Supplies Inventory</h5>
                </Card.Header>
                <Card.Body>
                    <Table responsive striped hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Unit</th>
                                <th>Status</th>
                                <th>Last Restocked</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {supplies.map((supply) => (
                                <tr key={supply.id}>
                                    <td>{supply.id}</td>
                                    <td>{supply.item}</td>
                                    <td>{supply.quantity}</td>
                                    <td>{supply.unit}</td>
                                    <td>{getStockLevel(supply.status)}</td>
                                    <td>{supply.lastRestocked}</td>
                                    <td>
                                        <Button size="sm" variant="outline-primary" className="me-2">
                                            View
                                        </Button>
                                        <Button size="sm" variant="outline-success" className="me-2">
                                            Restock
                                        </Button>
                                        <Button size="sm" variant="outline-warning">
                                            Use
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
                    <Modal.Title>Thêm vật tư y tế</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Item</Form.Label>
                            <Form.Control name="item" value={form.item} onChange={handleChange} isInvalid={!!errors.item} />
                            <Form.Control.Feedback type="invalid">{errors.item}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control name="quantity" value={form.quantity} onChange={handleChange} isInvalid={!!errors.quantity} />
                            <Form.Control.Feedback type="invalid">{errors.quantity}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Unit</Form.Label>
                            <Form.Control name="unit" value={form.unit} onChange={handleChange} isInvalid={!!errors.unit} />
                            <Form.Control.Feedback type="invalid">{errors.unit}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select name="status" value={form.status} onChange={handleChange}>
                                <option value="In Stock">In Stock</option>
                                <option value="Low Stock">Low Stock</option>
                                <option value="Out of Stock">Out of Stock</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Restocked</Form.Label>
                            <Form.Control type="date" name="lastRestocked" value={form.lastRestocked} onChange={handleChange} isInvalid={!!errors.lastRestocked} />
                            <Form.Control.Feedback type="invalid">{errors.lastRestocked}</Form.Control.Feedback>
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

export default Supplies; 