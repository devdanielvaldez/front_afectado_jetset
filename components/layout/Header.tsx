import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          {/* <span className="bg-primary-600 text-white p-2 rounded-md font-bold text-xl">IS</span> */}
          <div>
            <h1 className="font-bold text-xl text-gray-800">Jetset Info: Fallecidos y Rescatados</h1>
            <p className="text-xs text-gray-500">Asistente de Información</p>
          </div>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-primary-600 font-medium"
          >
            Chat de Consultas
          </Link>
          <Link 
            href="/admin" 
            className="text-gray-600 hover:text-primary-600 font-medium"
          >
            Registrar Rescatados y Fallecidos
          </Link>
        </nav>

        <div className="md:hidden">
          <button className="text-gray-700 hover:bg-gray-100 p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
