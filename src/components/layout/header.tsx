import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

function Header() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const logout = useAuthStore((state) => state.logout);

    // close dropdown saat klik di luar
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        logout();              // Zustand logout
        navigate("/login");    // redirect ke login
    };

    return (
        <div className="w-full bg-white shadow-sm">
            <header className="py-3 px-6">
                <div className="flex justify-end gap-4 relative" ref={dropdownRef}>

                    {/* Avatar */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="rounded-full bg-[#1176BC1A] w-[40px] h-[40px] cursor-pointer flex items-center justify-center"
                    >
                        <img src="/img/user (1) 1.png" alt="user" width={20} height={20} />
                    </button>

                    {/* Nama */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="font-medium cursor-pointer"
                    >
                        Kathy Murphy
                    </button>

                    {/* Dropdown */}
                    {open && (
                        <div className="absolute right-0 top-14 w-40 bg-white rounded-lg shadow-md">
                            <button
                                onClick={handleLogout}
                                className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 rounded-lg cursor-pointer"
                            >
                                Logout
                            </button>
                        </div>
                    )}

                </div>
            </header>
        </div>
    );
}

export default Header;
