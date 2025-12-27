// src/pages/ProjectPage.tsx
import React, { useState } from "react";
import Sidebar from "../components/layout/sidebar";
import Header from "../components/layout/header";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

type Row = {
    nama: string;
    tanggal: string;
    status: "aktif" | "non-aktif";
    total: number;
    deskripsi: React.ReactNode;
};

const ProjectPage: React.FC = () => {
    const [search, setSearch] = useState<string>("");

    const data: Row[] = [
        {
            nama: "Project 1",
            deskripsi: (<>
                PT Mineral Alam <br />Abadi 2023
            </>
            ),
            tanggal: "17/09/2024", status: "aktif", total: 123
        },
        {
            nama: "Project 2",
            deskripsi: (<>
                PT Mineral Alam <br />Abadi 2023
            </>
            ),
            tanggal: "17/09/2024", status: "non-aktif", total: 123
        },
        {
            nama: "Project 3",
            deskripsi: (<>
                PT Mineral Alam <br />Abadi 2023
            </>
            ),
            tanggal: "17/09/2024", status: "aktif", total: 123
        },
        {
            nama: "Project 4",
            deskripsi: (<>
                PT Mineral Alam <br />Abadi 2023
            </>
            ),
            tanggal: "17/09/2024", status: "aktif", total: 123
        },
        {
            nama: "Project 5",
            deskripsi: (<>
                PT Mineral Alam <br />Abadi 2023
            </>
            ),
            tanggal: "17/09/2024", status: "non-aktif", total: 123
        },

    ];

    const filtered = data.filter((d) => d.nama.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="flex min-h-screen bg-[#F6F6F8] font-sans">
            <Sidebar />

            <div className="w-full">
                <Header />

                <div className="p-10 bg-gray-100 ">
                    {/* Main white card sized like design */}

                    {/* Title + Button */}
                    <div className=" ">
                        <h2 className="text-[#2F2F2F] text-[20px] font-semibold mb-10">Projek</h2>

                    </div>

                    {/* Search */}
                    <div className="flex justify-between mb-10">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Cari nama projek"
                            className="w-[379px] h-[44px] px-4 py-2 rounded-lg  text-[#928FA6] text-[14px] focus:outline-none"
                        />
                        <Link to='/projek/tambah-projek'>
                        <button className="flex items-center cursor-pointer justify-center font-semibold w-[134px] h-[44px] bg-[#0E64D1] text-white rounded-md text-[14px]">
                            + Tambah Projek
                        </button>
                        </Link>
                    </div>

                    {/* Table area */}
                    <div className="bg-white rounded-md ">
                        <div className="flex-1 overflow-hidden flex flex-col p-5 ">
                            <div className="overflow-x-auto overflow-y-auto ">
                                <table className="h-[414px] w-full text-[14px] table-auto">
                                    <thead>
                                        <tr className=" text-left text-[#2F2F2F] font-semibold ">
                                            <th className="px-2 py-2">Nama Projek</th>
                                            <th className="px-2 py-2">Nama Perusahaan Relasi</th>
                                            <th className="px-2 py-2">Tanggal Mulai</th>
                                            <th className="px-2 py-2">status</th>
                                            <th className="px-2 py-2">total time report</th>
                                            <th className="px-2 py-2">aktivasi</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {filtered.map((row, i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-[#F8FAFD]" : "bg-white"}>
                                                <td className="px-2 py-2 font-medium">{row.nama}</td>
                                                <td className="px-2 py-2 font-medium">{row.deskripsi}</td>
                                                <td className="px-2 py-2">{row.tanggal}</td>

                                                {/* Status (plain text or badge if you prefer) */}
                                                <td className="px-2 py-2">
                                                    <span className={`px-2 py-1 rounded-full text-[13px] font-medium 
                            ${row.status === "aktif" ? "text-[#2F2F2F]" : "text-[#2F2F2F]"}`}>
                                                        {row.status}
                                                    </span>
                                                </td>

                                                <td className="px-2 py-2">{row.total}</td>

                                                {/* Activation button */}
                                                <td className="">
                                                    {row.status === "aktif" ? (
                                                        <button className="text-[14px] w-[99px] h-[27px] rounded-full bg-[#D10E0E] text-white">
                                                            non aktifkan
                                                        </button>
                                                    ) : (
                                                        <button className="text-[14px] w-[99px] h-[27px] rounded-full bg-[#0E64D1] text-white">
                                                            Aktifkan
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Footer - showing + pagination */}
                        </div>
                        </div>
                        <div className="flex items-center justify-between mt-3 text-[13px] text-gray-600">
                            <p>Showing 1 to {filtered.length} of {filtered.length} entries</p>

                            <div className="flex items-center gap-2">
                                <button className="border rounded-full p-1 bg-white"><FaChevronLeft  size={14} /></button>
                                <span className="px-3 py-1 rounded-full bg-[#0E64D1] text-white">1</span>
                                <button className="border rounded-full p-1 bg-white"><FaChevronRight size={14} /></button>
                            </div>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default ProjectPage;
