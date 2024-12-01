import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import Badge from './ui/Badge';

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  features: string[];
  recommended?: boolean;
  onSubscribe: () => void;
}

export default function PricingCard({
  name,
  description,
  price,
  features,
  recommended,
  onSubscribe
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white/5 backdrop-blur-xl rounded-2xl border ${
        recommended ? 'border-primary-400' : 'border-white/10'
      } p-8 relative`}
    >
      {recommended && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
          Recommandé
        </Badge>
      )}

      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-white/60 mb-6">{description}</p>
        <div className="text-4xl font-bold text-white">
          {price}€
          <span className="text-lg text-white/60">/mois</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-white/80">
            <Check className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link to="/register">
        <Button
          variant={recommended ? 'primary' : 'secondary'}
          className="w-full"
          onClick={onSubscribe}
        >
          Commencer
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </motion.div>
  );
}