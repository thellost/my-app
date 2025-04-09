'use client'
import React, { FormEvent } from "react";
import Image from "next/image";
import logo from '@/public/figma-svgrepo-com-Orange.svg';
import {useRouter} from 'next/navigation'

function Page() {
    const router = useRouter()

    const handleForm = async(event : FormEvent<HTMLFormElement>) => {
    
        event.preventDefault()

        
        const formData = new FormData(event.currentTarget)
        let email = formData.get("email")?.toString();
        let password = formData.get("password")?.toString();


        const response = await fetch('/api/signup', {
          method: 'POST',
          body: formData,
        })
   
        if (!response.ok) {
          console.log(response)
          throw new Error('Failed to submit the data. Please try again.')
        }
   
        // Handle response if necessary
        const {result, error} = await response.json()


        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/sweepstakes/home")
    }
    return (

        <section className="bg-gray-50 dark:bg-gray-900">
            <div
                className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                    href="#"
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <Image
                        className="w-8 h-8 mr-2"
                        src={logo}
                        alt="logo">

                        </Image>
                        Platform
                    </a>
                    <div
                        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1
                                className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Create an account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleForm} action="#">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        required={true}></input></div>
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required={true}></input></div>
                                        <div>
                                            <label
                                                htmlFor="confirm-password"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                            <input
                                                type="confirm-password"
                                                name="confirm-password"
                                                id="confirm-password"
                                                placeholder="••••••••"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required={true}></input></div>
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        id="terms"
                                                        aria-describedby="terms"
                                                        type="checkbox"
                                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                        required={true}></input></div>
                                                    <div className="ml-3 text-sm">
                                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the
                                                            <a
                                                                className="font-medium text-orangeAttention hover:underline dark:text-primary-500"
                                                                href="#">Terms and Conditions</a>
                                                        </label>
                                                    </div>
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="w-full text-white bg-orangeAttention hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                                    Already have an account?  
                                                    <a
                                                        href="/account/signin"
                                                        className="font-medium text-orangeAttention hover:underline dark:text-primary-500">Login here</a>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>);
}

export default Page;