
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AppRoutes } from './constants';

const App: React.FC = () => {
  return (
    <HashRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path={AppRoutes.Home} element={<LandingPage />} />
            <Route path={AppRoutes.Login} element={<LoginPage />} />
            <Route path={AppRoutes.Register} element={<RegisterPage />} />
            <Route 
              path={AppRoutes.Dashboard} 
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<Navigate to={AppRoutes.Home} replace />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </HashRouter>
  );
};

export default App;
