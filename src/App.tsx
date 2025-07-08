import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/Footer';
import BackgroundMusic from './components/BackgroundMusic';
import ScrollToTop from './components/ScrollToTop';
import FloatingChatbot from './components/FloatingChatbot';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 dark:bg-gray-900 transition-colors">
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
          <BackgroundMusic />
          <FloatingChatbot />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;