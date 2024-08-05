import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
function Page() {
  return (
    <div className="">
      <div className="flex justify-center items-center bg-gradient-to-r from-[#005C97] to-[#363795] pt-28 pb-10">
        <h1 className="text-4xl md:text-5xl text-white font-bold">
          Vision & Mission
        </h1>
      </div>

      <div className="text-textcolor flex flex-col md:flex-row py-20 justify-center px-10 items-center gap-20">
        <div className="w-full md:w-1/2 h-full flex flex-col gap-16 pt-10 ">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <FaEye className="w-10 h-10 text-blue-500" />
              <h1 className="font-semibold text-3xl">Vision</h1>
            </div>

            <p className="">
              “To become the voice of the Indo-Finnish business community in
              India so as to catalyze the progress of Finnish technology and
              commerce in India and Indian technology and expertise in Finland.”
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <TbTargetArrow className="w-10 h-10 text-red-500" />
              <h1 className="font-semibold text-3xl">Mission</h1>
            </div>

            <p className="">
              “To build and foster the growth of a collaborative business
              climate so as to boost the rejuvenation of the Finnish business
              community in India and Indian business community in Finland.”
            </p>
          </div>
        </div>
        <div className=" rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-1 w-[200px] xl:w-[260px]">
          <img
            src="/bulb.png"
            width={260}
            height={200}
            className="w-full h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
