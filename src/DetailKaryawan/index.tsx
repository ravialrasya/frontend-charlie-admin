// src/components/EmployeeDetail.tsx

import { useState } from "react";
import Header from "../components/layout/header";
import Sidebar from "../components/layout/sidebar";



interface TimeReport {
  tanggal: string;
  waktu: string;
  waktudua: string;
  lokasi: string;
  typedata: string;
}

export default function EmployeeDetail() {
  const [tab, setTab] = useState<"time" | "Time Report">("Time Report");

  const absensiData: TimeReport[] = [
    { tanggal: "10 Sep 2024", waktu: "08:00", typedata: "-", waktudua: "16:00",lokasi: "Total jam kerja : 8 Jam" },
    { tanggal: "09 Sep 2024", waktu: "08:00", typedata: "-", waktudua: "16:00",lokasi: "Total jam kerja : 8 Jam" },
    { tanggal: "08 Sep 2024", waktu: "08:00", typedata: "-", waktudua: "16:00",lokasi: "Total jam kerja : 8 Jam" },
    { tanggal: "07 Sep 2024", waktu: "08:00", typedata: "-", waktudua: "16:00",lokasi: "Total jam kerja : 8 Jam" },
    { tanggal: "06 Sep 2024", waktu: "08:00", typedata: "-", waktudua: "16:00",lokasi: "Total jam kerja : 8 Jam" },
  ];
  

  return (
    <div className="flex bg-[#F6F6F8] font-sans">
        <Sidebar />
      <div className="w-full">
        <Header/>

        <div className="bg-gray-100 p-10">

           
      <h1 className="text-xl font-semibold font-montserrat text-[#2F2F2F] mb-6">Detail Karyawan</h1>

      {/* Profile */}
      <div className="flex items-center gap-4 ">
        <div className="w-[67px] h-[67px] flex items-center justify-center rounded-full bg-[#1176BC1A] ">
          <img src="/img/user (1) 1.png" alt="" width={33.5} height={33.5}/>
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
        <div className="bg-white shadow rounded-2xl p-4 h-[14vh] w-[30vh] flex flex-cols items-center justify-between ">
          <div>
          <p className="text-[14px] text-[#928FA6] font-inter ">Total Absensi</p>
          <p className="text-[20px] font-inter font-bold">20</p>
          </div>
          <div><img src="/img/Group.png" alt="" width={20} height={21.81}/></div>
        </div>
        
        <div className="bg-white shadow rounded-2xl p-4 h-[14vh] w-[30vh] flex flex-cols items-center justify-between ">
          <div>
          <p className="text-[14px] text-[#928FA6] font-inter ">Total Time <br />Report</p>
          <p className="text-[20px] font-inter font-bold">15</p>
          </div>
          <div><img src="/img/bxs_report.png" alt="" width={24} height={24}/></div>
        </div>
        <div className="bg-white shadow rounded-2xl p-4 h-[14vh] w-[30vh] flex flex-cols items-center justify-between ">
          <div>
          <p className="text-[14px] text-[#928FA6] font-inter ">Gaji Pokok</p>
          <p className="text-[20px] font-inter font-bold">Rp 5,500,000</p>
          </div>
          <div><img src="/img/teenyicons_money-solid.png" alt="" width={24} height={24}/></div>
        </div>
        <div className="bg-white shadow rounded-2xl p-4 h-[14vh] w-[30vh] flex flex-cols items-center justify-between ">
          <div>
          <p className="text-[14px] text-[#928FA6] font-inter ">Total Lembur</p>
          <p className="text-[20px] font-inter font-bold">Rp 500,000</p>
          </div>
          <div><img src="/img/teenyicons_money-solid.png" alt="" width={24} height={24}/></div>
        </div>
        <div className="bg-white shadow rounded-2xl p-4 h-[14vh] w-[30vh] flex flex-cols items-center justify-between ">
          <div>
          <p className="text-[14px] text-[#928FA6] font-inter ">Total </p>
          <p className="text-[20px] font-inter font-bold">Rp 6,000,000</p>
          </div>
          <div><img src="/img/mdi_set-all.png" alt="" width={24} height={24}/></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-[10px]  mt-8 " >
        <div className="flex space-x-[141.5px] ">
        <button
          onClick={() => setTab("Time Report")}
          className={`pb-2 ${
            tab === "Time Report"
              ? "border-b-[1px] border-[#0E64D1] text-[#0E64D1] font-inter font-bold text-[14px]  w-[271.5px] h-[25px]"
              : "text-[#556376] text-[14px]"
          }`}
        >
          Time Report
        </button>
        <button
          onClick={() => setTab("time")}
          className={`pb-2 ${
            tab === "time"
              ? "border-b-[1px] border-[#0E64D1] text-[#0E64D1] font-inter font-bold text-[14px]  w-[271.5px] h-[25px]"
              : "text-[#556376] text-[14px]"
          }`}
        >
          Absensi
        </button>
        
        </div>
        <select className="justify end rounded-lg cursor-pointer w-[87px] h-[35px] outline-1 outline-[#0E64D1] -mt-1 ml-auto ">
          <option className="text-[14px] font-inter text-[#928FA6]">Bulan</option>
        </select>
      </div>

      {/* Absensi List */}
      {tab === "Time Report" && (
        <div className="mt-4 space-y-4">
          {absensiData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg flex justify-between items-center cursor-pointer hover:shadow-sm"
            >
              <div>
              <div className="flex space-x-2 mb-2">
                <p className="flex "><img src="/img/calendar-minus 1.png" alt="" width={20} height={20} className="mr-2" />{item.tanggal}</p>
                <span className="flex font-bold space-x-2">
                  (
                <p className="text-blue-500 ">{item.waktu}</p>
                <p>{item.typedata}</p>
                <p className="text-red-500 ">{item.waktudua}</p>
                  )
                </span>
              </div>
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
