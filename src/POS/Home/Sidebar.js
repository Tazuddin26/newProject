import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi"
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FaBalanceScale } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { RiSettings3Line } from "react-icons/ri";

const SideBar = () => {
    const menus = [
       
        { name: "Dashboard", link: '/', icon: MdOutlineDashboard },
        {name: "Sales", link: '/sales', icon: FaBalanceScale },
        { name: "Purchase", link: '/add', icon: AiOutlineUser },
        { name: "Stock", link: '/list', icon: AiOutlineHeart, margin: true },
        { name: "Setting", link: '/', icon: RiSettings3Line, margin: true },
    ];
    const [open, setOpen] = useState(true);
    return (
        <selection className="flex gap-6">
            <div className={`bg-black min-h-screen ${open ? 'w-72' : 'w-16'} duration-500 text-gray-100 px-4 `}>
                <div className="py-3 flex justify-end">
                    <IoIosArrowDropleftCircle
                        size={30} className={`cursor-pointer ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className="mt-4 flex flex-col gap-4 relative">
                    {
                        menus.map((menu, i) => (
                            <Link
                                to={menu.link}
                                key={i}
                                className={`${menu.margin && "mt-5"} group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
                                <div>{React.createElement(menu.icon, { size: '26' })}</div>
                                <h2 style={{
                                    transitionDelay: `${i + 3}00ms`,
                                }}
                                    className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className="m-3 text-xl text-gray-900 font-semibold">
            </div>
        </selection>
    )
}

export default SideBar;