import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Sidebar from "../components/layout/sidebar";
import Header from "../components/layout/header";
import { useNavigate } from "react-router-dom";

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function DetailTimeReport() {
  const navigate = useNavigate();

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  

  const [currentYear] = useState(new Date().getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const startDay = firstDay === 0 ? 6 : firstDay - 1;

  const activeDates = [9, 18, 30];

  const prevMonth = () => {
    setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1));
  };

  const getDateStyle = (date: number) => {
    if (date === 9) return "bg-green-400 text-white";
    if (date === 18) return "bg-red-400 text-white";
    if (date === 30) return "bg-yellow-300 font-semibold";
    return "hover:bg-gray-100";
  };

  return (
    <div className="flex bg-[#F6F6F8] min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="p-10">
          {/* USER INFO */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-[67px] h-[67px] flex items-center justify-center rounded-full bg-[#1176BC1A]">
              <img src="/img/user (1) 1.png" width={33} />
            </div>

            <div>
              <h1 className="font-semibold">Thomas Seisel</h1>
              <p className="text-[#0E64D1] text-sm">161188559</p>
              <p className="text-sm text-[#928FA6]">Supervisor Admin</p>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="flex justify-between mb-8">
            <div className="flex gap-5">
              <div className="bg-white p-4 rounded-xl w-[161px] shadow-sm">
                <p className="text-sm text-[#928FA6]">
                  Total time report {monthNames[currentMonth]} (Jam)
                </p>
                <h2 className="font-bold mt-1">200</h2>
              </div>

              <div className="bg-white p-4 rounded-xl w-[161px] shadow-sm">
                <p className="text-sm text-[#928FA6]">
                  Total absen {monthNames[currentMonth]}
                </p>
                <h2 className="font-bold mt-1">20</h2>
              </div>
            </div>

            <select className="border rounded-md w-[113px] h-[30px] mt-8 text-sm">
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>

          {/* CALENDAR */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <button onClick={prevMonth}>
                <ChevronLeft />
              </button>

              <h2 className="font-semibold">
                {monthNames[currentMonth]} {currentYear}
              </h2>

              <button onClick={nextMonth}>
                <ChevronRight />
              </button>
            </div>

            {/* DAYS */}
            <div className="grid grid-cols-7 text-center text-sm text-gray-500 mb-2">
              <span>Mon</span><span>Tue</span><span>Wed</span>
              <span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>

            {/* DATES */}
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
              {[...Array(startDay)].map((_, i) => (
                <div key={i} />
              ))}

              {[...Array(daysInMonth)].map((_, i) => {
                const date = i + 1;
                const isActive = activeDates.includes(date);

                return (
                  <button
                    key={date}
                    disabled={!isActive}
                    onClick={() => {
                      if (!isActive) return;

                      navigate("/detail-time-report/information", {
                        state: {
                          date: date,
                          month: currentMonth + 1,
                          year: currentYear,
                        },
                      });
                    }}
                    className={`
    py-1 rounded-md
    ${getDateStyle(date)}
    ${isActive ? "cursor-pointer" : "text-gray-400"}
  `}
                  >
                    {date}
                  </button>

                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
