import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DetailTimeReport from "../DetailTimeReport";

export default function TambahPerusahaanRelasi() {
  const navigate = useNavigate();

  // 🔑 STATE
  const [isEdit, setIsEdit] = useState(false);
  const [jamKerja, setJamKerja] = useState(1);
  const [alamat, setAlamat] = useState("");

  const handleSave = () => {
    console.log({
      jamKerja,
      alamat,
    });

    setIsEdit(false); // kunci kembali
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-60">
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/30 z-50"></div>

      <div className="absolute inset-0 z-0">
        <DetailTimeReport />
      </div>

      {/* MODAL */}
      <div className="bg-white rounded-xl shadow-lg w-[303px] h-[428px] p-7 relative z-50">
        <div className="space-y-5 p-2">

          {/* Title */}
          <div>
            <h2 className="text-[16px] font-bold text-[#2F2F2F]">
              Apakah Anda yakin ingin merevisi permintaan ini?
            </h2>
            <p className="text-[12px] text-[#928FA6] mt-1">
              Harap berikan alasan anda merevisi
            </p>
          </div>

          {/* Input fields */}
          <div className="space-y-4">

            {/* Jam Kerja */}
            <div>
              <label className="text-[14px] font-medium text-[#2F2F2F]">
                Jam Kerja
              </label>

              <div className="flex mt-1">
                <input
                  type="number"
                  value={jamKerja}
                  onChange={(e) => setJamKerja(Number(e.target.value))}
                  disabled={!isEdit}
                  className={`w-full px-3 py-2 border-[1px] rounded-l-lg text-[14px]
                    ${!isEdit
                      ? "bg-gray-100 cursor-not-allowed border-[#DEDEDE]"
                      : "bg-white border-[#928FA6]"
                    }
                  `}
                />
                <div className="px-3 py-2 border-[1px] border-l-0 border-[#DEDEDE] rounded-r-lg text-[14px] bg-[#F2F4F7] text-[#2F2F2F]">
                  Jam
                </div>
              </div>
            </div>

            {/* Keterangan */}
            <div>
              <label className="text-[14px] font-medium text-[#2F2F2F]">
                Keterangan
              </label>
              <textarea
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                disabled={!isEdit}
                placeholder="Isi keterangan"
                className={`w-full mt-1 px-3 py-2 border-[1px] rounded-lg text-[14px] h-[90px] resize-none
                  ${!isEdit
                    ? "bg-gray-100 cursor-not-allowed border-[#DEDEDE]"
                    : "bg-white border-[#928FA6]"
                  }
                `}
              />
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="flex justify-center gap-2 pt-3">

            <button
              onClick={() => navigate(-1)}
              className="px-3 py-2 w-[213.5px] h-[37px] bg-[#F2F4F7] text-[#2F2F2F] rounded-lg font-medium"
            >
              Tutup
            </button>

            {!isEdit ? (
              <button
                onClick={() => setIsEdit(true)}
                className="px-3 py-2 w-[213.5px] h-[37px] bg-[#0E64D1] text-white rounded-lg font-medium"
              >
                Revisi
              </button>
            ) : (
              <button
                onClick={handleSave}
                className="px-3 py-2 w-[213.5px] h-[37px] bg-green-600 text-white rounded-lg font-medium"
              >
                Terima
              </button>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
