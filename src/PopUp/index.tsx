import React from "react";
import { useNavigate } from "react-router-dom";
import ListRequest from "../ListRequest";

const TandaTanganAdvance: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50  ">
            <div className="absolute inset-0 bg-[#29292980]/50 z-40"></div>
            <div className="absolute inset-0 z-0 "><ListRequest /></div>
            <div className="bg-white rounded-xl shadow-lg w-[526px] h-[398px] p-6 relative z-50">
                {/* Tombol close (kanan atas) */}
                
                {/* Header */}
                <div className="w-[437px] h-[307px] ml-5 mt-5 ">
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">
                        Tanda Tangani Proposal Advance
                    </h2>
                    <p className="text-sm text-gray-500 mb-5">
                        Untuk menyetujui pengajuan proposal advance, silakan lakukan tanda tangan
                    </p>

                    {/* Kotak tanda tangan */}
                    <div className="mb-6">
                        <label className="text-sm text-gray-700 mb-2 block">
                            Tanda tangan disini
                        </label>
                        <div className="border border-gray-300 rounded-md h-[120px]"></div>
                    </div>

                    {/* Tombol aksi */}
                    <div className="flex justify-center ">
                        <button
                            onClick={() => navigate("/proposal-advance/list-request")}
                            className="px-5 py-2 w-[218.5px] h-[37px] text-gray-600 hover:text-gray-800 text-[14px] font-semibold"
                        >
                            Tutup
                        </button>
                        <button
                            onClick={() => navigate("/proposal-advance/list-request")}
                            className="px-6 py-2 w-[218.5px] h-[37px] bg-[#4CD964] hover:bg-[#3fc355] text-white rounded-md text-[14px] font-semibold "
                        >
                            Setuju
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TandaTanganAdvance;
