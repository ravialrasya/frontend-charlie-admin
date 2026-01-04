import React, { useEffect } from "react";
import Sidebar from "../../components/layout/sidebar";
import Header from "../../components/layout/header";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useDashboardStore } from "../../store/dashboardStore";

const generateTicks = (max: number, step: number) => {
  const ticks = [];
  for (let i = 0; i <= max; i += step) ticks.push(i);
  return ticks;
};

const maxValue = 30;

const HomePage: React.FC = () => {
  const { data, loading, fetchDashboard } = useDashboardStore();

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  const companyChartData =
    data?.top_companies?.map((item) => ({
      name: item.company,
      value: item.total_hour,
    })) || [];

  const projectChartData =
    data?.top_projects?.map((item) => ({
      name: item.project,
      value: item.total_hour,
    })) || [];

  return (
    <div className="flex min-h-screen bg-[#F6F7FB]">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="px-8 py-6">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 text-lg">Loading dashboard...</p>
            </div>
          ) : (
            <>
              {/* ================= STATS CARDS ================= */}
              <div className="grid grid-cols-4 gap-6 mb-10">
                {[
                  {
                    label: "Total Perusahaan Relasi",
                    value: data?.total_companies,
                    icon: "/img/Vector.png",
                  },
                  {
                    label: "Total Projek",
                    value: data?.total_projects,
                    icon: "/img/Vector (21).png",
                  },
                  {
                    label: "Jumlah Karyawan",
                    value: data?.total_employees,
                    icon: "/img/Vector.png",
                  },
                  {
                    label: "Proposal Advance",
                    value: 5,
                    icon: "/img/Vector.png",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                      bg-white rounded-3xl p-6 h-28
                      shadow-sm hover:shadow-lg
                      transition-all duration-300
                      hover:-translate-y-1
                      cursor-pointer
                    "
                  >
                    <div className="flex items-center justify-between h-full">
                      <div>
                        <p className="text-sm text-[#8C8CA1] leading-snug">
                          {item.label}
                        </p>
                        <p className="text-2xl font-bold text-gray-800 mt-1">
                          {item.value}
                        </p>
                      </div>
                      <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center">
                        <img src={item.icon} alt="" width={22} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ================= CHART SECTION ================= */}
              <div className="grid grid-cols-2 gap-8">
                {/* ===== CHART CARD ===== */}
                {[
                  {
                    title: "5 Perusahaan Time Report Tertinggi",
                    data: companyChartData,
                  },
                  {
                    title: "5 Project Time Report Tertinggi",
                    data: projectChartData,
                  },
                ].map((chart, index) => (
                  <div
                    key={index}
                    className="
                      bg-white rounded-3xl
                      shadow-sm hover:shadow-lg
                      transition-all duration-300
                      p-6
                    "
                  >
                    <h2 className="text-lg font-semibold mb-4 text-gray-800">
                      {chart.title}
                    </h2>

                    <div className="h-[320px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chart.data}>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#E5E7EB"
                          />
                          <XAxis
                            dataKey="name"
                            tick={{ fontSize: 12 }}
                            tickLine={false}
                            axisLine={false}
                          />
                          <YAxis
                            ticks={generateTicks(maxValue, 5)}
                            tick={{ fontSize: 12 }}
                            tickLine={false}
                            axisLine={false}
                          />
                          <Tooltip
                            cursor={{ fill: "#EEF2FF" }}
                            contentStyle={{
                              borderRadius: 12,
                              border: "none",
                              boxShadow:
                                "0 10px 25px rgba(0,0,0,0.1)",
                            }}
                          />
                          <Bar
                            dataKey="value"
                            fill="#2563EB"
                            radius={[8, 8, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
