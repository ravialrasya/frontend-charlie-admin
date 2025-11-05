import { X } from "lucide-react";
import DetailKaryawan from '../DetailKaryawan'
import { useNavigate } from "react-router-dom";





export default function DetailAbsensi() {
  const navigate = useNavigate();
  return (

    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="absolute inset-0 bg-black/30 z-40"></div>


      <div className="absolute inset-0 z-0 "><DetailKaryawan /></div>
      <div className="bg-white rounded-xl shadow-lg w-[752px] h-[345px] p-10 relative z-50">
        {/* Tombol Close */}
        <button

          onClick={() => navigate("/karyawan/detail-karyawan")}
          className="absolute top-6 right-5 text-[#928FA6] cursor-pointer"
        >


          <X size={25} />
        </button>

        {/* Header tanggal */}
        <div className="flex items-center gap-2 text-gray-700 mb-5">
          <img src="/img/calendar-minus 1.png" alt="" width={16} height={16} />
          <span className="text-[16px] text-[#2F2F2F]">17/09/2024</span>
        </div>
        <div className="mb-5"><img src="/img/Line 1.png" alt="" /></div>

        <div className="grid grid-cols-2 gap-6 justify-between ">
          {/* Clock In */}
          <div>
            <h3 className="font-inter text-[16px] text-[#2F2F2F] -mt-1 ">Clock In</h3>
            <p className="text-[#0E64D1] text-[16px] font-semibold mb-3">08:00</p>
            <div className="flex items-start gap-2 mt-2">
              <img src="/img/carbon_location (2).png" alt="" />
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
            <h3 className="font-inter text-[16px] text-[#2F2F2F] ">Clock Out</h3>
            <p className="text-[#F86358] text-[16px] font-semibold mb-3">16:00</p>
            <div className="flex items-start gap-2 mt-2">
              <img src="/img/carbon_location.png" alt="" />
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

  );
}

