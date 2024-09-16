"use client";
import React from "react";
import { SlLink } from "react-icons/sl";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import { news } from "../Components/data";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter();
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };
  const handleClick = (title, id) => {
    const url = title.replace(/\s+/g, "-").toLowerCase();
    router.push(`../${url}/?id=${encodeURIComponent(id)}`);
  };
  // const handleClick = (title, id) => {
  //   const url = title.replace(/\s+/g, "-").toLowerCase();
  //   router.push(`${url}.html`);
  // };
  const sortedNews = news
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <div>
      <div className="flex justify-center items-center bg-gradient-to-r from-[#005C97] to-[#363795] pt-28 pb-10">
        <h1 className="text-5xl text-white font-bold">News</h1>
      </div>
      <div className="p-8 md:p-20 flex flex-wrap justify-center">
        {sortedNews.map((e) => (
          <div
            key={e.id}
            className="relative bg-white m-5 rounded-3xl pt-1 shadow-lg w-96 h-full border-t-2 border-t-gray-100"
          >
            <div
              className=" absolute w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-64  left-10  md:-top-10 md:-left-10 overflow-hidden rounded-xl mx-4 mt-4 mb-2"
              onClick={() => handleClick(e.title, e.id)}
            >
              <img
                src={e.img}
                alt=""
                className=" w-full h-full transform transition-transform duration-200 ease-linear hover:scale-110"
              />
              <a className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-blue-500 opacity-0 transition-opacity duration-500 hover:opacity-90 flex items-center justify-center text-white text-2xl">
                <SlLink />
              </a>
            </div>
            <div className="bg-white p-4 rounded-3xl pt-52 sm:pt-64 md:pt-60">
              <div className="absolute top-8 right-0 w-16 md:w-24 h-8 bg-blue-800 rounded-l-lg pl-2 pt-1">
                <div className="flex gap-1">
                  <span className="text-white text-sm">News</span>
                </div>
              </div>

              <h3
                className="text-lg font-bold text-gray-900 cursor-pointer"
                onClick={() => handleClick(e.title, e.id)}
              >
                <a>{e.title}</a>
              </h3>
              <div className="py-4">
                <p className=" whitespace-pre-wrap">
                  {truncateText(e.desc, 200)}
                </p>
              </div>
              <a
                onClick={() => handleClick(e.title, e.id)}
                className="float-right py-2 px-4 text-xs bg-blue-800 text-white rounded-full shadow-lg hover:bg-blue-600 uppercase cursor-pointer"
              >
                read more
              </a>
              <span className="text-gray-500 text-sm flex gap-2 items-center">
                <CalendarDaysIcon className="w-6 text-gray-300" />
                <span>{e.date}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
      ;
    </div>
  );
}

export default Page;
