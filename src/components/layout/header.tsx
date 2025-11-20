
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='w-full bg-white shadow-sm'>
            <header className="py-3 px-6">
                <div className="flex justify-end gap-4">
                    
                    <Link to='/karyawan/profile-karyawan'>
                    <button className="rounded-full bg-[#1176BC1A] w-[40px] h-[40px] cursor-pointer items-center justify-center flex">
                        <img src="/img/user (1) 1.png" alt="" width={20} height={20} />
                    </button>
                    </Link>
                    <div className="font-medium ">
                        <select className="rounded-lg outline-none py-2 cursor-pointer">
                            <option>
                                Kathy Murphy 
                            </option>
                        </select>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header