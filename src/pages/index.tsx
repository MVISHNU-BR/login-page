import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import React from 'react';

export default function Home() {
  return (
    <main
      className={`flex items-center justify-center h-screen`}
    >
      
      <div className="content-form bg-white shadow-2xl flex flex-col h-screen items-center justify-center flex-grow md:w-1/4">
        <Image
          src="/logo.svg"
          alt="logo Network"
          className="dark:invert"
          width={218}
          height={59.54}
          priority />

        <h2 className="text-black text-xl font-extrabold py-8">Login into your account</h2>

        <form className="flex flex-col w-10/12">

          <label htmlFor="email">Email Address</label>
          <div className="input-wrapper flex items-start mb-8">
            
            <input type="text" id="email" placeholder="alex@email.com" className="input mt-1 block w-full px-3 py-2  border border-slate-300 rounded-l-lg text-md shadow-sm placeholder-gray-600
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
            
            <div className="w-12 h-11 bg-blue-500 rounded-md mt-0.5 dark:inverter"><Image src="/email.svg" alt="icone email" className="m-2.5" width={25} height={25} /></div>
            
            </div>


          <label htmlFor="Password">Password</label>
          <div className="input-wrapper flex items-center">
            
            <input id="Password" type="password" placeholder="Enter your password" className="input mt-1 block w-full px-3 py-2 border border-slate-300 rounded-l-lg text-md shadow-sm placeholder-gray-600
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 " />
            <div className="w-12 h-11 bg-blue-500 rounded-md mt-0.5 dark:inverter"><Image src="/password.svg" alt="icone password" className="m-2.5" width={25} height={25} /></div>
            
            </div>

          <a href="#" className="text-right text-blue-900 underline mt-1">Forgot Password?</a>

        </form>
        <div className="flex flex-col w-10/12 gap-8 mt-16">
            <button className="bg-blue-400 rounded-md text-white py-3 hover:bg-blue-500 text-md font-semibold shadow-lg">Login Now</button>
            
            <div className="flex space-x-6 items-center">
              <div className="border-b-2 border-gray-300 w-5/12"></div>
              <span className="text-gray-400 text-center">OR</span>
              <div className="border-b-2 border-gray-300 w-5/12"></div>
            </div>
            
            <button className="bg-transparent border border-blue-500 text-lg font-bold rounded-md text-blue-400 py-3 hover:bg-blue-500 hover:text-white">Signup Now</button>

        </div>



      </div>
      <div className="image h-screen w-3/4 flex items-center justify-center max-md:w-2/4 max-lg:w-2/4 max-sm:hidden">
        <Image
          src="/login-illustrator.png"
          alt="Vercel Logo"
          className="dark:invert"
          width={632}
          height={632}
          priority
        />
      </div>

    </main>
  );
}
