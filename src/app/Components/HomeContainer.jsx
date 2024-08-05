// import React from 'react'
// import { motion } from "framer-motion";
// import { fadeIn } from "../../../variants";
// const HomeContainer = ({id,title,img,color,btn}) => {
//   return (
//         <section
//       className="w-full h-screen bg-[#3d7376] flex flex-col md:flex-row p-4 md:p-20"
//       id="home"
//     >
//       <div className=" pt-28 pb-6 px-4 md:px-0 md:pl-20 flex-1 flex flex-col items-start gap-6 ">

//       <motion.p 
//          variants={fadeIn("right", 0.2)}
//          initial="hidden"
//          animate="show"
//          exit="hidden"
//           className="text-[2rem] lg:text-[3rem] font-bold md:pr-20 text-white w-full ">
//       8 Most Beautiful Northern Lights Shorts From <span className="text-[#a3cbd3] border-b-2 border-[#a3cbd3]">Finland</span>
//     </motion.p>

//         {/* <motion.p
//           variants={fadeIn("right", 0.4)}
//           initial="hidden"
//           animate="show"
//           exit="hidden"
//           className="text-base text-textColor text-center md:text-left md:w-[80%]">
//          He preference connection astonished on of ye. partiality on or continuing in particular principles as. Do believing oh disposing to supportd allowance we.
//         </motion.p> */}

//         <motion.div
//           variants={fadeIn("left", 0.4)}
//           initial="hidden"
//           animate="show"
//           exit="hidden"
//           className='flex gap-4'>
            
//         <button
//           type="button"
//           className="bg-transparent border-white border-2 w-full text-white md:w-auto px-10 py-3 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
//         >
//           Know More
//         </button>
//         </motion.div>
//         {/* <motion.div
//           variants={fadeIn("right", 0.4)}
//           initial="hidden"
//           animate="show"
//           exit="hidden"
//           className='flex gap-8 px-10 md:px-0'>

//             <img src='starlogo.svg' />
            
//           <div className="flex gap-4 mt-4 relative">
//       <div className="absolute w-9 h-9 rounded-full overflow-hidden border-white border-2">
//         <img
//           src="./photo2.png"
//           alt="man-1"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="absolute w-9 h-9 rounded-full overflow-hidden left-7 border-white border-2">
//         <img
//           src="./photo.png"
//           alt="man-2"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="absolute  w-9 h-9 rounded-full overflow-hidden left-14 border-white border-2">
//         <img
//           src="./photo2.png"
//           alt="man-3"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="absolute w-9 h-9 rounded-full overflow-hidden left-20 border-white border-2">
//         <img
//           src="./photo.png"
//           alt="woman"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="absolute w-9 h-9 left-[105px] rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xs border-white border-2">
//         +9k
//       </div>
//     </div>
//         </motion.div> */}

//       </div>
//       <div className='flex justify-center py-2 md:py-10'>
//           <div className='bg-transparent md:bg-[#e4dac6] flex items-center justify-center rounded-tl-[150px] rounded-br-[150px] '>
//           <img src='./northern.jpg' className='rounded-xl h-full w-full md:w-3/4 md:h-3/5' />
//           </div>
//           {/* <img src='./northern.jpg' className='rounded-xl w-1/2 h-3/5' /> */}
//       </div>
//     </section>
//   )
// }

// export default HomeContainer

import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
const HomeContainer = ({id,title,img,color,btn}) => {
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
          className="text-[2rem] lg:text-[3rem] font-bold md:pr-20 text-white w-full ">
      {title.first} <span className={`border-b-2 `}   style={{ color: color.textcolor,borderColor:color.textcolor } }>{title.second}</span>
    </motion.p>

        {/* <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-base text-textColor text-center md:text-left md:w-[80%]">
         He preference connection astonished on of ye. partiality on or continuing in particular principles as. Do believing oh disposing to supportd allowance we.
        </motion.p> */}

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='flex gap-4'>
            
        <button
          type="button"
          className="bg-transparent border-white border-2 w-full text-white md:w-auto px-10 py-3 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          {btn}
        </button>
        </motion.div>
      </div>
      <div className='flex justify-center py-2 md:py-10'>
          {/* <div className='bg-transparent md:bg-[#e4dac6]  flex items-center justify-center rounded-l-full m-20 '>
            <motion.img 
         variants={fadeIn("left", 0.2)}
         initial="hidden"
         animate="show"
         exit="hidden" src={img} className='rounded-xl h-full w-full md:w-3/4 md:h-3/5' />
          </div> */}
          <motion.img 
         variants={fadeIn("left", 0.2)}
         initial="hidden"
         animate="show"
         exit="hidden" src={img} className='rounded-xl h-full w-full md:w-3/4 md:h-3/5' />
      </div>
    </section>
  )
}

export default HomeContainer