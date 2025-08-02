import React, { useState } from 'react';
import {
    Navbar,
    Nav,
    Container,
    Offcanvas,
} from 'react-bootstrap';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

const MainLayout = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleNavigation = (path) => {
        navigate(path);
        handleClose();
    };

    const role = localStorage.getItem('userRole');

    // Menu động theo role
    let menuItems = [
        { text: 'Dashboard', path: '/dashboard' },
    ];
    if (role === 'admin') {
        menuItems = menuItems.concat([
            { text: 'Students', path: '/students' },
            { text: 'Health Records', path: '/health-records' },
            { text: 'Medical Events', path: '/medical-events' },
            { text: 'Vaccinations', path: '/vaccinations' },
            { text: 'Health Checks', path: '/health-checks' },
            { text: 'Supplies', path: '/supplies' },
            { text: 'Reports', path: '/reports' },
            { text: 'Settings', path: '/settings' },
        ]);
    } else if (role === 'manager') {
        menuItems = menuItems.concat([
            { text: 'Health Records', path: '/health-records' },
            { text: 'Reports', path: '/reports' },
        ]);
    } else if (role === 'nurse') {
        menuItems = menuItems.concat([
            { text: 'Health Records', path: '/health-records' },
            { text: 'Medical Events', path: '/medical-events' },
            { text: 'Vaccinations', path: '/vaccinations' },
            { text: 'Health Checks', path: '/health-checks' },
            { text: 'Supplies', path: '/supplies' },
        ]);
    } else if (role === 'parent') {
        menuItems = menuItems.concat([
            { text: 'Health Records', path: '/health-records' },
        ]);
    }

    const handleLogout = () => {
        localStorage.removeItem('userRole');
        navigate('/login');
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar bg="primary" variant="dark" expand="lg" className="mb-3">
                <Container fluid>
                    <Navbar.Brand onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }}>
                        School Medical Management System
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="offcanvasNavbar-expand-lg"
                        onClick={handleShow}
                    />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-lg"
                        aria-labelledby="offcanvasNavbarLabel-expand-lg"
                        placement="start"
                        show={show}
                        onHide={handleClose}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {menuItems.map((item) => (
                                    <Nav.Link
                                        key={item.text}
                                        onClick={() => handleNavigation(item.path)}
                                        active={location.pathname === item.path}
                                        className="text-dark"
                                    >
                                        {item.text}
                                    </Nav.Link>
                                ))}
                                <Nav.Link onClick={handleLogout} className="text-danger ms-3">Đăng xuất</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <Container fluid className="flex-grow-1">
                <Outlet /> {/* 👈 Đây là phần hiển thị các trang con */}
            </Container>
        </div>
    );
};

export default MainLayout;
