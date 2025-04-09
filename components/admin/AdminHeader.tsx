import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const AdminHeader: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Administración de Datos
        </h1>
        <p className="text-gray-600">
          Registra nuevos fallecidos o rescatados con la información actualizada
        </p>
      </div>

      <Link
        href="/"
        className="flex items-center text-primary-600 hover:text-primary-800 transition-colors"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-1" />
        Volver al chat
      </Link>
    </div>
  );
};

export default AdminHeader;
