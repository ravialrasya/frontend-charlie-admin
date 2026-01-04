import { useEffect, useState } from "react";
import Sidebar from "../../components/layout/sidebar";
import Header from "../../components/layout/header";
import { useCompanyStore } from "../../store/companyStore";
import { useParams } from "react-router-dom";

export default function DetailPerusahaanRelasi() {
    const { idCompany } = useParams();
    const { selectedCompany, loading, fetchCompanyById } = useCompanyStore();
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_PAGE = 10;

    const projects = selectedCompany?.projects ?? [];

    const filteredSelected = projects.filter((item) =>
        item.project.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredSelected.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const paginatedSelected = filteredSelected!.slice(
        startIndex,
        endIndex
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [search]);

    useEffect(() => {
        if (idCompany) {
            fetchCompanyById(idCompany);
        }
    }, [fetchCompanyById, idCompany]);

    return (
        <div className="flex min-h-screen bg-[#F6F6F8]">
            <Sidebar />

            <div className="flex-1">
                <Header />

                <div className="p-8">
                    {/* PAGE TITLE */}
                    <div className="mb-6">
                        <h1 className="text-xl font-semibold text-gray-800 mb-3">
                            {selectedCompany?.company ?? "-"}
                        </h1>
                        <p className="text-sm text-gray-500 mb-2">
                            INFO: 
                        </p>
                        <p className="text-sm text-gray-700">
                            Email : <strong>{selectedCompany?.email ?? "-"}</strong>
                        </p>
                        <p className="text-sm text-gray-700">
                            Telfon : <strong>{selectedCompany?.phone ?? "-"}</strong>
                        </p>
                        <p className="text-sm text-gray-700">
                            Alamat : <strong>{selectedCompany?.address ?? "-"}</strong>
                        </p>
                    </div>

                    {/* TOP BAR */}
                    <div className="flex flex-wrap items-center justify-end gap-4 mb-6">
                        {/* SEARCH */}
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Cari projek..."
                            className="w-[360px] max-w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition bg-white"
                        />
                    </div>

                    {/* TABLE CARD */}
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-3">
                        <div className="overflow-x-auto rounded-md">
                            <table className="w-full text-sm">
                                <thead className="bg-white text-left font-semibold">
                                    <tr>
                                        <th className="px-5 py-4 font-medium">Projek</th>
                                        <th className="px-5 py-4 font-medium">Tanggal Mulai</th>
                                        <th className="px-5 py-4 font-medium">Aktivasi</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {loading ? (
                                        <tr>
                                            <td colSpan={6} className="py-10 text-center text-gray-400">
                                                Memuat data...
                                            </td>
                                        </tr>
                                    ) : filteredSelected.length === 0 ? (
                                        <tr>
                                            <td colSpan={6} className="py-10 text-center text-gray-400">
                                                Data tidak ditemukan
                                            </td>
                                        </tr>
                                    ) : (
                                        paginatedSelected.map((item, i) => (
                                            <tr
                                                key={i}
                                                className={`${i % 2 === 0 ? "bg-[#F6F6F8]" : "bg-white"} transition`}
                                            >
                                                <td className="px-5 py-4 font-medium text-gray-800">
                                                    {item.project}
                                                </td>
                                                <td className="px-5 py-4 text-blue-600 underline cursor-pointer">
                                                    {item.start_date}
                                                </td>
                                                <td className="px-5 py-4">
                                                    <span
                                                        className={`px-3 py-1 rounded-full text-xs font-medium
                                                        ${item.status
                                                                ? "bg-green-100 text-green-700"
                                                                : "bg-gray-200 text-gray-600"
                                                            }
                                                        `}
                                                    >
                                                        {item.status ? "Aktif" : "Nonaktif"}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* PAGINATION */}
                    <div className="flex items-center justify-between mt-6">
                        <span className="text-sm text-gray-500">
                            Showing {paginatedSelected.length} of {filteredSelected!.length} data
                        </span>

                        <div className="flex items-center gap-2">
                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage((p) => p - 1)}
                                className="w-9 h-9 rounded-full border bg-white flex items-center justify-center text-gray-500 hover:bg-gray-100 transition disabled:opacity-40"
                            >
                                ‹
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                                (page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm transition
                                        ${page === currentPage
                                                ? "bg-[#0E64D1] text-white shadow"
                                                : "border bg-white text-gray-600 hover:bg-gray-100"
                                            }
                                        `}
                                    >
                                        {page}
                                    </button>
                                )
                            )}

                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage((p) => p + 1)}
                                className="w-9 h-9 rounded-full border bg-white flex items-center justify-center text-gray-500 hover:bg-gray-100 transition disabled:opacity-40"
                            >
                                ›
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
