import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import type { JSX } from "react";

export default function PublicRoute({ children }: { children: JSX.Element }) {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
}
