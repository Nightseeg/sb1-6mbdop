import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';
import { vapiService } from '../services/vapiService';

export default function PhoneCall() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isCallRequested, setIsCallRequested] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsCallRequested(true);

    try {
      const response = await vapiService.initiateCall(phoneNumber);
      
      if (response.success) {
        setTimeout(() => {
          setIsCallRequested(false);
          setPhoneNumber('');
        }, 3000);
      } else {
        setError(response.error || 'Une erreur est survenue');
        setIsCallRequested(false);
      }
    } catch (err) {
      setError('Une erreur est survenue lors de l\'appel');
      setIsCallRequested(false);
    }
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 5) return `${numbers.slice(0, 2)} ${numbers.slice(2)}`;
    if (numbers.length <= 8) return `${numbers.slice(0, 2)} ${numbers.slice(2, 5)} ${numbers.slice(5)}`;
    return `${numbers.slice(0, 2)} ${numbers.slice(2, 5)} ${numbers.slice(5, 8)} ${numbers.slice(8, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const formatted = formatPhoneNumber(e.target.value);
    if (formatted.replace(/\s/g, '').length <= 10) {
      setPhoneNumber(formatted);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mt-8 border border-gray-100">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Tester notre service</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Votre numéro de téléphone
          </label>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="06 12 34 56 78"
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#1a237e] focus:border-[#1a237e] transition-colors ${
                error ? 'border-red-500' : 'border-gray-200'
              }`}
              disabled={isCallRequested}
            />
            {phoneNumber && (
              <button
                type="button"
                onClick={() => setPhoneNumber('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-600">{error}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={phoneNumber.length < 14 || isCallRequested}
          className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-xl text-white transition-all ${
            isCallRequested
              ? 'bg-green-500 cursor-not-allowed'
              : phoneNumber.length < 14
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-[#1a237e] hover:bg-[#0d47a1]'
          }`}
        >
          <Phone className="w-5 h-5" />
          <span className="font-medium">
            {isCallRequested ? 'Appel en cours...' : 'Recevoir un appel de démonstration'}
          </span>
        </button>
      </form>
    </div>
  );
}