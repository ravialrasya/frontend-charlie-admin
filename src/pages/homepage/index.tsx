import React from "react";
import { Eye, Building2, Clock, FilePlus } from "lucide-react";
import Sidebar from "../../components/layout/sidebar";
import Header from "../../components/layout/header";

const HomePage: React.FC = () => {
  return (
    <div className="flex bg-[#F6F6F8] font-sans">
      <Sidebar />

      <div className="w-full">
        <Header />

        {/* Stats Cards */}
        <div className="p-10 ">
          <div className="bg-gray-100">
            <h1 className="text-xl font-semibold ">Dashboard</h1>
            <p className="text-sm text-gray-500">17 September 2024</p>
          </div>
          <div className="grid grid-cols-4 gap-8 p-6">
            <div className="bg-white shadow rounded-2xl p-4 h-[15vh] flex flex-cols items-center justify-between">

              <div>
                <p className=" text-gray-600 mb-1  ">Total Absensi <br />(Office)</p>
                <p className="text-2xl font-bold">20</p>
              </div>
              <div><Building2 className="w-6 h-6 text-blue-600" /></div>
            </div>
            <div className="bg-white shadow rounded-2xl p-4 flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-600">Total Absensi<br />(Dinas)</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <Building2 className="w-6 h-6 text-blue-600" />

            </div>
            <div className="bg-white shadow rounded-2xl p-4 flex  items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Time Report</p>
                <p className="text-2xl font-bold">15</p>
              </div>
              <Clock className="w-6 h-6 text-blue-600 " />
            </div>
            <div className="bg-white shadow rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Proposal Advance</p>
                <p className="text-2xl font-bold">5</p>
              </div>
              <FilePlus className="w-6 h-6 text-blue-600 " />
            </div>
          </div>

          {/* Absensi Table */}
          <div className="px-6">
            <div className="bg-white shadow rounded-2xl p-4 mb-6 overflow-x-auto">
              <h2 className="text-lg font-semibold mb-4">Absensi</h2>
              <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="px-4 py-2">ID Karyawan</th>
                    <th className="px-4 py-2">Nama Karyawan</th>
                    <th className="px-4 py-2">Tanggal</th>
                    <th className="px-4 py-2">Kategori</th>
                    <th className="px-4 py-2">Clock In</th>
                    <th className="px-4 py-2">Clock Out</th>

                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, i) => (
                    <tr key={i} className="">
                      <td className="px-4 py-2">B013</td>
                      <td className="px-4 py-2">Sava Alya Andini</td>
                      <td className="px-4 py-2">17/09/2024</td>
                      <td className="px-4 py-2">Office</td>
                      <td className="px-4 py-2 text-blue-600 font-medium">08:00</td>
                      <td className="px-4 py-2 text-red-600 font-medium">16:00</td>
                      <td className="px-4 py-2"><Eye className="w-4 h-4 text-blue-600" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Time Report */}
            <div className="bg-white shadow rounded-2xl p-4 mb-6 overflow-x-auto">
              <h2 className="text-lg font-semibold mb-4">Time Report</h2>
              <table className="min-w-full text-sm text-left ">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="px-4 py-2">ID Karyawan</th>
                    <th className="px-4 py-2">Nama Karyawan</th>
                    <th className="px-4 py-2">Tanggal</th>
                    <th className="px-4 py-2">Clock In</th>
                    <th className="px-4 py-2">Clock Out</th>
                    <th className="px-4 py-2">Total Jam Kerja</th>

                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, i) => (
                    <tr key={i} className="">
                      <td className="px-4 py-2">B013</td>
                      <td className="px-4 py-2">Sava Alya Andini</td>
                      <td className="px-4 py-2">17/09/2024</td>
                      <td className="px-4 py-2 text-blue-600 font-medium">08:00</td>
                      <td className="px-4 py-2 text-red-600 font-medium">16:00</td>
                      <td className="px-4 py-2">8 Jam</td>
                      <td className="px-4 py-2"><Eye className="w-4 h-4 text-blue-600" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Proposal Advance */}
            <div className="bg-white shadow rounded-2xl p-4 overflow-x-auto">
              <h2 className="text-lg font-semibold mb-4">Request Proposal Advance</h2>
              <table className="min-w-full text-sm text-left ">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="px-4 py-2">ID Karyawan</th>
                    <th className="px-4 py-2">Nama Karyawan</th>
                    <th className="px-4 py-2">Tanggal Permintaan</th>
                    <th className="px-4 py-2">Jumlah</th>

                  </tr>
                </thead>
                <tbody>
                  {[...Array(3)].map((_, i) => (
                    <tr key={i} className="">
                      <td className="px-4 py-2">B013</td>
                      <td className="px-4 py-2">Sava Alya Andini</td>
                      <td className="px-4 py-2">17/09/2024 13:40</td>
                      <td className="px-4 py-2">Rp 200,000</td>
                      <td className="px-4 py-2 flex gap-2">
                        <Eye className="w-4 h-4 text-blue-600 mt-1 mr-10" />
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 text-white text-sm">✓</button>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-red-500 text-white text-sm">✕</button>


                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
