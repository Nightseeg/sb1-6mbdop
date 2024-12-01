import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

interface PremiumFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  preview?: React.ReactNode;
}

export default function PremiumFeature({
  title,
  description,
  icon,
  preview
}: PremiumFeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
      
      <div className="relative">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-primary-400/20 rounded-xl">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-white/60">{description}</p>
          </div>
        </div>

        {preview && (
          <div className="mt-4 relative">
            <div className="absolute inset-0 bg-dark-900/50 backdrop-blur-sm rounded-xl z-10 flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-primary-400" />
                <span className="text-white/80">Fonctionnalité Premium</span>
              </div>
            </div>
            <div className="blur-sm pointer-events-none">
              {preview}
            </div>
          </div>
        )}

        <Link to="/dashboard/subscription" className="mt-6 block">
          <Button variant="secondary" className="w-full">
            Débloquer cette fonctionnalité
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}