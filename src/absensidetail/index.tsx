import { X } from "lucide-react";
import Absensi from '../Absensi'
import { useNavigate } from "react-router-dom";





export default function DetailAbsensi() {
    const navigate = useNavigate();
    return (

        <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <div className="absolute inset-0 bg-black/30 z-40"></div>


            <div className="absolute inset-0 z-0 "><Absensi /></div>
            <div className="bg-white rounded-xl shadow-lg w-[752px] h-[380px] p-7 relative z-50">
                <div className="ml-5">
                    {/* Tombol Close */}
                    <button

                        onClick={() => navigate("/absensi")}
                        className="absolute top-6 right-6 text-[#928FA6]"
                    >


                        <X size={25}/>
                    </button>

                    {/* Header tanggal */}
                    <div className=" h-[50px]">
                        <div className=" items-center gap-2 text-gray-700 mb-10 ">
                            <div className="flex items-center gap-2 text-lg font-semibold mb-2">
                                <img src="/img/Vector (7).png" alt="" width={13.33} height={13.33} />
                                <div className="ml-2 space-x-1">
                                    <span className="text-[#2F2F2F] text-[16px]">Sava Alya Andini</span>
                                    <span className="text-[#928FA6] text-[16px] ">
                                        (Staff Admin Support)
                                    </span>
                                </div>
                            </div>
                            <div className=" space-x-2 flex items-center gap-2 text-lg font-semibold">
                                <img src="/img/calendar-minus 1.png" alt="" width={16} height={16} />
                                <div className="space-x-1">
                                    <span className="font-medium">17/09/2024</span>
                                </div>



                            </div>
                        </div>
                    </div>
                    <div className="mt-[40px]"><img src="/img/Line 1.png" alt="" /></div>
                    <div className="w-[660px] h-[210px] mt-[40px] "> 

                        <div className="grid grid-cols-2 gap-6">
                            {/* Clock In */}
                            <div>
                                <h3 className="font-inter text-[16px] text-[#2F2F2F] mb-1">Clock In</h3>
                                <p className="text-[#0E64D1] text-[16px] font-semibold">08:00</p>
                                <div className="flex items-start gap-2 mt-2">
                                    <img src="/img/Vector (3).png" alt="" />
                                    <div>
                                        <p className="text-[#0E64D1] text-[14px] font-semibold mb-1">Lokasi Clock In</p>
                                        <p className="text-[12px] font-inter text-[#928FA6]">
                                            Sampoerna Strategic Square,
                                            Jalan Jendral Sudirman Kav. 45-46,
                                            Karet Semanggi, Kecamatan Setiabudi,
                                            Jakarta Selatan 12930
                                        </p>
                                        <p className="mt-2 m text-[14px] font-semibold text-[#2F2F2F]">Keterangan</p>
                                        <p className="text-gray-600">-</p>
                                    </div>
                                </div>
                            </div>

                            {/* Clock Out */}
                            <div className="-mt-1">
                                <h3 className="font-inter text-[16px] text-[#2F2F2F] mb-1">Clock Out</h3>
                                <p className="text-[#F86358] text-[16px] font-semibold">16:00</p>
                                <div className="flex items-start gap-2 mt-2">
                                    <img src="/img/Vector (5).png" alt="" />
                                    <div>
                                        <p className="text-[#F86358] text-[14px] font-semibold mb-1">Lokasi Clock Out</p>
                                        <p className="text-[12px] font-inter text-[#928FA6] ">
                                            Sampoerna Strategic Square,
                                            Jalan Jendral Sudirman Kav. 45-46,
                                            Karet Semanggi, Kecamatan Setiabudi,
                                            Jakarta Selatan 12930
                                        </p>
                                        <p className="mt-2 ml-2 text-[14px] font-semibold text-[#2F2F2F]">Keterangan</p>
                                        <p className="text-gray-600">-</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
}

