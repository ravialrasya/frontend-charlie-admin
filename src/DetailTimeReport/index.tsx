import { useState } from "react";
import Sidebar from "../components/layout/sidebar";
import Header from "../components/layout/header";

interface Task {
    code: string;
    project: string;
    client: React.ReactNode;
    jamKerja: string;
    deskripsi: string;
    approval: string;
    status: "Menunggu" | "Direvisi" | "Disetujui";
    keterangan?: string;
}

export default function DetailTimeReport() {
    const [tasks] = useState<Task[]>([
        {
            code: "N/A",
            project: "Engagement 2023",
            client: (
      <>
        PT Mineral Alam Abadi <br /> 2023
      </>
    ),
            jamKerja: "2 Jam",
            deskripsi: "Drafting 2023, reporting...",
            approval: "Thomas Seisei",
            status: "Menunggu",
        },
        {
            code: "N/A",
            project: "Engagement 2023",
            client: (
      <>
        PT Mineral Alam Abadi <br /> 2023
      </>
    ),
            jamKerja: "2 Jam",
            deskripsi: "Drafting 2023, reporting...",
            approval: "Thomas Seisei",
            status: "Direvisi",
            keterangan: "Pengerjaan project 1 untuk...",
        },
        {
            code: "N/A",
            project: "Engagement 2023",
            client: (
      <>
        PT Mineral Alam Abadi <br /> 2023
      </>
    ),
            jamKerja: "2 Jam",
            deskripsi: "Drafting 2023, reporting...",
            approval: "Thomas Seisei",
            status: "Disetujui",
        },
        {
            code: "N/A",
            project: "Engagement 2023",
            client: (
      <>
        PT Mineral Alam Abadi <br /> 2023
      </>
    ),
            jamKerja: "2 Jam",
            deskripsi: "Drafting 2023, reporting...",
            approval: "Thomas Seisei",
            status: "Disetujui",
        },
    ]);

    return (
        <div className="flex bg-[#F6F6F8]  ">
            <Sidebar />
            <div className="w-full min-h-screen">
                <Header />

                {/* Header info */}
                <div className="p-10">
                    <h2 className="text-[#2F2F2F] text-[20px] font-semibold mb-10">Detail Time Report</h2>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="mb-4 space-y-5">
                            <div className="flex items-center gap-2 text-lg font-semibold">
                                <img src="/img/Vector (7).png" alt="" />
                                <div className="ml-2 space-x-1">
                                    <span className="text-[#2F2F2F] text-[16px]">Sava Alya Andini</span>
                                    <span className="text-[#928FA6] text-[16px] ">
                                        (Staff Admin Support)
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <img src="/img/Vector (8).png" alt="" />
                                <div className="ml-2 space-x-1 text-[16px] flex">
                                    <span>17/09/2024</span>
                                    <div className="font-semibold  ">(
                                        <span className=" text-[#0E64D1]">08:00</span> -{" "}
                                        <span className=" text-[#F86358]">16:00</span>
                                    )
                                    </div>
                                </div>
                            </div>
                            <div className="text-[16px] text-[#928FA6]">
                                Total Jam Kerja :{" "}
                                <span className="font-md text-[#0E64D1]">8 jam</span>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto rounded-md ">
                            <table className="w-full text-[14px] ">
                                <thead className="bg-white text-left font-semibold">
                                    <tr >
                                        <th className="px-4 py-2">Code</th>
                                        <th className="px-4 py-2">Project</th>
                                        <th className="px-4 py-2">Client</th>
                                        <th className="px-4 py-2">Jam Kerja</th>
                                        <th className="px-4 py-2">Deskripsi</th>
                                        <th className="px-4 py-2">Approval</th>
                                        <th className="px-4 py-2">Status</th>
                                        <th className="px-4 py-2">Keterangan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tasks.map((t, i) => (
                                        <tr
                                            key={i}
                                            className={i % 2 === 0 ? "bg-[#F6F6F8]" : "bg-white"}
                                        >
                                            <td className="px-4 py-2 ">{t.code}</td>
                                            <td className="px-4 py-2">{t.project}</td>
                                            <td className="px-4 py-2">{t.client}</td>
                                            <td className="px-4 py-2">{t.jamKerja}</td>
                                            <td className="px-4 py-2 truncate max-w-[180px]">
                                                {t.deskripsi}
                                            </td>
                                            <td className="px-4 py-2">{t.approval}</td>
                                            <td className="px-4 py-2">
                                                {t.status === "Menunggu" && (
                                                    <span className="px-2 py-1 rounded-md bg-[#928FA6]/10 text-[#928FA6] border border-[#928FA6] text-[14px]">
                                                        Menunggu
                                                    </span>
                                                )}
                                                {t.status === "Direvisi" && (
                                                    <span className="px-2 py-1 rounded-md bg-[#0E64D1]/10 text-[#0E64D1] border border-[#0E64D1] text-[14px]">
                                                        Direvisi
                                                    </span>
                                                )}
                                                {t.status === "Disetujui" && (
                                                    <span className="px-2 py-1 rounded-md bg-[#4CD964]/10 text-[#4CD964] border border-[#4CD964] text-[14px]">
                                                        Disetujui
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-4 py-2">
                                                {t.keterangan ? (
                                                    <span className=" cursor-pointer">
                                                        {t.keterangan}
                                                    </span>
                                                ) : (
                                                    "-"
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
