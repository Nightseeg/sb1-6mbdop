import { motion } from 'framer-motion';
import { ArrowRight, Bot, Phone, Users, Clock, TrendingUp } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuthStore } from '@/store/authStore';

const stats = [
  {
    icon: Phone,
    label: "Appels disponibles",
    value: "50/100",
    info: "Version gratuite"
  },
  {
    icon: Users,
    label: "Contacts actifs",
    value: "25",
    info: "Sur 100 maximum"
  },
  {
    icon: Clock,
    label: "Temps moyen",
    value: "2:30",
    info: "Par appel"
  },
  {
    icon: TrendingUp,
    label: "Taux de succès",
    value: "85%",
    info: "Cette semaine"
  }
];

export default function Dashboard() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout>
      <Container>
        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary-400/20 to-primary-500/20 rounded-2xl p-8 mb-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-white">
                  Bienvenue, {user?.name} !
                </h1>
                <p className="text-lg text-white/60">
                  Découvrez la puissance de l'IA pour vos appels
                </p>
              </div>
              <Button size="lg" glowEffect>
                Passer à Premium
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Quick Tutorial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Bot className="w-6 h-6 text-primary-400" />
                <h2 className="text-xl font-bold text-white">Démarrage rapide</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Configuration",
                  description: "Importez vos contacts et personnalisez votre assistant"
                },
                {
                  step: "2",
                  title: "Test",
                  description: "Effectuez un appel test pour vérifier les paramètres"
                },
                {
                  step: "3",
                  title: "Lancement",
                  description: "Démarrez votre première campagne d'appels"
                }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary-400/20 flex items-center justify-center text-primary-400 font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary-400/20 rounded-xl">
                    <stat.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">{stat.label}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-white/40">{stat.info}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Premium Features */}
        <Card>
          <h3 className="text-lg font-semibold text-white mb-6">Fonctionnalités Premium</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-4">Assistant Vocal Avancé</h4>
              <p className="text-white/60 mb-6">Accédez à toutes les fonctionnalités de notre IA</p>
              <Button variant="secondary">
                En savoir plus
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="p-6 bg-white/5 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-4">Rapports Détaillés</h4>
              <p className="text-white/60 mb-6">Analysez les performances de vos campagnes</p>
              <Button variant="secondary">
                En savoir plus
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </DashboardLayout>
  );
}