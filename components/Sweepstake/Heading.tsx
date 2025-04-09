'use client'
import {ReactElement} from "react";
type HeadingProps = {
    title: string,
    isAuthenticated: boolean | null,
    email: string | null,
    name: string | null
};
import Image from "next/image";
import logo from '@/public/figma-svgrepo-com-Orange.svg';
import React, {useState} from "react";

import {LoginLink, RegisterLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
const Heading = ({
    title,
    isAuthenticated=false
} : HeadingProps) : ReactElement => {
    
    const [ProfileOpen,
        setProfileOpen] = useState < boolean > (false);
    const [MenuOpen,
        setMenuOpen] = useState < boolean > (false);

    const profileTextClass = "font-Inter block px-4 py-3 text-sm text-gray-300  capitalize transition-colors d" +
            "uration-200 transform dark:text-gray-300 hover:bg-baseWashedColor dark:hover:bg-gray-70" +
            "0 dark:hover:text-white";

    return (
        <div className="bg-baseColor sticky top-10 z-50  grid-row">
            <nav className="z-50">
                <div className="mx-2 px-2 md:mx-6 sm:px-6 lg:px-8">

                    <div className="relative flex h-20 items-center justify-between">
                        <div
                            className="flex flex-0 items-center justify-between sm:items-stretch sm:justify-start">
                            <a href="/sweepstakes/home/">
                                <div className="flex flex-shrink-0 items-center basis-1/3">
                                    <Image className="h-8 w-auto" src={logo} alt="Your Company"></Image>
                                    <h1
                                        className="px-1 font-bold text-2xl text-baseFontColor font-Inter     hidden md:flex">{title}</h1>
                                </div>
                            </a>

                        </div>

                        <ul className="flex basis-1/2 justify-center items-start">
                            <li className="lg:flex lg:visible hidden overflow-hidden flex-1 justify-center">
                                <button
                                    onMouseEnter={() => setMenuOpen(true)}
                                    onMouseLeave={() => setMenuOpen(false)}
                                    className="flex fixed items-center w-full text-white rounded font-Inter md:p-0 md:w-auto">Home
                                    <svg
                                        className="w-2.5 h-2.5 ms-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"/>
                                    </svg>
                                    <div
                                        className={`absolute top-0 left-1/2 -translate-x-1/2 z-20 w-56 py-2 mt-10 transation-all duration-500 ease-in-out overflow-hidden bg-baseCardGray rounded-md shadow-xl dark:bg-gray-800 ${MenuOpen
                                        ? "grid-rows-[1fr] opacity-100 max-h-screen"
                                        : "grid-rows-[0fr] opacity-0 max-h-0"}`}>

                                        <a href="#" className={profileTextClass}>
                                            Luxury Car Sweepstake
                                        </a>

                                        <a href="#" className={profileTextClass}>
                                            Ride $ Win
                                        </a>

                                        <a href="#" className={profileTextClass}>
                                            Vacations Time !
                                        </a>

                                        <a href="#" className={profileTextClass}>
                                            Electronics Extravaganze
                                        </a>

                                        <a href="#" className={profileTextClass}>
                                            Team
                                        </a>

                                        <a href="#" className={profileTextClass}>
                                            Invite colleagues
                                        </a>

                                        <a href="#" className={profileTextClass}>
                                            Help
                                        </a>
                                    </div>
                                </button>

                            </li>

                            <li className="lg:flex flex-1 text-white rounded font-Inter justify-center hidden lg:visible">
                                Features
                            </li>
                            <li className="lg:flex lg:visible hidden overflow-hidden flex-1 justify-center">
                                <button
                                    onMouseEnter={() => setMenuOpen(true)}
                                    onMouseLeave={() => setMenuOpen(false)}
                                    className="flex fixed items-center justify-between w-full text-white rounded font-Inter md:p-0 md:w-auto">Sweepstakes
                                    <svg
                                        className="w-2.5 h-2.5 ms-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"/>
                                    </svg>
                                    <div
                                        className={`absolute top-0 left-1/2 -translate-x-1/2 z-20 w-56 py-2 mt-10 transation-all duration-500 ease-in-out overflow-hidden bg-baseCardGray rounded-md shadow-xl dark:bg-gray-800 ${MenuOpen
                                        ? "grid-rows-[1fr] opacity-100 max-h-screen"
                                        : "grid-rows-[0fr] opacity-0 max-h-0"}`}>

                                        <a href="#" className={profileTextClass}>
                                            Luxury Car Sweepstake
                                        </a>

                                        <a href="#" className={profileTextClass}>
                                            Ride $ Win
                                        </a>

                                        <a href="#" className={profileTextClass}>
                                            Vacations Time !
                                        </a>

                                        <a href="#" className={profileTextClass}>
                                            Electronics Extravaganze
                                        </a>

                                        <a href="#" className={profileTextClass}>
                                            Team
                                        </a>

                                        <a href="#" className={profileTextClass}>
                                            Invite colleagues
                                        </a>

                                        <a href="#" className={profileTextClass}>
                                            Help
                                        </a>
                                    </div>
                                </button>

                            </li>

                            <li className="lg:flex flex-1 text-white rounded font-Inter justify-center hidden lg:visible">
                                Contacts
                            </li>

                        </ul>

                        <div className="flex flex-shrink-0 items-center ">

                            {isAuthenticated
                                ? null
                                : <LoginLink>
                                    <div
                                        className="rounded-md px-3 py-2 text-sm font-bold text-baseFontColor hover:underline"
                                        aria-current="page">Sign In</div>
                                </LoginLink>
}

                            {isAuthenticated
                                ? null
                                : <RegisterLink>
                                    <div
                                        className="rounded-md bg-orangeAttention px-6 py-2 text-sm font-bold drop-shadow-xl text-baseFontColor  hover:bg-white hover:text-orangeAttention">Register</div>
                                </RegisterLink>
}

                            {isAuthenticated

                                ? <div className="flex justify-center">
                                        <div className="relative inline-block">
                                            <button
                                                onClick={() => setProfileOpen(!ProfileOpen)}
                                                className="relative z-10 flex items-center p-2 text-sm text-gray-200 bg-baseCardGray border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
                                                <span className="mx-1">John Doe</span>
                                                <svg
                                                    className="w-5 h-5 mx-1"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                            </button>

                                            <div
                                                className={`absolute right-0 z-20 w-56 py-2 mt-2 transation-all duration-500 ease-in-out overflow-hidden bg-baseCardGray rounded-md shadow-xl dark:bg-gray-800 ${ProfileOpen
                                                ? "grid-rows-[1fr] opacity-100 max-h-screen"
                                                : "grid-rows-[0fr] opacity-0 max-h-0"}`}>
                                                <a
                                                    href="#"
                                                    className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform">
                                                    <img
                                                        className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                                                        src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                                                        alt="jane avatar"></img>
                                                    <div className="mx-1">
                                                        <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">John Doe</h1>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">john10@gmail.com</p>
                                                    </div>
                                                </a>

                                                <a href="#" className={profileTextClass}>
                                                    view profile
                                                </a>

                                                <a href="#" className={profileTextClass}>
                                                    Settings
                                                </a>

                                                <a href="#" className={profileTextClass}>
                                                    Keyboard shortcuts
                                                </a>

                                                <a href="#" className={profileTextClass}>
                                                    Company profile
                                                </a>

                                                <a href="#" className={profileTextClass}>
                                                    Team
                                                </a>

                                                <a href="#" className={profileTextClass}>
                                                    Invite colleagues
                                                </a>

                                                <a href="#" className={profileTextClass}>
                                                    Help
                                                </a>
                                                <LogoutLink>
                                                    <a className={profileTextClass}>
                                                        Sign Out
                                                    </a>
                                                </LogoutLink>
                                            </div>
                                        </div>
                                    </div>
                                : null
}
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Heading