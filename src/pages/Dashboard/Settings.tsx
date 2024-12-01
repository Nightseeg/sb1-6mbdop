import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Bell, Save } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuthStore } from '@/store/authStore';

export default function Settings() {
  const { user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <DashboardLayout>
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Paramètres</h1>
          <p className="text-white/60">Gérez vos préférences et informations personnelles</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Settings */}
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-xl font-bold text-white mb-6">Profil</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Nom complet
                  </label>
                  <Input
                    icon={User}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    icon={Mail}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <Button type="submit" isLoading={isLoading}>
                  <Save className="w-4 h-4 mr-2" />
                  Sauvegarder les modifications
                </Button>
              </form>
            </Card>

            {/* Security Settings */}
            <Card className="mt-8">
              <h2 className="text-xl font-bold text-white mb-6">Sécurité</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Mot de passe actuel
                  </label>
                  <Input
                    type="password"
                    icon={Lock}
                    value={formData.currentPassword}
                    onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Nouveau mot de passe
                  </label>
                  <Input
                    type="password"
                    icon={Lock}
                    value={formData.newPassword}
                    onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Confirmer le mot de passe
                  </label>
                  <Input
                    type="password"
                    icon={Lock}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  />
                </div>

                <Button variant="secondary">
                  Modifier le mot de passe
                </Button>
              </form>
            </Card>
          </div>

          {/* Notifications Settings */}
          <div>
            <Card>
              <div className="flex items-center space-x-3 mb-6">
                <Bell className="w-6 h-6 text-primary-400" />
                <h2 className="text-xl font-bold text-white">Notifications</h2>
              </div>

              <div className="space-y-4">
                {[
                  'Appels manqués',
                  'Nouveaux messages',
                  'Rapports hebdomadaires',
                  'Mises à jour système'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl"
                  >
                    <span className="text-white">{item}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-400"></div>
                    </label>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </DashboardLayout>
  );
}