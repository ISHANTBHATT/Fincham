import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
const HomeContainer = ({ key, title, img, color, btn }) => {
  return (
    <section
      className={`w-full h-screen flex flex-col md:flex-row p-4 md:p-20`}
      style={{ backgroundColor: color.bg }}
      id="home"
    >
      <div className=" justify-center px-20 flex-1 flex flex-col items-start gap-6 ">
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-[2rem] lg:text-[3rem] font-bold md:pr-20 text-white w-full "
        >
          {title.first}{" "}
          <span
            className={`border-b-2 `}
            style={{ color: color.textcolor, borderColor: color.textcolor }}
          >
            {title.second}
          </span>
        </motion.p>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex gap-4"
        >
          <button
            type="button"
            className="bg-transparent border-white border-2 w-full text-white md:w-auto px-10 py-3 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          >
            {btn}
          </button>
        </motion.div>
      </div>
      <div className="flex justify-center py-2 md:py-10">
        <motion.img
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          src={img}
          className="rounded-xl h-full w-full md:w-3/4 md:h-3/5"
        />
      </div>
    </section>
  );
};

export default HomeContainer;
