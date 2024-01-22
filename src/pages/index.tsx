import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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

        <h2 className="text-black text-xl font-bold py-8">Login into your account</h2>

        <form className="formulinho flex flex-col gap-4">

          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" placeholder="alex@email.com" className="input mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
          <Image src="/email.svg" alt="icone email" className="bg-blue-500 rounded-sm dark:inverter" width={20} height={20} />

          <label htmlFor="Password">Password</label>
          <input id="Password" type="password" placeholder="Enter your password" className="input mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 " />
          <Image src="/password.svg" alt="icone senha" className="bg-blue-500 rounded-sm dark:inverter " width={20} height={20} />


          <a href="#" className="forgot-password text-blue-900 underline">Forgot Password?</a>

          <button className="btn bg-blue-400 rounded-md text-white">Login Now</button>
        </form>

        <span className="text-gray-400">OR</span>

        <button className="bg-transparent border px-14 border-blue-500 bg-blue-400 rounded-md text-blue-400  ">Signup Now</button>

      </div>
      <div className="image h-screen md:w-3/4 flex items-center justify-center">
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
