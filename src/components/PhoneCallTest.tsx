import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, X } from 'lucide-react';
import Input from './ui/Input';
import Button from './ui/Button';
import { useVapiCall } from '@/hooks/useVapiCall';

export default function PhoneCallTest() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const { initiateCall, isLoading, error } = useVapiCall();

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 5) return `${numbers.slice(0, 2)} ${numbers.slice(2)}`;
    if (numbers.length <= 8) return `${numbers.slice(0, 2)} ${numbers.slice(2, 5)} ${numbers.slice(5)}`;
    return `${numbers.slice(0, 2)} ${numbers.slice(2, 5)} ${numbers.slice(5, 8)} ${numbers.slice(8, 10)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.replace(/\s/g, '').length === 10) {
      const success = await initiateCall(phoneNumber);
      if (success) {
        setPhoneNumber('');
      }
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    if (formatted.replace(/\s/g, '').length <= 10) {
      setPhoneNumber(formatted);
    }
  };

  const isValidNumber = phoneNumber.replace(/\s/g, '').length === 10;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
    >
      <h3 className="text-xl font-bold text-white mb-6">Testez notre assistant vocal</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Votre numéro de téléphone
          </label>
          <div className="relative">
            <Input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="06 12 34 56 78"
              error={!!error}
              disabled={isLoading}
            />
            {phoneNumber && (
              <button
                type="button"
                onClick={() => setPhoneNumber('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-400"
            >
              {error}
            </motion.p>
          )}
        </div>

        <Button
          type="submit"
          disabled={!isValidNumber || isLoading}
          isLoading={isLoading}
          className="w-full"
          size="lg"
        >
          <Phone className="w-5 h-5 mr-2" />
          {isLoading ? 'Appel en cours...' : 'Recevoir un appel de démonstration'}
        </Button>
      </form>
    </motion.div>
  );
}