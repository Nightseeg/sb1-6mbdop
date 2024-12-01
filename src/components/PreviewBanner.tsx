import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PreviewBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-primary-400/20 backdrop-blur-sm border-b border-primary-400/20"
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <p className="text-sm text-white">
            Mode prévisualisation - Accès limité aux fonctionnalités
          </p>
          <Link to="/dashboard/subscription">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-1 bg-primary-400 text-dark-800 rounded-full text-sm font-medium"
            >
              <span>Débloquer toutes les fonctionnalités</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}