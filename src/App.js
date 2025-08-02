import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { FeaturedCourses } from './components/FeaturedCourses';
import { CoursesPage } from './pages/CoursesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Testimonials } from './components/testimonial';
import { FAQPage } from './pages/FaqPage';
import { EnrollPage } from './pages/EnroolPage';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <FeaturedCourses />
                <Stats />
                <Testimonials />
              </>
            } 
          />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/enroll" element={<EnrollPage />} />

        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
