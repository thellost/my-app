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
const Heading = ({
    title
} : HeadingProps) : ReactElement => {

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
                            <div
                                className="rounded-md px-3 py-2 text-sm font-bold text-baseFontColor hover:underline"
                                aria-current="page">Sign In</div>

                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Heading