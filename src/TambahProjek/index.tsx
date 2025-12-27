import { useNavigate } from "react-router-dom";
import { ChevronDown, Calendar } from "lucide-react";
import Projek from "../Projek";

export default function TambahProjek() {
    const navigate = useNavigate();

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black/30 z-40"></div>
        
                    <div className="absolute inset-0 z-0">
                        <Projek />
                    </div>

            {/* Modal */}
            <div className="bg-white rounded-xl shadow-lg w-[458px] h-[500px] p-7 relative z-50">

                {/* === HEADER === */}
                <div>
                    <h2 className="text-[20px] font-semibold text-[#2F2F2F] mt-5">
                        Tambah Projek
                    </h2>
                    <p className="text-[14px] text-[#928FA6] mt-1 leading-relaxed">
                        Silahkan isi form dibawah ini sesuai dengan projek yang ingin anda tambahkan
                    </p>
                </div>

                {/* === FORM === */}
                <div className="mt-6 space-y-5">

                    {/* Nama Projek */}
                    <div className="space-y-1">
                        <label className="text-[14px] font-medium text-[#2F2F2F]">
                            Nama Project
                        </label>
                        <input
                            type="text"
                            placeholder="Isi nama projek"
                            className="w-full px-3 py-2 border border-[#DEDEDE] bg-white rounded-lg text-[14px]"
                        />
                    </div>

                    {/* Nama Perusahaan Relasi */}
                    <div className="space-y-1">
                        <label className="text-[14px] font-medium text-[#2F2F2F]">
                            Nama Perusahaan Relasi
                        </label>

                        <div className="relative">
                            <select className="appearance-none w-full px-3 py-2 border border-[#DEDEDE] bg-white rounded-lg text-[14px] text-gray-600 cursor-pointer">
                                <option value="">Pilih nama perusahaan relasi</option>
                                <option value="PT Mineral Alam Abadi">PT Mineral Alam Abadi</option>
                                <option value="PT Rimba Sejahtera">PT Rimba Sejahtera</option>
                            </select>

                            <ChevronDown
                                size={18}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            />
                        </div>
                    </div>

                    {/* Tanggal Mulai */}
                    <div className="space-y-1">
                        <label className="text-[14px] font-medium text-[#2F2F2F]">
                            Tanggal Mulai
                        </label>

                        <div className="relative">
                            <input
                                type="date"
                                className="w-full px-3 py-2 border border-[#DEDEDE] bg-white rounded-lg text-[14px]"
                            />

                            <Calendar
                                size={18}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* === BUTTONS === */}
                <div className="flex justify-center gap-2 mt-10 ">

                    <button
                        onClick={() => navigate(-1)}
                        className="px-3 py-2 w-[213.5px] cursor-pointer h-[37px] bg-[#F2F4F7] text-[#2F2F2F] rounded-lg font-medium"
                    >
                        Batalkan
                    </button>

                    <button
                        className="px-3 py-2 w-[213.5px] cursor-pointer h-[37px] bg-[#0E64D1] text-white rounded-lg font-medium"
                    >
                        Tambahkan
                    </button>
                </div>
            </div>
        </div>
    );
}
