@@ .. @@
 import React from 'react';
-import { Row, Col, Card, Container, Alert, Button, ListGroup, Badge } from 'react-bootstrap';
-import { PersonVcard, Bell, Calendar2Event, FileEarmarkMedical, PencilSquare, Download, EnvelopeAt, Telephone, HeartPulse, Hospital, Book, People, BarChart } from 'react-bootstrap-icons';
+import { Row, Col, Card, Container, Alert, Button, ListGroup, Badge, ProgressBar } from 'react-bootstrap';
+import { PersonVcard, Bell, Calendar2Event, FileEarmarkMedical, PencilSquare, Download, EnvelopeAt, Telephone, HeartPulse, Hospital, Book, People, BarChart, Activity, Shield, TrendingUp, Users } from 'react-bootstrap-icons';
+import StatCard from '../components/StatCard';
+import PageHeader from '../components/PageHeader';
+import LoadingSpinner from '../components/LoadingSpinner';

@@ .. @@
 const mockSupport = [
     { name: 'Đường dây nóng tư vấn tâm lý', phone: '1800 1234' },
     { name: 'Trung tâm y tế Quận 1', phone: '028 1234 5678' },
 ];

-const cardStyle = {
-    borderRadius: 16,
-    boxShadow: '0 2px 12px 0 rgba(33,150,243,0.08)',
-    border: 'none',
-};
-const cardHeaderStyle = {
-    background: 'linear-gradient(90deg, #1976d2 60%, #43a047 100%)',
-    color: 'white',
-    borderTopLeftRadius: 16,
-    borderTopRightRadius: 16,
-    fontWeight: 600,
-    fontSize: 18,
-    display: 'flex',
-    alignItems: 'center',
-    gap: 8,
-};
+// Mock statistics data
+const mockStats = {
+    totalStudents: 1247,
+    healthyStudents: 1198,
+    pendingCheckups: 23,
+    vaccinations: 156,
+    medicalEvents: 8,
+    supplies: 89
+};

 const Dashboard = () => {
@@ .. @@
     // Nội dung cho từng role
     if (role === 'admin') {
         return (
-            <Container fluid>
-                <h1 className="mb-4 text-primary">Dashboard - Admin</h1>
-                <Row className="mb-4">
-                    <Col md={3}><Card className="text-white bg-primary"><Card.Body><Card.Title><People className="me-2" />Quản lý học sinh</Card.Title></Card.Body></Card></Col>
-                    <Col md={3}><Card className="text-white bg-success"><Card.Body><Card.Title><FileEarmarkMedical className="me-2" />Hồ sơ sức khỏe</Card.Title></Card.Body></Card></Col>
-                    <Col md={3}><Card className="text-white bg-warning"><Card.Body><Card.Title><Bell className="me-2" />Sự kiện y tế</Card.Title></Card.Body></Card></Col>
-                    <Col md={3}><Card className="text-white bg-info"><Card.Body><Card.Title><BarChart className="me-2" />Báo cáo</Card.Title></Card.Body></Card></Col>
+            <Container fluid className="py-4">
+                <PageHeader 
+                    title="Admin Dashboard"
+                    subtitle="Comprehensive overview of school health management system"
+                    icon={<Shield />}
+                />
+                
+                {/* Statistics Cards */}
+                <Row className="g-4 mb-4">
+                    <Col md={3}>
+                        <StatCard 
+                            title="Total Students"
+                            value={mockStats.totalStudents.toLocaleString()}
+                            icon={<Users />}
+                            color="primary"
+                            trend={5.2}
+                        />
+                    </Col>
+                    <Col md={3}>
+                        <StatCard 
+                            title="Healthy Students"
+                            value={mockStats.healthyStudents.toLocaleString()}
+                            icon={<HeartPulse />}
+                            color="success"
+                            subtitle={`${((mockStats.healthyStudents / mockStats.totalStudents) * 100).toFixed(1)}% of total`}
+                        />
+                    </Col>
+                    <Col md={3}>
+                        <StatCard 
+                            title="Pending Checkups"
+                            value={mockStats.pendingCheckups}
+                            icon={<Calendar2Event />}
+                            color="warning"
+                            trend={-12.3}
+                        />
+                    </Col>
+                    <Col md={3}>
+                        <StatCard 
+                            title="Medical Events"
+                            value={mockStats.medicalEvents}
+                            icon={<Activity />}
+                            color="danger"
+                            subtitle="This month"
+                        />
+                    </Col>
                 </Row>
-                <Row className="mb-4">
-                    <Col md={3}><Card className="text-white bg-dark"><Card.Body><Card.Title><People className="me-2" />Quản lý người dùng</Card.Title></Card.Body></Card></Col>
-                    <Col md={3}><Card className="text-white bg-secondary"><Card.Body><Card.Title><Hospital className="me-2" />Cài đặt hệ thống</Card.Title></Card.Body></Card></Col>
+                
+                {/* Quick Actions */}
+                <Row className="g-4 mb-4">
+                    <Col md={8}>
+                        <Card className="h-100">
+                            <Card.Header>
+                                <div className="d-flex align-items-center">
+                                    <TrendingUp className="me-2" />
+                                    <h5 className="mb-0">Health Overview</h5>
+                                </div>
+                            </Card.Header>
+                            <Card.Body>
+                                <div className="mb-3">
+                                    <div className="d-flex justify-content-between mb-1">
+                                        <span>Vaccination Coverage</span>
+                                        <span>94%</span>
+                                    </div>
+                                    <ProgressBar variant="success" now={94} />
+                                </div>
+                                <div className="mb-3">
+                                    <div className="d-flex justify-content-between mb-1">
+                                        <span>Health Checkups Completed</span>
+                                        <span>87%</span>
+                                    </div>
+                                    <ProgressBar variant="info" now={87} />
+                                </div>
+                                <div className="mb-3">
+                                    <div className="d-flex justify-content-between mb-1">
+                                        <span>Medical Supplies Stock</span>
+                                        <span>76%</span>
+                                    </div>
+                                    <ProgressBar variant="warning" now={76} />
+                                </div>
+                            </Card.Body>
+                        </Card>
+                    </Col>
+                    <Col md={4}>
+                        <Card className="h-100">
+                            <Card.Header>
+                                <div className="d-flex align-items-center">
+                                    <Bell className="me-2" />
+                                    <h5 className="mb-0">Quick Actions</h5>
+                                </div>
+                            </Card.Header>
+                            <Card.Body className="d-grid gap-2">
+                                <Button variant="primary" size="lg">
+                                    <People className="me-2" />
+                                    Manage Students
+                                </Button>
+                                <Button variant="success" size="lg">
+                                    <FileEarmarkMedical className="me-2" />
+                                    Health Records
+                                </Button>
+                                <Button variant="info" size="lg">
+                                    <BarChart className="me-2" />
+                                    Generate Reports
+                                </Button>
+                                <Button variant="warning" size="lg">
+                                    <Hospital className="me-2" />
+                                    System Settings
+                                </Button>
+                            </Card.Body>
+                        </Card>
+                    </Col>
                 </Row>
             </Container>
         );
@@ .. @@
     if (role === 'manager') {
         return (
-            <Container fluid>
-                <h1 className="mb-4 text-primary">Dashboard - Manager</h1>
-                <Row className="mb-4">
-                    <Col md={4}><Card className="text-white bg-success"><Card.Body><Card.Title><FileEarmarkMedical className="me-2" />Xem hồ sơ sức khỏe</Card.Title></Card.Body></Card></Col>
-                    <Col md={4}><Card className="text-white bg-info"><Card.Body><Card.Title><BarChart className="me-2" />Xem báo cáo</Card.Title></Card.Body></Card></Col>
+            <Container fluid className="py-4">
+                <PageHeader 
+                    title="Manager Dashboard"
+                    subtitle="Monitor and oversee health management operations"
+                    icon={<BarChart />}
+                />
+                
+                <Row className="g-4 mb-4">
+                    <Col md={6}>
+                        <StatCard 
+                            title="Health Records"
+                            value="1,247"
+                            icon={<FileEarmarkMedical />}
+                            color="success"
+                            subtitle="Total student records"
+                        />
+                    </Col>
+                    <Col md={6}>
+                        <StatCard 
+                            title="Reports Generated"
+                            value="23"
+                            icon={<BarChart />}
+                            color="info"
+                            subtitle="This month"
+                        />
+                    </Col>
                 </Row>
-                <Alert variant="info">Bạn chỉ có quyền xem, không chỉnh sửa hoặc truy cập cài đặt.</Alert>
+                
+                <Alert variant="info" className="fade-in-up">
+                    <Bell className="me-2" />
+                    You have view-only access to health records and reports.
+                </Alert>
             </Container>
         );
@@ .. @@
     if (role === 'nurse') {
         return (
-            <Container fluid>
-                <h1 className="mb-4 text-primary">Dashboard - School Nurse</h1>
-                <Row className="mb-4">
-                    <Col md={4}><Card className="text-white bg-success"><Card.Body><Card.Title><FileEarmarkMedical className="me-2" />Cập nhật hồ sơ sức khỏe</Card.Title></Card.Body></Card></Col>
-                    <Col md={4}><Card className="text-white bg-warning"><Card.Body><Card.Title><Bell className="me-2" />Ghi nhận sự kiện y tế</Card.Title></Card.Body></Card></Col>
-                    <Col md={4}><Card className="text-white bg-info"><Card.Body><Card.Title><HeartPulse className="me-2" />Tiêm chủng</Card.Title></Card.Body></Card></Col>
+            <Container fluid className="py-4">
+                <PageHeader 
+                    title="Nurse Dashboard"
+                    subtitle="Manage daily health operations and student care"
+                    icon={<HeartPulse />}
+                />
+                
+                <Row className="g-4 mb-4">
+                    <Col md={4}>
+                        <StatCard 
+                            title="Today's Checkups"
+                            value="12"
+                            icon={<Activity />}
+                            color="primary"
+                            subtitle="Scheduled appointments"
+                        />
+                    </Col>
+                    <Col md={4}>
+                        <StatCard 
+                            title="Medical Events"
+                            value="3"
+                            icon={<Bell />}
+                            color="warning"
+                            subtitle="Requiring attention"
+                        />
+                    </Col>
+                    <Col md={4}>
+                        <StatCard 
+                            title="Vaccinations Due"
+                            value="8"
+                            icon={<Shield />}
+                            color="info"
+                            subtitle="This week"
+                        />
+                    </Col>
                 </Row>
             </Container>
         );
@@ .. @@
     if (role === 'parent') {
         return (
-            <Container fluid style={{ background: '#f8f9fa', minHeight: '100vh', padding: '32px 0' }}>
-                <h1 className="mb-4 text-primary" style={{ fontWeight: 700 }}>Dashboard Phụ huynh</h1>
+            <Container fluid className="py-4">
+                <PageHeader 
+                    title="Parent Dashboard"
+                    subtitle="Monitor your child's health and school medical information"
+                    icon={<PersonVcard />}
+                />
+                
                 <Row className="mb-4 g-4">
                     <Col md={4}>
-                        <Card className="mb-3 shadow-sm" style={cardStyle}>
-                            <Card.Header style={cardHeaderStyle}><PersonVcard className="me-2" /> Thông tin học sinh</Card.Header>
+                        <Card className="mb-3 fade-in-up">
+                            <Card.Header>
+                                <PersonVcard className="me-2" /> Student Information
+                            </Card.Header>
                             <Card.Body>
                                 <div className="mb-2"><strong>Họ tên:</strong> {mockStudent.name}</div>
                                 <div className="mb-2"><strong>Lớp:</strong> {mockStudent.class}</div>
@@ -1,7 +1,7 @@
                             </Card.Body>
                         </Card>
-                        <Card className="mb-3 shadow-sm" style={cardStyle}>
-                            <Card.Header style={cardHeaderStyle}><EnvelopeAt className="me-2" /> Liên hệ y tá/bác sĩ</Card.Header>
+                        <Card className="mb-3 fade-in-up">
+                            <Card.Header>
+                                <EnvelopeAt className="me-2" /> Contact Medical Staff
+                            </Card.Header>
                             <ListGroup variant="flush">
@@ .. @@
                             </ListGroup>
                         </Card>
-                        <Card className="mb-3 shadow-sm" style={cardStyle}>
-                            <Card.Header style={cardHeaderStyle}><Book className="me-2" /> Tài nguyên sức khỏe</Card.Header>
+                        <Card className="mb-3 fade-in-up">
+                            <Card.Header>
+                                <Book className="me-2" /> Health Resources
+                            </Card.Header>
                             <ListGroup variant="flush">
@@ .. @@
                             </ListGroup>
                         </Card>
-                        <Card className="shadow-sm" style={cardStyle}>
-                            <Card.Header style={cardHeaderStyle}><Hospital className="me-2" /> Dịch vụ hỗ trợ bên ngoài</Card.Header>
+                        <Card className="fade-in-up">
+                            <Card.Header>
+                                <Hospital className="me-2" /> External Support Services
+                            </Card.Header>
                             <ListGroup variant="flush">
@@ .. @@
                         <Row className="g-4">
                             <Col md={12}>
-                                <Card className="mb-3 shadow-sm" style={cardStyle}>
-                                    <Card.Header style={cardHeaderStyle}><Bell className="me-2" /> Thông báo y tế</Card.Header>
+                                <Card className="mb-3 fade-in-up">
+                                    <Card.Header>
+                                        <Bell className="me-2" /> Medical Notifications
+                                    </Card.Header>
                                     <ListGroup variant="flush">
@@ .. @@
                             </Col>
                             <Col md={12}>
-                                <Card className="mb-3 shadow-sm" style={cardStyle}>
-                                    <Card.Header style={cardHeaderStyle}><Calendar2Event className="me-2" /> Sự kiện y tế sắp tới</Card.Header>
+                                <Card className="mb-3 fade-in-up">
+                                    <Card.Header>
+                                        <Calendar2Event className="me-2" /> Upcoming Medical Events
+                                    </Card.Header>
                                     <ListGroup variant="flush">
@@ .. @@
                             </Col>
                             <Col md={12}>
-                                <Card className="mb-3 shadow-sm" style={cardStyle}>
-                                    <Card.Header style={cardHeaderStyle}><FileEarmarkMedical className="me-2" /> Lịch sử y tế</Card.Header>
+                                <Card className="mb-3 fade-in-up">
+                                    <Card.Header>
+                                        <FileEarmarkMedical className="me-2" /> Medical History
+                                    </Card.Header>
                                     <ListGroup variant="flush">
@@ .. @@
                             </Col>
                             <Col md={12}>
-                                <Card className="mb-3 shadow-sm" style={cardStyle}>
-                                    <Card.Header style={cardHeaderStyle}><PencilSquare className="me-2" /> Cập nhật hồ sơ</Card.Header>
+                                <Card className="mb-3 fade-in-up">
+                                    <Card.Header>
+                                        <PencilSquare className="me-2" /> Update Records
+                                    </Card.Header>
                                     <Card.Body>
-                                        <Button variant="primary" size="lg"><PencilSquare className="me-2" />Cập nhật tình trạng sức khỏe</Button>
+                                        <Button variant="primary" size="lg" className="w-100">
+                                            <PencilSquare className="me-2" />
+                                            Update Health Status
+                                        </Button>
                                     </Card.Body>
                                 </Card>
                             </Col>
                             <Col md={12}>
-                                <Card className="mb-3 shadow-sm" style={cardStyle}>
-                                    <Card.Header style={cardHeaderStyle}><Download className="me-2" /> Kết quả kiểm tra</Card.Header>
+                                <Card className="mb-3 fade-in-up">
+                                    <Card.Header>
+                                        <Download className="me-2" /> Test Results
+                                    </Card.Header>
                                     <ListGroup variant="flush">
@@ .. @@
     return (
         <Container className="py-5">
-            <Alert variant="warning">Không xác định được vai trò người dùng.</Alert>
+            <Alert variant="warning" className="fade-in-up">
+                <Bell className="me-2" />
+                Unable to determine user role. Please contact system administrator.
+            </Alert>
         </Container>
     );
 };