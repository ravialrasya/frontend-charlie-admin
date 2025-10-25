// src/pages/ListRequest.tsx
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Sidebar from "../components/layout/sidebar";
import Header from "../components/layout/header";
import { Link } from "react-router-dom";

interface RequestData {
    id: string;
    name: string;
    date: string;
    amount: string;
}

const ListRequest: React.FC = () => {
    const [search, setSearch] = useState("");
    const [type, setType] = useState<"text" | "date">("text");

    const requests: RequestData[] = Array(5).fill({
        id: "B013",
        name: "Sava Alya Andini",
        date: "17/09/2024 13:40",
        amount: "Rp 200,000",
    });

    const filtered = requests.filter((r) =>
        r.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex bg-[#F6F6F8] min-h-screen">
            <Sidebar />

            <div className="w-full">
                <Header />

                <div className="p-15">
                    {/* Title */}
                    <div className="mb-6 flex">
                        <Link to='/proposal-advance'>
                            <img src="/img/Vector (13).png" alt="" className="w-[14px] h-[14px] " />
                        </Link>
                        <h2 className="text-[#2F2F2F] text-[20px] font-semibold ml-8 -mt-2 ">
                            List Request
                        </h2>
                    </div>

                    {/* Search & Date */}
                    <div className="flex justify-between mb-6 w-full h-[44px] gap-[10px]">
                        <input
                            type="text"
                            placeholder="Cari nama karyawan"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="rounded-md px-3 py-2 w-[379px] text-[14px] outline-none bg-white "
                        />
                        <input
                            type={type}
                            onFocus={() => setType("date")}
                            onBlur={(e) => {
                                if (!e.target.value) setType("text");
                            }}
                            placeholder="Pilih Tanggal"
                            className="rounded-md px-3 py-2 w-[296px] text-[14px] outline-none bg-white "
                        />
                    </div>

                    {/* Table */}
                    <div className="bg-white p-5 rounded-lg shadow ">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-[14px]">
                                <thead>
                                    <tr className="text-[#2F2F2F] font-bold">
                                        <th className="px-4 py-3">ID Karyawan</th>
                                        <th className="px-4 py-3">Nama Karyawan</th>
                                        <th className="px-4 py-3">Tanggal Permintaan</th>
                                        <th className="px-4 py-3">Jumlah</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {filtered.map((r, i) => (
                                        <tr
                                            key={i}
                                            className={`${i % 2 === 0 ? "bg-[#F8FAFD]" : "bg-[#FFFFFF]"
                                                } `}
                                        >
                                            <td className="px-4 py-3 font-semibold text-[#2F2F2F]">{r.id}</td>
                                            <td className="px-4 py-3 font-semibold text-[#2F2F2F]">{r.name}</td>
                                            <td className="px-4 py-3 text-[#2F2F2F]">{r.date}</td>
                                            <td className="px-4 py-3 font-semibold text-[#2F2F2F]">{r.amount}</td>
                                            <td className="px-4 py-3 text-center flex justify-center gap-3">
                                                <button className="cursor-pointer p-[6px]">
                                                    <img src="/img/mdi_eye.png" alt="view" width={22} height={15} />
                                                </button>
                                                <div className="space-x-2 ml-5">
                                                    <Link to='/PopUp-Agree'>
                                                    <button className="">
                                                        <img
                                                            src="/img/Button (1).png"
                                                            alt="approve"
                                                            width={28.73}
                                                            height={24.16}
                                                        />
                                                    </button>
                                                    </Link>
                                                    <Link to='/PopUp-DisAgree'>
                                                    <button className=" ">
                                                        <img
                                                            src="/img/Button (2).png"
                                                            alt="reject"
                                                            width={28.73}
                                                            height={24.16}
                                                        />
                                                    </button>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Footer Pagination */}
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

export default ListRequest;
