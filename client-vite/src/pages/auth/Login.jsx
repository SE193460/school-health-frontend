import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
    Button,
    Form as BootstrapForm,
    Card,
    Container,
} from 'react-bootstrap';
import { PersonVcard, ShieldLock, EnvelopeAt } from 'react-bootstrap-icons';

const roleOptions = [
    { value: 'admin', label: 'Admin' },
    { value: 'manager', label: 'Manager' },
    { value: 'nurse', label: 'School Nurse' },
    { value: 'parent', label: 'Parent' },
];

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    role: Yup.string().required('Role is required'),
});

const Login = () => {
    const navigate = useNavigate();

    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: '100vh', background: '#f8f9fa' }}
        >
            <Card className="shadow-sm p-2" style={{ width: '100%', maxWidth: 420, borderRadius: 18 }}>
                <Card.Body className="p-4">
                    <div className="text-center mb-4">
                        <PersonVcard size={48} className="text-primary mb-2" />
                        <h2 className="fw-bold mb-2 text-primary">Đăng nhập hệ thống</h2>
                        <div className="text-muted mb-2">Hệ thống Quản lý Sức khỏe Học đường</div>
                    </div>

                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            role: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            localStorage.setItem('userRole', values.role);
                            navigate('/dashboard');
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleBlur }) => (
                            <Form>
                                <BootstrapForm.Group className="mb-3">
                                    <BootstrapForm.Label>
                                        <EnvelopeAt className="me-2 text-primary" /> Email
                                    </BootstrapForm.Label>
                                    <BootstrapForm.Control
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.email && Boolean(errors.email)}
                                        size="lg"
                                        autoComplete="username"
                                    />
                                    <BootstrapForm.Control.Feedback type="invalid">
                                        {errors.email}
                                    </BootstrapForm.Control.Feedback>
                                </BootstrapForm.Group>

                                <BootstrapForm.Group className="mb-3">
                                    <BootstrapForm.Label>
                                        <ShieldLock className="me-2 text-success" /> Mật khẩu
                                    </BootstrapForm.Label>
                                    <BootstrapForm.Control
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.password && Boolean(errors.password)}
                                        size="lg"
                                        autoComplete="current-password"
                                    />
                                    <BootstrapForm.Control.Feedback type="invalid">
                                        {errors.password}
                                    </BootstrapForm.Control.Feedback>
                                </BootstrapForm.Group>

                                <BootstrapForm.Group className="mb-4">
                                    <BootstrapForm.Label>Vai trò</BootstrapForm.Label>
                                    <BootstrapForm.Select
                                        id="role"
                                        name="role"
                                        value={values.role}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.role && Boolean(errors.role)}
                                        size="lg"
                                    >
                                        <option value="">Chọn vai trò...</option>
                                        {roleOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </BootstrapForm.Select>
                                    <BootstrapForm.Control.Feedback type="invalid">
                                        {errors.role}
                                    </BootstrapForm.Control.Feedback>
                                </BootstrapForm.Group>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-100 mb-2"
                                >
                                    Đăng nhập
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login; 