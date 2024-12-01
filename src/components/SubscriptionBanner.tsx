import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import { useSubscriptionStore } from '@/store/subscriptionStore';

export default function SubscriptionBanner() {
  const { plan, isTrialActive, trialEndsAt } = useSubscriptionStore();

  if (plan === 'pro' || plan === 'enterprise') return null;

  const daysLeft = trialEndsAt
    ? Math.max(0, Math.ceil((new Date(trialEndsAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-primary-400/20 to-primary-500/20 backdrop-blur-sm border-b border-primary-400/20 mb-8"
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary-400/20 rounded-lg">
              <Star className="w-5 h-5 text-primary-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                {isTrialActive ? 'Période d\'essai' : 'Version limitée'}
              </h3>
              <p className="text-sm text-white/60">
                {isTrialActive
                  ? `${daysLeft} jours restants`
                  : 'Débloquez toutes les fonctionnalités'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/dashboard/subscription">
              <Button variant="primary">
                {isTrialActive ? 'Passer à Pro' : 'Voir les offres'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            {!isTrialActive && (
              <Link to="/preview">
                <Button variant="secondary">
                  Essai gratuit
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}