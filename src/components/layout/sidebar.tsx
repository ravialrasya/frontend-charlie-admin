import { useEffect } from 'react'
import {  MdDashboard,MdInsertChart} from 'react-icons/md'
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom'
import { HiChatBubbleBottomCenterText, HiMiniBuildingOffice2 } from "react-icons/hi2";

function Sidebar() {
    const location = useLocation();
    const getPath = location.pathname;
    const getSplit = getPath.split("/");
    const pathname = `/${getSplit[1]}`;

    useEffect(() => {
        console.log(pathname);
    }, [pathname])
    

    return (
        <aside className="w-90 bg-white shadow-md flex flex-col">
            <div className="px-8 py-6">
                <img src="/img/image 2.png" alt="Logo" width={224} />
            </div>
            <nav className="flex-1 px-8 py-6 space-y-8 text-md font-sans">
                <Link to="/" className={`flex items-center gap-2 ${pathname === "/" ? "text-blue-600 font-bold" : "text-gray-400"}`}>
                    <MdDashboard className="text-lg" /> Dashboard
                </Link>
                <Link to='/karyawan' className={`flex items-center gap-2 ${pathname === "/karyawan" ? "text-blue-600 font-bold" : "text-gray-400"}`}>
                    <HiMiniBuildingOffice2 className='text-lg'/> Perusahaan Relasi
                </Link>
                <a href="/time-report" className={`flex items-center gap-2 ${pathname === "/time-report" ? "text-blue-600 font-bold" : "text-gray-400"}`}>
                    <BsFileEarmarkBarGraphFill className="text-lg" /> Time Report
                </a>
                
                <a href="/absensi" className={`flex items-center gap-2 ${pathname === "/absensi" ? "text-blue-600 font-bold" : "text-gray-400"}`}>
                    <MdInsertChart className='text-lg'/> Project
                </a>
                <a href="/proposal-advance"  className={`flex items-center gap-2 ${pathname === "/proposal-advance" ? "text-blue-600 font-bold" : "text-gray-400"}`}>
                    <HiChatBubbleBottomCenterText className="text-lg" /> Proposal Advance
                </a>
            </nav>
        </aside>
    )
}

export default Sidebar