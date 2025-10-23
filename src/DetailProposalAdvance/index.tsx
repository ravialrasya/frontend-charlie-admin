import { useState } from "react";
import Sidebar from "../components/layout/sidebar";
import Header from "../components/layout/header";
import { FaChevronLeft, FaDownload } from "react-icons/fa";

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
      deskripsi:(
      <>
        Transport dari Rumah/Kos ke Bandara Soekarno <br /> Hatta (Febri & Lia)
      </>
    ),
        
      tanggalAwal: "17/09/2024",
      tanggalAkhir: "17/09/2024",
      estimasiBiaya: "Rp 200,000",
      biayaReal: "Rp 200,000",
    },
    {
      no: 2,
      deskripsi:(
      <>
        Transport dari Rumah/Kos ke Bandara Soekarno <br /> Hatta (Febri & Lia)
      </>
    ),
      tanggalAwal: "17/09/2024",
      tanggalAkhir: "17/09/2024",
      estimasiBiaya: "Rp 200,000",
      biayaReal: "Rp 200,000",
    },
    {
      no: 3,
      deskripsi:(
      <>
        Transport dari Rumah/Kos ke Bandara Soekarno <br /> Hatta (Febri & Lia)
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

        {/* CONTENT */}
        <div className="p-10">
          {/* Title */}
          <div className="flex items-center gap-2 mb-8">
            <FaChevronLeft className="text-gray-500" />
            <h2 className="text-[#2F2F2F] text-[20px] font-semibold">
              Detail Proposal Advance
            </h2>
          </div>

          <div className="p-8">
            {/* Profile Section */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-[67px] h-[67px] flex items-center justify-center rounded-full bg-[#1176BC1A] ">
                  <img src="/img/user (1) 1.png" alt="" width={33.5} height={33.5} />
                </div>
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
              <div className=" items-center ">
                <button className="flex items-center gap-2 bg-[#0E64D1] h-[40px] w-[124px] text-[#FFFFFF] text-[14px] px-4  py-2 rounded-md cursor-pointer">
                  <FaDownload /> Download
                </button>
              </div>
            </div>

            {/* Info Keperluan */}
            <div >
              <div className=" flex items-center gap-4">

                <div className="mb-6">
                  <p className="text-[#928FA6] text-sm mb-3">Keperluan</p>
                  <p className="text-[#2F2F2F] font-medium">
                    Visit PT Sulawesi Energi Nusantara
                  </p>
                </div>
                <div className="items-center justify-end ml-auto">
                  <div className="flex items-center justify-center bg-[#4CD964]/10 border-[#4CD964] ml-auto text-[#4CD964] cursor-pointer border font-medium w-[99px] h-[50px] rounded-md">
                    Disetujui
                  </div>
                </div>


              </div>

              {/* Total Biaya */}
              <div className="mb-6 flex">
                <p className="text-[#928FA6] text-sm mb-1">Total Biaya :</p>
                <p className="text-[#0E64D1] font-semibold text-[16px] ml-1">
                  Rp 600,000
                </p>
              </div>

            </div>


            {/* Table Section */}
            <div className="bg-white rounded-lg p-8 h-[294px] w-full">
              <div className="overflow-x-auto overflow-y-auto">
                <table className="w-full text-[14px]">
                  <thead className="bg-white text-left font-semibold">
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
                          i % 3 === 1 ? "bg-white" : "bg-[#F6F6F8]"
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
            </div>
              <p className="text-[#928FA6] text-sm mt-4">
                Showing 1 to {expenses.length} of 1 entries
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
