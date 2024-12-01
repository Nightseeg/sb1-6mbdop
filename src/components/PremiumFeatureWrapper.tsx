import React from 'react';
import { motion } from 'framer-motion';
import { useAuthStore } from '../store/authStore';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';

interface PremiumFeatureWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function PremiumFeatureWrapper({
  children,
  title,
  description
}: PremiumFeatureWrapperProps) {
  const { user } = useAuthStore();

  if (user?.isPremium) {
    return <>{children}</>;
  }

  return (
    <motion.div
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-dark-800/50 backdrop-blur-sm rounded-2xl" />
      
      <Link to="/pricing" className="block">
        <div className="relative p-8 rounded-2xl border border-white/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center p-8"
            >
              <div className="w-16 h-16 bg-primary-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
              <p className="text-white/60 mb-6">{description}</p>
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-primary-400 text-dark-800 font-semibold hover:bg-primary-300 transition-colors">
                Débloquer cette fonctionnalité
              </span>
            </motion.div>
          </div>
          
          <div className="opacity-20 pointer-events-none">
            {children}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}