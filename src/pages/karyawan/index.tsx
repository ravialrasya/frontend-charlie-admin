import { useState } from "react";
import Sidebar from "../../components/layout/sidebar";
import Header from "../../components/layout/header";

interface Company {
  perusahaan: string;
  email: string;
  penghubung: string;
  noTelp: string;
  timeReport: string;
}

export default function PerusahaanRelasi() {
  const [data] = useState<Company[]>([
    {
      perusahaan: "PT Mineral Alam Abadi 2023",
      email: "mineralalam@gmail.com",
      penghubung: "Bpk iman",
      noTelp: "085311111010",
      timeReport: "120",
    },
    {
      perusahaan: "PT Mineral Alam Abadi 2023",
      email: "mineralalam@gmail.com",
      penghubung: "Bpk iman",
      noTelp: "085311111010",
      timeReport: "120",
    },
    {
      perusahaan: "PT Mineral Alam Abadi 2023",
      email: "mineralalam@gmail.com",
      penghubung: "Bpk iman",
      noTelp: "085311111010",
      timeReport: "120",
    },
    {
      perusahaan: "PT Mineral Alam Abadi 2023",
      email: "mineralalam@gmail.com",
      penghubung: "Bpk iman",
      noTelp: "085311111010",
      timeReport: "120",
    },
  ]);

  return (
    <div className="flex bg-[#F6F6F8]">
      <Sidebar />

      <div className="w-full min-h-screen">
        <Header />

        <div className="p-10">
          <h2 className="text-[#2F2F2F] text-[20px] font-semibold mb-10">
            Perusahaan Relasi
          </h2>

          {/* TOP BAR — Button + Search */}
          <div className="flex items-center space-x-5 mb-6">

            {/* BUTTON */}
            <button className="flex items-center gap-2 bg-[#0E64D1] text-white  text-[14px] px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              <span className="text-xl">+</span>
              Tambah Perusahaan Relasi
            </button>

            {/* SEARCH */}
            <input
              type="text"
              placeholder="Cari nama perusahaan relasi"
              className="w-[379px] px-4 py-2 rounded-lg  text-[#928FA6] text-[14px] focus:outline-none"
            />
          </div>

          {/* SHOW 1 */}
          <div className="flex items-center space-x-3 mt-4 px-2 mb-5">
            <span className="text-[14px] text-gray-500">
              Showing 1 to 1
            </span>

            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full bg-white border flex items-center justify-center text-gray-500">
                ‹
              </button>

              <button className="w-8 h-8 rounded-full bg-[#0E64D1] text-white flex items-center justify-center">
                1
              </button>

              <button className="w-8 h-8 rounded-full bg-white border flex items-center justify-center text-gray-500">
                ›
              </button>
            </div>
          </div>



          {/* TABLE */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="overflow-x-auto rounded-md">
              <table className="w-full text-[14px]">
                <thead className="bg-white text-left font-semibold">
                  <tr >
                    <th className="px-4 py-3">Perusahaan</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Penghubung</th>
                    <th className="px-4 py-3">no telp</th>
                    <th className="px-4 py-3">time report (jam)</th>
                    <th className="px-4 py-3">Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((item, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-[#F6F6F8]" : "bg-white"}
                    >
                      <td className="px-4 py-3">{item.perusahaan}</td>
                      <td className="px-4 py-3 cursor-pointer underline">{item.email}</td>
                      <td className="px-4 py-3">{item.penghubung}</td>
                      <td className="px-4 py-3">{item.noTelp}</td>
                      <td className="px-4 py-3">{item.timeReport}</td>

                      {/* ICONS */}
                      <td className="px-4 py-3 flex items-center gap-4">

                        {/* ICON HIJAU — dummy dulu */}
                        <img
                          src="/img/Vector (22).png"
                          className="w-6 h-6 cursor-pointer"
                        />

                        {/* ICON EDIT — dummy dulu */}
                        <img
                          src="/img/Vector (23).png"
                          className="w-5 h-5 cursor-pointer"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* PAGINATION */}
          <div className="flex items-center justify-end mt-4 px-2">


            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full bg-white border flex items-center justify-center text-gray-500">
                ‹
              </button>

              <button className="w-8 h-8 rounded-full bg-[#0E64D1] text-white flex items-center justify-center">
                1
              </button>

              <button className="w-8 h-8 rounded-full bg-white border flex items-center justify-center text-gray-500">
                ›
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
