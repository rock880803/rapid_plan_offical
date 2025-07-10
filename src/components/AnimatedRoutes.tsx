import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from '../pages/HomePage';
import RapidPlanPortfolioPage from '../pages/RapidPlanPortfolioPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import ServicesPage from '../pages/ServicesPage';
import AboutPage from '../pages/AboutPage';
import BrandingPage from '../pages/BrandingPage';
import DevelopmentPage from '../pages/DevelopmentPage';
import GraphicPage from '../pages/GraphicPage';
import PageTransition from './PageTransition';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          } 
        />
        <Route 
          path="/portfolio" 
          element={
            <PageTransition>
              <RapidPlanPortfolioPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/portfolio/project/:id" 
          element={
            <PageTransition>
              <ProjectDetailPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/services" 
          element={
            <PageTransition>
              <ServicesPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/about" 
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;