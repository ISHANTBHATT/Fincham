import Link from "next/link";
import React from "react";
import { FaHandshake } from "react-icons/fa";

function Partner() {
  return (
    <div className="w-full h-full text-white bg-gradient-to-r from-pink-500 to-yellow-500">
      <div className="pb-4 md:pb-10 flex flex-col items-center justify-center px-4 md:px-20 py-10">
        <h1 className="text-2xl md:text-4xl  font-bold relative before:absolute before:rounded-lg before:content before:w-72  md:before:w-[420px] before:h-1 before:-bottom-2 before:left-1/5 before:bg-gradient-to-tr from-blue-400 to-blue-600 transition-all ease-in-out duration-100 mt-10">
          Partner with FINCHAM
        </h1>
        <img src="deal.svg" className="h-80 w-80" />
        <Link href="contact-us" className="w-full lg:w-1/5">
          <button
            type="button"
            className="bg-[#01306b] hover:bg-[#feb902] w-full text-white px-4 py-3  rounded-full hover:shadow-lg transition-all ease-in-out duration-100"
          >
            Let&apos;s Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Partner;
