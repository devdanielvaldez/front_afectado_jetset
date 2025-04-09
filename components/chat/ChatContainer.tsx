import React, { useState, useEffect, useRef } from 'react';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import ChatHeader from './ChatHeader';
import { sendMessage } from '@/lib/api';
import { toast } from 'react-hot-toast';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hola, soy el asistente de información sobre la tragedia de la discoteca Jet Set. ¿En qué puedo ayudarte?',
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    // Add user message to chat
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);
    
    try {
      const response = await sendMessage(text);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.response,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('No se pudo enviar el mensaje. Por favor, intenta de nuevo.');
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Lo siento, ha ocurrido un error al procesar tu mensaje. Por favor, intenta de nuevo.',
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[70vh]">
      <ChatHeader />
      
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {messages.map((msg) => (
          <ChatBubble
            key={msg.id}
            message={msg.text}
            isUser={msg.isUser}
            timestamp={msg.timestamp}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <ChatInput 
        onSendMessage={handleSendMessage} 
        isLoading={isLoading}
      />
    </div>
  );
};

export default ChatContainer;
