import { useState } from "react";
import Sidebar from "../components/layout/sidebar";
import Header from "../components/layout/header";
import { FaChevronLeft, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Expense {
  no: number;
  deskripsi: React.ReactNode;
  tanggalAwal: string;
  tanggalAkhir: string;
  estimasiBiaya: string;
  biayaReal: string;
}

export default function DetailProposalAdvance() {
  const [expenses] = useState<Expense[]>([
    {
      no: 1,
      deskripsi: (
        <>
          Transport dari Rumah/Kos ke Bandara Soekarno <br />
          Hatta (Febri & Lia)
        </>
      ),
      tanggalAwal: "17/09/2024",
      tanggalAkhir: "17/09/2024",
      estimasiBiaya: "Rp 200,000",
      biayaReal: "Rp 200,000",
    },
    {
      no: 2,
      deskripsi: (
        <>
          Transport dari Rumah/Kos ke Bandara Soekarno <br />
          Hatta (Febri & Lia)
        </>
      ),
      tanggalAwal: "17/09/2024",
      tanggalAkhir: "17/09/2024",
      estimasiBiaya: "Rp 200,000",
      biayaReal: "Rp 200,000",
    },
    {
      no: 3,
      deskripsi: (
        <>
          Transport dari Rumah/Kos ke Bandara Soekarno <br />
          Hatta (Febri & Lia)
        </>
      ),
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

        <div className="p-10">
          {/* TITLE */}
          <div className="flex items-center gap-2 mb-6">
            <Link to="/proposal-advance/on-going">
              <FaChevronLeft className="text-gray-500" />
            </Link>
            <h2 className="text-[#2F2F2F] text-[20px] font-semibold">
              Detail Proposal Advance
            </h2>
          </div>

          <div className="bg-white rounded-lg p-8">
            {/* HEADER INFO */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-[67px] h-[67px] flex items-center justify-center rounded-full bg-[#1176BC1A]">
                  <img src="/img/user (1) 1.png" alt="" width={34} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#2F2F2F] text-[16px]">
                    Thomas Seisei
                  </h3>
                  <p className="text-[#0E64D1] text-sm">161188559</p>
                  <p className="text-[#928FA6] text-sm">Supervisor Admin</p>
                </div>
              </div>

              {/* STATUS */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center bg-[#D9DBE9] text-[#6E7191] font-medium w-[120px] h-[44px] rounded-md">
                  Menunggu
                </div>
                <button className="flex items-center gap-2 bg-[#0E64D1] h-[44px] px-4 text-white text-sm rounded-md">
                  <FaDownload /> Download
                </button>
              </div>
            </div>

            {/* INFO */}
            <div className="mb-6">
              <p className="text-[#928FA6] text-sm mb-1">Keperluan</p>
              <p className="text-[#2F2F2F] font-medium">
                Visit PT Sulawesi Energi Nusantara
              </p>
              <p className="text-[#928FA6] text-sm mt-1">
                Periode : 17-09-2024 – 22-09-2024
              </p>
            </div>

            {/* ANGGOTA */}
            <div className="mb-6">
              <p className="text-[#928FA6] text-sm mb-2">Anggota :</p>
              <ul className="list-disc list-inside text-[#2F2F2F] text-sm space-y-1">
                <li>Angga</li>
                <li>Ari</li>
                <li>Angga</li>
              </ul>
            </div>

            {/* TOTAL */}
            <div className="mb-6 flex items-center">
              <p className="text-[#928FA6] text-sm">Total Biaya :</p>
              <p className="text-[#0E64D1] font-semibold text-[16px] ml-2">
                Rp 600,000
              </p>
            </div>

            {/* TABLE */}
            <div className="bg-white rounded-lg border p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-[14px]">
                  <thead className="text-left font-semibold">
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
                        className={i % 2 === 0 ? "bg-[#F6F6F8]" : "bg-white"}
                      >
                        <td className="px-4 py-3">{e.no}</td>
                        <td className="px-4 py-3">{e.deskripsi}</td>
                        <td className="px-4 py-3">{e.tanggalAwal}</td>
                        <td className="px-4 py-3">{e.tanggalAkhir}</td>
                        <td className="px-4 py-3">{e.estimasiBiaya}</td>
                        <td className="px-4 py-3">{e.biayaReal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#928FA6] text-sm mt-4">
                Showing 1 to {expenses.length} of 1 entries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
