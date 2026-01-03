import React, { useEffect } from "react";
import Sidebar from "../../components/layout/sidebar";
import Header from "../../components/layout/header";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { useDashboardStore } from "../../store/dashboardStore";

const generateTicks = (max: number, step: number) => {
  const ticks = [];
  for (let i = 0; i <= max; i += step) {
    ticks.push(i);
  }
  return ticks;
};

const maxValue = 30;

const HomePage: React.FC = () => {
  const { data, loading, fetchDashboard } = useDashboardStore();

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  // ===== transform API data (aman walau data null) =====
  const companyChartData = data?.top_companies?.map((item) => ({
    name: item.company,
    value: item.total_hour,
  })) || [];

  const projectChartData = data?.top_projects?.map((item) => ({
    name: item.project,
    value: item.total_hour,
  })) || [];

  useEffect(() => {
    console.log(data, "DATA: ");
    
  }, [])
  

  return (
    <div className="flex bg-[#F6F6F8] min-h-screen">
      <Sidebar />

      <div className="w-full flex flex-col">
        <Header />

        <div className="p-10 bg-[#F6F6F8] flex-1">
          {/* ===== LOADING STATE (TIDAK HILANGKAN LAYOUT) ===== */}
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 text-lg">
                Loading dashboard...
              </p>
            </div>
          ) : (
            <>
              {/* ===== TITLE ===== */}
              <div className="ml-6 mb-6">
                
              </div>

              {/* ===== STATS CARDS ===== */}
              <div className="grid grid-cols-4 gap-8 p-6 cursor-pointer">
                <div className="bg-white shadow rounded-2xl p-4 flex items-center justify-between h-28">
                  <div>
                    <p className="text-[#928FA6] text-[16px] mb-1">
                      Total Perusahaan <br /> Relasi
                    </p>
                    <p className="text-[16px] font-bold">
                      {data?.total_companies}
                    </p>
                  </div>
                  <img src="/img/Vector.png" alt="" width={30} />
                </div>

                <div className="bg-white shadow rounded-2xl p-4 flex items-center justify-between h-28">
                  <div>
                    <p className="text-[#928FA6] text-[16px]">
                      Total Projek
                    </p>
                    <p className="text-[16px] font-bold">
                      {data?.total_projects}
                    </p>
                  </div>
                  <img src="/img/Vector (21).png" alt="" width={22} />
                </div>

                <div className="bg-white shadow rounded-2xl p-4 flex items-center justify-between h-28">
                  <div>
                    <p className="text-[#928FA6] text-[16px]">
                      Jumlah Karyawan
                    </p>
                    <p className="text-[16px] font-bold">
                      {data?.total_employees}
                    </p>
                  </div>
                  <img src="/img/Vector.png" alt="" width={30} />
                </div>

                <div className="bg-white shadow rounded-2xl p-4 flex items-center justify-between h-28">
                  <div>
                    <p className="text-[#928FA6] text-[16px]">
                      Proposal Advance
                    </p>
                    <p className="text-[16px] font-bold">5</p>
                  </div>
                  <img src="/img/Vector.png" alt="" width={30} />
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

                    <div className="bg-white shadow rounded-2xl h-[420px] flex items-center justify-center">
                      <BarChart
                        width={490}
                        height={310}
                        data={companyChartData}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        <YAxis
                          ticks={generateTicks(maxValue, 5)}
                          tick={{ fontSize: 12 }}
                        />
                        <Bar
                          dataKey="value"
                          fill="#0E64D1"
                          radius={[6, 6, 0, 0]}
                        />
                      </BarChart>
                    </div>
                  </div>

                  {/* ===== CHART 2 ===== */}
                  <div className="flex flex-col">
                    <h1 className="text-[22px] font-semibold mb-4">
                      5 Project Time Report Tertinggi
                    </h1>

                    <div className="bg-white shadow rounded-2xl h-[420px] flex items-center justify-center">
                      <BarChart
                        width={490}
                        height={310}
                        data={projectChartData}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        <YAxis
                          ticks={generateTicks(maxValue, 5)}
                          tick={{ fontSize: 12 }}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
