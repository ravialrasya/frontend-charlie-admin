import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/authStore";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("super@gmail.com");
  const [password, setPassword] = useState("Super1234!");

  const navigate = useNavigate();

  const { login, loading, error, isAuthenticated } = useAuthStore();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    await login({
      email,
      password,
    });
  };

  // redirect jika login sukses
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex">
      {/* Left Side (Image) */}
      <div className="hidden md:flex w-1/2 h-screen bg-gray-100 items-center justify-center">
        <img
          src="/img/Networking concept still life composition (1).png"
          alt="Login illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side (Form) */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2">
            Log in to your account
          </h2>
          <p className="text-gray-500 mb-6">
            Enter your email and password to log in
          </p>

          {error && (
            <p className="text-red-500 text-sm mb-4">
              {error}
            </p>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center"
              >
                <img
                  src={
                    showPassword
                      ? "/img/Vector (25).png" // mata tertutup
                      : "/img/mdi_eye_off_1.png"     // mata terbuka
                  }
                  alt="toggle password"
                   width={showPassword ? 20 : 30}
                  className="opacity-70 hover:opacity-100 cursor-pointer"
                />
              </button>
            </div>


            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-md mt-4 disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
