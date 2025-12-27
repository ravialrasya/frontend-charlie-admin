// Updated HomePage with improved chart layout & spacing

import React from "react";
import Sidebar from "../../components/layout/sidebar";
import Header from "../../components/layout/header";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const generateTicks = (max: number, step: number) => {
  const ticks = [];
  for (let i = 0; i <= max; i += step) {
    ticks.push(i);
  }
  return ticks;
};
const maxValue = 30;


const HomePage: React.FC = () => {
  return (
    <div className="flex bg-[#F6F6F8] min-h-screen">
      <Sidebar />

      <div className="w-full">
        <Header />

        <div className="p-10 bg-gray-100">
          <div className="w-full h-full">
            <div className="ml-6">
              <h1 className="text-xl font-semibold mb-1">Dashboard</h1>
              <p className="text-sm text-gray-500">17 September 2024</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-8 p-6 cursor-pointer">
              <div className="bg-white shadow rounded-2xl p-4 flex items-center justify-between h-28">
                <div>
                  <p className="text-[#928FA6] text-[16px] mb-1">
                    Total Perusahaan <br /> Relasi
                  </p>
                  <p className="text-[16px] text-[#000000] font-bold">20</p>
                </div>
                <img src="/img/Vector.png" alt="" width={30} height={28} />
              </div>

              <div className="bg-white shadow rounded-2xl p-4 flex items-center justify-between h-28">
                <div>
                  <p className="text-[#928FA6] text-[16px]">Total Projek</p>
                  <p className="text-[16px] text-[#000000] font-bold">3</p>
                </div>
                <img src="/img/Vector (21).png" alt="" width={22} height={20} />
              </div>

              <div className="bg-white shadow rounded-2xl p-4 flex items-center justify-between h-28">
                <div>
                  <p className="text-[#928FA6] text-[16px]">Jumlah Karyawan</p>
                  <p className="text-[16px] text-[#000000] font-bold">15</p>
                </div>
                <img src="/img/Vector.png" alt="" width={30} height={28} />
              </div>

              <div className="bg-white shadow rounded-2xl p-4 flex items-center justify-between h-28">
                <div>
                  <p className="text-[#928FA6] text-[16px]">Proposal Advance</p>
                  <p className="text-[16px] text-[#000000] font-bold">5</p>
                </div>
                <img src="/img/Vector.png" alt="" width={30} height={28} />
              </div>
            </div>

            {/* ===== CHART SECTION ===== */}
            <div className="px-6 mt-10">
              <div className="grid grid-cols-2 gap-10">

                {/* ===== CHART 1 ===== */}
                <div className="flex flex-col">
                  <h1 className="text-[22px] font-semibold mb-4">
                    5 Perusahaan Time Report Tertinggi
                  </h1>

                  <div className="bg-white shadow rounded-2xl h-[420px] flex flex-col items-center justify-center">
                    <h2 className="font-semibold text-center mb-2">
                      Bar Chart
                    </h2>

                    <div className="flex items-center justify-center">
                      <BarChart
                        width={490}
                        height={310}
                        data={[
                          { name: "A", value: 10 },
                          { name: "B", value: 16 },
                          { name: "C", value: 28 },
                          { name: "D", value: 13 },
                          { name: "E", value: 8 },
                        ]}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" tick={{ fontWeight: 600, fontSize: 13 }} />
                        <YAxis
                          ticks={generateTicks(maxValue, 5)}
                          tick={{ fontWeight: 600, fontSize: 13 }}
                        />
                        <Bar
                          dataKey="value"
                          fill="#0E64D1"
                          radius={[6, 6, 0, 0]}
                        />
                      </BarChart>
                    </div>
                  </div>
                </div>

                {/* ===== CHART 2 ===== */}
                <div className="flex flex-col">
                  <h1 className="text-[22px] font-semibold mb-4">
                    5 Project Time Report Tertinggi
                  </h1>

                  <div className="bg-white shadow rounded-2xl h-[420px] flex flex-col items-center justify-center">
                    <h2 className="font-semibold text-center mb-2">
                      Bar Chart
                    </h2>

                    <div className="flex items-center justify-center">
                      <BarChart
                        width={490}
                        height={310}
                        data={[
                          { name: "A", value: 10 },
                          { name: "B", value: 16 },
                          { name: "C", value: 28 },
                          { name: "D", value: 13 },
                          { name: "E", value: 6 },
                        ]}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" tick={{ fontWeight: 600, fontSize: 13 }} />
                        <YAxis
                          ticks={generateTicks(maxValue, 5)}
                          tick={{ fontWeight: 600, fontSize: 13 }}
                        />
                        <Bar
                          dataKey="value"
                          fill="#0E64D1"
                          radius={[6, 6, 0, 0]}
                        />
                      </BarChart>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* ===== END CHART SECTION ===== */}


          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
