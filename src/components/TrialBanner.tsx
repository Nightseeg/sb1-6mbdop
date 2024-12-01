import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { useSubscriptionStore } from '@/store/subscriptionStore';

export default function TrialBanner() {
  const { isTrialActive, trialEndsAt } = useSubscriptionStore();

  if (!isTrialActive || !trialEndsAt) return null;

  const daysLeft = Math.max(0, Math.ceil((new Date(trialEndsAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24)));

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-primary-400/10 rounded-lg p-4 mb-8"
    >
      <div className="flex items-center space-x-3">
        <Clock className="w-5 h-5 text-primary-400" />
        <div>
          <p className="text-sm font-medium text-white">
            Période d'essai en cours
          </p>
          <p className="text-sm text-white/60">
            {daysLeft} jours restants pour profiter de toutes les fonctionnalités
          </p>
        </div>
      </div>
    </motion.div>
  );
}