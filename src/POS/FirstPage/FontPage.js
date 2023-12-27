import {
  IonIcon,
} from "@ionic/react";
import { useState } from "react";
import { grid, menu, close, chevronForwardOutline } from "ionicons/icons";
import React from "react";
import Button from "./Button";
import ButtonText from "./FontButt";
import { Link } from "react-router-dom";
import SideBar from "../Home/Sidebar";
function FontPage() {
  const Linkb = [
    { name: "Dashboard", link: "/" },
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Product", link: "/" },
    { name: "Brand", link: "/" },
    { name: "Stock-Lavel", link: "/" },
    { name: "Contact", link: "/" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [button, setButton] = useState('');
  return (
    <div className="w-screen h-screen">

      <div
        className="w-full h-full  bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1619364726002-dfd4fdaee5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80.png')",
        }}
      >
          <div className="w-full h-full shadow-md fixed items-center md:px-2 top-0 left-0">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="  text-3xl absolute  cursor-pointer right-8 top-4 hover:text-cyan-400 text-white md:hidden "
            >
              <IonIcon icon={isOpen ? close : menu}></IonIcon>
            </div>           
            <div className="w-full h-full flex">
            <div className="w-[22%] h-full ">
            <SideBar/>
            </div>
            <div className="w-[78%] h-[8%] flex justify-end">
              <ul
                className={`md:flex md:items-center text-white text-lg 
                      justify-end md:pb-0 pb-12 absolute md:static md:z-auto z-[-1]
                       left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
                       ${isOpen ? "top-20" : "top-[-490px]"}`}
              >
                {Linkb.map((links) => (
                  <li
                    key={links.name}
                    className="mr-10 text-x1 md:my-0 my-7 hover:scale-[1.2]"
                  >
                    <a
                      href={links.link}
                      className="text-cyan-400 hover:text-white duration-500 hover:border-b hover:scale-[1.2] "
                    >
                      {links.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </div>
            {/* <div className="w-full h-full flex">
           
                <div className="w-[20%] h-full  ">
                {ButtonText.map(({ title, imge, link, className }) => (
                  <Link to={link}>
                    <button className={`w-[80%] h-[20%] p-6 ml-4 mb-6 rounded-lg shadow-lg hover:text-white text-lg
           text-cyan-900  hover:translate-x-12 hover:scale-[1.2] hover:ring-2 ring-purple-700 
           ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900 font-extrabold ${className}`}
                      onClick={() => setButton(button)}>
                      <span className="text-sm font-bold">{title}</span>
                    </button></Link>

                ))}

                <Button name="Sales" className="bg-green-500"/>
                <Button name="Purchase" className="bg-blue-500 " />
                <Button name="Coustomer" className="bg-amber-600 " />
                 <Button name="Stock" className="bg-lime-600   "
              </div>  

              <div className="w-full h-[full] ml-10">
                <div className=" text-9xl absolute px-8 py-52  text-neutral-300 scale-150 ">
                  <IonIcon icon={chevronForwardOutline}></IonIcon>
                </div>
                <span className="text-white text-6xl sm:text-5xl capitalize tracking-widest mt-40 ml-6 lg:text-7xl flex justify-center animate-bounce">
                  POS Comming soon...
                </span>

              </div>

            </div> */}

          </div>
        </div>
        
      </div>
  );
}
export default FontPage;