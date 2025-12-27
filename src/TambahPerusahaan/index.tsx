import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PerusahaanRelasi from "../pages/PerusahaanRelasi";

type FormState = {
  nama: string;
  email: string;
  telepon: string;
  penanggungJawab: string;
  alamat: string;
};

export default function TambahPerusahaanRelasi() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isEdit, setIsEdit] = useState(false);
  const [form, setForm] = useState<FormState>({
    nama: "",
    email: "",
    telepon: "",
    penanggungJawab: "",
    alamat: "",
  });

  // ===============================
  // DETEKSI MODE EDIT
  // ===============================
  useEffect(() => {
    if (location.state?.isEdit && location.state?.data) {
      setIsEdit(true);
      setForm({
        nama: location.state.data.nama || "",
        email: location.state.data.email || "",
        telepon: location.state.data.telepon || "",
        penanggungJawab: location.state.data.penanggungJawab || "",
        alamat: location.state.data.alamat || "",
      });
    }
  }, [location.state]);

  // ===============================
  // HANDLE INPUT
  // ===============================
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ===============================
  // SUBMIT TAMBAH
  // ===============================
  const handleTambah = () => {
    console.log("TAMBAH DATA:", form);
    // API POST DI SINI
    navigate("/perusahaan-relasi");
  };

  // ===============================
  // SUBMIT EDIT
  // ===============================
  const handleUpdate = () => {
    console.log("UPDATE DATA:", form);
    // API PUT / PATCH DI SINI
    navigate("/perusahaan-relasi");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/30 z-40"></div>

      <div className="absolute inset-0 z-0">
        <PerusahaanRelasi />
      </div>

      {/* MODAL */}
      <div className="bg-white rounded-xl shadow-lg w-[526px] h-[712px] p-7 relative z-50">
        <div className="space-y-5 p-5">

          {/* TITLE */}
          <div>
            <h2 className="text-[20px] font-semibold text-[#2F2F2F]">
              {isEdit ? "Ubah Perusahaan Relasi" : "Tambah Perusahaan Relasi"}
            </h2>
            <p className="text-[14px] text-[#928FA6] mt-1">
              Silahkan isi form dibawah ini sesuai dengan perusahaan relasi
            </p>
          </div>

          {/* FORM */}
          <div className="space-y-4">
            <Input
              label="Nama Perusahaan Relasi"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              placeholder="Isi Nama Perusahaan Relasi"
            />

            <Input
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Isi email"
            />

            <Input
              label="Nomor Telepon"
              name="telepon"
              value={form.telepon}
              onChange={handleChange}
              placeholder="Isi nomor telepon"
            />

            <Input
              label="Penanggung Jawab"
              name="penanggungJawab"
              value={form.penanggungJawab}
              onChange={handleChange}
              placeholder="Nama penghubung"
            />

            <div>
              <label className="text-[14px] font-medium text-[#2F2F2F]">
                Alamat
              </label>
              <textarea
                name="alamat"
                value={form.alamat}
                onChange={handleChange}
                placeholder="Isi alamat"
                className="w-full mt-1 px-3 py-2 border border-[#DEDEDE] rounded-lg text-[14px] h-[90px] resize-none"
              />
            </div>
          </div>

          {/* BUTTON */}
          <div className="flex justify-center gap-2 pt-3">
            <button
              onClick={() => navigate("/perusahaan-relasi")}
              className="w-[213.5px] h-[37px] bg-[#F2F4F7] rounded-lg font-medium"
            >
              Batalkan
            </button>

            {isEdit ? (
              <button
                onClick={handleUpdate}
                className="w-[213.5px] h-[37px] bg-[#0E64D1] text-white rounded-lg font-medium"
              >
                Simpan Perubahan
              </button>
            ) : (
              <button
                onClick={handleTambah}
                className="w-[213.5px] h-[37px] bg-[#0E64D1] text-white rounded-lg font-medium"
              >
                Tambahkan
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===============================
   REUSABLE INPUT COMPONENT
================================ */
function Input({
  label,
  name,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div>
      <label className="text-[14px] font-medium text-[#2F2F2F]">
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full mt-1 px-3 py-2 border border-[#928FA6] rounded-lg text-[14px]"
      />
    </div>
  );
}
