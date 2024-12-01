import React, { useState } from 'react';
import { Mic, MicOff, Bot, Waves } from 'lucide-react';
import PhoneCall from './PhoneCall';

export default function VoiceAssistant() {
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'assistant', text: "Bonjour! Je suis votre assistant vocal intelligent. Comment puis-je vous aider?" }
  ]);

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTimeout(() => {
        setMessages(prev => [...prev, 
          { type: 'user', text: "Quel temps fait-il aujourd'hui?" },
          { type: 'assistant', text: "D'après mes données, il fait beau aujourd'hui avec une température de 22°C." }
        ]);
        setIsListening(false);
      }, 2000);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-6 bg-gradient-to-r from-[#2D3436] to-black">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bot className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Assistant Vocal</h2>
            </div>
            {isListening && <Waves className="w-6 h-6 text-white animate-pulse" />}
          </div>
        </div>

        <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                message.type === 'user' 
                  ? 'bg-black text-white rounded-br-none' 
                  : 'bg-white shadow-md rounded-bl-none border border-gray-100'
              }`}>
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-100 bg-white">
          <button
            onClick={toggleListening}
            className={`w-full flex items-center justify-center space-x-2 p-4 rounded-xl text-white transition-all ${
              isListening 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-black hover:bg-gray-900'
            }`}
          >
            {isListening ? (
              <>
                <MicOff className="w-6 h-6" />
                <span>Arrêter l'écoute</span>
              </>
            ) : (
              <>
                <Mic className="w-6 h-6" />
                <span>Commencer à parler</span>
              </>
            )}
          </button>
        </div>
      </div>
      
      <PhoneCall />
    </div>
  );
}