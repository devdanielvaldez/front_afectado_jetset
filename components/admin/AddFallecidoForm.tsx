import React, { useState } from 'react';
import { UserMinusIcon } from '@heroicons/react/24/outline';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { registerFallecido } from '@/lib/api';
import { toast } from 'react-hot-toast';

const AddFallecidoForm: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación simple
    if (!nombre.trim()) {
      setError('El nombre es obligatorio');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await registerFallecido(nombre);
      
      if (response.success) {
        toast.success(response.message);
        setNombre('');
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.error('Error registering fallecido:', err);
      toast.error('Error al registrar. Inténtelo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <UserMinusIcon className="h-5 w-5 text-red-500" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">
              Registre aquí los fallecidos confirmados. Por favor verifique la información antes de registrar.
            </p>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Nombre completo del fallecido"
          placeholder="Ej: Juan Carlos Pérez Rodríguez"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
            setError('');
          }}
          error={error}
          required
        />
        
        <div className="flex justify-end mt-6">
          <Button
            type="submit"
            isLoading={isLoading}
            leftIcon={<UserMinusIcon className="h-5 w-5" />}
          >
            Registrar Fallecido
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddFallecidoForm;
