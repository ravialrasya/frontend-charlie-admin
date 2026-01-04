import { useEffect, useState } from "react"
import { MdDashboard, MdInsertChart } from "react-icons/md"
import { BsFileEarmarkBarGraphFill } from "react-icons/bs"
import { Link, useLocation, useNavigate } from "react-router-dom"
import {
  HiChatBubbleBottomCenterText,
  HiMiniBuildingOffice2,
} from "react-icons/hi2"
import { ChevronDown } from "lucide-react"
import { TbCircleDashed } from "react-icons/tb"
import { FaSquareCheck } from "react-icons/fa6"

function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()
  const pathname = location.pathname;
  const isActivePath = (path: string) => pathname.startsWith(path);

  const isProposalActive = pathname.startsWith("/proposal-advance");
  const [openProposal, setOpenProposal] = useState(isProposalActive);

  useEffect(() => {
    if (isProposalActive) setOpenProposal(true)
  }, [isProposalActive])

  const menuClass = (active: boolean) =>
    `
    group flex items-center gap-3 px-4 py-3 rounded-xl
    transition-all duration-200
    ${active
      ? "bg-blue-50 text-blue-600 font-semibold shadow-sm"
      : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
    }
  `

  return (
    <aside className="w-72 bg-white border-r border-gray-100 flex flex-col">
      {/* ===== LOGO ===== */}
      <div className="px-6 py-6 border-b border-gray-100">
        <img src="/img/image 2.png" alt="Logo" className="w-40" />
      </div>

      {/* ===== NAV ===== */}
      <nav className="flex-1 px-4 py-6 space-y-2 text-sm">
        {/* Dashboard */}
        <Link to="/" className={menuClass(pathname === "/")}>
          <MdDashboard className="text-lg" />
          Dashboard
        </Link>

        {/* Perusahaan Relasi */}
        <Link
          to="/perusahaan-relasi"
          className={menuClass(isActivePath("/perusahaan-relasi"))}
        >
          <HiMiniBuildingOffice2 className="text-lg" />
          Perusahaan Relasi
        </Link>

        {/* Time Report */}
        <Link
          to="/time-report"
          className={menuClass(isActivePath("/time-report"))}
        >
          <BsFileEarmarkBarGraphFill className="text-lg" />
          Time Report
        </Link>

        {/* Projek */}
        <Link
          to="/projek"
          className={menuClass(isActivePath("/projek"))}
        >
          <MdInsertChart className="text-lg" />
          Projek
        </Link>

        {/* ===== Proposal Advance ===== */}
        <div className="mt-2">
          <div
            className={menuClass(isProposalActive)}
          >
            <button
              onClick={() => navigate("/proposal-advance/on-going")}
              className="flex items-center gap-3 flex-1 text-left"
            >
              <HiChatBubbleBottomCenterText className="text-lg" />
              Proposal Advance
            </button>

            <button
              onClick={() => setOpenProposal(!openProposal)}
              className="p-1"
            >
              <ChevronDown
                size={16}
                className={`transition-transform ${openProposal ? "rotate-180" : ""
                  }`}
              />
            </button>
          </div>

          {/* ===== SUBMENU ===== */}
          {openProposal && (
            <div className="ml-6 mt-2 space-y-1 border-l border-gray-200 pl-4">
              <Link
                to="/proposal-advance/on-going"
                className={menuClass(
                  pathname.startsWith("/proposal-advance/on-going")
                )}
              >
                <TbCircleDashed className="text-base" />
                On Going
              </Link>

              <Link
                to="/proposal-advance/closed"
                className={menuClass(
                  pathname.startsWith("/proposal-advance/closed")
                )}
              >
                <FaSquareCheck className="text-base" />
                Closed
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* ===== FOOTER (OPTIONAL) ===== */}
      <div className="px-6 py-4 text-xs text-gray-400">
        © 2026 AbsenKu
      </div>
    </aside>
  )
}

export default Sidebar