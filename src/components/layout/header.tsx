


function Header() {
    return (
        <div className='w-full bg-white shadow-sm'>
            <header className="py-3 px-6">
                <div className="flex justify-end gap-4">
                    <div>
                    <button className="relative bg-[#B5B5B51A] rounded-lg w-[48px] h-[48px] cursor-pointer items-center justify-center flex">
                        <span className="absolute ml-6 -mt-7  bg-red-500 text-red-500 text-xs rounded-full w-2 h-2 ">.</span>
                        <img src="/img/clarity_notification-line.png" alt="" width={24} height={24}/>
                    </button>
                    </div>
                    <button className="rounded-full bg-[#1176BC1A] w-[40px] h-[40px] cursor-pointer items-center justify-center flex">
                        <img src="/img/user (1) 1.png" alt="" width={20} height={20} />
                    </button>
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