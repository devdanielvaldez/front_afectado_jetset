import React, { useState, FormEvent } from 'react';
import { PaperAirplaneIcon, MicrophoneIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="border-t bg-white p-4 shadow-md"
    >
      <div className="flex items-center space-x-2">
        <div className="flex-grow relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="w-full p-3 pr-12 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            disabled={isLoading}
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          isLoading={isLoading}
          disabled={!message.trim() || isLoading}
          className="rounded-full p-3 h-12 w-12 flex items-center justify-center"
          title="Enviar mensaje"
        >
          <PaperAirplaneIcon className="h-5 w-5 transform rotate-90" />
          <span className="sr-only">Enviar</span>
        </Button>
      </div>
    </form>
  );
};

export default ChatInput;
