// src/pages/Karyawan.tsx
import { useState } from "react";
import { MdDashboard, MdAccessTime,  MdOutlineAccessTimeFilled  ,  MdRequestPage,  } from "react-icons/md";
import { FaUser, FaUsers, } from "react-icons/fa6";
import { Bell } from "lucide-react";
import { Link } from "react-router-dom";

interface Employee {
  name: string;
  role: string;
}

const employees: Employee[] = [
  { name: "Thomas Seisei", role: "Senior Admin Support" },
  { name: "Verry Irawan", role: "Senior FullStack Developer" },
  { name: "Irvan Gunawan", role: "Senior FullStack Developer" },
  { name: "Salsabila", role: "Senior UI/UX Designer" },
  { name: "Astrid Faradilla", role: "Staff Admin Support" },
  { name: "Radian Rasyid", role: "Staff Admin Support" },
  { name: "Sheila Zahra", role: "Staff Admin Support" },
  { name: "Sava Alya Andini", role: "Staff Admin Support" },
  { name: "Tiara Bisrina", role: "Staff Admin Support" },
  { name: "Amanda", role: "Staff Admin Support" },
  { name: "Disha Syadiva", role: "Staff Admin Support" },
  { name: "Winner Chicken", role: "Staff Admin Support" },
];

export default function Karyawan() {
  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-white font-sans">
      {/* Sidebar */}
      <aside className="w-70 bg-white shadow-md flex flex-col mt-5">
        <div className="px-6 py-6">
          <div className="flex items-center gap-2">
      {/* Logo gambar di kiri */}

      {/* Teks di kanan */}
      
         <div className="w-full h-full ">
            <img src="/img/image 2.png" alt="Logo"  />
        
        
         </div>
         {/* Registered Public Accountants */}
        
        </div>
        </div>
        <nav className="flex-1 px-5 py-12 space-y-8 text-md font-bold font-sans">
                  <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-blue-600 font-semibold">
                    <MdDashboard className="text-lg" /> Dashboard
                  </Link>
                  <Link to='/karyawan' className="flex items-center gap-2 text-blue-600 ">
                    <FaUsers className="text-lg" />  Karyawan
                  </Link>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-blue-600">
                    <MdAccessTime className="text-lg" /> Time Report
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-blue-600">
                    <MdOutlineAccessTimeFilled className="text-lg" /> Absensi
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-blue-600">
                    <MdRequestPage className="text-lg" /> Proposal Advance
                  </a>
                </nav>
              </aside>

              <div className="flex-1 p-6 overflow-y-auto">

              <header className="flex justify-end bg-white px-6  ">
                        
                        <div className="flex gap-4">
                          <button className="relative bg-gray-200 rounded-lg py-3 px-3">
                            <span className="absolute ml-2 -mt-2 bg-red-500 text-red-500 text-xs rounded-full w-2 h-2">.</span>
                            <Bell className="w-5 h-5 text-gray-600 " />
                          </button>
                          <button className="rounded-full bg-gray-200 py-3 px-3">
                            <FaUser className="relative text-blue-600  w-5 h-5" />
                            
                          </button>
                          <div className="font-medium cursor-pointer mt-2">Kathy Murphy ▾</div>
                        </div>
                      </header>
              
        
       
       

        {/* Title */}
        <div className=" mt-5 bg-gray-200 pl-10  ">
          <div>
        <h1 className="text-xl font-semibold mb-4  pt-9 ">Karyawan</h1>

        {/* Search & Filter */}
        <div className="flex items-center gap-4 mb-6 ">
          <input
            type="text"
            
            placeholder="Cari nama karyawan"
            className="w-100 px-4 py-2 bg-white rounded-lg outline-none  focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}

          />
          
          
          <select className="rounded-lg px-4 py-2 ml-200 bg-white ring-2 ring-blue-500  focus:ring-blue-600 ">
            <option>Departement</option>
          </select>
          <select className="rounded-lg px-4 py-2  bg-white ring-2 ring-blue-500  focus:ring-blue-600 ">
            <option>Job Level</option>
          </select>
          
        </div>

        {/* Employee Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredEmployees.map((emp, idx) => (
            <div
              key={idx}
              className="bg-white w-70 h-45 rounded-xl p-6 flex flex-col items-center shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center mt-4 justify-center mb-4">
                <span className="text-blue-600 text-2xl"><FaUser/></span>
              </div>
              <h2 className="font-medium">{emp.name}</h2>
              <p className="text-sm text-gray-500">{emp.role}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 text-gray-500 text-sm">
          Showing 1 to {filteredEmployees.length} of {employees.length} entries
        </div>

        {/* Pagination */}
        <div className="flex justify-end mt-4 space-x-2">
          <button className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100">
            {"<"}
          </button>
          <button className="w-8 h-8 flex items-center justify-center border rounded-full bg-blue-600 text-white">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100">
            {">"}
          </button>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
