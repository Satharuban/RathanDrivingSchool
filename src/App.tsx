import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { LessonsPage } from './pages/LessonsPage';
import { IntensivePage } from './pages/IntensivePage';
import { AreasPage } from './pages/AreasPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
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
    </BrowserRouter>
  );
}

export default App;
