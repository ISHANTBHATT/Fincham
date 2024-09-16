import React from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

function InfoContainer() {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row p-4 md:p-20 bg-[#fffff] items-center text-justify overflow-hidden">
      <motion.img
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        src="img.jpg"
        className="w-3/4 h-1/2 md:w-[30%] md:h-3/4  rounded-3xl"
        //  className='rounded-3xl lg:rounded-none lg:rounded-tl-[260px] lg:rounded-br-[260px] w-3/4 h-1/2 md:w-1/2 md:h-3/4 xl:w-full xl:h-full'
      />
      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="flex flex-col text-textcolor justify-center p-4 md:pl-28 gap-8"
      >
        <p>
          “The “Finland Chamber of Commerce in India” (“FINCHAM India”) was
          incorporated as a Section 8 Company on February 28, 2018, with the
          primary purpose of inter alia: promoting and deepening commercial and
          industrial ties, trade, economic, social and cultural relations
          between India and Finland.”
        </p>
        <Link href="about-us">
          <button
            type="button"
            className="bg-white hover:bg-[#1a1f8b] w-full border-2 border-gray-500 hover:text-white xl:w-1/3 px-4 py-3  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          >
            Know More About Us
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

export default InfoContainer;
