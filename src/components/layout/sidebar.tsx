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
  const pathname = location.pathname

  const isProposalActive = pathname.startsWith("/proposal-advance")

  const [openProposal, setOpenProposal] = useState(isProposalActive)

  useEffect(() => {
    if (isProposalActive) setOpenProposal(true)
  }, [isProposalActive])

  return (
    <aside className="w-90 bg-white shadow-md flex flex-col">
      <div className="px-8 py-6">
        <img src="/img/image 2.png" alt="Logo" width={224} />
      </div>

      <nav className="flex-1 px-8 py-6 space-y-6 text-md font-sans">
        {/* Dashboard */}
        <Link
          to="/"
          className={`flex items-center gap-2 ${
            pathname === "/" ? "text-blue-600 font-bold" : "text-gray-400"
          }`}
        >
          <MdDashboard className="text-lg" /> Dashboard
        </Link>

        {/* Perusahaan Relasi */}
        <Link
          to="/perusahaan-relasi"
          className={`flex items-center gap-2 ${
            pathname === "/perusahaan-relasi"
              ? "text-blue-600 font-bold"
              : "text-gray-400"
          }`}
        >
          <HiMiniBuildingOffice2 className="text-lg" />
          Perusahaan Relasi
        </Link>

        {/* Time Report */}
        <Link
          to="/time-report"
          className={`flex items-center gap-2 ${
            pathname === "/time-report"
              ? "text-blue-600 font-bold"
              : "text-gray-400"
          }`}
        >
          <BsFileEarmarkBarGraphFill className="text-lg" />
          Time Report
        </Link>

        {/* Projek */}
        <Link
          to="/projek"
          className={`flex items-center gap-2 ${
            pathname === "/projek"
              ? "text-blue-600 font-bold"
              : "text-gray-400"
          }`}
        >
          <MdInsertChart className="text-lg" />
          Projek
        </Link>

        {/* ===== Proposal Advance ===== */}
        <div
          className={`flex items-center justify-between ${
            isProposalActive
              ? "text-blue-600 font-bold"
              : "text-gray-400"
          }`}
        >
          {/* Parent → redirect ke on-going */}
          <button
            onClick={() => navigate("/proposal-advance/on-going")}
            className="flex items-center gap-2 flex-1 text-left"
          >
            <HiChatBubbleBottomCenterText className="text-lg" />
            Proposal Advance
          </button>

          {/* Toggle */}
          <button
            onClick={() => setOpenProposal(!openProposal)}
            className="ml-2"
          >
            <ChevronDown
              size={16}
              className={`transition-transform ${
                openProposal ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* ===== Submenu ===== */}
        {openProposal && (
          <div className="ml-8 flex flex-col gap-2 text-sm">
            <Link
              to="/proposal-advance/on-going"
              className={`flex items-center gap-2 ${
                pathname === "/proposal-advance/on-going"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <TbCircleDashed className="text-lg" />
              On Going
            </Link>

            <Link
              to="/proposal-advance/closed"
              className={`flex items-center gap-2 ${
                pathname === "/proposal-advance/closed"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <FaSquareCheck className="text-lg" />
              Closed
            </Link>
          </div>
        )}
      </nav>
    </aside>
  )
}

export default Sidebar
