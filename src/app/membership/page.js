import React from "react";

function Page() {
  return (
    <div className="py-20 md:py-40 px-10 md:px-20 flex flex-col md:flex-row  text-textcolor bg-gray-50">
      <div className="md:w-1/2 flex flex-col gap-4">
        <p className="font-semibold text-xl">HOW WE CAN HELP</p>
        <p className="font-bold text-4xl">Membership</p>
        <p>
          Build an effectual network, inland as well as offshore. Be the growth
          that the two countries experience. the interest of the members is
          envisaged in the thriving of international business routes.
        </p>
        <img src="member.png" className="w-[450px] h-full" />
      </div>
      <div className="flex flex-col md:w-1/2 gap-10">
        <a href="../members">
          <button class="w-full p-8 rounded-xl text-red relative overflow-hidden border border-blue-800 bg-white text-blue-800 shadow-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-800 before:transition-all before:duration-500 hover:text-white hover:shadow-blue-500 hover:before:left-0 hover:before:w-full">
            <span class="relative z-10 text-xl">Our Members</span>
          </button>
        </a>
        <a href="../benefits">
          <button class="w-full p-8  rounded-xl text-red  relative overflow-hidden border border-yellow-500 bg-white text-yellow-500 shadow-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-yellow-500 before:transition-all before:duration-500 hover:text-white hover:shadow-yellow-400 hover:before:left-0 hover:before:w-full">
            <span class="relative z-10 text-xl">Benefits</span>
          </button>
        </a>
        <a href="../join-fincham">
          <button class="w-full p-8  rounded-xl text-red  relative overflow-hidden border border-blue-800 bg-white text-blue-800 shadow-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-800 before:transition-all before:duration-500 hover:text-white hover:shadow-blue-500 hover:before:left-0 hover:before:w-full">
            <span class="relative z-10 text-xl">Join Fincham</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Page;
