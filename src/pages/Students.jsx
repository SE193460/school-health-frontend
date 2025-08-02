@@ .. @@
 import React, { useState } from 'react';
-import { Table, Card, Container, Button, Badge, Modal, Form, Alert } from 'react-bootstrap';
+import { Table, Card, Container, Button, Badge, Modal, Form, Alert, InputGroup } from 'react-bootstrap';
+import { Search, Plus, Eye, PencilSquare, FileEarmarkMedical, Users } from 'react-bootstrap-icons';
+import PageHeader from '../components/PageHeader';

 const Students = () => {
@@ .. @@
     const [showSuccess, setShowSuccess] = useState(false);
     const [form, setForm] = useState({ name: '', grade: '', age: '', healthStatus: 'Good' });
     const [errors, setErrors] = useState({});
+    const [searchTerm, setSearchTerm] = useState('');

@@ .. @@
     return (
-        <Container fluid>
-            <div className="d-flex justify-content-between align-items-center mb-4">
-                <h1>Students</h1>
-                <Button variant="primary" onClick={handleShowForm}>Add New Student</Button>
-            </div>
-            {showSuccess && <Alert variant="success">Thêm học sinh thành công!</Alert>}
-            <Card>
+        <Container fluid className="py-4">
+            <PageHeader 
+                title="Student Management"
+                subtitle="Manage student information and health records"
+                icon={<Users />}
+                actions={
+                    <Button variant="primary" size="lg" onClick={handleShowForm}>
+                        <Plus className="me-2" />
+                        Add New Student
+                    </Button>
+                }
+            />
+            
+            {showSuccess && (
+                <Alert variant="success" className="fade-in-up">
+                    <FileEarmarkMedical className="me-2" />
+                    Student added successfully!
+                </Alert>
+            )}
+            
+            {/* Search and Filters */}
+            <Card className="mb-4 fade-in-up">
+                <Card.Body>
+                    <div className="row g-3">
+                        <div className="col-md-6">
+                            <InputGroup>
+                                <InputGroup.Text>
+                                    <Search />
+                                </InputGroup.Text>
+                                <Form.Control
+                                    placeholder="Search students..."
+                                    value={searchTerm}
+                                    onChange={(e) => setSearchTerm(e.target.value)}
+                                />
+                            </InputGroup>
+                        </div>
+                        <div className="col-md-3">
+                            <Form.Select>
+                                <option>All Grades</option>
+                                <option>9th Grade</option>
+                                <option>10th Grade</option>
+                                <option>11th Grade</option>
+                                <option>12th Grade</option>
+                            </Form.Select>
+                        </div>
+                        <div className="col-md-3">
+                            <Form.Select>
+                                <option>All Health Status</option>
+                                <option>Good</option>
+                                <option>Warning</option>
+                            </Form.Select>
+                        </div>
+                    </div>
+                </Card.Body>
+            </Card>
+            
+            <Card className="fade-in-up">
                 <Card.Header>
-                    <h5 className="mb-0">Student List</h5>
+                    <div className="d-flex align-items-center">
+                        <Users className="me-2" />
+                        <h5 className="mb-0">Student Directory ({students.length} students)</h5>
+                    </div>
                 </Card.Header>
                 <Card.Body>
-                    <Table responsive striped hover>
+                    <div className="table-responsive">
+                        <Table hover className="mb-0">
                         <thead>
                             <tr>
-                                <th>ID</th>
-                                <th>Name</th>
-                                <th>Grade</th>
-                                <th>Age</th>
+                                <th width="8%">ID</th>
+                                <th width="25%">Name</th>
+                                <th width="15%">Grade</th>
+                                <th width="10%">Age</th>
                                 <th>Health Status</th>
                                 <th>Last Health Check</th>
-                                <th>Actions</th>
+                                <th width="20%">Actions</th>
                             </tr>
                         </thead>
                         <tbody>
-                            {students.map((student) => (
+                            {students.filter(student => 
+                                student.name.toLowerCase().includes(searchTerm.toLowerCase())
+                            ).map((student) => (
                                 <tr key={student.id}>
-                                    <td>{student.id}</td>
-                                    <td>{student.name}</td>
-                                    <td>{student.grade}</td>
-                                    <td>{student.age}</td>
+                                    <td className="fw-bold">#{student.id}</td>
+                                    <td>
+                                        <div className="fw-semibold">{student.name}</div>
+                                    </td>
+                                    <td>
+                                        <Badge bg="secondary" className="fs-6">{student.grade}</Badge>
+                                    </td>
+                                    <td>{student.age} years</td>
                                     <td>{getStatusBadge(student.healthStatus)}</td>
-                                    <td>{student.lastCheck}</td>
+                                    <td>
+                                        <small className="text-muted">{student.lastCheck}</small>
+                                    </td>
                                     <td>
-                                        <Button size="sm" variant="outline-primary" className="me-2">
-                                            View
+                                        <div className="d-flex gap-1">
+                                            <Button size="sm" variant="outline-primary" title="View Details">
+                                                <Eye size={14} />
+                                            </Button>
+                                            <Button size="sm" variant="outline-success" title="Edit Student">
+                                                <PencilSquare size={14} />
+                                            </Button>
+                                            <Button size="sm" variant="outline-info" title="Health Record">
+                                                <FileEarmarkMedical size={14} />
+                                            </Button>
+                                        </div>
+                                    </td>
+                                </tr>
+                            ))}
+                            {students.filter(student => 
+                                student.name.toLowerCase().includes(searchTerm.toLowerCase())
+                            ).length === 0 && (
+                                <tr>
+                                    <td colSpan="7" className="text-center py-4 text-muted">
+                                        <Search size={24} className="mb-2" />
+                                        <div>No students found matching your search.</div>
+                                    </td>
+                                </tr>
+                            )}
+                        </tbody>
+                    </Table>
+                    </div>
+                </Card.Body>
+            </Card>
+            
+            {/* Enhanced Modal */}
+            <Modal show={showForm} onHide={handleCloseForm} centered size="lg">
+                <Modal.Header closeButton className="border-0">
+                    <Modal.Title className="d-flex align-items-center">
+                        <Plus className="me-2" />
+                        Add New Student
+                    </Modal.Title>
+                </Modal.Header>
+                <Modal.Body className="p-4">
+                    <Form onSubmit={handleSubmit}>
+                        <div className="row g-3">
+                            <div className="col-md-8">
+                                <Form.Group>
+                                    <Form.Label className="fw-semibold">Full Name *</Form.Label>
+                                    <Form.Control 
+                                        name="name" 
+                                        value={form.name} 
+                                        onChange={handleChange} 
+                                        isInvalid={!!errors.name}
+                                        placeholder="Enter student's full name"
+                                        size="lg"
+                                    />
+                                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
+                                </Form.Group>
+                            </div>
+                            <div className="col-md-4">
+                                <Form.Group>
+                                    <Form.Label className="fw-semibold">Age *</Form.Label>
+                                    <Form.Control 
+                                        name="age" 
+                                        value={form.age} 
+                                        onChange={handleChange} 
+                                        isInvalid={!!errors.age}
+                                        placeholder="Age"
+                                        size="lg"
+                                        type="number"
+                                        min="5"
+                                        max="25"
+                                    />
+                                    <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
+                                </Form.Group>
+                            </div>
+                            <div className="col-md-6">
+                                <Form.Group>
+                                    <Form.Label className="fw-semibold">Grade *</Form.Label>
+                                    <Form.Select 
+                                        name="grade" 
+                                        value={form.grade} 
+                                        onChange={handleChange} 
+                                        isInvalid={!!errors.grade}
+                                        size="lg"
+                                    >
+                                        <option value="">Select Grade</option>
+                                        <option value="9th">9th Grade</option>
+                                        <option value="10th">10th Grade</option>
+                                        <option value="11th">11th Grade</option>
+                                        <option value="12th">12th Grade</option>
+                                    </Form.Select>
+                                    <Form.Control.Feedback type="invalid">{errors.grade}</Form.Control.Feedback>
+                                </Form.Group>
+                            </div>
+                            <div className="col-md-6">
+                                <Form.Group>
+                                    <Form.Label className="fw-semibold">Health Status</Form.Label>
+                                    <Form.Select 
+                                        name="healthStatus" 
+                                        value={form.healthStatus} 
+                                        onChange={handleChange}
+                                        size="lg"
+                                    >
+                                        <option value="Good">Good</option>
+                                        <option value="Warning">Needs Attention</option>
+                                    </Form.Select>
+                                </Form.Group>
+                            </div>
+                        </div>
+                        
+                        <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top">
+                            <Button variant="outline-secondary" onClick={handleCloseForm} size="lg">
+                                Cancel
+                            </Button>
+                            <Button type="submit" variant="primary" size="lg">
+                                <Plus className="me-2" />
+                                Add Student
+                            </Button>
+                        </div>
+                    </Form>
+                </Modal.Body>
+            </Modal>
+        </Container>
+    );
+};
+
+export default Students;
+