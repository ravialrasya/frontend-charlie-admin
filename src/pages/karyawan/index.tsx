import { useState } from "react";
import { FaUser, } from "react-icons/fa6";
import Sidebar from "../../components/layout/sidebar";
import Header from "../../components/layout/header";
import { Link } from "react-router-dom";



interface Employee {
  id: number;
  name: string;
  role: string;
}

export default function Karyawan() {
  const [search, setSearch] = useState("");
  const employees: Employee[] = [
    { id: 1,name: "Thomas Seisei", role: "Senior Admin Support" },
    { id: 2, name: "Verry Irawan", role: "Senior FullStack Developer" },
    { id: 3, name: "Irvan Gunawan", role: "Senior FullStack Developer" },
    { id: 4, name: "Salsabila", role: "Senior UI/UX Designer" },
    { id: 5, name: "Astrid Faradilla", role: "Staff Admin Support" },
    { id: 6, name: "Radian Rasyid", role: "Staff Admin Support" },
    { id: 7, name: "Sheila Zahra", role: "Staff Admin Support" },
    { id: 8, name: "Sava Alya Andini", role: "Staff Admin Support" },
    { id: 9, name: "Tiara Bisrina", role: "Staff Admin Support" },
    { id: 10, name: "Amanda", role: "Staff Admin Support" },
    { id: 11, name: "Disha Syadiva", role: "Staff Admin Support" },
    { id: 12, name: "Winner Chicken", role: "Staff Admin Support" },
  ];

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="flex bg-[#F6F6F8] font-sans">
      {/* Sidebar */}
      <Sidebar />

      <div className="w-full">
        <Header />
        {/* Title */}
        <div className="p-10">
          <h1 className="text-xl font-semibold mb-4">Karyawan</h1>

          {/* Search & Filter */}
          <div className="flex items-center gap-4 mb-6 ">
            <input
              type="text"

              placeholder="Cari nama karyawan"
              className="w-100 px-4 py-2 bg-white rounded-lg outline-none  focus:ring-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}

            />


            <select className="rounded-lg px-4 py-2 ml-200 cursor-pointer bg-white ring-2 ring-blue-500  focus:ring-blue-600 ">
              <option>Departement</option>
            </select>
            <select className="rounded-lg px-4 py-2 cursor-pointer bg-white ring-2 ring-blue-500  focus:ring-blue-600 ">
              <option>Job Level</option>
            </select>

          </div>

          {/* Employee Cards */}
          <div className="grid grid-cols-4 gap-8">
            {filteredEmployees.map((emp, idx) => (
               
              <Link to='/detail-karyawan'>
              <div
                key={idx}
                className="bg-white h-60 rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-md transition cursor-pointer"
              >
                
                  
                <div className="w-18 h-18 bg-blue-100 rounded-full flex items-center justify-center mb-5">
                  <span className="text-blue-600 text-4xl"><FaUser /></span>
                </div>
                <h2 className="font-semibold text-[20px] mb-1">{emp.name}</h2>
                <p className="text-[15px] text-gray-500">{emp.role}</p>
              </div>
              </Link>

              
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
  );
}
