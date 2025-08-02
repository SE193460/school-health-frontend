import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store';
import MainLayout from './layouts/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';

// Auth pages
import Login from './pages/auth/Login';

// Lazy load pages
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Students = React.lazy(() => import('./pages/Students'));
const HealthRecords = React.lazy(() => import('./pages/HealthRecords'));
const MedicalEvents = React.lazy(() => import('./pages/MedicalEvents'));
const Vaccinations = React.lazy(() => import('./pages/Vaccinations'));
const HealthChecks = React.lazy(() => import('./pages/HealthChecks'));
const Supplies = React.lazy(() => import('./pages/Supplies'));
const Reports = React.lazy(() => import('./pages/Reports'));
const Settings = React.lazy(() => import('./pages/Settings'));
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
    return (
        <Provider store={store}>
            <Router>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />

                        {/* Protected Routes */}
                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRoute>
                                    <MainLayout />
                                </ProtectedRoute>
                            }
                        >
                            <Route index element={<Dashboard />} />
                        </Route>
                        <Route
                            path="/students"
                            element={
                                <ProtectedRoute allowedRoles={['admin', 'nurse', 'teacher']}>
                                    <MainLayout />
                                </ProtectedRoute>
                            }
                        >
                            <Route index element={<Students />} />
                        </Route>
                        <Route
                            path="/health-records"
                            element={
                                <ProtectedRoute allowedRoles={['admin', 'nurse']}>
                                    <MainLayout />
                                </ProtectedRoute>
                            }
                        >
                            <Route index element={<HealthRecords />} />
                        </Route>
                        <Route
                            path="/medical-events"
                            element={
                                <ProtectedRoute allowedRoles={['admin', 'nurse']}>
                                    <MainLayout />
                                </ProtectedRoute>
                            }
                        >
                            <Route index element={<MedicalEvents />} />
                        </Route>
                        <Route
                            path="/vaccinations"
                            element={
                                <ProtectedRoute allowedRoles={['admin', 'nurse']}>
                                    <MainLayout />
                                </ProtectedRoute>
                            }
                        >
                            <Route index element={<Vaccinations />} />
                        </Route>
                        <Route
                            path="/health-checks"
                            element={
                                <ProtectedRoute allowedRoles={['admin', 'nurse']}>
                                    <MainLayout />
                                </ProtectedRoute>
                            }
                        >
                            <Route index element={<HealthChecks />} />
                        </Route>
                        <Route
                            path="/supplies"
                            element={
                                <ProtectedRoute allowedRoles={['admin', 'nurse']}>
                                    <MainLayout />
                                </ProtectedRoute>
                            }
                        >
                            <Route index element={<Supplies />} />
                        </Route>
                        <Route
                            path="/reports"
                            element={
                                <ProtectedRoute allowedRoles={['admin', 'nurse']}>
                                    <MainLayout />
                                </ProtectedRoute>
                            }
                        >
                            <Route index element={<Reports />} />
                        </Route>
                        <Route
                            path="/settings"
                            element={
                                <ProtectedRoute>
                                    <MainLayout />
                                </ProtectedRoute>
                            }
                        >
                            <Route index element={<Settings />} />
                        </Route>

                        {/* Catch all - 404 */}
                        <Route path="*" element={<Navigate to="/login" replace />} />
                    </Routes>
                </React.Suspense>
            </Router>
        </Provider>
    );
}


export default App;
