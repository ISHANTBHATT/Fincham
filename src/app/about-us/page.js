"use client";
import React from "react";
import InfoContainer from "../Components/InfoContainer";

function Page() {
  return (
    <div className="w-full h-full">
      <div
        className="relative flex items-center justify-center pt-28 pb-10 bg-center bg-cover"
        style={{ backgroundImage: `url(finland.jpg)` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-3xl font-bold text-white">About Us</h1>
      </div>

      <InfoContainer />
      <div className="flex flex-col items-center md:flex-row  text-textcolor p-8 md:p-20  bg-gradient-to-r from-[#FFEFBA] to-[#FFFFFF] text-justify">
        <div>
          <div>
            <h1 className="font-semibold text-xl my-4">Promoting ties</h1>
            <p>
              Promoting and deepening commercial and industrial ties, trade,
              economic, social and cultural relations between India and Finland.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-xl my-4">Business Advocacy</h1>
            <p>
              Acting as an independent non-profit business advocacy organization
              and the principal interlocutor for industries that are operating
              in India and also abroad specifically those operating in Finland.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-xl my-4">
              Aiding & Facilitating
            </h1>
            <p>
              Promoting, facilitating and aiding any other objects of general
              public utility beneficial for industries operating in India and
              also abroad specifically those operating in Finland.
            </p>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/3">
          <img src="growth.png" className="" />
        </div>
      </div>
    </div>
  );
}

export default Page;
