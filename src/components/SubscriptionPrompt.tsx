import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

interface SubscriptionPromptProps {
  title: string;
  description: string;
  features?: string[];
}

export default function SubscriptionPrompt({
  title,
  description,
  features
}: SubscriptionPromptProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-primary-400/20 to-primary-500/5 rounded-2xl p-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      
      <div className="relative z-10">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-primary-400/20 rounded-xl">
            <Star className="w-6 h-6 text-primary-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-white/60">{description}</p>
          </div>
        </div>

        {features && features.length > 0 && (
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3 text-white/80">
                <Star className="w-4 h-4 text-primary-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <Link to="/dashboard/subscription">
          <Button size="lg">
            Passer à Premium
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}