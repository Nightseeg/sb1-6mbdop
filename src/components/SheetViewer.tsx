import React from 'react';
import { FileSpreadsheet, Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface Sheet {
  id: string;
  name: string;
  date: string;
  status: 'completed' | 'pending' | 'error';
  url: string;
}

const sheets: Sheet[] = [
  {
    id: '1',
    name: 'Rapport d\'appels - Janvier 2024',
    date: '2024-01-15',
    status: 'completed',
    url: '#'
  },
  {
    id: '2',
    name: 'Statistiques de conversion',
    date: '2024-01-20',
    status: 'pending',
    url: '#'
  }
];

export default function SheetViewer() {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <FileSpreadsheet className="w-8 h-8 text-[#1a237e]" />
          <h3 className="text-2xl font-bold text-gray-900">Mes fichiers</h3>
        </div>
      </div>

      <div className="space-y-4">
        {sheets.map((sheet) => (
          <motion.div
            key={sheet.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-4 border border-gray-100 rounded-xl hover:border-[#1a237e]/20 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900">{sheet.name}</h4>
                <p className="text-sm text-gray-500">
                  Ajouté le {new Date(sheet.date).toLocaleDateString('fr-FR')}
                </p>
              </div>
              <button 
                className="p-2 text-[#1a237e] hover:bg-[#1a237e]/10 rounded-lg transition-colors"
                title="Télécharger"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                sheet.status === 'completed' 
                  ? 'bg-green-100 text-green-800'
                  : sheet.status === 'pending'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {sheet.status === 'completed' ? 'Complété' : sheet.status === 'pending' ? 'En cours' : 'Erreur'}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}