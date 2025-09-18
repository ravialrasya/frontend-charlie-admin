import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // validasi bisa ditambah di sini
    navigate("/");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side (Image) */}
      <div className="hidden md:flex w-1/2 object-fit-cover h-screen bg-gray-100 items-center justify-center">
        <img
          src="/img/Networking concept still life composition (1).png" // ganti dengan path gambar kamu
          alt="Login illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side (Form) */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2">Log in to your account</h2>
          <p className="text-gray-500 mb-6">
            Enter your email and password to log in
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            {/* Button */}
            <button
              type="submit"
              onClick={() => setShowPassword(!showPassword)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-md mt-4 "
              
            
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
