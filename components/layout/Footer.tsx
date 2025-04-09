import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Jetset Info: Fallecidos y Rescatados - Sistema de Información de Víctimas</p>
          <p className="mt-1">Este sistema proporciona información sobre las víctimas de la tragedia de la discoteca Jet Set.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
