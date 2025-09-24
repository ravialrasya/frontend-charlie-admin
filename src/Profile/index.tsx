// src/pages/ProfileKaryawan.tsx
import { useState } from "react";
import Sidebar from "../components/layout/sidebar";
import Header from "../components/layout/header";

interface Employee {
  name: string;
  nik: string;
  jabatan: string;
  email: string;
  phone: string;
  gender: string;
  agama: string;
  tempatLahir: string;
  tanggalLahir: string;
  alamat: string;
}

export default function ProfileKaryawan() {
  const [activeTab, setActiveTab] = useState<"dataDiri" | "dataKaryawan">(
    "dataDiri"
  );
  const [isEditing, setIsEditing] = useState(false);

  const [employee] = useState<Employee>({
    name: "Sava Alya Andini",
    nik: "161188559",
    jabatan: "Staff Admin",
    email: "sava@gmail.com",
    phone: "081210438840",
    gender: "Perempuan",
    agama: "Islam",
    tempatLahir: "Bekasi",
    tanggalLahir: "21 Apr 2000",
    alamat:
      "Jl Kenari Raya No.32 Delta Comercial Park 2, Bekasi Barat, Jawa Barat, Indonesia.",
  });

  return (
    <div className="flex bg-[#F6F6F8] font-sans">
      {/* Sidebar */}
      <Sidebar />

      <div className="w-full">
        <Header />
        <div className="p-10">
          <h1 className="text-[20px] text-[#2F2F2F] font-semibold mb-6">
            Profile Karyawan
          </h1>

          {/* Profile Section */}
          <div className="flex items-center gap-4">
            <div className="w-[67px] h-[67px] flex items-center justify-center rounded-full bg-[#1176BC1A] ">
              <img src="/img/user (1) 1.png" alt="" width={33.5} height={33.5} />
            </div>
            <div>
              <h2 className="font-bold text-lg">Sava Alya Andini</h2>
              <p className="text-[#0E64D1]">161188559</p>
              <p className="text-gray-500">Staff Admin</p>
            </div>
          </div>

          {/* Tabs */}
          <div className=" mt-8 flex gap-[10px]  ">
            <button
              onClick={() => setActiveTab("dataDiri")}
              className={`pb-2 w-1/2 h-1/2 cursor-pointer ${
                activeTab === "dataDiri"
                  ? "border-b-[1px] border-[#0E64D1] text-[#0E64D1] font-inter font-bold text-[14px]"
                  : "text-[#556376] text-[14px]"
              }`}
            >
              Data Diri
            </button>
            <button
              onClick={() => setActiveTab("dataKaryawan")}
              className={`pb-2 w-1/2 h-1/2 cursor-pointer ${
                activeTab === "dataKaryawan"
                  ? "border-b-[1px] border-[#0E64D1] text-[#0E64D1] font-inter font-bold text-[14px]"
                  : "text-[#556376] text-[14px]"
              }`}
            >
              Data Karyawan
            </button>
          </div>

          {/* Content */}
          {activeTab === "dataDiri" && (
            <div className="mt-6 space-y-4">
              {/* Edit button */}
              <button
                onClick={() => setIsEditing(!isEditing)}
                className=" bg-[#0E64D1] text-white rounded-md text-[14px] w-[83px] h-[41px]"
              >
                <div className="flex justify-between items-center m-5 mt-3">
                  <img src="/img/material-symbols_edit-rounded.png" alt="" />
                  {isEditing ? "Save" : "Edit"}
                </div>
              </button>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  disabled={!isEditing}
                  placeholder={employee.name}
                  className="w-full border rounded-md px-3 py-2 bg-gray-100 text-sm"
                />
                <input
                  type="email"
                  disabled={!isEditing}
                  placeholder={employee.email}
                  className="w-full border rounded-md px-3 py-2 bg-gray-100 text-sm"
                />
                <input
                  type="text"
                  disabled={!isEditing}
                  placeholder={employee.phone}
                  className="w-full border rounded-md px-3 py-2 bg-gray-100 text-sm"
                />
                <input
                  type="text"
                  disabled={!isEditing}
                  placeholder={employee.gender}
                  className="w-full border rounded-md px-3 py-2 bg-gray-100 text-sm"
                />
                <input
                  type="text"
                  disabled={!isEditing}
                  placeholder={employee.agama}
                  className="w-full border rounded-md px-3 py-2 bg-gray-100 text-sm"
                />
                <input
                  type="text"
                  disabled={!isEditing}
                  placeholder={employee.tempatLahir}
                  className="w-full border rounded-md px-3 py-2 bg-gray-100 text-sm"
                />
                <input
                  type="text"
                  disabled={!isEditing}
                  placeholder={employee.tanggalLahir}
                  className="w-full border rounded-md px-3 py-2 bg-gray-100 text-sm"
                />
              </div>

              {/* Alamat */}
              <div>
                <textarea
                  disabled={!isEditing}
                  placeholder={employee.alamat}
                  className="w-full border rounded-md px-3 py-2 bg-gray-100 text-sm"
                  rows={2}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
