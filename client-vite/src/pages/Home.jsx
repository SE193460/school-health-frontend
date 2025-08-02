import React from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HeartPulse, People, BarChart, Bell, Hospital, PersonVcard } from 'react-bootstrap-icons';

const features = [
    {
        title: 'Quản lý sức khỏe học sinh',
        desc: 'Theo dõi hồ sơ sức khỏe, tiêm chủng, sự kiện y tế, kiểm tra sức khỏe định kỳ.',
        icon: <HeartPulse size={48} className="text-primary" />,
    },
    {
        title: 'Dành cho nhiều đối tượng',
        desc: 'Học sinh, phụ huynh, y tá, quản lý đều có quyền truy cập phù hợp.',
        icon: <People size={48} className="text-success" />,
    },
    {
        title: 'Báo cáo & Thống kê',
        desc: 'Tổng hợp báo cáo sức khỏe, sự kiện y tế, vật tư y tế nhanh chóng.',
        icon: <BarChart size={48} className="text-info" />,
    },
    {
        title: 'Thông báo & Nhắc nhở',
        desc: 'Nhắc lịch tiêm chủng, kiểm tra sức khỏe, gửi thông báo đến phụ huynh.',
        icon: <Bell size={48} className="text-warning" />,
    },
];

const Home = () => {
    const navigate = useNavigate();
    return (
        <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
            <Container className="py-5">
                {/* Banner lớn */}
                <Row className="align-items-center mb-5">
                    <Col md={6} className="text-center mb-3 mb-md-0">
                        <img
                            src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
                            alt="Chăm sóc sức khỏe học sinh"
                            className="img-fluid rounded shadow"
                            style={{ maxHeight: 320, borderRadius: 24 }}
                        />
                    </Col>
                    <Col md={6} className="text-center text-md-start">
                        <h1 className="display-5 fw-bold mb-2 text-primary">Trường Tiểu học ABC</h1>
                        <h2 className="h4 mb-3" style={{ color: '#43a047' }}>Hệ thống Quản lý Sức khỏe Học đường</h2>
                        <p className="lead mb-4">
                            Nền tảng hiện đại giúp nhà trường, phụ huynh và y tế phối hợp chăm sóc sức khỏe học sinh toàn diện.
                        </p>
                        <Button
                            variant="primary"
                            size="lg"
                            className="me-3 mb-2"
                            onClick={() => navigate('/login')}
                        >
                            <PersonVcard className="me-2" size={24} /> Đăng nhập hệ thống
                        </Button>
                        <Button
                            variant="outline-success"
                            size="lg"
                            className="mb-2"
                            onClick={() => navigate('/about')}
                        >
                            <Hospital className="me-2" size={24} /> Giới thiệu hệ thống
                        </Button>
                    </Col>
                </Row>
                {/* Menu điều hướng nhanh */}
                <Row className="mb-4">
                    <Col>
                        <Nav className="justify-content-center gap-4">
                            <Nav.Link onClick={() => navigate('/about')}>Giới thiệu</Nav.Link>
                            <Nav.Link onClick={() => navigate('/login')}>Đăng nhập</Nav.Link>
                            <Nav.Link onClick={() => navigate('/contact')}>Liên hệ</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
                {/* Đối tượng phục vụ */}
                <Row className="mb-5">
                    <Col className="text-center">
                        <h3 className="mb-3">Đối tượng phục vụ</h3>
                        <div className="d-flex justify-content-center gap-4 flex-wrap fs-4">
                            <span>👦 Học sinh</span>
                            <span>👩‍👧‍👦 Phụ huynh</span>
                            <span>👩‍⚕️ Y tá</span>
                            <span>👨‍💼 Quản lý</span>
                        </div>
                    </Col>
                </Row>
                {/* Tính năng nổi bật */}
                <Row className="mb-4">
                    <Col className="text-center">
                        <h3 className="mb-4">Tính năng nổi bật</h3>
                    </Col>
                </Row>
                <Row className="g-4 mb-5">
                    {features.map((f, idx) => (
                        <Col key={idx} xs={12} md={6} lg={3}>
                            <Card className="h-100 shadow-sm text-center">
                                <Card.Body>
                                    <div style={{ fontSize: 48, marginBottom: 12 }}>{f.icon}</div>
                                    <Card.Title className="mt-2 mb-2">{f.title}</Card.Title>
                                    <Card.Text>{f.desc}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                {/* Liên hệ */}
                <Row className="mb-5">
                    <Col md={6} className="mx-auto">
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h4 className="mb-3 text-primary">Liên hệ</h4>
                                <p className="mb-1">Trường Tiểu học ABC</p>
                                <p className="mb-1">Địa chỉ: 123 Đường Học Đường, Quận 1, TP.HCM</p>
                                <p className="mb-1">Email: info@abcschool.edu.vn</p>
                                <p className="mb-1">Điện thoại: (028) 1234 5678</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center text-muted">
                        <small>© 2024 Trường Tiểu học ABC - Hệ thống Quản lý Sức khỏe Học đường</small>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
