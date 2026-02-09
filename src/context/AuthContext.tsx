import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

type User = {
    id: number;
    name: string;
    email: string;
    roles: string[];
};

type AuthContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
    login: (accessToken: string, refreshToken: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const fetchProfile = (token: string) => {
        axios
            .get("/api/user/profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                console.log("USER PROFILE DATA:", res.data);
                setUser(res.data);
            })
            .catch(() => logout());
    };

    useEffect(() => {
        const token = sessionStorage.getItem("accessToken");
        if (token) {
            fetchProfile(token);
        }
    }, []);

    const login = (accessToken: string, refreshToken: string) => {
        sessionStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        fetchProfile(accessToken);
    };

    const logout = () => {
        sessionStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setUser(null);
        window.location.href = "/";
    };

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext)!;