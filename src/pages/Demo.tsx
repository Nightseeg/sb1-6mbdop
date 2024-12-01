import React from 'react';
import { motion } from 'framer-motion';
import PhoneCall from '../components/PhoneCall';
import AnimatedBackground from '../components/AnimatedBackground';
import { Bot, Phone, FileSpreadsheet } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: "IA Conversationnelle",
    description: "Notre assistant vocal comprend et répond naturellement"
  },
  {
    icon: Phone,
    title: "Qualité HD",
    description: "Une qualité audio cristalline pour des conversations fluides"
  },
  {
    icon: FileSpreadsheet,
    title: "Rapports Détaillés",
    description: "Analysez chaque appel avec des rapports complets"
  }
];

export default function Demo() {
  return (
    <div className="relative min-h-screen bg-dark-900">
      <AnimatedBackground />
      
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-primary-500/20 px-4 py-2 rounded-full text-primary-400 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-semibold">Démo Interactive</span>
            </motion.div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Essayez notre assistant vocal
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Découvrez la puissance de notre IA en situation réelle
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <PhoneCall />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-white/60">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}