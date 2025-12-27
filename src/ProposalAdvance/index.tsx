// src/pages/TimeReportPage.tsx
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Sidebar from "../components/layout/sidebar";
import Header from "../components/layout/header";
import { Link } from "react-router-dom";

interface ProposalAdvance {
    id: string;
    keperluan: string;
    penanggungJawab: string;
    tanggalAwal: string;
    tanggalAkhir: string;
    jumlah: string;
    status: "Menunggu" | "Disetujui" | "Ditolak";
}

const TimeReportPage: React.FC = () => {
    const [search, setSearch] = useState("");
    const [type, setType] = useState<"text" | "date">("text");
    const [statusFilter, setStatusFilter] = useState("");

    const reports: ProposalAdvance[] = [
        {
            id: "1",
            keperluan: "Visit PT",
            penanggungJawab: "Thomas Seisei",
            tanggalAwal: "17/09/2024 13:40",
            tanggalAkhir: "18/09/2024 07:40",
            jumlah: "Rp 200.000",
            status: "Menunggu",
        },
        {
            id: "2",
            keperluan: "Visit PT",
            penanggungJawab: "Thomas Seisei",
            tanggalAwal: "17/09/2024 13:40",
            tanggalAkhir: "18/09/2024 07:40",
            jumlah: "Rp 200.000",
            status: "Ditolak",
        },
        {
            id: "3",
            keperluan: "Visit PT",
            penanggungJawab: "Thomas Seisei",
            tanggalAwal: "17/09/2024 13:40",
            tanggalAkhir: "18/09/2024 07:40",
            jumlah: "Rp 200.000",
            status: "Disetujui",
        },
        {
            id: "4",
            keperluan: "Visit PT",
            penanggungJawab: "Thomas Seisei",
            tanggalAwal: "17/09/2024 13:40",
            tanggalAkhir: "18/09/2024 07:40",
            jumlah: "Rp 200.000",
            status: "Disetujui",
        },
        {
            id: "5",
            keperluan: "Visit PT",
            penanggungJawab: "Thomas Seisei",
            tanggalAwal: "17/09/2024 13:40",
            tanggalAkhir: "18/09/2024 07:40",
            jumlah: "Rp 200.000",
            status: "Disetujui",
        },
        {
            id: "6",
            keperluan: "Visit PT",
            penanggungJawab: "Thomas Seisei",
            tanggalAwal: "17/09/2024 13:40",
            tanggalAkhir: "18/09/2024 07:40",
            jumlah: "Rp 200.000",
            status: "Ditolak",
        },
        {
            id: "7",
            keperluan: "Visit PT",
            penanggungJawab: "Thomas Seisei",
            tanggalAwal: "17/09/2024 13:40",
            tanggalAkhir: "18/09/2024 07:40",
            jumlah: "Rp 200.000",
            status: "Disetujui",
        },
        {
            id: "8",
            keperluan: "Visit PT",
            penanggungJawab: "Thomas Seisei",
            tanggalAwal: "17/09/2024 13:40",
            tanggalAkhir: "18/09/2024 07:40",
            jumlah: "Rp 200.000",
            status: "Disetujui",
        },
    ];

    const filtered = reports.filter(
        (r) =>
            r.penanggungJawab.toLowerCase().includes(search.toLowerCase()) &&
            (statusFilter ? r.status === statusFilter : true)
    );

    return (
        <div className="flex bg-[#F6F6F8]">
            <Sidebar />
            <div className="w-full">
                <Header />

                <div className="p-10">
                    {/* TITLE */}
                    <h2 className="text-[#2F2F2F] text-[20px] font-semibold mb-6">
                        Proposal Advance
                    </h2>

                    {/* HEADER CARD (SAMA PERSIS SEPERTI GAMBAR) */}
                    <div className="flex gap-6 mb-6">
                        <div className="bg-white rounded-md p-5 w-[260px] shadow-sm">
                            <p className="text-[12px] text-[#8B8B8B] mb-1">
                                Total proposal advanced (menunggu)
                            </p>
                            <p className="text-[20px] font-semibold text-[#2F2F2F]">
                                20
                            </p>
                        </div>

                        <div className="bg-white rounded-md p-5 w-[260px] shadow-sm">
                            <p className="text-[12px] text-[#8B8B8B] mb-1">
                                Total biaya proposal advanced (menunggu)
                            </p>
                            <p className="text-[20px] font-semibold text-[#2F2F2F]">
                                Rp 20.000.000
                            </p>
                        </div>
                    </div>

                    {/* FILTER */}
                    <div className="flex items-center justify-between mb-6">
                        <input
                            type="text"
                            placeholder="Cari penanggung jawab"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="rounded-md px-4 py-2 w-[300px] text-[14px] bg-white outline-none"
                        />

                        <div className="flex gap-3">
                            <input
                                type={type}
                                onFocus={() => setType("date")}
                                onBlur={(e) => !e.target.value && setType("text")}
                                placeholder="Pilih Tanggal"
                                className="rounded-md px-4 py-2 w-[220px] text-[14px] bg-white outline-none"
                            />

                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="rounded-md px-4 py-2 w-[180px] text-[14px] bg-white outline-none"
                            >
                                <option value="">Status</option>
                                <option value="Menunggu">Menunggu</option>
                                <option value="Disetujui">Disetujui</option>
                                <option value="Ditolak">Ditolak</option>
                            </select>
                        </div>
                    </div>

                    {/* TABLE */}
                    <div className="bg-white p-5 rounded-md shadow w-full h-[654px]">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-[14px]">
                                <thead>
                                    <tr className="font-semibold text-[#2F2F2F] text-left">
                                        <th className="px-6 py-3">Keperluan</th>
                                        <th className="px-6 py-3">Penanggung jawab</th>
                                        <th className="px-6 py-3">Tanggal Awal</th>
                                        <th className="px-6 py-3">Tanggal Akhir</th>
                                        <th className="px-6 py-3">Jumlah</th>
                                        <th className="px-6 py-3">Status</th>
                                        <th className="px-6 py-3 text-center"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filtered.map((r, i) => (
                                        <tr
                                            key={r.id}
                                            className={i % 2 === 0 ? "bg-[#F8FAFD]" : "bg-white"}
                                        >
                                            <td className="px-6 py-3">{r.keperluan}</td>
                                            <td className="px-6 py-3">{r.penanggungJawab}</td>
                                            <td className="px-6 py-3">{r.tanggalAwal}</td>
                                            <td className="px-6 py-3">{r.tanggalAkhir}</td>
                                            <td className="px-6 py-3">{r.jumlah}</td>
                                            <td className="px-6 py-3">
                                                {r.status === "Menunggu" && (
                                                    <span className="min-w-[100px] inline-flex justify-center bg-[#928FA6]/10 text-[#928FA6] border border-[#928FA6] px-3 py-1 rounded-md text-sm">
                                                        Menunggu
                                                    </span>
                                                )}
                                                {r.status === "Disetujui" && (
                                                    <span className="min-w-[100px] inline-flex justify-center bg-[#4CD964]/10 text-[#4CD964] border border-[#4CD964] px-3 py-1 rounded-md text-sm">
                                                        Disetujui
                                                    </span>
                                                )}
                                                {r.status === "Ditolak" && (
                                                    <span className="min-w-[100px] inline-flex justify-center bg-[#F86358]/10 text-[#F86358] border border-[#F86358] px-3 py-1 rounded-md text-sm">
                                                        Ditolak
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-3 text-center">
                                                <Link to="/proposal-advance/detail-proposal-advance">
                                                    <img
                                                        src="/img/mdi_eye.png"
                                                        width={18}
                                                        className="mx-auto opacity-70 hover:opacity-100 cursor-pointer"
                                                    />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* FOOTER */}
                    <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
                        <p>Showing 1 to {filtered.length} of {filtered.length} entries</p>
                        <div className="flex items-center gap-2">
                            <button className="border rounded-full p-1">
                                <FaChevronLeft size={14} />
                            </button>
                            <span className="px-3 py-1 border rounded-full bg-blue-600 text-white">
                                1
                            </span>
                            <button className="border rounded-full p-1">
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
