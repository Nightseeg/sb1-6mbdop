import { motion } from 'framer-motion';
import { H1, Lead } from './ui/Typography';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center max-w-3xl mx-auto mb-16 pt-20"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center space-x-2 bg-primary-400/20 px-4 py-2 rounded-full text-primary-400 mb-4"
      >
        <span className="text-sm font-semibold">{title}</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <H1>{title}</H1>
      </motion.div>
      
      {description && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Lead>{description}</Lead>
        </motion.div>
      )}
    </motion.div>
  );
}