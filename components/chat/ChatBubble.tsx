import React from 'react';

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isUser, timestamp }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[85%] md:max-w-[70%] rounded-2xl px-4 py-3 ${
        isUser 
          ? 'bg-primary-600 text-white rounded-tr-none'
          : 'bg-gray-100 text-gray-800 rounded-tl-none'
      } shadow-sm`}>
        <p className="text-sm whitespace-pre-wrap">{message}</p>
        {timestamp && (
          <div className={`text-xs mt-1 ${isUser ? 'text-primary-100' : 'text-gray-500'} text-right`}>
            {timestamp}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;
