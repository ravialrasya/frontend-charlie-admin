import React, { useEffect, useState } from "react";
import Sidebar from "../components/layout/sidebar";
import Header from "../components/layout/header";
import { Link } from "react-router-dom";
import { useProjectStore } from "../store/projekStore";
import { Search, Plus } from "lucide-react";

const ProjectPage: React.FC = () => {
    const [search, setSearch] = useState("");

    const {
        projects,
        totalAllHour,
        loading,
        fetchAllProjects,
        changeProjectStatus,
    } = useProjectStore();

    useEffect(() => {
        fetchAllProjects();
    }, []);

    const filtered = projects.filter((p) =>
        p.project.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex min-h-screen bg-[#F6F7FB]">
                <Sidebar />
                <div className="flex-1 flex items-center justify-center text-gray-500">
                    Loading project...
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-[#F6F7FB]">
            <Sidebar />

            <div className="flex-1">
                <Header />

                <div className="px-8 py-6">
                    {/* ===== PAGE HEADER ===== */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">
                                Projek
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">
                                Total seluruh jam projek:{" "}
                                <span className="font-semibold text-gray-700">
                                    {totalAllHour}
                                </span>
                            </p>
                        </div>

                        <Link to="/projek/tambah-projek">
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition">
                                <Plus size={16} />
                                Tambah Projek
                            </button>
                        </Link>
                    </div>

                    {/* ===== SEARCH ===== */}
                    <div className="mb-6">
                        <div className="relative w-[360px]">
                            <Search
                                size={16}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Cari nama projek..."
                                className="w-full h-11 pl-11 pr-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100"
                            />
                        </div>
                    </div>

                    {/* ===== TABLE CARD ===== */}
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 text-gray-600">
                                <tr>
                                    <th className="px-6 py-4 text-left">Nama Projek</th>
                                    <th className="px-6 py-4 text-left">Perusahaan</th>
                                    <th className="px-6 py-4 text-left">Tanggal</th>
                                    <th className="px-6 py-4 text-left">Status</th>
                                    <th className="px-6 py-4 text-left">Total Jam</th>
                                    <th className="px-6 py-4 text-left">Aksi</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filtered.map((p, index) => (
                                    <tr
                                        key={p.id}
                                        className={`
                      transition-all duration-200 ease-out
                      hover:bg-gray-50 hover:shadow-sm
                      ${index % 2 === 0 ? "bg-white" : "bg-gray-50/40"}
                    `}
                                    >
                                        <td className="px-6 py-5 font-medium text-gray-800">
                                            {p.project}
                                        </td>
                                        <td className="px-6 py-5 text-gray-600">
                                            {p.company?.company}
                                        </td>
                                        <td className="px-6 py-5 text-gray-600">
                                            {p.start_date}
                                        </td>
                                        <td className="px-6 py-5">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${p.status
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-red-100 text-red-600"
                                                    }`}
                                            >
                                                {p.status ? "Aktif" : "Non-Aktif"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 text-gray-700">
                                            {p.total_hour ?? 0}
                                        </td>
                                        <td className="px-6 py-5">
                                            <button
                                                onClick={() => changeProjectStatus(p.id)}
                                                className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${p.status
                                                        ? "bg-red-500 hover:bg-red-600 text-white"
                                                        : "bg-blue-600 hover:bg-blue-700 text-white"
                                                    }`}
                                            >
                                                {p.status ? "Nonaktifkan" : "Aktifkan"}
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                {filtered.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={6}
                                            className="text-center py-10 text-gray-400"
                                        >
                                            Projek tidak ditemukan
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        {/* ===== FOOTER ===== */}
                        <div className="px-6 py-4 bg-gray-50 text-xs text-gray-500 flex justify-between">
                            <p>
                                Menampilkan {filtered.length} dari{" "}
                                {projects.length} projek
                            </p>
                            <p>Total Jam: {totalAllHour}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
