// utils/tokenManager.ts
import { refreshToken } from "../services/auth.service";

export const refreshAccessToken = async () => {
    const refresh = localStorage.getItem("refreshToken");
    if (!refresh) return null;

    const res = await refreshToken(refresh);
    sessionStorage.setItem("accessToken", res.data.accessToken);
    return res.data.accessToken;
};