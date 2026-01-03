import { useState } from "react";
import Sidebar from "../components/layout/sidebar";
import Header from "../components/layout/header";


interface Expense {
  no: number;
  deskripsi: React.ReactNode;
  estimasiBiaya: string;

}
export default function DetailProposalAdvance() {
  const [expenses] = useState<Expense[]>([
    {
      no: 1,
      deskripsi: (
        <>
          Transport dari Rumah/Kos ke Bandara Soekarno 
          Hatta (Febri & Lia)
        </>
      ),

      estimasiBiaya: "Rp 200,000",

    },
    {
      no: 2,
      deskripsi: (
        <>
          Transport dari Rumah/Kos ke Bandara Soekarno 
          Hatta (Febri & Lia)
        </>
      ),

      estimasiBiaya: "Rp 200,000",

    },
    {
      no: 3,
      deskripsi: (
        <>
          Transport dari Rumah/Kos ke Bandara Soekarno 
          Hatta (Febri & Lia)
        </>
      ),

      estimasiBiaya: "Rp 200,000",

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


          </div>

          <div className=" rounded-lg p-8">
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

            </div>

            {/* INFO */}
            <div className="mb-6 flex items-start justify-between">
              {/* KIRI - TEXT (NORMAL, BUKAN FLEX) */}
              <div>
                <p className="text-[#928FA6] text-sm mb-1">Keperluan</p>
                <p className="text-[#2F2F2F] font-medium">
                  Visit PT Sulawesi Energi Nusantara
                </p>
                <p className="text-[#928FA6] text-sm mt-1">
                  Periode : 17-09-2024 – 22-09-2024
                </p>
              </div>

              {/* KANAN - STATUS */}
              <div className="flex items-center justify-center bg-[#D9DBE9] text-[#6E7191] font-medium w-[120px] h-[44px] rounded-md">
                Menunggu
              </div>
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
            <div className="bg-white rounded-2xl  p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-[14px]">
                  <thead className="text-left font-semibold">
                    <tr>
                      <th className="px-4 py-2">No</th>
                      <th className="px-4 py-2">Deskripsi</th>

                      <th className="px-4 py-2">Estimasi Biaya</th>

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
                        <td className="px-4 py-3">{e.estimasiBiaya}</td>

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
