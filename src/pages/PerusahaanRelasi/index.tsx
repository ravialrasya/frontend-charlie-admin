import { useEffect, useState } from "react";
import Sidebar from "../../components/layout/sidebar";
import Header from "../../components/layout/header";
import { useCompanyStore } from "../../store/companyStore";
import Input from "../../components/ui/Input";
import { Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";

export default function PerusahaanRelasi() {
    const { companies, loading, fetchCompanies, deleteCompany, createCompany, updateCompany } = useCompanyStore();
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [openModal, setOpenModal] = useState(false);
    const [mode, setMode] = useState<"add" | "edit">("add");
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_PAGE = 10;

    const filteredCompanies = companies.filter((item) =>
        item.company.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(
        filteredCompanies.length / ITEMS_PER_PAGE
    );

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const paginatedCompanies = filteredCompanies.slice(
        startIndex,
        endIndex
    );

    const [formData, setFormData] = useState({
        company: "",
        email: "",
        phone: "",
        pic: "",
        address: "",
    });

    const openAddModal = () => {
        setMode("add");
        setSelectedId(null);
        setFormData({
            company: "",
            email: "",
            phone: "",
            pic: "",
            address: "",
        });
        setOpenModal(true);
    };

    const openEditModal = (item: any) => {
        setMode("edit");
        setSelectedId(item.id);
        setFormData({
            company: item.company,
            email: item.email,
            phone: item.phone,
            pic: item.person_in_charge,
            address: item.address ?? "",
        });
        setOpenModal(true);
    };

    const handleSubmit = async () => {
        const payload = {
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            person_in_charge: formData.pic,
        };

        try {
            if (mode === "add") {
                await createCompany(payload);
            } else if (mode === "edit" && selectedId) {
                await updateCompany(selectedId, payload);
            }

            await fetchCompanies();
            setOpenModal(false);
        } catch (error) {
            console.error("Gagal submit company", error);
        }
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [search]);

    useEffect(() => {
        fetchCompanies();
    }, [fetchCompanies]);

    return (
        <div className="flex min-h-screen bg-[#F6F6F8]">
            <Sidebar />

            <div className="flex-1">
                <Header />

                {openModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        {/* BACKDROP */}
                        <div
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                            onClick={() => setOpenModal(false)}
                        />

                        {/* MODAL */}
                        <div className="relative w-full max-w-lg bg-white rounded-2xl p-10 shadow-xl animate-scaleIn">
                            <h2 className="text-lg font-semibold text-gray-800 mb-1">
                                {mode === "add"
                                    ? "Tambah Perusahaan Relasi"
                                    : "Edit Perusahaan Relasi"}
                            </h2>

                            <p className="text-sm text-gray-500 mb-6">
                                Silahkan isi form dibawah ini sesuai dengan perusahaan relasi
                                yang ingin anda {mode === "add" ? "tambahkan" : "ubah"}
                            </p>

                            <div className="space-y-4">
                                <Input
                                    label="Nama Perusahaan Relasi"
                                    value={formData.company}
                                    onChange={(e) =>
                                        setFormData({ ...formData, company: e.target.value })
                                    }
                                    placeholder="Isi Nama Perusahaan Relasi"
                                />

                                <Input
                                    label="Email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    placeholder="Isi email"
                                />

                                <Input
                                    label="Nomor Telfon"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({ ...formData, phone: e.target.value })
                                    }
                                    placeholder="Isi nomor telfon"
                                />

                                <Input
                                    label="Penanggung jawab"
                                    value={formData.pic}
                                    onChange={(e) =>
                                        setFormData({ ...formData, pic: e.target.value })
                                    }
                                    placeholder="Nama penghubung"
                                />

                                <div>
                                    <label className="text-sm font-medium text-gray-700">
                                        Alamat
                                    </label>
                                    <textarea
                                        rows={3}
                                        value={formData.address}
                                        onChange={(e) =>
                                            setFormData({ ...formData, address: e.target.value })
                                        }
                                        placeholder="Isi alamat"
                                        className="mt-1 w-full px-4 py-2.5 rounded-lg border border-[#CCCCCC] text-sm focus:ring-2 focus:ring-blue-200 focus:outline-none resize-none"
                                    />
                                </div>
                            </div>

                            {/* ACTION */}
                            <div className="flex items-center justify-between mt-6">
                                <button
                                    onClick={() => setOpenModal(false)}
                                    className="text-sm text-gray-500 hover:text-gray-700 transition"
                                >
                                    Batalkan
                                </button>

                                <button
                                    onClick={handleSubmit}
                                    className="px-6 py-2 rounded-lg bg-[#0E64D1] text-white text-sm hover:bg-blue-700 transition"
                                >
                                    {mode === "add" ? "Tambahkan" : "Simpan"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="p-8">
                    {/* PAGE TITLE */}
                    <div className="mb-6">
                        <h1 className="text-xl font-semibold text-gray-800">
                            Perusahaan Relasi
                        </h1>
                        <p className="text-sm text-gray-500">
                            Kelola daftar perusahaan relasi Anda
                        </p>
                    </div>

                    {/* TOP BAR */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        {/* BUTTON */}
                        <button
                            onClick={openAddModal}
                            className="flex items-center gap-2 bg-[#0E64D1] text-white text-sm px-5 py-2.5 rounded-lg shadow hover:bg-blue-700 hover:scale-[1.02] transition-all"
                        >
                            <span className="text-lg leading-none">+</span>
                            Tambah Perusahaan Relasi
                        </button>

                        {/* SEARCH */}
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Cari nama perusahaan relasi..."
                            className="w-[360px] max-w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition bg-white"
                        />

                    </div>

                    {/* TABLE CARD */}
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-3">
                        <div className="overflow-x-auto rounded-md">
                            <table className="w-full text-sm">
                                <thead className="bg-white text-left font-semibold">
                                    <tr>
                                        <th className="px-5 py-4 font-medium">Perusahaan</th>
                                        <th className="px-5 py-4 font-medium">Email</th>
                                        <th className="px-5 py-4 font-medium">Penghubung</th>
                                        <th className="px-5 py-4 font-medium">No Telp</th>
                                        <th className="px-5 py-4 font-medium">Time Report (Jam)</th>
                                        <th className="px-5 py-4 font-medium text-center">Aksi</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {loading ? (
                                        <tr>
                                            <td colSpan={6} className="py-10 text-center text-gray-400">
                                                Memuat data...
                                            </td>
                                        </tr>
                                    ) : paginatedCompanies.length === 0 ? (
                                        <tr>
                                            <td colSpan={6} className="py-10 text-center text-gray-400">
                                                Data tidak ditemukan
                                            </td>
                                        </tr>
                                    ) : (
                                        paginatedCompanies.map((item, i) => (
                                            <tr
                                                key={i}
                                                className={`${i % 2 === 0 ? "bg-[#F6F6F8]" : "bg-white"} transition`}
                                            >
                                                <td className="px-5 py-4 font-medium text-gray-800">
                                                    {item.company}
                                                </td>
                                                <td className="px-5 py-4 text-blue-600 underline cursor-pointer">
                                                    {item.email}
                                                </td>
                                                <td className="px-5 py-4">{item.person_in_charge}</td>
                                                <td className="px-5 py-4">{item.phone}</td>
                                                <td className="px-5 py-4">{item.total_hour}</td>

                                                {/* ACTION */}
                                                <td className="px-5 py-4">
                                                    <div className="flex items-center justify-center gap-4">
                                                        <Link to={`/perusahaan-relasi/detail/${item.id}`} className="hover:scale-110 transition">
                                                            <img
                                                                src="/img/Vector (22).png"
                                                                className="w-5 h-5 opacity-80 hover:opacity-100"
                                                            />
                                                        </Link>

                                                        <button onClick={() => openEditModal(item)}>
                                                            <img
                                                                src="/img/Vector (23).png"
                                                                className="w-5 h-5 cursor-pointer hover:scale-110 transition"
                                                            />
                                                        </button>

                                                        <button
                                                            onClick={() => deleteCompany(item.id)}
                                                            className="hover:scale-110 transition cursor-pointer"
                                                        >
                                                            <Trash2Icon className="w-5 h-5 opacity-80 hover:opacity-100 text-red-700" />
                                                        </button>
                                                    </div>
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
                            Showing {paginatedCompanies.length} of {filteredCompanies.length} data
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
