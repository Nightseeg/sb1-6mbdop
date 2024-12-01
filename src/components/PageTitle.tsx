import { motion } from 'framer-motion';

interface PageTitleProps {
  title: string;
  description?: string;
}

export default function PageTitle({ title, description }: PageTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mb-8"
    >
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      {description && (
        <p className="text-white/60">{description}</p>
      )}
    </motion.div>
  );
}