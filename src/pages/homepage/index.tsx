// Updated HomePage with old tables removed and replaced by the provided images

import React from "react";
import Sidebar from "../../components/layout/sidebar";
import Header from "../../components/layout/header";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";


const HomePage: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen">
      <div className="flex bg-[#F6F6F8] font-sans">
        <Sidebar />

        <div className="w-full">
          <Header />

          <div className="p-10 bg-gray-100 ">
            <div className="w-full h-full">
              <div className="ml-6">
                <h1 className="text-xl font-semibold mb-1">Dashboard</h1>
                <p className="text-sm text-gray-500">17 September 2024</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-4 gap-8 p-6 cursor-pointer">
                <div className="bg-white shadow rounded-2xl p-4 flex items-center justify-between h-28">
                  <div>
                    <p className=" text-[#928FA6] text-[16px] mb-1  ">Total Perusahaan <br />Relasi</p>
                    <p className="text-[16px] text-[#000000] font-bold">20</p>
                  </div>
                  <img src="/img/Vector.png" alt="" width={30} height={28.12} />
                </div>

                <div className="bg-white shadow rounded-2xl p-4 flex items-center justify-between h-28">
                  <div>
                    <p className="text-[#928FA6] text-[16px]">Total Projek</p>
                    <p className="text-[16px] text-[#000000] font-bold">3</p>
                  </div>
                  <img src="/img/Vector (21).png" alt="" width={22.5} height={20} />
                </div>

                <div className="bg-white shadow rounded-2xl p-4 flex items-center justify-between h-28">
                  <div>
                    <p className="text-[#928FA6] text-[16px]">Jumlah Karyawan</p>
                    <p className="text-[16px] text-[#000000] font-bold">15</p>
                  </div>
                  <img src="/img/Vector.png" alt="" width={30} height={28.12} />
                </div>

                <div className="bg-white shadow rounded-2xl p-4 flex items-center justify-between h-28">
                  <div>
                    <p className="text-[#928FA6] text-[16px]">Proposal Advance</p>
                    <p className="text-[16px] text-[#000000] font-bold">5</p>
                  </div>
                  <img src="/img/Vector.png" alt="" width={30} height={28.12} />
                </div>
              </div>

              {/* NEW CONTENT REPLACING ALL TABLES */}
              <div className="px-6 mt-8">
                <div className="grid grid-cols-2 gap-8">

                  {/*CHART 1*/}
                  <div>
                    <h1 className="text-[30px]">5 Perusahaan Time Report Tertinggi</h1>
                    <div
                      className="bg-white shadow rounded-2xl p-4 flex flex-col items-center justify-center"
                      style={{ width: "513px", height: "342px" }}
                    >
                      <h2 className="text-lg font-semibold mb-2 text-center">Bar Chart</h2>

                      <BarChart
                        width={480}   // sedikit lebih kecil dari container
                        height={260}  // biar pas tidak mentok
                        data={[
                          { name: "A", value: 10 },
                          { name: "B", value: 16 },
                          { name: "C", value: 28 },
                          { name: "D", value: 13 },
                          { name: "", value: 0 },
                        ]}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" tick={{ fontWeight: 600, fontSize: 14 }} />
                        <YAxis tick={{ fontWeight: 600, fontSize: 14 }} />
                        <Bar dataKey="value" fill="#0E64D1" />
                      </BarChart>
                    </div>
                  </div>

                  {/*CHART 2*/}
                  <div>
                    <h1 className="text-[30px]">5 Project Time Report Tertinggi</h1>
                    <div
                      className="bg-white shadow rounded-2xl p-4 flex flex-col items-center justify-center"
                      style={{ width: "513px", height: "342px" }}
                    >
                      <h2 className="text-lg font-semibold mb-2 text-center">Bar Chart</h2>

                      <BarChart
                        width={480}   // sedikit lebih kecil dari container
                        height={260}  // biar pas tidak mentok
                        data={[
                          { name: "A", value: 10 },
                          { name: "B", value: 16 },
                          { name: "C", value: 28 },
                          { name: "D", value: 13 },
                          { name: "", value: 0 },
                        ]}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" tick={{ fontWeight: 600, fontSize: 14 }} />
                        <YAxis tick={{ fontWeight: 600, fontSize: 14 }} />
                        <Bar dataKey="value" fill="#0E64D1" />
                      </BarChart>
                    </div>
                  </div>

                </div>
              </div></div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HomePage;
