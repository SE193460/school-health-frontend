@@ .. @@
 const Home = () => {
     const navigate = useNavigate();
     return (
     )
 }
-        <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
-            <Container className="py-5">
+        <div style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh' }}>
+            <Container className="py-5 fade-in-up">
                 {/* Banner lớn */}
-                <Row className="align-items-center mb-5">
+                <Row className="align-items-center mb-5 fade-in-up">
                     <Col md={6} className="text-center mb-3 mb-md-0">
                         <img
                             src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
                             alt="Chăm sóc sức khỏe học sinh"
-                            className="img-fluid rounded shadow"
-                            style={{ maxHeight: 320, borderRadius: 24 }}
+                            className="img-fluid rounded shadow-custom"
+                            style={{ maxHeight: 400, borderRadius: 24, objectFit: 'cover' }}
                         />
                     </Col>
                     <Col md={6} className="text-center text-md-start">
-                        <h1 className="display-5 fw-bold mb-2 text-primary">Trường Tiểu học ABC</h1>
-                        <h2 className="h4 mb-3" style={{ color: '#43a047' }}>Hệ thống Quản lý Sức khỏe Học đường</h2>
-                        <p className="lead mb-4">
+                        <h1 className="display-4 fw-bold mb-3 text-gradient">Trường Tiểu học ABC</h1>
+                        <h2 className="h3 mb-4 text-success">Hệ thống Quản lý Sức khỏe Học đường</h2>
+                        <p className="lead mb-4 text-muted">
                             Nền tảng hiện đại giúp nhà trường, phụ huynh và y tế phối hợp chăm sóc sức khỏe học sinh toàn diện.
                         </p>
-                        <Button
-                            variant="primary"
-                            size="lg"
-                            className="me-3 mb-2"
-                            onClick={() => navigate('/login')}
-                        >
-                            <PersonVcard className="me-2" size={24} /> Đăng nhập hệ thống
-                        </Button>
-                        <Button
-                            variant="outline-success"
-                            size="lg"
-                            className="mb-2"
-                            onClick={() => navigate('/about')}
-                        >
-                            <Hospital className="me-2" size={24} /> Giới thiệu hệ thống
-                        </Button>
+                        <div className="d-flex flex-column flex-md-row gap-3">
+                            <Button
+                                variant="primary"
+                                size="lg"
+                                className="pulse"
+                                onClick={() => navigate('/login')}
+                            >
+                                <PersonVcard className="me-2" size={24} /> Đăng nhập hệ thống
+                            </Button>
+                            <Button
+                                variant="outline-success"
+                                size="lg"
+                                onClick={() => navigate('/about')}
+                            >
+                                <Hospital className="me-2" size={24} /> Giới thiệu hệ thống
+                            </Button>
+                        </div>
                     </Col>
                 </Row>
+                
                 {/* Menu điều hướng nhanh */}
-                <Row className="mb-4">
+                <Row className="mb-5">
                     <Col>
-                        <Nav className="justify-content-center gap-4">
-                            <Nav.Link onClick={() => navigate('/about')}>Giới thiệu</Nav.Link>
-                            <Nav.Link onClick={() => navigate('/login')}>Đăng nhập</Nav.Link>
-                            <Nav.Link onClick={() => navigate('/contact')}>Liên hệ</Nav.Link>
+                        <Nav className="justify-content-center gap-4 glass-effect rounded-pill p-3 mx-auto" style={{ maxWidth: 'fit-content' }}>
+                            <Nav.Link onClick={() => navigate('/about')} className="fw-semibold">Giới thiệu</Nav.Link>
+                            <Nav.Link onClick={() => navigate('/login')} className="fw-semibold">Đăng nhập</Nav.Link>
+                            <Nav.Link onClick={() => navigate('/contact')} className="fw-semibold">Liên hệ</Nav.Link>
                         </Nav>
                     </Col>
                 </Row>
+                
                 {/* Đối tượng phục vụ */}
                 <Row className="mb-5">
