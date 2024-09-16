import React, { useState, useEffect } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { fadeIn } from "../../../variants";
import Link from "next/link";
const HomeCard = ({ key, title, img, color, btn, link }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgElement = new Image();
    imgElement.src = img;
    imgElement.onload = () => setIsLoading(false);
  }, [img]);
  return (
    <section
      className="h-[60vh] lg:h-screen relative flex md:justify-center"
      id="home"
    >
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-14 w-14"></div>
        </div>
      )}
      <motion.img
        variants={fadeIn("up", 0.1)}
        whileInView="show"
        initial="hidden"
        //  animate="show"
        exit="hidden"
        src={img}
        alt=""
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/100 via-black/10"></div>
      <motion.div
        key={title}
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        //  animate="show"
        exit="hidden"
        className="px-4 lg:px-44 py-20 flex-1 flex flex-col justify-center items-center text-center gap-10 z-[1] absolute bottom-0"
      >
        <motion.p
          key={title}
          variants={fadeIn("right", 0.8)}
          initial="hidden"
          whileInView="show"
          // animate="show"
          exit="hidden"
          className="text-xl sm:text-2xl  lg:text-4xl font-bold text-white w-full "
        >
          {title.first}{" "}
          <span
            className=" border-b-2 "
            style={{ color: color.textcolor, borderColor: color.textcolor }}
          >
            {title.second}
          </span>
        </motion.p>
        <motion.div
          key={btn}
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          // animate="show"
          whileInView="show"
          exit="hidden"
          // className='flex absolute bottom-24'
        >
          <Link href={link}>
            <button
              type="button"
              className="bg-transparent hover:bg-white border-white border-2 w-full text-white hover:text-black md:w-auto px-10 py-3 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
            >
              {btn}
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeCard;
