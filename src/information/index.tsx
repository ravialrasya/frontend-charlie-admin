import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import DetailTimeReport from '../DetailTimeReport'

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

interface TimeReportItem {
  project: string;
  client: string;
  jamKerja: string;
  deskripsi: React.ReactNode;
  supervisor: string;
  supervisorCek: string;
  superAdminCek: boolean;
}

export default function DetailTimeReportByDate() {
  const navigate = useNavigate();
  const location = useLocation();
  // AMBIL DARI NAVIGATE STATE + DEFAULT
  const {
    date = new Date().getDate(),
    month = new Date().getMonth() + 1,
    year = new Date().getFullYear(),
  } = (location.state as any) || {};


  const [reports, setReports] = useState<TimeReportItem[]>([
    {
      project: "Engagement 2023",
      client: "PT Mineral Alam Abadi 2023",
      jamKerja: "2 Jam",
      deskripsi: <>Drafting 2023, reporting...</>,
      supervisor: "Dono",
      supervisorCek: "direvisi",
      superAdminCek: false,
    },
    {
      project: "Engagement 2023",
      client: "PT Mineral Alam Abadi 2023",
      jamKerja: "2 Jam",
      deskripsi: <>Drafting 2023, reporting...</>,
      supervisor: "Kasino",
      supervisorCek: "disetujui",
      superAdminCek: false,
    },
    {
      project: "Engagement 2023",
      client: "PT Mineral Alam Abadi 2023",
      jamKerja: "2 Jam",
      deskripsi: <>Drafting 2023, reporting...</>,
      supervisor: "Indro",
      supervisorCek: "direvisi",
      superAdminCek: false,
    },
    {
      project: "Engagement 2023",
      client: "PT Mineral Alam Abadi 2023",
      jamKerja: "2 Jam",
      deskripsi: <>Drafting 2023, reporting...</>,
      supervisor: "Boyen",
      supervisorCek: "disetujui",
      superAdminCek: false,
    },
  ]);

  const toggleSuperAdminCek = (index: number) => {
    setReports(prev => {
      const updated = [...prev];
      updated[index].superAdminCek = !updated[index].superAdminCek;
      return updated;
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/30 z-40"></div>

      <div className="absolute inset-0 z-0">
        <DetailTimeReport />
      </div>


      {/* OVERLAY */}


      {/* MODAL */}
      <div className="bg-white rounded-xl w-[1468px] h-[500px] p-6 z-50">
        {/* HEADER */}
        <div className="flex justify-between items-start mb-4 mt-5">
          <div className="flex items-start gap-3">
            <img
              src="/img/Vector (8).png"
              width={16}
              height={16}
              className=" mt-1 object-contain"
            />

            <div className="flex flex-col">
              <div className="flex items-center space-x-2 text-[16px]">
                <p>{date}</p>
                <p>{monthNames[month - 1]} {year}</p>
                <p className="font-semibold">
                  (<span className="text-[#0E64D1]">08:00</span> - <span className="text-[#F86358]">18:00</span>)
                </p>
              </div>

              <p className="text-sm text-gray-500 mt-1">Status : hybrid</p>
            </div>
          </div>

          <div className="flex gap-[100px] mb-6 ml-[40px]">
            <div className="bg-[#85ABF9] p-4 rounded-[10px] w-[240px] h-[92px]">
              <p>Total Time report (jam):</p>
              <p>8 Jam</p>
            </div>
            <div className="bg-[#C1D3F8] p-4 rounded-[10px] w-[240px] h-[92px]">
              <p>Total Jam Kerja (jam):</p>
              <p>8 Jam</p>
            </div>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <X size={16} />
          </button>
        </div>

        {/* CARDS */}

        {/* TABLE */}
        <div className="overflow-auto rounded-lg h-[300px]">
          <table className="w-full text-[14px]">
            <thead className="font-semibold">
              <tr>
                <th className="p-3 text-left">Project</th>
                <th className="p-3 text-left">Client</th>
                <th className="p-3 text-left">Jam Kerja</th>
                <th className="p-3 text-left">Deskripsi</th>
                <th className="p-3 text-left">Supervisor</th>
                <th className="p-3 text-left">Supervisor cek</th>
                <th className="p-3 text-left">Super admin cek</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {reports.map((item, i) => (
                <tr key={i} className={i % 2 ? "bg-[#E6F0BF]" : "bg-[#F8FAFD]"}>
                  <td className="p-3">{item.project}</td>
                  <td className="p-3">{item.client}</td>
                  <td className="p-3">{item.jamKerja}</td>
                  <td className="p-3">{item.deskripsi}</td>
                  <td className="p-3">{item.supervisor}</td>
                  <td className="p-3">{item.supervisorCek}</td>
                  <td className="p-3 text-center">
                    <input
                      type="checkbox"
                      checked={item.superAdminCek}
                      onChange={() => toggleSuperAdminCek(i)}
                      className="w-5 h-5 accent-green-600"
                    />
                  </td>
                  <td className="p-3 flex gap-2">
                    {i % 2 !== 0 ? (
                      <>
                        <button
                          onClick={() =>
                            navigate(
                              "/time-report/detail-time-report/information/detail-revisi",
                              { state: { date, month, year } }
                            )
                          }
                          className="p-1 cursor-pointer"
                        >
                          <img src="/img/Button (3).png" width={28.73} height={24.16} />
                        </button>

                        <button className="p-1">
                          <img src="/img/Vector (24).png" alt="" width={24} height={24} />
                        </button>
                      </>
                    ) : null}

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
