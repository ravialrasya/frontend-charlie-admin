import { useState } from "react";

import Sidebar from "../../components/layout/sidebar";
import Header from "../../components/layout/header";
import { Link } from "react-router-dom";

interface Employee {
  id: number;
  name: string;
  role: string;
}

export default function Karyawan() {
  const [search,] = useState("");
  const employees: Employee[] = [
    { id: 1, name: "Thomas Seisei", role: "Senior Admin Support" },
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
    <div className="flex bg-[#F6F6F8] font-sans min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col w-full">
        <Header />

        <div className="p-10 bg-[#F6F6F8] flex-1">
          {/* Title */}


          {/* Employee Cards */}
          <div className="p-10">
            <div className="grid grid-cols-4 gap-8">
              {filteredEmployees.map((emp, idx) => (
                <Link to="/karyawan/detail-karyawan" key={idx}>
                  <div className="bg-white h-60 rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-md transition cursor-pointer">
                    <div className="w-[67px] h-[67px] flex items-center justify-center rounded-full bg-[#1176BC1A] ">
                      <img src="/img/user (1) 1.png" alt="" width={33.5} height={33.5} />
                    </div>
                    <h2 className="font-semibold text-[18px] mb-1 text-center">
                      {emp.name}
                    </h2>
                    <p className="text-[14px] text-gray-500 text-center">
                      {emp.role}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Footer Info */}
            <div className="mt-8 text-gray-500 text-sm">
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
