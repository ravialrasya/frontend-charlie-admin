import React from "react";
import Sidebar from "../../components/layout/sidebar";
import Header from "../../components/layout/header";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="flex bg-[#F6F6F8] font-sans">
      <Sidebar />

      <div className="w-full">
        <Header />

        {/* Stats Cards */}
        <div className="p-10 bg-gray-100 ">
          <div className="  w-full h-full">
            <div className="ml-6">
              <h1 className="text-xl font-semibold ">Dashboard</h1>
              <p className="text-sm text-gray-500">17 September 2024</p>
            </div>
            <div className="grid grid-cols-4 gap-8 p-6 cursor-pointer">
              <div className="bg-white shadow rounded-2xl p-4 flex items-center justify-between h-28">

                <div>
                  <p className=" text-[#928FA6] text-[16px] mb-1  ">Total Absensi <br />(Office)</p>
                  <p className="text-[16px] text-[#000000] font-bold">20</p>
                </div>
                <img src="/img/Vector.png" alt="" width={30} height={28.12} />
              </div>
              <div className="bg-white shadow rounded-2xl p-4 flex items-center justify-between h-28">

                <div>
                  <p className="text-[#928FA6] text-[16px]">Total Absensi<br />(Dinas)</p>
                  <p className="text-[16px] text-[#000000] font-bold">3</p>
                </div>
                <img src="/img/Vector (11).png" alt="" width={22.5} height={20} />

              </div>
              <div className="bg-white shadow rounded-2xl p-4 flex items-center justify-between h-28">
                <div>
                  <p className="text-[#928FA6] text-[16px]">Total Time Report</p>
                  <p className="text-[16px] text-[#000000] font-bold">15</p>
                </div>
                <img src="/img/Vector (10).png" alt="" width={20} height={25} />
              </div>
              <div className="bg-white shadow rounded-2xl p-4 flex items-center justify-between h-28">
                <div>
                  <p className="text-[#928FA6] text-[16px]">Total Proposal Advance</p>
                  <p className="text-[16px] text-[#000000] font-bold">5</p>
                </div>
                <img src="/img/Vector (9).png" alt="" width={22.5} height={25} />
              </div>
            </div>

            {/* Absensi Table */}
            <div className="px-6 ">
                <h2 className="text-[16px] font-semibold mb-4">Absensi</h2>
              <div className="bg-white shadow rounded-2xl p-4 mb-6 overflow-x-auto">
                <table className="min-w-full min-h-[300px] text-[14px] text-left text-[#2F2F2F]">
                  <thead className="bg-[#ffffff] text-[#2F2F2F]">
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
                      <tr key={i}
                      className={i % 2 === 0 ? "bg-[#F8FAFD]" : "bg-[#FFFFFF]"}>
                        <td className="px-4 py-2 font-medium">B013</td>
                        <td className="px-4 py-2 font-medium">Sava Alya Andini</td>
                        <td className="px-4 py-2">17/09/2024</td>
                        <td className="px-4 py-2 font-medium">Office</td>
                        <td className="px-4 py-2 text-[#0E64D1] font-bold">08:00</td>
                        <td className="px-4 py-2 text-[#F86358] font-bold">16:00</td>
                        <Link to='/'>
                          <td className="px-4 py-2"><img src="/img/mdi_eye.png" alt="" /></td>
                        </Link>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Time Report */}
                <h2 className="text-[16px] font-semibold mb-4">Time Report</h2>
              <div className="bg-white shadow rounded-2xl p-4 mb-6 overflow-x-auto">
                <table className="min-w-full min-h-[300px] text-[14px] text-left text-[#2F2F2F] ">
                  <thead className="bg-[#ffffff] text-[#2F2F2F]">
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
                      <tr key={i}
                      className={i % 2 === 0 ? "bg-[#F8FAFD]" : "bg-[#FFFFFF]"}>
                        <td className="px-4 py-2 font-medium">B013</td>
                        <td className="px-4 py-2 font-medium">Sava Alya Andini</td>
                        <td className="px-4 py-2">17/09/2024</td>
                        <td className="px-4 py-2 text-[#0E64D1] font-bold">08:00</td>
                        <td className="px-4 py-2 text-[#F86358] font-bold">16:00</td>
                        <td className="px-4 py-2 font-medium">8 Jam</td>
                        <Link to='/'>
                          <td className="px-4 py-2"><img src="/img/mdi_eye.png" alt="" /></td>
                        </Link>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Proposal Advance */}
                <h2 className="text-[16px] font-semibold mb-4">Request Proposal Advance</h2>
              <div className="bg-white shadow rounded-2xl p-4 overflow-x-auto">
                <table className="min-w-full min-h-[92px] text-[14px] text-left text-[#2F2F2F] ">
                  <thead className="bg-[#ffffff] text-[#2F2F2F]">
                    <tr>
                      <th className="px-4 py-2">ID Karyawan</th>
                      <th className="px-4 py-2">Nama Karyawan</th>
                      <th className="px-4 py-2">Tanggal Permintaan</th>
                      <th className="px-4 py-2">Jumlah</th>

                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(3)].map((_, i) => (
                      <tr key={i}
                      className={i % 2 === 0 ? "bg-[#F8FAFD]" : "bg-[#FFFFFF]"}>
                        <td className="px-4 py-2 font-medium">B013</td>
                        <td className="px-4 py-2 font-medium">Sava Alya Andini</td>
                        <td className="px-4 py-2">17/09/2024 13:40</td>
                        <td className="px-4 py-2 font-medium">Rp 200,000</td>
                        <td className="px-4 py-2 flex gap-2">
                          <img src="/img/mdi_eye.png" alt="" className="mr-5" />
                          <button className=""><img src="/img/Button.png" alt="" /></button>


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
    </div>
  );
};

export default HomePage;
