// src/pages/TimeReportPage.tsx
import React, { useState } from "react";
import Sidebar from "../../components/layout/sidebar";
import Header from "../../components/layout/header";
import { FaEye, FaChevronLeft, FaChevronRight, FaSort } from "react-icons/fa";

interface ReportData {
  id: string;
  name: string;
  tanggal: string;
  clockIn: string;
  clockOut: string;
  totalJam: string;
}

const TimeReportPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");

  const reports: ReportData[] = Array(9).fill({
    id: "B013",
    name: "Sava Alya Andini",
    tanggal: "17/09/2024",
    clockIn: "08:00",
    clockOut: "16:00",
    totalJam: "8 Jam",
  });

  const filtered = reports.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex bg-[#F6F6F8] font-sans min-h-screen">
      <Sidebar />

      <div className="w-full">
        <Header />

        {/* ISI CONTENT */}
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Time Report</h2>

          {/* Search & Date */}
          <div className="flex justify-between mb-4 gap-4">
            <input
              type="text"
              placeholder="Cari nama karyawan"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-md px-3 py-2 w-1/3 text-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto overflow-y-hidden bg-white rounded-md shadow">
            <table className="w-full min-w-[800px] text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-2">
                    <div className="flex items-center gap-1">
                      ID Karyawan <FaSort className="text-gray-400" />
                    </div>
                  </th>
                  <th className="px-4 py-2">
                    <div className="flex items-center gap-1">
                      Nama Karyawan <FaSort className="text-gray-400" />
                    </div>
                  </th>
                  <th className="px-4 py-2">
                    <div className="flex items-center gap-1">
                      Tanggal <FaSort className="text-gray-400" />
                    </div>
                  </th>
                  <th className="px-4 py-2">
                    <div className="flex items-center gap-1">
                      Clock In <FaSort className="text-gray-400" />
                    </div>
                  </th>
                  <th className="px-4 py-2">
                    <div className="flex items-center gap-1">
                      Clock Out <FaSort className="text-gray-400" />
                    </div>
                  </th>
                  <th className="px-4 py-2">
                    <div className="flex items-center gap-1">
                      Total Jam Kerja <FaSort className="text-gray-400" />
                    </div>
                  </th>
                  <th className="px-4 py-2 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-2">{r.id}</td>
                    <td className="px-4 py-2">{r.name}</td>
                    <td className="px-4 py-2">{r.tanggal}</td>
                    <td className="px-4 py-2 text-blue-600 font-medium">
                      {r.clockIn}
                    </td>
                    <td className="px-4 py-2 text-red-500 font-medium">
                      {r.clockOut}
                    </td>
                    <td className="px-4 py-2">{r.totalJam}</td>
                    <td className="px-4 py-2 text-center">
                      <button className="text-blue-600 hover:text-blue-800">
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
            <p>
              Showing 1 to {filtered.length} of {filtered.length} entries
            </p>
            <div className="flex items-center gap-2">
              <button className="border rounded-md p-1 hover:bg-gray-100">
                <FaChevronLeft size={14} />
              </button>
              <span className="px-2 py-1 border rounded-md bg-blue-600 text-white">
                1
              </span>
              <button className="border rounded-md p-1 hover:bg-gray-100">
                <FaChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeReportPage;
