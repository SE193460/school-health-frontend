import React from 'react';
import { Row, Col, Card, Container, Alert, Button, ListGroup, Badge } from 'react-bootstrap';
import { PersonVcard, Bell, Calendar2Event, FileEarmarkMedical, PencilSquare, Download, EnvelopeAt, Telephone, HeartPulse, Hospital, Book, People, BarChart } from 'react-bootstrap-icons';

const mockStudent = {
    name: 'Nguyễn Văn A',
    class: '5A',
    healthStatus: 'Tốt',
};
const mockHistory = [
    { date: '2024-01-15', type: 'Khám sức khỏe', result: 'Bình thường' },
    { date: '2023-12-10', type: 'Tiêm chủng', result: 'MMR - Đã tiêm' },
    { date: '2023-11-05', type: 'Sốt', result: 'Điều trị tại trường' },
];
const mockNotifications = [
    { id: 1, message: 'Trường tổ chức kiểm tra sức khỏe định kỳ ngày 20/02/2024', type: 'info' },
    { id: 2, message: 'Nhắc nhở: Đã đến lịch tiêm phòng cúm cho học sinh', type: 'warning' },
];
const mockUpcoming = [
    { date: '2024-02-20', event: 'Kiểm tra sức khỏe định kỳ' },
    { date: '2024-03-05', event: 'Tiêm phòng cúm' },
];
const mockReports = [
    { date: '2024-01-15', title: 'Báo cáo sức khỏe tổng quát', file: '#' },
    { date: '2023-12-10', title: 'Phiếu tiêm chủng', file: '#' },
];
const mockContacts = [
    { name: 'Y tá Trần Thị B', phone: '0901 234 567', email: 'yta@abcschool.edu.vn' },
];
const mockResources = [
    { title: 'Cách phòng chống cúm học đường', link: '#' },
    { title: 'Dinh dưỡng cho học sinh tiểu học', link: '#' },
];
const mockSupport = [
    { name: 'Đường dây nóng tư vấn tâm lý', phone: '1800 1234' },
    { name: 'Trung tâm y tế Quận 1', phone: '028 1234 5678' },
];

const cardStyle = {
    borderRadius: 16,
    boxShadow: '0 2px 12px 0 rgba(33,150,243,0.08)',
    border: 'none',
};
const cardHeaderStyle = {
    background: 'linear-gradient(90deg, #1976d2 60%, #43a047 100%)',
    color: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    fontWeight: 600,
    fontSize: 18,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
};

