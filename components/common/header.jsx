import React, { useState } from 'react'
import Link from "next/link";


function Header() {

  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full fixed bg-[#E0F3FF] bg-cover bg-no-repeat  z-10">
      <div className="justify-between md:items-center md:flex container" >
        <div>
          <div className="flex items-center justify-between py-[15px] md:block">
            <Link href="/">
              <img src="/images/Verisyslogo.png" className="w-[60px]" alt="logo" />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2  rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <div className=' gap-10 md:flex'>
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="font-medium text-[12px] text-[#1FA5DE]">
                  <Link href="#">Technology</Link>
                </li>

                <li className="font-medium text-[12px] text-[#1FA5DE]">
                  <Link href="#">Use Cases </Link>
                </li>
                <li className="font-medium text-[12px] text-[#1FA5DE]">
                  <Link href="#">Markets</Link>
                </li>
                <li className="font-medium text-[12px] text-[#1FA5DE]">
                  <Link href="#">Join Our Team</Link>
                </li>
              </ul>
              <button className='text-[12px] mt-[20px] md:mt-[0px] text-[#FFFFFF] bg-[#1FA5DE] p-[9px] w-[97px] rounded-[10px] italic'>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}


export default Header