-                    <Col className="text-center">
-                        <h3 className="mb-3">Đối tượng phục vụ</h3>
-                        <div className="d-flex justify-content-center gap-4 flex-wrap fs-4">
-                            <span>👦 Học sinh</span>
-                            <span>👩‍👧‍👦 Phụ huynh</span>
-                            <span>👩‍⚕️ Y tá</span>
-                            <span>👨‍💼 Quản lý</span>
+                    <Col className="text-center fade-in-up">
+                        <h3 className="mb-4 text-gradient">Đối tượng phục vụ</h3>
+                        <div className="d-flex justify-content-center gap-4 flex-wrap">
+                            <div className="glass-effect rounded-pill px-4 py-3 fs-5 fw-semibold">
+                                👦 Học sinh
+                            </div>
+                            <div className="glass-effect rounded-pill px-4 py-3 fs-5 fw-semibold">
+                                👩‍👧‍👦 Phụ huynh
+                            </div>
+                            <div className="glass-effect rounded-pill px-4 py-3 fs-5 fw-semibold">
+                                👩‍⚕️ Y tá
+                            </div>
+                            <div className="glass-effect rounded-pill px-4 py-3 fs-5 fw-semibold">
+                                👨‍💼 Quản lý
+                            </div>
                         </div>
                     </Col>
                 </Row>
+                
                 {/* Tính năng nổi bật */}
                 <Row className="mb-4">
-                    <Col className="text-center">
-                        <h3 className="mb-4">Tính năng nổi bật</h3>
+                    <Col className="text-center fade-in-up">
+                        <h3 className="mb-5 text-gradient">Tính năng nổi bật</h3>
                     </Col>
                 </Row>
                 <Row className="g-4 mb-5">
                     {features.map((f, idx) => (
)
)
}
-                        <Col key={idx} xs={12} md={6} lg={3}>
-                            <Card className="h-100 shadow-sm text-center">
-                                <Card.Body>
-                                    <div style={{ fontSize: 48, marginBottom: 12 }}>{f.icon}</div>
-                                    <Card.Title className="mt-2 mb-2">{f.title}</Card.Title>
-                                    <Card.Text>{f.desc}</Card.Text>
+                        <Col key={idx} xs={12} md={6} lg={3} className="fade-in-up">
+                            <Card className="h-100 text-center border-0 shadow-custom">
+                                <Card.Body className="p-4">
+                                    <div className="mb-3">{f.icon}</div>
+                                    <Card.Title className="h5 mb-3 text-gradient">{f.title}</Card.Title>
+                                    <Card.Text className="text-muted">{f.desc}</Card.Text>
                                 </Card.Body>
                             </Card>
                         </Col>
                     ))}
                 </Row>
+                
                 {/* Liên hệ */}
                 <Row className="mb-5">
-                    <Col md={6} className="mx-auto">
-                        <Card className="shadow-sm">
-                            <Card.Body>
-                                <h4 className="mb-3 text-primary">Liên hệ</h4>
-                                <p className="mb-1">Trường Tiểu học ABC</p>
-                                <p className="mb-1">Địa chỉ: 123 Đường Học Đường, Quận 1, TP.HCM</p>
-                                <p className="mb-1">Email: info@abcschool.edu.vn</p>
-                                <p className="mb-1">Điện thoại: (028) 1234 5678</p>
+                    <Col md={8} className="mx-auto fade-in-up">
+                        <Card className="border-0 shadow-custom glass-effect">
+                            <Card.Body className="p-5 text-center">
+                                <h4 className="mb-4 text-gradient">Liên hệ với chúng tôi</h4>
+                                <Row className="g-4">
+                                    <Col md={6}>
+                                        <div className="mb-3">
+                                            <strong className="text-primary">Trường Tiểu học ABC</strong>
+                                        </div>
+                                        <div className="text-muted">
+                                            📍 123 Đường Học Đường, Quận 1, TP.HCM
+                                        </div>
+                                    </Col>
+                                    <Col md={6}>
+                                        <div className="mb-2 text-muted">
+                                            📧 info@abcschool.edu.vn
+                                        </div>
+                                        <div className="text-muted">
+                                            📞 (028) 1234 5678
+                                        </div>
+                                    </Col>
+                                </Row>
                             </Card.Body>
                         </Card>
                     </Col>
                 </Row>
+                
                 <Row>
-                    <Col className="text-center text-muted">
-                        <small>© 2024 Trường Tiểu học ABC - Hệ thống Quản lý Sức khỏe Học đường</small>
+                    <Col className="text-center">
+                        <div className="glass-effect rounded-pill px-4 py-2 d-inline-block">
+                            <small className="text-muted">© 2024 Trường Tiểu học ABC - Hệ thống Quản lý Sức khỏe Học đường</small>
+                        </div>
                     </Col>
                 </Row>
             </Container>