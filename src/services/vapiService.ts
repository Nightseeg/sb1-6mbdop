import axios from 'axios';
import { config } from '@/config';
import type { CallResponse, CallStatusResponse } from '@/lib/types/api';

export const vapiService = {
  initiateCall: async (phoneNumber: string): Promise<CallResponse> => {
    try {
      const formattedNumber = phoneNumber.replace(/\s/g, '');
      const fullNumber = formattedNumber.startsWith('+33') ? 
        formattedNumber : 
        `+33${formattedNumber.startsWith('0') ? formattedNumber.slice(1) : formattedNumber}`;

      const response = await axios.post(`${config.VAPI_API_URL}/conversation`, {
        phone_number: fullNumber,
        assistant_id: 'demo-assistant',
        language: 'fr-FR',
        first_message: "Bonjour, je suis l'assistant vocal IA-26. Je vous appelle pour une démonstration de nos services."
      }, {
        headers: {
          'Authorization': `Bearer ${config.VAPI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.data && response.data.conversation_id) {
        return {
          success: true,
          callId: response.data.conversation_id
        };
      }

      return {
        success: false,
        error: 'Erreur lors de l\'initialisation de l\'appel'
      };
    } catch (error: any) {
      console.error('VAPI call error:', error.response?.data || error.message);
      return {
        success: false,
        error: 'Impossible d\'initier l\'appel. Veuillez réessayer.'
      };
    }
  },

  getCallStatus: async (callId: string): Promise<CallStatusResponse> => {
    try {
      const response = await axios.get(`${config.VAPI_API_URL}/conversation/${callId}`, {
        headers: {
          'Authorization': `Bearer ${config.VAPI_API_KEY}`
        }
      });

      return {
        status: response.data.status,
        duration: response.data.duration
      };
    } catch (error) {
      console.error('Error getting call status:', error);
      throw error;
    }
  }
};