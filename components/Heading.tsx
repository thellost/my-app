'use client'
import {ReactElement} from "react";
type HeadingProps = {
    title: string,
    isAuthenticated: boolean | null,
    email: string | null,
    name: string | null,
    displayMoney: boolean
};
import Image from "next/image";
import logo from '@/public/figma-svgrepo-com.svg';
import React, {useState} from "react";
import {LoginLink, RegisterLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

const Heading = ({
    title,
    isAuthenticated = false,
    email = null,
    name = null,
    displayMoney = false
} : HeadingProps) : ReactElement => {

    const [MenuOpen,
        setMenuOpen] = useState < boolean > (false);
    const [ProfileOpen,
        setProfileOpen] = useState < boolean > (false);

    const buttonClass = "overflow-hidden flex justify-center items-center h-20 md:h-20 sm:h-fit  cursor-p" +
            "ointer border group transition-all duration-200 hover:bg-orangeAttention border-" +
            "baseOutline/40";
    const textClass = "overflow-hidden text-white text-center text-xl md:text-4xl font-semibold  transi" +
            "tion-all duration-200 group-hover:text-black";
    const profileTextClass = "block px-4 py-3 text-sm text-gray-300  capitalize transition-colors duration-200" +
            " transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hove" +
            "r:text-white";

    return (
        <div className="bg-baseColor sticky top-10 z-50 grid-row">
            <nav className="z-50">
                <div className="mx-2 px-2 md:mx-10 sm:px-6 lg:px-8">

                    <div className="relative flex h-16 items-center justify-between">
                        <div
                            className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
                            <a href="#">
                                <div className="flex flex-shrink-0 items-center">
                                    <h1 className="px-1 font-bold text-2xl text-baseFontColor  hidden md:flex">{title}</h1>
                                    <Image className="h-8 w-auto" src={logo} alt="Your Company"></Image>
                                </div>
                            </a>

                        </div>
                        {displayMoney
                            ? <div
                            className="absolute flex left-1/2 right-1/2 text-white items-center bg-baseGrayText  justify-center">
                            <div className="inline-flex rounded-md shadow-sm" role="group">
                                <div
                                    className="px-4 py-2 w-28  text-sm font-medium  bg-baseWashedColor border border-baseBackIcon rounded-s-lg">
                                    $ 0.0000
                                </div>
                                <button
                                    type="button"
                                    className="px-4 py-2  text-sm font-medium  bg-baseWashedColor border border-baseBackIcon rounded-r-lg">
                                    USD
                                </button>
                            </div>
                        </div>
                            : null}
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
                                                className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
                                                <span className="mx-1">{name}</span>
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
                                                    className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                                    <img
                                                        className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                                                        src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                                                        alt="jane avatar"></img>
                                                    <div className="mx-1">
                                                        <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{name}</h1>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">{email}</p>
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
                        <div
                            className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button
                                type="button"
                                onClick={() => setMenuOpen(!MenuOpen)}
                                className="relative inline-flex items-center justify-center rounded-full p-2 text-baseFontColor bg-baseBackIcon hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset"
                                aria-controls="mobile-menu"
                                aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="block h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                </svg>
                                <svg
                                    className="hidden h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div
                id="MegaMenu"
                className={`bg-baseColor overflow-hidden transation-all duration-500 ease-in-out origin-top grid grid-cols-2 grid-flow-row justify-center items-center h-fit ${MenuOpen
                ? "grid-rows-[1fr] opacity-100 max-h-screen"
                : "grid-rows-[0fr] opacity-0 max-h-0"} `}>
                <div className={buttonClass}>
                    <div className={textClass}>
                        Live Play.
                    </div>
                </div>
                <div className={buttonClass}>
                    <div className={textClass}>
                        Slots
                    </div>
                </div>
                <div className={buttonClass}>
                    <div className={textClass}>
                        Blackjack
                    </div>
                </div>
                <div className={buttonClass}>
                    <div className={textClass}>
                        Baccarat
                    </div>
                </div>
                <div className={buttonClass}>
                    <div className={textClass}>
                        Account
                    </div>
                </div>
                <div className={buttonClass}>
                    <div className={textClass}>
                        Settings
                    </div>
                </div>
                <div className={buttonClass}>
                    <div className={textClass}>
                        Affiliate
                    </div>
                </div>

                <div className={buttonClass}>
                    <div className={textClass}>
                        Support
                    </div>
                </div>

                <div className={buttonClass}>
                    <div className={textClass}>
                        Responsible Gaming
                    </div>
                </div>

                {isAuthenticated
                    ? <LogoutLink>
                            <div className={buttonClass}>
                                <div className={textClass}>
                                    Log Out
                                </div>
                            </div>
                        </LogoutLink>
                    : null}

            </div>
        </div>
    )
}

export default Heading