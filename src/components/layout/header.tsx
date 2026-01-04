import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { ChevronDown, LogOut, User } from "lucide-react";

function Header() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const logout = useAuthStore((state) => state.logout);

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
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <header className="w-full h-16 bg-white border-b border-gray-100">
            <div className="h-full px-6 flex items-center justify-end">
                <div
                    ref={dropdownRef}
                    className="relative flex items-center gap-3"
                >
                    {/* USER BUTTON */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="
              flex items-center gap-3
              px-3 py-2 rounded-full
              hover:bg-gray-100
              transition-all duration-200
            "
                    >
                        <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
                            <img
                                src="/img/user (1) 1.png"
                                alt="user"
                                className="w-4 h-4"
                            />
                        </div>

                        <span className="text-sm font-medium text-gray-700">
                            Kathy Murphy
                        </span>

                        <ChevronDown
                            size={16}
                            className={`transition-transform ${open ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {/* DROPDOWN */}
                    {open && (
                        <div
                            className="
                absolute right-0 top-14 w-48
                bg-white rounded-2xl
                shadow-xl border border-gray-100
                overflow-hidden
                animate-fade-in
              "
                        >
                            <button
                                onClick={() =>
                                    navigate("/karyawan/profile-karyawan")
                                }
                                className="
                  w-full px-4 py-3 text-left
                  flex items-center gap-3
                  text-gray-700 hover:bg-gray-50
                  transition
                "
                            >
                                <User size={16} />
                                Profile
                            </button>

                            <button
                                onClick={handleLogout}
                                className="
                  w-full px-4 py-3 text-left
                  flex items-center gap-3
                  text-red-600 hover:bg-red-50
                  transition
                "
                            >
                                <LogOut size={16} />
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
