import { useState } from "react";
import Sidebar from "../components/layout/sidebar";
import Header from "../components/layout/header";
import { FaChevronLeft, FaDownload } from "react-icons/fa";

interface Expense {
  no: number;
  deskripsi: string;
  tanggalAwal: string;
  tanggalAkhir: string;
  estimasiBiaya: string;
  biayaReal: string;
}

export default function DetailProposalAdvance() {
  const [expenses] = useState<Expense[]>([
    {
      no: 1,
      deskripsi:
        "Transport dari Rumah/Kos ke Bandara Soekarno Hatta (Febri & Lia)",
      tanggalAwal: "17/09/2024",
      tanggalAkhir: "17/09/2024",
      estimasiBiaya: "Rp 200,000",
      biayaReal: "Rp 200,000",
    },
    {
      no: 2,
      deskripsi:
        "Transport dari Rumah/Kos ke Bandara Soekarno Hatta (Febri & Lia)",
      tanggalAwal: "17/09/2024",
      tanggalAkhir: "17/09/2024",
      estimasiBiaya: "Rp 200,000",
      biayaReal: "Rp 200,000",
    },
    {
      no: 3,
      deskripsi:
        "Transport dari Rumah/Kos ke Bandara Soekarno Hatta (Febri & Lia)",
      tanggalAwal: "17/09/2024",
      tanggalAkhir: "17/09/2024",
      estimasiBiaya: "Rp 200,000",
      biayaReal: "Rp 200,000",
    },
  ]);

  return (
    <div className="flex bg-[#F6F6F8]">
      <Sidebar />
      <div className="w-full min-h-screen">
        <Header />

        {/* CONTENT */}
        <div className="p-10">
          {/* Title */}
          <div className="flex items-center gap-2 mb-8">
            <FaChevronLeft className="text-gray-500" />
            <h2 className="text-[#2F2F2F] text-[20px] font-semibold">
              Detail Proposal Advance
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow p-8">
            {/* Profile Section */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <img
                  src="/img/avatar-default.png"
                  alt="profile"
                  className="w-14 h-14 rounded-full bg-gray-100"
                />
                <div>
                  <h3 className="font-semibold text-[#2F2F2F] text-[16px]">
                    Sava Alya Andini
                  </h3>
                  <p className="text-[#0E64D1] text-sm leading-tight">
                    161188559
                  </p>
                  <p className="text-[#928FA6] text-sm leading-tight">
                    Staff Admin
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-[#0E64D1] text-white text-sm px-4 py-2 rounded-md">
                  <FaDownload /> Download
                </button>
                <div className="bg-[#22C55E] text-white text-sm font-medium px-4 py-2 rounded-md">
                  Disetujui
                </div>
              </div>
            </div>

            {/* Info Keperluan */}
            <div className="mb-6">
              <p className="text-[#928FA6] text-sm mb-1">Keperluan</p>
              <p className="text-[#2F2F2F] font-medium">
                Visit PT Sulawesi Energi Nusantara
              </p>
            </div>

            {/* Total Biaya */}
            <div className="mb-6">
              <p className="text-[#928FA6] text-sm mb-1">Total Biaya :</p>
              <p className="text-[#0E64D1] font-semibold text-[16px]">
                Rp 600,000
              </p>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto rounded-md border border-gray-100">
              <table className="w-full text-[14px]">
                <thead className="bg-[#F6F6F8] text-left font-semibold">
                  <tr>
                    <th className="px-4 py-2">No</th>
                    <th className="px-4 py-2">Deskripsi</th>
                    <th className="px-4 py-2">Tanggal Awal</th>
                    <th className="px-4 py-2">Tanggal Akhir</th>
                    <th className="px-4 py-2">Estimasi Biaya</th>
                    <th className="px-4 py-2">Biaya Real</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((e, i) => (
                    <tr
                      key={i}
                      className={
                        i % 2 === 0 ? "bg-white" : "bg-[#F6F6F8]"
                      }
                    >
                      <td className="px-4 py-2">{e.no}</td>
                      <td className="px-4 py-2">{e.deskripsi}</td>
                      <td className="px-4 py-2">{e.tanggalAwal}</td>
                      <td className="px-4 py-2">{e.tanggalAkhir}</td>
                      <td className="px-4 py-2">{e.estimasiBiaya}</td>
                      <td className="px-4 py-2">{e.biayaReal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer Info */}
            <p className="text-[#928FA6] text-sm mt-4">
              Showing 1 to {expenses.length} of 1 entries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
