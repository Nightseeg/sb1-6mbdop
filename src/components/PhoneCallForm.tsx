import { useState, FormEvent } from 'react';
import { Phone } from 'lucide-react';
import Button from './ui/Button';
import Input from './ui/Input';
import { useVapiCall } from '@/hooks/useVapiCall';

export default function PhoneCallForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const { initiateCall, isLoading, error } = useVapiCall();

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 5) return `${numbers.slice(0, 2)} ${numbers.slice(2)}`;
    if (numbers.length <= 8) return `${numbers.slice(0, 2)} ${numbers.slice(2, 5)} ${numbers.slice(5)}`;
    return `${numbers.slice(0, 2)} ${numbers.slice(2, 5)} ${numbers.slice(5, 8)} ${numbers.slice(8, 10)}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (phoneNumber.replace(/\s/g, '').length === 10) {
      await initiateCall(phoneNumber);
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
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6">
      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium text-white/80">
          Votre numéro de téléphone
        </label>
        <Input
          id="phone"
          type="tel"
          placeholder="06 12 34 56 78"
          value={phoneNumber}
          onChange={handlePhoneChange}
          error={!!error}
          disabled={isLoading}
        />
        {error && (
          <p className="text-sm text-red-400">{error}</p>
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
        {isLoading ? 'Appel en cours...' : 'Recevoir un appel'}
      </Button>
    </form>
  );
}