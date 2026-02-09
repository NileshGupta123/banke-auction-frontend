import axios from "axios";

const API_BASE = "/api";

// ✅ LOGIN
export const loginUser = async (email: string, password: string) => {
    return axios.post(
        `${API_BASE}/auth/login`,
        { email, password },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};

// ✅ SEND EMAIL OTP
export const sendEmailOtp = async (email: string) => {
    return axios.post(
        `${API_BASE}/auth/send-email-otp`,
        { email },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};

// ✅ VERIFY EMAIL OTP
export const verifyEmailOtp = async (email: string, otp: string) => {
    return axios.post(
        `${API_BASE}/auth/verify-email-otp`,
        { email, otp },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};

// ✅ REGISTER (AFTER OTP VERIFIED)
export const registerUser = async (
    name: string,
    email: string,
    password: string
) => {
    return axios.post(
        `${API_BASE}/auth/register`,
        { name, email, password },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};