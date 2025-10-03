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

interface EmployeeWork {
  kodeKaryawan: string;
  divisi: string;
  posisi: string;
  level: string;
  status: string;
  tanggalBergabung: string;
  tanggalBerakhir: string;
  salary: string;
}

export default function ProfileKaryawan() {
  const [activeTab, setActiveTab] = useState<"dataDiri" | "dataKaryawan">(
    "dataDiri"
  );
  const [isEditing, setIsEditing] = useState(false);

  const [employee, setEmployee] = useState<Employee>({
    name: "Sava Alya Andini",
    nik: "161188559",
    jabatan: "Staff Admin",
    email: "sava@gmail.com",
    phone: "081210438840",
    gender: "Perempuan",
    agama: "Islam",
    tempatLahir: "Bekasi",
    tanggalLahir: "2000-04-21",
    alamat:
      "Jl Kenari Raya No.32 Delta Comercial Park 2, Bekasi Barat, Jawa Barat, Indonesia.",
  });

  const [employeeWork, setEmployeeWork] = useState<EmployeeWork>({
    kodeKaryawan: "B0014",
    divisi: "Admin Support",
    posisi: "Admin",
    level: "Staff",
    status: "Kontrak",
    tanggalBergabung: "2022-09-26",
    tanggalBerakhir: "2025-04-21",
    salary: "Rp 5,500,000",
  });

  // state untuk file upload
  const [files, setFiles] = useState<Record<string, File | null>>({
    KTP: null,
    "Tanda Tangan": null,
    NPWP: null,
    "Pas Foto": null,
  });

  // handle input data diri
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const key = e.target.name as keyof Employee;
    setEmployee((prev) => ({ ...prev, [key]: e.target.value }));
  };

  // handle input data karyawan
  const handleChangeWork = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const key = e.target.name as keyof EmployeeWork;
    setEmployeeWork((prev) => ({ ...prev, [key]: e.target.value }));
  };

  // handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, doc: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Ukuran file maksimal 5 MB");
      return;
    }

    setFiles((prev) => ({ ...prev, [doc]: file }));
  };

  // render file input
  const renderFileInput = (label: string) => (
    <div key={label} className="border rounded-md p-3 bg-[#EFEFF2]">
      <div className="flex justify-between items-center">
        <p className="text-sm text-blue-600">
          {files[label]?.name || `${label}.jpg`}
        </p>
        {files[label] && (
          <a
            href={URL.createObjectURL(files[label] as File)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm"
          >
            👁️
          </a>
        )}
      </div>
      <input
        type="file"
        accept=".jpg,.jpeg,.png,.pdf"
        disabled={!isEditing}
        onChange={(e) => handleFileChange(e, label)}
        className="mt-2 text-sm"
      />
      <p className="text-xs text-gray-500 mt-1">
        Unggah file dalam format JPG/PNG/PDF (maks 5 MB)
      </p>
    </div>
  );

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
              <h2 className="font-bold text-lg">{employee.name}</h2>
              <p className="text-[#0E64D1]">{employee.nik}</p>
              <p className="text-gray-500">{employee.jabatan}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className=" mt-8 flex gap-[10px]">
            <button
              onClick={() => setActiveTab("dataDiri")}
              className={`pb-2 w-1/2 cursor-pointer ${
                activeTab === "dataDiri"
                  ? "border-b-[1px] border-[#0E64D1] text-[#0E64D1] font-bold text-[14px]"
                  : "text-[#556376] text-[14px]"
              }`}
            >
              Data Diri
            </button>
            <button
              onClick={() => setActiveTab("dataKaryawan")}
              className={`pb-2 w-1/2 cursor-pointer ${
                activeTab === "dataKaryawan"
                  ? "border-b-[1px] border-[#0E64D1] text-[#0E64D1] font-bold text-[14px]"
                  : "text-[#556376] text-[14px]"
              }`}
            >
              Data Karyawan
            </button>
          </div>

          {/* === Content Data Diri === */}
          {activeTab === "dataDiri" && (
            <div className="mt-6 space-y-4">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 bg-[#0E64D1] text-white rounded-md text-[14px] px-4 py-2 cursor-pointer"
              >
                <img src="/img/material-symbols_edit-rounded.png" alt="" />
                {isEditing ? "Save" : "Edit"}
              </button>

              {/* Form Data Diri */}
              <div className="grid grid-cols-1 gap-5 space-y-5">
                <div className="grid grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm mb-1">Nama</label>
                    <input
                      type="text"
                      name="name"
                      value={employee.name}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full h-[51px] rounded-md px-3 py-2 bg-[#EFEFF2] text-[12px] text-[#928FA6]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={employee.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full h-[51px] rounded-md px-3 py-2 bg-[#EFEFF2] text-[12px] text-[#928FA6]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Nomor Telepon</label>
                    <input
                      type="text"
                      name="phone"
                      value={employee.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full h-[51px] rounded-md px-3 py-2 bg-[#EFEFF2] text-[12px] text-[#928FA6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm mb-1">Jenis Kelamin</label>
                    <input
                      type="text"
                      name="gender"
                      value={employee.gender}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full h-[61px] rounded-md px-3 py-2 bg-[#EFEFF2] text-[12px] text-[#928FA6]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Agama</label>
                    <input
                      type="text"
                      name="agama"
                      value={employee.agama}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full h-[61px] rounded-md px-3 py-2 bg-[#EFEFF2] text-[12px] text-[#928FA6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm mb-1">Tempat Lahir</label>
                    <input
                      type="text"
                      name="tempatLahir"
                      value={employee.tempatLahir}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full h-[61px] rounded-md px-3 py-2 bg-[#EFEFF2] text-[12px] text-[#928FA6]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Tanggal Lahir</label>
                    <input
                      type="date"
                      name="tanggalLahir"
                      value={employee.tanggalLahir}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full h-[61px] rounded-md px-3 py-2 bg-[#EFEFF2] text-[12px] text-[#928FA6]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5">
                <label className="block text-sm mb-1">Alamat</label>
                <textarea
                  name="alamat"
                  value={employee.alamat}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full h-[105px] rounded-md px-3 py-2 bg-[#EFEFF2] text-[12px] text-[#928FA6]"
                  rows={3}
                />
              </div>
            </div>
          )}

          {/* === Content Data Karyawan === */}
          {activeTab === "dataKaryawan" && (
            <div className="mt-6 space-y-4">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 bg-[#0E64D1] text-white rounded-md text-[14px] px-4 py-2 cursor-pointer"
              >
                <img src="/img/material-symbols_edit-rounded.png" alt="" />
                {isEditing ? "Save" : "Edit"}
              </button>

              <div className="grid grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm mb-1">Kode Karyawan</label>
                  <input
                    type="text"
                    name="kodeKaryawan"
                    value={employeeWork.kodeKaryawan}
                    onChange={handleChangeWork}
                    disabled={!isEditing}
                    className="w-full h-[51px] rounded-md px-3 py-2 bg-[#EFEFF2] text-[12px] text-[#928FA6]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Divisi</label>
                  <input
                    type="text"
                    name="divisi"
                    value={employeeWork.divisi}
                    onChange={handleChangeWork}
                    disabled={!isEditing}
                    className="w-full h-[51px] rounded-md px-3 py-2 bg-[#EFEFF2] text-[12px] text-[#928FA6]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Posisi</label>
                  <input
                    type="text"
                    name="posisi"
                    value={employeeWork.posisi}
                    onChange={handleChangeWork}
                    disabled={!isEditing}
                    className="w-full h-[51px] rounded-md px-3 py-2 bg-[#EFEFF2] text-[12px] text-[#928FA6]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm mb-1">Level Pekerjaan</label>
                  <select
                    name="level"
                    value={employeeWork.level}
                    onChange={handleChangeWork}
                    disabled={!isEditing}
                    className="w-full h-[51px] rounded-md px-3 py-2 bg-[#EFEFF2] text-[12px] text-[#928FA6]"
                  >
                    <option>Staff</option>
                    <option>Supervisor</option>
                    <option>Manager</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">Status Karyawan</label>
                  <select
                    name="status"
                    value={employeeWork.status}
                    onChange={handleChangeWork}
                    disabled={!isEditing}
                    className="w-full h-[51px] rounded-md px-3 py-2 bg-[#EFEFF2] text-[12px] text-[#928FA6]"
                  >
                    <option>Kontrak</option>
                    <option>Tetap</option>
                    <option>Magang</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm mb-1">Tanggal Bergabung</label>
                  <input
                    type="date"
                    name="tanggalBergabung"
                    value={employeeWork.tanggalBergabung}
                    onChange={handleChangeWork}
                    disabled={!isEditing}
                    className="w-full h-[51px] rounded-md px-3 py-2 bg-[#EFEFF2] text-[12px] text-[#928FA6]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Tanggal Berakhir</label>
                  <input
                    type="date"
                    name="tanggalBerakhir"
                    value={employeeWork.tanggalBerakhir}
                    onChange={handleChangeWork}
                    disabled={!isEditing}
                    className="w-full h-[51px] rounded-md px-3 py-2 bg-[#EFEFF2] text-[12px] text-[#928FA6]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Salary Perbulan</label>
                <input
                  type="text"
                  name="salary"
                  value={employeeWork.salary}
                  onChange={handleChangeWork}
                  disabled={!isEditing}
                  className="w-full h-[51px] rounded-md px-3 py-2 bg-[#EFEFF2] text-[12px] text-[#928FA6]"
                />
              </div>

              {/* Upload Dokumen */}
              <h2 className="text-[16px] font-semibold mt-6">Upload Dokumen</h2>
              <div className="grid grid-cols-2 gap-5 mt-3">
                {["KTP", "Tanda Tangan", "NPWP", "Pas Foto"].map(renderFileInput)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
