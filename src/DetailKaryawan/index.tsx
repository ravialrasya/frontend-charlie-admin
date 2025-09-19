// src/components/EmployeeDetail.tsx

import { useState } from "react";
import Header from "../components/layout/header";
import Sidebar from "../components/layout/sidebar";
import { FaUser } from "react-icons/fa6";


interface Absensi {
  tanggal: string;
  waktu: string;
  lokasi: string;
}

export default function EmployeeDetail() {
  const [tab, setTab] = useState<"time" | "absensi">("absensi");

  const absensiData: Absensi[] = [
    { tanggal: "10 Sep 2024", waktu: "08:00 - 16:00", lokasi: "Office" },
    { tanggal: "09 Sep 2024", waktu: "08:00 - 16:00", lokasi: "Office" },
    { tanggal: "08 Sep 2024", waktu: "08:00 - 16:00", lokasi: "Dinas" },
    { tanggal: "07 Sep 2024", waktu: "08:00 - 16:00", lokasi: "Office" },
    { tanggal: "06 Sep 2024", waktu: "08:00 - 16:00", lokasi: "Dinas" },
  ];
  

  return (
    <div className="flex bg-[#F6F6F8] font-sans">
        <Sidebar />
      <div className="w-full">
        <Header/>

        <div className="bg-gray-100 p-10">

           
      <h1 className="text-xl font-semibold mb-6">Detail Karyawan</h1>

      {/* Profile */}
      <div className="flex items-center gap-4 ">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 ">
          <span className="text-[#0E64D1] text-4xl"><FaUser /></span>
        </div>
        <div>
          <h2 className="font-bold text-lg">Sava Alya Andini</h2>
          <p className="text-[#0E64D1]">161188559</p>
          <p className="text-gray-500">Staff Admin</p>
        </div>
        <button className="ml-auto bg-[#0E64D1] px-4 py-2 text-white rounded-lg hover:shadow-md transition cursor-pointer">
          Lihat Profil Karyawan
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
        <div className="bg-white p-4 rounded-lg">
          <p>Total Absensi</p>
          <p className="text-2xl font-bold">20</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p>Total Time Report</p>
          <p className="text-2xl font-bold">15</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p>Gaji Pokok</p>
          <p className="text-2xl font-bold">Rp 5,500,000</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p>Total Lembur</p>
          <p className="text-2xl font-bold">Rp 500,000</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p>Total</p>
          <p className="text-2xl font-bold">Rp 6,000,000</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-700 mt-8">
        <button
          onClick={() => setTab("time")}
          className={`pb-2 ${
            tab === "time"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-400"
          }`}
        >
          Time Report
        </button>
        <button
          onClick={() => setTab("absensi")}
          className={`pb-2 ${
            tab === "absensi"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-400"
          }`}
        >
          Absensi
        </button>
      </div>

      {/* Absensi List */}
      {tab === "absensi" && (
        <div className="mt-4 space-y-4">
          {absensiData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="text-sm text-gray-400">{item.tanggal}</p>
                <p className="text-blue-500 font-semibold">{item.waktu}</p>
                <p className="text-gray-300">{item.lokasi}</p>
              </div>
              <button className="text-gray-500">{">"}</button>
            </div>
          ))}
        </div>
      )}
       </div>
      </div>
    </div>
  );
}