const Dashboard = () => {
    const role = localStorage.getItem('userRole');
    if (!role) {
        return (
            <Container className="py-5">
                <Alert variant="danger">Bạn chưa đăng nhập hoặc chưa chọn vai trò.</Alert>
            </Container>
        );
    }

    // Nội dung cho từng role
    if (role === 'admin') {
        return (
            <Container fluid>
                <h1 className="mb-4 text-primary">Dashboard - Admin</h1>
                <Row className="mb-4">
                    <Col md={3}><Card className="text-white bg-primary"><Card.Body><Card.Title><People className="me-2" />Quản lý học sinh</Card.Title></Card.Body></Card></Col>
                    <Col md={3}><Card className="text-white bg-success"><Card.Body><Card.Title><FileEarmarkMedical className="me-2" />Hồ sơ sức khỏe</Card.Title></Card.Body></Card></Col>
                    <Col md={3}><Card className="text-white bg-warning"><Card.Body><Card.Title><Bell className="me-2" />Sự kiện y tế</Card.Title></Card.Body></Card></Col>
                    <Col md={3}><Card className="text-white bg-info"><Card.Body><Card.Title><BarChart className="me-2" />Báo cáo</Card.Title></Card.Body></Card></Col>
                </Row>
                <Row className="mb-4">
                    <Col md={3}><Card className="text-white bg-dark"><Card.Body><Card.Title><People className="me-2" />Quản lý người dùng</Card.Title></Card.Body></Card></Col>
                    <Col md={3}><Card className="text-white bg-secondary"><Card.Body><Card.Title><Hospital className="me-2" />Cài đặt hệ thống</Card.Title></Card.Body></Card></Col>
                </Row>
            </Container>
        );
    }
    if (role === 'manager') {
        return (
            <Container fluid>
                <h1 className="mb-4 text-primary">Dashboard - Manager</h1>
                <Row className="mb-4">
                    <Col md={4}><Card className="text-white bg-success"><Card.Body><Card.Title><FileEarmarkMedical className="me-2" />Xem hồ sơ sức khỏe</Card.Title></Card.Body></Card></Col>
                    <Col md={4}><Card className="text-white bg-info"><Card.Body><Card.Title><BarChart className="me-2" />Xem báo cáo</Card.Title></Card.Body></Card></Col>
                </Row>
                <Alert variant="info">Bạn chỉ có quyền xem, không chỉnh sửa hoặc truy cập cài đặt.</Alert>
            </Container>
        );
    }
    if (role === 'nurse') {
        return (
            <Container fluid>
                <h1 className="mb-4 text-primary">Dashboard - School Nurse</h1>
                <Row className="mb-4">
                    <Col md={4}><Card className="text-white bg-success"><Card.Body><Card.Title><FileEarmarkMedical className="me-2" />Cập nhật hồ sơ sức khỏe</Card.Title></Card.Body></Card></Col>
                    <Col md={4}><Card className="text-white bg-warning"><Card.Body><Card.Title><Bell className="me-2" />Ghi nhận sự kiện y tế</Card.Title></Card.Body></Card></Col>
                    <Col md={4}><Card className="text-white bg-info"><Card.Body><Card.Title><HeartPulse className="me-2" />Tiêm chủng</Card.Title></Card.Body></Card></Col>
                </Row>
            </Container>
        );
    }
    if (role === 'parent') {
        return (
            <Container fluid style={{ background: '#f8f9fa', minHeight: '100vh', padding: '32px 0' }}>
                <h1 className="mb-4 text-primary" style={{ fontWeight: 700 }}>Dashboard Phụ huynh</h1>
                <Row className="mb-4 g-4">
                    <Col md={4}>
                        <Card className="mb-3 shadow-sm" style={cardStyle}>
                            <Card.Header style={cardHeaderStyle}><PersonVcard className="me-2" /> Thông tin học sinh</Card.Header>
                            <Card.Body>
                                <div className="mb-2"><strong>Họ tên:</strong> {mockStudent.name}</div>
                                <div className="mb-2"><strong>Lớp:</strong> {mockStudent.class}</div>
                                <div><strong>Tình trạng sức khỏe:</strong> <Badge bg="success" className="fs-6">{mockStudent.healthStatus}</Badge></div>
                            </Card.Body>
                        </Card>
                        <Card className="mb-3 shadow-sm" style={cardStyle}>
                            <Card.Header style={cardHeaderStyle}><EnvelopeAt className="me-2" /> Liên hệ y tá/bác sĩ</Card.Header>
                            <ListGroup variant="flush">
                                {mockContacts.map((c, idx) => (
                                    <ListGroup.Item key={idx} className="d-flex flex-column align-items-start">
                                        <div><strong>{c.name}</strong></div>
                                        <div><Telephone className="me-1" /> {c.phone}</div>
                                        <div><EnvelopeAt className="me-1" /> {c.email}</div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                        <Card className="mb-3 shadow-sm" style={cardStyle}>
                            <Card.Header style={cardHeaderStyle}><Book className="me-2" /> Tài nguyên sức khỏe</Card.Header>
                            <ListGroup variant="flush">
                                {mockResources.map((r, idx) => (
                                    <ListGroup.Item key={idx}>
                                        <a href={r.link}><HeartPulse className="me-2 text-primary" />{r.title}</a>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                        <Card className="shadow-sm" style={cardStyle}>
                            <Card.Header style={cardHeaderStyle}><Hospital className="me-2" /> Dịch vụ hỗ trợ bên ngoài</Card.Header>
                            <ListGroup variant="flush">
                                {mockSupport.map((s, idx) => (
                                    <ListGroup.Item key={idx}>
                                        <div><strong>{s.name}</strong></div>
                                        <div><Telephone className="me-1" /> {s.phone}</div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Row className="g-4">
                            <Col md={12}>
                                <Card className="mb-3 shadow-sm" style={cardStyle}>
                                    <Card.Header style={cardHeaderStyle}><Bell className="me-2" /> Thông báo y tế</Card.Header>
                                    <ListGroup variant="flush">
                                        {mockNotifications.map((n) => (
                                            <ListGroup.Item key={n.id}>
                                                <Alert variant={n.type} className="mb-0">{n.message}</Alert>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card>
                            </Col>
                            <Col md={12}>
                                <Card className="mb-3 shadow-sm" style={cardStyle}>
                                    <Card.Header style={cardHeaderStyle}><Calendar2Event className="me-2" /> Sự kiện y tế sắp tới</Card.Header>
                                    <ListGroup variant="flush">
                                        {mockUpcoming.map((e, idx) => (
                                            <ListGroup.Item key={idx}>
                                                <strong>{e.event}</strong> - <span>{e.date}</span>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card>
                            </Col>
                            <Col md={12}>
                                <Card className="mb-3 shadow-sm" style={cardStyle}>
                                    <Card.Header style={cardHeaderStyle}><FileEarmarkMedical className="me-2" /> Lịch sử y tế</Card.Header>
                                    <ListGroup variant="flush">
                                        {mockHistory.map((h, idx) => (
                                            <ListGroup.Item key={idx}>
                                                <div><strong>{h.type}</strong> ({h.date})</div>
                                                <div>Kết quả: {h.result}</div>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card>
                            </Col>
                            <Col md={12}>
                                <Card className="mb-3 shadow-sm" style={cardStyle}>
                                    <Card.Header style={cardHeaderStyle}><PencilSquare className="me-2" /> Cập nhật hồ sơ</Card.Header>
                                    <Card.Body>
                                        <Button variant="primary" size="lg"><PencilSquare className="me-2" />Cập nhật tình trạng sức khỏe</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={12}>
                                <Card className="mb-3 shadow-sm" style={cardStyle}>
                                    <Card.Header style={cardHeaderStyle}><Download className="me-2" /> Kết quả kiểm tra</Card.Header>
                                    <ListGroup variant="flush">
                                        {mockReports.map((r, idx) => (
                                            <ListGroup.Item key={idx}>
                                                <div>{r.title} ({r.date}) <a href={r.file} download className="ms-2"><Download /> Tải xuống</a></div>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
    return (
        <Container className="py-5">
            <Alert variant="warning">Không xác định được vai trò người dùng.</Alert>
        </Container>
    );
};

export default Dashboard; 