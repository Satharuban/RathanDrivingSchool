import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { AdminProtectedRoute } from './components/admin/AdminProtectedRoute';
import { AdminAuthProvider } from './context/AdminAuthContext';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { LessonsPage } from './pages/LessonsPage';
import { IntensivePage } from './pages/IntensivePage';
import { AreasPage } from './pages/AreasPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';

function App() {
  return (
    <BrowserRouter>
      <AdminAuthProvider>
        <Routes>
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route
            path="/admin"
            element={
              <AdminProtectedRoute>
                <AdminDashboardPage />
              </AdminProtectedRoute>
            }
          />
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="lessons" element={<LessonsPage />} />
            <Route path="intensive" element={<IntensivePage />} />
            <Route path="areas" element={<AreasPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </AdminAuthProvider>
    </BrowserRouter>
  );
}

export default App;
