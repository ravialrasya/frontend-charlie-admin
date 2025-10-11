// src/pages/TimeReportPage.tsx
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Sidebar from "../components/layout/sidebar";
import Header from "../components/layout/header";
import { Link } from "react-router-dom";

interface ReportData {
    id: string;
    name: string;
    tanggalPermintaan: string;
    tanggalPembayaran: string;
    totalJam: string;
    jumlah: string;
    status: "Menunggu" | "Setuju" | "Reject";
}

const TimeReportPage: React.FC = () => {
    const [search, setSearch] = useState("");
    const [type, setType] = useState<"text" | "date">("text");
    const [statusFilter, setStatusFilter] = useState("");

    const reports: ReportData[] = [
        {
            id: "B013",
            name: "Sava Alya Andini",
            tanggalPermintaan: "17/09/2024 13:40",
            tanggalPembayaran: "18/09/2024 07:40",
            totalJam: "8 Jam",
            jumlah: "Rp 200,000",
            status: "Menunggu",
        },
        {
            id: "B014",
            name: "Rizky Pratama",
            tanggalPermintaan: "17/09/2024 13:40",
            tanggalPembayaran: "18/09/2024 07:40",
            totalJam: "8 Jam",
            jumlah: "Rp 210,000",
            status: "Reject",
        },
        {
            id: "B015",
            name: "Nadia Salsabila",
            tanggalPermintaan: "17/09/2024 13:40",
            tanggalPembayaran: "18/09/2024 07:40",
            totalJam: "8 Jam",
            jumlah: "Rp 190,000",
            status: "Setuju",
        },
        {
            id: "B016",
            name: "Bima Arya",
            tanggalPermintaan: "18/09/2024 13:40",
            tanggalPembayaran: "19/09/2024 07:40",
            totalJam: "8 Jam",
            jumlah: "Rp 200,000",
            status: "Setuju",
        },
        {
            id: "B017",
            name: "Ayu Kartika",
            tanggalPermintaan: "18/09/2024 13:40",
            tanggalPembayaran: "19/09/2024 07:40",
            totalJam: "8 Jam",
            jumlah: "Rp 205,000",
            status: "Setuju",
        },
        {
            id: "B018",
            name: "Dewi Lestari",
            tanggalPermintaan: "18/09/2024 13:40",
            tanggalPembayaran: "19/09/2024 07:40",
            totalJam: "8 Jam",
            jumlah: "Rp 195,000",
            status: "Reject",
        },
        {
            id: "B019",
            name: "Fajar Ramadhan",
            tanggalPermintaan: "19/09/2024 13:40",
            tanggalPembayaran: "20/09/2024 07:40",
            totalJam: "8 Jam",
            jumlah: "Rp 200,000",
            status: "Setuju",
        },
        {
            id: "B020",
            name: "Gita Maharani",
            tanggalPermintaan: "19/09/2024 13:40",
            tanggalPembayaran: "20/09/2024 07:40",
            totalJam: "8 Jam",
            jumlah: "Rp 200,000",
            status: "Setuju",
        },
        {
            id: "B021",
            name: "Hafidz Nugraha",
            tanggalPermintaan: "19/09/2024 13:40",
            tanggalPembayaran: "20/09/2024 07:40",
            totalJam: "8 Jam",
            jumlah: "Rp 198,000",
            status: "Setuju",
        },
    ];

    const filtered = reports.filter(
        (r) =>
            r.name.toLowerCase().includes(search.toLowerCase()) &&
            (statusFilter ? r.status === statusFilter : true)
    );

    return (
        <div className="flex bg-[#F6F6F8]">
            <Sidebar />
            <div className="w-full">
                <Header />

                <div className="p-10">
                    {/* Title */}
                    <h2 className="text-[#2F2F2F] text-[20px] font-semibold mb-6">
                        Proposal Advance
                    </h2>

                    {/* Tombol kanan atas */}
                    <div className="flex justify-end mb-3">
                        <div className="flex gap-2 ">
                            <button className="bg-[#0E64D1] w-[153px] h-[40px] text-white px-4 py-2 rounded-md text-sm">
                                List Request
                            </button>
                            <div className="justify-center">
                                <button className="flex items-center gap-3 bg-[#0E64D1] w-[153px] h-[40px]  text-sm text-white px-6 py-2 rounded-md shadow-sm transition">
                                    <img src="/img/Vector (12).png" alt="" width={13.33} height={13.33} />
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Filter */}
                    <div className="flex items-center justify-between mb-6">
                        <input
                            type="text"
                            placeholder="Cari nama karyawan"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="rounded-md px-4 py-2 w-[300px] text-[14px] outline-none bg-white focus:ring-blue-500"
                        />

                        <div className="flex gap-3">
                            <input
                                type={type}
                                onFocus={() => setType("date")}
                                onBlur={(e) => {
                                    if (!e.target.value) setType("text");
                                }}
                                placeholder="Pilih Tanggal"
                                className="rounded-md px-4 py-2 w-[220px] text-[14px] outline-none bg-white focus:ring-blue-500"
                            />
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="rounded-md px-4 py-2 w-[180px] text-[14px] outline-none bg-white focus:ring-blue-500"
                            >
                                <option value="">Status</option>
                                <option value="Menunggu">Menunggu</option>
                                <option value="Setuju">Setuju</option>
                                <option value="Reject">Reject</option>
                            </select>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="bg-white p-5 rounded-md shadow w-full h-[654px]">
                        <div className="overflow-x-auto ">
                            <table className="w-full border-collapse text-[14px] h-[614px]">
                                <thead>
                                    <tr className="bg-white text-[#2F2F2F] font-semibold text-left">
                                        <th className="px-6 py-3 ">
                                            <input type="checkbox" className="w-[18px] h-[18px]" />
                                        </th>
                                        <th className="px-6 py-3">ID Karyawan</th>
                                        <th className="px-6 py-3">Nama Karyawan</th>
                                        <th className="px-6 py-3">Tanggal Permintaan</th>
                                        <th className="px-6 py-3">Tanggal Pembayaran</th>
                                        <th className="px-6 py-3">Jumlah</th>
                                        <th className="px-6 py-3">Status</th>
                                        <th className="px-6 py-3 text-center">Aksi</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filtered.map((r, i) => (
                                        <tr
                                            key={i}
                                            className={
                                                i % 2 === 0 ? "bg-[#F8FAFD]" : "bg-[#FFFFFF]"
                                            }
                                        >
                                            <td className="px-6 py-3">
                                                <input type="checkbox" className="w-[18px] h-[18px]" />
                                            </td>
                                            <td className="px-6 py-3 ">{r.id}</td>
                                            <td className="px-6 py-3">{r.name}</td>
                                            <td className="px-6 py-3">{r.tanggalPermintaan}</td>
                                            <td className="px-6 py-3">{r.tanggalPembayaran}</td>
                                            <td className="px-6 py-3">{r.jumlah}</td>
                                            <td className="px-6 py-3">
                                                {r.status === "Menunggu" && (
                                                    <span className="inline-flex items-center justify-center min-w-[100px] text-center bg-[#928FA6]/10 text-[#928FA6] border-[#928FA6] border-[1px] px-3 py-1 rounded-md text-sm font-medium">
                                                        Menunggu
                                                    </span>
                                                )}
                                                {r.status === "Setuju" && (
                                                    <span className="inline-flex items-center justify-center min-w-[100px] text-center bg-[#4CD964]/10 text-[#4CD964] border-[#4CD964] border-[1px] px-3 py-1 rounded-md text-sm font-medium">
                                                        Setuju
                                                    </span>
                                                )}
                                                {r.status === "Reject" && (
                                                    <span className="inline-flex items-center justify-center min-w-[100px] text-center bg-[#F86358]/10 text-[#F86358] border-[#F86358] border-[1px] px-3 py-1 rounded-md text-sm font-medium">
                                                        Reject
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-3 text-center">
                                                <Link to="/proposal-advance/detail-proposal-advance">
                                                    <button className="cursor-pointer">
                                                        <img
                                                            src="/img/mdi_eye.png"
                                                            alt=""
                                                            width={24}
                                                            height={24}
                                                        />
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
