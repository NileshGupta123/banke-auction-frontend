// services/authService.ts
import axios from "axios";

const API = "http://localhost:7081/api";

export const login = async (email: string, password: string) => {
    const res = await axios.post(`${API}/auth/login`, { email, password });
    return res.data;
};

export const register = async (name: string, email: string, password: string) => {
    return axios.post(`${API}/auth/register`, { name, email, password });
};

export const refreshToken = async (refreshToken: string) => {
    return axios.post(`${API}/auth/refresh`, { refreshToken });
};