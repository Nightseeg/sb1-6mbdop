import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Users, FileSpreadsheet, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Phone,
    label: "Appels réalisés",
    value: "0",
    bgColor: "bg-primary-400/20",
    textColor: "text-primary-400"
  },
  {
    icon: Users,
    label: "Contacts",
    value: "0",
    bgColor: "bg-primary-400/20",
    textColor: "text-primary-400"
  },
  {
    icon: FileSpreadsheet,
    label: "Fichiers importés",
    value: "0",
    bgColor: "bg-primary-400/20",
    textColor: "text-primary-400"
  },
  {
    icon: TrendingUp,
    label: "Taux de réussite",
    value: "0%",
    bgColor: "bg-primary-400/20",
    textColor: "text-primary-400"
  }
];

export default function Statistics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-primary-400/50 transition-all duration-300"
        >
          <div className="flex items-center space-x-4">
            <div className={`p-3 ${stat.bgColor} rounded-xl`}>
              <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
            </div>
            <div>
              <p className="text-sm text-white/60">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}