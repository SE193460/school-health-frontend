import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { GeoAlt, EnvelopeAt, Telephone, Tools } from 'react-bootstrap-icons';

const Contact = () => (
    <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
        <Container className="py-5">
            <Row className="mb-5">
                <Col md={8} className="mx-auto text-center">
                    <EnvelopeAt size={48} className="text-primary mb-2" />
                    <h1 className="display-5 fw-bold mb-3 text-primary">Liên hệ</h1>
                    <p className="lead">
                        Nếu bạn cần hỗ trợ hoặc có thắc mắc về hệ thống, vui lòng liên hệ với chúng tôi qua các thông tin dưới đây.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={6} className="mx-auto">
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <h4 className="mb-3 text-success"><GeoAlt className="me-2" />Thông tin trường học</h4>
                            <p className="mb-1"><strong>Trường Tiểu học ABC</strong></p>
                            <p className="mb-1"><GeoAlt className="me-2 text-info" />Địa chỉ: 123 Đường Học Đường, Quận 1, TP.HCM</p>
                            <p className="mb-1"><EnvelopeAt className="me-2 text-primary" />Email: info@abcschool.edu.vn</p>
                            <p className="mb-1"><Telephone className="me-2 text-warning" />Điện thoại: (028) 1234 5678</p>
                        </Card.Body>
                    </Card>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h4 className="mb-3 text-primary"><Tools className="me-2" />Hỗ trợ kỹ thuật</h4>
                            <p className="mb-1"><EnvelopeAt className="me-2 text-primary" />Email: support@abcschool.edu.vn</p>
                            <p className="mb-1"><Telephone className="me-2 text-warning" />Hotline: 1900 1234</p>
                            <p className="mb-1">Thời gian hỗ trợ: 8:00 - 17:00 (Thứ 2 - Thứ 6)</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Contact;