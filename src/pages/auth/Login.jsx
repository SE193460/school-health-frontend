@@ .. @@
 const Login = () => {
     const navigate = useNavigate();
 
     return (
-        <Container
-            className="d-flex align-items-center justify-content-center"
-            style={{ minHeight: '100vh', background: '#f8f9fa' }}
-        >
-            <Card className="shadow-sm p-2" style={{ width: '100%', maxWidth: 420, borderRadius: 18 }}>
-                <Card.Body className="p-4">
+        <div style={{ 
+            minHeight: '100vh', 
+            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
+            display: 'flex',
+            alignItems: 'center',
+            justifyContent: 'center'
+        }}>
+            <Container>
+                <div className="row justify-content-center">
+                    <div className="col-md-6 col-lg-5">
+                        <Card className="border-0 shadow-lg glass-effect fade-in-up">
+                            <Card.Body className="p-5">
                     <div className="text-center mb-4">
-                        <PersonVcard size={48} className="text-primary mb-2" />
-                        <h2 className="fw-bold mb-2 text-primary">Đăng nhập hệ thống</h2>
-                        <div className="text-muted mb-2">Hệ thống Quản lý Sức khỏe Học đường</div>
+                                    <div className="mb-3">
+                                        <PersonVcard size={64} className="text-primary pulse" />
+                                    </div>
+                                    <h2 className="fw-bold mb-2 text-gradient">Welcome Back</h2>
+                                    <p className="text-muted">School Health Management System</p>
                     </div>

@@ .. @@
                                 <BootstrapForm.Group className="mb-3">
                                     <BootstrapForm.Label>
-                                        <EnvelopeAt className="me-2 text-primary" /> Email
+                                        <EnvelopeAt className="me-2 text-primary" /> 
+                                        Email Address
                                     </BootstrapForm.Label>
                                     <BootstrapForm.Control
                                         type="email"
@@ -1,7 +1,7 @@
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         isInvalid={touched.email && Boolean(errors.email)}
-                                        size="lg"
+                                        className="form-control-lg"
+                                        placeholder="Enter your email"
                                         autoComplete="username"
                                     />
                                     <BootstrapForm.Control.Feedback type="invalid">
@@ -1,7 +1,7 @@

                                 <BootstrapForm.Group className="mb-3">
                                     <BootstrapForm.Label>
-                                        <ShieldLock className="me-2 text-success" /> Mật khẩu
+                                        <ShieldLock className="me-2 text-success" /> 
+                                        Password
                                     </BootstrapForm.Label>
                                     <BootstrapForm.Control
                                         type="password"
@@ -1,7 +1,7 @@
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         isInvalid={touched.password && Boolean(errors.password)}
-                                        size="lg"
+                                        className="form-control-lg"
+                                        placeholder="Enter your password"
                                         autoComplete="current-password"
                                     />
                                     <BootstrapForm.Control.Feedback type="invalid">
@@ -1,7 +1,7 @@

                                 <BootstrapForm.Group className="mb-4">
-                                    <BootstrapForm.Label>Vai trò</BootstrapForm.Label>
+                                    <BootstrapForm.Label className="fw-semibold">
+                                        Select Your Role
+                                    </BootstrapForm.Label>
                                     <BootstrapForm.Select
                                         id="role"
                                         name="role"
@@ -1,7 +1,7 @@
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         isInvalid={touched.role && Boolean(errors.role)}
-                                        size="lg"
+                                        className="form-select-lg"
                                     >
-                                        <option value="">Chọn vai trò...</option>
+                                        <option value="">Choose your role...</option>
                                         {roleOptions.map((option) => (
                                             <option key={option.value} value={option.value}>
                                                 {option.label}
@@ -1,7 +1,7 @@
                                 </BootstrapForm.Group>

                                 <Button
                                     type="submit"
                                     variant="primary"
-                                    size="lg"
-                                    className="w-100 mb-2"
+                                    className="w-100 mb-3 btn-lg"
                                 >
-                                    Đăng nhập
+                                    <PersonVcard className="me-2" />
+                                    Sign In
                                 </Button>
+                                
+                                <div className="text-center">
+                                    <small className="text-muted">
+                                        Need help? Contact system administrator
+                                    </small>
+                                </div>
                             </Form>
                         )}
                     </Formik>
-                </Card.Body>
-            </Card>
-        </Container>
+                            </Card.Body>
+                        </Card>
+                    </div>
+                </div>
+            </Container>
+        </div>
     );
 };