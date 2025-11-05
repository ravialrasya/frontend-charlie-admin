// src/pages/TimeReportPage.tsx
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Sidebar from "../components/layout/sidebar";
import Header from "../components/layout/header";
import { Link } from "react-router-dom";




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
    const [type, setType] = useState<"text" | "date">("text");

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
        <div className="flex bg-[#F6F6F8]  ">
            <Sidebar />

            <div className="w-full">
                <Header />

                {/* ISI CONTENT */}
                <div className="p-10">
                    <h2 className="text-[#2F2F2F] text-[20px] font-semibold mb-10">Absensi</h2>

                    {/* Search & Date */}
                    <div className="flex justify-between mb-10 w-full h-[44px] gap-[10px] ">
                        <input
                            type="text"
                            placeholder="Cari nama karyawan"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className=" rounded-md px-3 py-2 w-[379px] text-[14px] outline-none bg-white focus:ring-blue-500 "
                        />
                        <input
                            type={type}
                            onFocus={() => setType("date")}
                            onBlur={(e) => {
                                if (!e.target.value) setType("text");
                            }}
                            placeholder="Pilih Tanggal"

                            className=" rounded-md px-3 w-[296px] py-2 text-[14px] outline-none bg-white  focus:ring-blue-500"
                        />
                    </div>

                    {/* Table */}
                    <div className="bg-white p-5 rounded-md shadow w-full h-[654px]">
                        <div className="overflow-x-auto overflow-y-hidden">
                            <table className="w-full h-[614px]  ">

                                <thead>
                                    <tr className="bg-white text-[#2F2F2F] font-semibold ">
                                        <th className="px-4 py-2">
                                            <div className="flex text-[14px] ">
                                                ID Karyawan
                                            </div>
                                        </th>
                                        <th className="px-4 py-2 ">
                                            <div className="flex text-[14px]">
                                                Nama Karyawan
                                            </div>
                                        </th>
                                        <th className="px-4 py-2">
                                            <div className="flex text-[14px]">
                                                Tanggal
                                            </div>
                                        </th>
                                        <th className="px-4 py-2">
                                            <div className="flex text-[14px]">
                                                Clock In
                                            </div>
                                        </th>
                                        <th className="px-4 py-2">
                                            <div className="flex text-[14px]">
                                                Clock Out
                                            </div>
                                        </th>
                                        <th className="px-4 py-2">
                                            <div className="flex text-[14px]">
                                                Total Jam Kerja
                                            </div>
                                        </th>
                                        <th className="px-4 py-2 "></th>
                                    </tr>
                                </thead>

                                <tbody>


                                    {filtered.map((r, i) => (
                                        <tr
                                            key={i}
                                            className={i % 2 === 0 ? "bg-[#F8FAFD]" : "bg-[#FFFFFF]"}
                                        >

                                            <td className="px-4 py-2 font-medium text-[#2F2F2F]  text-[14px] ">{r.id}</td>
                                            <td className="px-4 py-2 font-medium  text-[#2F2F2F] text-[14px]">{r.name}</td>
                                            <td className="px-4 py-2 font-reguler text-[#2F2F2F] text-[14px]">{r.tanggal}</td>
                                            <td className="px-4 py-2 font-bold text-[14px] text-[#0E64D1] ">
                                                {r.clockIn}
                                            </td>
                                            <td className="px-4 py-2 font-bold text-[#F86358] ">
                                                {r.clockOut}
                                            </td>
                                            <td className="px-4 py-2 font-medium text-[#2F2F2F] text-[14px]">{r.totalJam}</td>
                                            <td className="px-4 py-2 font-medium text-[14px] text-center">
                                                <Link to='/absensi/absensi-detail'>
                                                    <button className="cursor-pointer">
                                                        <img src="/img/mdi_eye.png" alt="" width={24} height={24} />
                                                    </button>
                                                </Link>
                                            </td>



                                        </tr>
                                    ))}

                                </tbody>


                            </table>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
                        <p>
                            Showing 1 to {filtered.length} of {filtered.length} entries
                        </p>
                        <div className="flex items-center gap-2">
                            <button className="border rounded-full p-1 hover:bg-gray-100">
                                <FaChevronLeft size={14} />
                            </button>
                            <span className="px-3 py-1 border rounded-full bg-blue-600 text-white">
                                1
                            </span>
                            <button className="border rounded-full p-1 hover:bg-gray-100">
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
