import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const ChatHeader: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Asistente de Información</h2>
          <p className="text-sm text-primary-100">
            Consulta información sobre víctimas de la tragedia
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
