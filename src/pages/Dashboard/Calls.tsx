import { motion } from 'framer-motion';
import { Phone, FileSpreadsheet, Filter } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import DashboardLayout from '@/components/DashboardLayout';

const calls = [
  {
    id: '1',
    phoneNumber: '06 12 34 56 78',
    date: '2024-02-15T10:30:00',
    duration: '2:30',
    status: 'completed',
    result: 'Intéressé'
  },
  {
    id: '2',
    phoneNumber: '07 23 45 67 89',
    date: '2024-02-15T11:15:00',
    duration: '1:45',
    status: 'completed',
    result: 'Rappeler'
  }
];

export default function Calls() {
  return (
    <DashboardLayout>
      <Container>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Appels</h1>
            <p className="text-white/60">Gérez vos appels et consultez l'historique</p>
          </div>
          <Button>
            <Phone className="w-4 h-4 mr-2" />
            Nouvel appel
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-primary-400/20 rounded-xl">
                <Phone className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <p className="text-sm text-white/60">Appels aujourd'hui</p>
                <p className="text-2xl font-bold text-white">12</p>
              </div>
            </div>
          </Card>
          
          <Card>
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-primary-400/20 rounded-xl">
                <FileSpreadsheet className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <p className="text-sm text-white/60">Taux de succès</p>
                <p className="text-2xl font-bold text-white">85%</p>
              </div>
            </div>
          </Card>
        </div>

        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Historique des appels</h2>
            <Button variant="secondary" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filtrer
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white/60">Numéro</th>
                  <th className="text-left py-3 px-4 text-white/60">Date</th>
                  <th className="text-left py-3 px-4 text-white/60">Durée</th>
                  <th className="text-left py-3 px-4 text-white/60">Statut</th>
                  <th className="text-left py-3 px-4 text-white/60">Résultat</th>
                </tr>
              </thead>
              <tbody>
                {calls.map((call) => (
                  <motion.tr
                    key={call.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-b border-white/5 hover:bg-white/5"
                  >
                    <td className="py-3 px-4 text-white">{call.phoneNumber}</td>
                    <td className="py-3 px-4 text-white/60">
                      {new Date(call.date).toLocaleString('fr-FR')}
                    </td>
                    <td className="py-3 px-4 text-white/60">{call.duration}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-400/20 text-green-400">
                        {call.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-white/60">{call.result}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </Container>
    </DashboardLayout>
  );
}