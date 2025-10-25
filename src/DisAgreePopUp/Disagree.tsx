import React from "react";
import { useNavigate } from "react-router-dom";
import ListRequest from "../ListRequest";

const PopUpDisAgree: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-[#29292980]/50 z-40"></div>
            <div className="absolute inset-0 z-0">
                <ListRequest />
            </div>

            <div className="bg-white rounded-xl shadow-lg w-[526px] h-[398px] p-6 relative z-50">
                <div className="w-[437px] h-[307px] ml-5 mt-5">
                    {/* Header */}
                    <h2 className="text-[20px] font-semibold text-[#2F2F2F] mb-1">
                        Apakah Anda yakin ingin menolak permintaan ini?
                    </h2>
                    <p className="text-sm text-[#6B7280] mb-5">
                        Harap berikan alasan penolakan Anda
                    </p>

                    {/* Textarea */}
                    <div className="mb-6">
                        <label className="text-sm text-[#2F2F2F] font-medium mb-2 block">
                            Keterangan
                        </label>
                        <textarea
                            className="border border-gray-300 rounded-md w-full h-[120px] p-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F86358]"
                            placeholder="Maksimal klaim transport 150,000"
                        ></textarea>
                    </div>

                    {/* Tombol aksi */}
                    <div className="flex justify-center">
                        <button
                            onClick={() => navigate("/proposal-advance/list-request")}
                            className="px-5 py-2 w-[218.5px] h-[37px] text-gray-600 hover:text-gray-800 text-[14px] font-semibold"
                        >
                            Tutup
                        </button>
                        <button
                            onClick={() => navigate("/proposal-advance/list-request")}
                            className="px-6 py-2 w-[218.5px] h-[37px] bg-[#F86358] hover:bg-[#e6554d] text-white rounded-md text-[14px] font-semibold"
                        >
                            Tolak
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUpDisAgree;
