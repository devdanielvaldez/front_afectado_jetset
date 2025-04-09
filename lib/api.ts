import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://jet-set.dark-innovations.com';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '1901';

const API = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY,
  }
});

export const sendMessage = async (message: string) => {
  try {
    const response = await API.post('/chat', { message });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

export const registerFallecido = async (nombre: string) => {
  try {
    const response = await API.post('/fallecidos/registrar', { nombre });
    return response.data;
  } catch (error) {
    console.error('Error registering fallecido:', error);
    throw error;
  }
};

export const registerPaciente = async (nombre: string, hospital: string, edad?: number) => {
  try {
    const response = await API.post('/pacientes/registrar', { nombre, hospital, edad });
    return response.data;
  } catch (error) {
    console.error('Error registering paciente:', error);
    throw error;
  }
};

export const getData = async () => {
  try {
    const response = await API.get('/datos');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default API;
