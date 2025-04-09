import React, { useState } from 'react';
import { UserPlusIcon } from '@heroicons/react/24/outline';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { registerPaciente } from '@/lib/api';
import { toast } from 'react-hot-toast';

const AddPacienteForm: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [hospital, setHospital] = useState('');
  const [edad, setEdad] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    nombre: '',
    hospital: '',
    edad: ''
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      nombre: '',
      hospital: '',
      edad: ''
    };

    if (!nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
      valid = false;
    }

    if (!hospital.trim()) {
      newErrors.hospital = 'El hospital es obligatorio';
      valid = false;
    }

    if (edad && (isNaN(Number(edad)) || Number(edad) < 0 || Number(edad) > 120)) {
      newErrors.edad = 'La edad debe ser un número entre 0 y 120';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const edadNum = edad ? parseInt(edad) : undefined;
      const response = await registerPaciente(nombre, hospital, edadNum);
      
      if (response.success) {
        toast.success(response.message);
        // Limpiar el formulario
        setNombre('');
        setHospital('');
        setEdad('');
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.error('Error registering paciente:', err);
      toast.error('Error al registrar. Inténtelo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const hospitales = [
    'Hospital Darío Contreras',
    'Hospital Marcelino Vélez Santana',
    'Hospital Vinicio Calventi',
    'Hospital Ney Arias Lora',
    'Hospital Moscoso Puello',
    'Hospital Salvador B. Gautier',
    'Otro Centro Médico'
  ];

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <UserPlusIcon className="h-5 w-5 text-green-500" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-green-700">
              Registre aquí los pacientes rescatados con vida. Por favor verifique la información antes de registrar.
            </p>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Nombre completo del paciente"
          placeholder="Ej: María Fernández González"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
            setErrors(prev => ({ ...prev, nombre: '' }));
          }}
          error={errors.nombre}
          required
        />
        
        <div className="space-y-1">
          <label htmlFor="hospital" className="block text-sm font-medium text-gray-700">
            Centro de salud
          </label>
          <select
            id="hospital"
            value={hospital}
            onChange={(e) => {
              setHospital(e.target.value);
              setErrors(prev => ({ ...prev, hospital: '' }));
            }}
            className={`
              block w-full rounded-md shadow-sm
              ${errors.hospital ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'}
              sm:text-sm
            `}
            required
          >
            <option value="">Seleccione un centro de salud</option>
            {hospitales.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
          {errors.hospital && (
            <p className="mt-1 text-sm text-red-600">{errors.hospital}</p>
          )}
        </div>
        
        <Input
          type="number"
          label="Edad (opcional)"
          placeholder="Ej: 45"
          value={edad}
          onChange={(e) => {
            setEdad(e.target.value);
            setErrors(prev => ({ ...prev, edad: '' }));
          }}
          error={errors.edad}
        />
        
        <div className="flex justify-end mt-6">
          <Button
            type="submit"
            variant="secondary"
            isLoading={isLoading}
            leftIcon={<UserPlusIcon className="h-5 w-5" />}
          >
            Registrar Paciente
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddPacienteForm;
