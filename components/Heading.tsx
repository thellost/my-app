'use client'
import {ReactElement} from "react";
type HeadingProps = {
    title: string,
    isAuthenticated: boolean | null,
    email: string | null,
    name: string | null
};
import Image from "next/image";
import logo from '@/public/figma-svgrepo-com.svg';
import React, {useState} from "react";
import {LoginLink, RegisterLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

const Heading = ({
    title,
    isAuthenticated = false,
    email = null,
    name = null
} : HeadingProps) : ReactElement => {

    const [MenuOpen,
        setMenuOpen] = useState < boolean > (false);

    const buttonClass = "overflow-hidden flex justify-center items-center h-20 md:h-20 sm:h-fit  cursor-p" +
            "ointer border group transition-all duration-200 hover:bg-orangeAttention border-" +
            "baseOutline/40";
    const textClass = "overflow-hidden text-white text-center text-xl md:text-4xl font-semibold  transi" +
            "tion-all duration-200 group-hover:text-black";

    return (
        <div className="bg-baseColor sticky top-10 z-50 grid-row">
            <nav className="z-50">
                <div className="mx-2 px-2 md:mx-10 sm:px-6 lg:px-8">

                    <div className="relative flex h-16 items-center justify-between">
                        <div
                            className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
                            <a href="/">
                                <div className="flex flex-shrink-0 items-center">
                                    <h1 className="px-1 font-bold text-2xl text-baseFontColor   ">{title}</h1>
                                    <Image className="h-8 w-auto" src={logo} alt="Your Company"></Image>
                                </div>
                            </a>

                        </div>
                        <div className="flex flex-shrink-0 items-center">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {isAuthenticated
                                        ? <div className="text-white">{name + " " + email}</div>
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

                                </div>
                            </div>
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