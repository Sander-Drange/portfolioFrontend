import axios from 'axios';
import { LoginCredentials, RegisterCredentials, AuthResponse } from '../../types/auth/types';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

export const authApi = {
    login: async (credentials: LoginCredentials): Promise => {
        const response = await axios.post(`${API_URL}/auth/login`, credentials);
        return response.data;
    },

    register: async (credentials: RegisterCredentials): Promise => {
        const response = await axios.post(`${API_URL}/auth/register`, credentials);
        return response.data;
    },

    logout: async (): Promise => {
        // Clear local storage, cookies, etc.
        localStorage.removeItem('token');
    }
};