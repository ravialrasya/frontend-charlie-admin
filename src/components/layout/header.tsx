import { Bell } from 'lucide-react'
import { FaUser } from 'react-icons/fa6'

function Header() {
    return (
        <div className='w-full bg-white shadow-sm'>
            <header className="py-3 px-6">
                <div className="flex justify-end gap-4">
                    <button className="relative bg-gray-200 rounded-lg py-3 px-3">
                        <span className="absolute ml-2 -mt-2 bg-red-500 text-red-500 text-xs rounded-full w-2 h-2">.</span>
                        <Bell className="w-5 h-5 text-gray-600 " />
                    </button>
                    <button className="rounded-full bg-gray-200 py-3 px-3">
                        <FaUser className="relative text-blue-600  w-5 h-5" />
                    </button>
                    <div className="font-medium cursor-pointer mt-2">Kathy Murphy ▾</div>
                </div>
            </header>
        </div>
    )
}

export default Header