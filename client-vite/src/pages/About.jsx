import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { InfoCircle, ShieldLock, People, Clipboard2Heart } from 'react-bootstrap-icons';

const About = () => (
    <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
        <Container className="py-5">
            <Row className="mb-5">
                <Col md={8} className="mx-auto text-center">
                    <InfoCircle size={48} className="text-primary mb-2" />
                    <h1 className="display-5 fw-bold mb-3 text-primary">Giới thiệu hệ thống</h1>
                    <p className="lead">
                        Hệ thống Quản lý Sức khỏe Học đường giúp nhà trường, phụ huynh và y tế phối hợp chăm sóc sức khỏe học sinh một cách toàn diện, hiện đại và an toàn.
                    </p>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={6} className="mx-auto">
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <h4 className="mb-3 text-success"><Clipboard2Heart className="me-2" />Mục đích xây dựng</h4>
                            <ul className="mb-0 ps-3">
                                <li>Quản lý hồ sơ sức khỏe, tiêm chủng, sự kiện y tế cho học sinh.</li>
                                <li>Kết nối thông tin giữa nhà trường, phụ huynh và y tế.</li>
                                <li>Hỗ trợ ra quyết định nhanh chóng, chính xác về sức khỏe học sinh.</li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <h4 className="mb-3 text-info"><People className="me-2" />Đội ngũ phát triển</h4>
                            <p>Nhóm phát triển gồm các chuyên gia CNTT, giáo dục và y tế học đường, cam kết mang lại giải pháp tối ưu cho nhà trường và phụ huynh.</p>
                        </Card.Body>
                    </Card>
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <h4 className="mb-3 text-warning"><ShieldLock className="me-2" />Bảo mật & Quyền riêng tư</h4>
                            <ul className="mb-0 ps-3">
                                <li>Dữ liệu học sinh được mã hóa và lưu trữ an toàn.</li>
                                <li>Chỉ người có thẩm quyền mới được truy cập thông tin nhạy cảm.</li>
                                <li>Cam kết không chia sẻ dữ liệu cho bên thứ ba khi chưa có sự đồng ý.</li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h4 className="mb-3 text-primary"><ShieldLock className="me-2" />Cam kết bảo vệ thông tin</h4>
                            <p>Chúng tôi tuân thủ các quy định về bảo vệ dữ liệu cá nhân, đảm bảo quyền riêng tư và an toàn tuyệt đối cho học sinh.</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
);

export default About;