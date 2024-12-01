import { motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '@/pages/Home';
import Solutions from '@/pages/Solutions';
import Pricing from '@/pages/Pricing';
import FAQ from '@/pages/FAQ';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import ProtectedRoute from '@/components/ProtectedRoute';
import AnimatedBackground from '@/components/AnimatedBackground';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

export default function PageLayout() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <motion.div
        key={location.pathname}
        className="relative z-10"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </motion.div>
    </div>
  );
}