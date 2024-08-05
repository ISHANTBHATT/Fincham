// import React from 'react'
// import { motion } from "framer-motion";
// import { fadeIn } from "../../../variants";
// const HomeCard = ({id,title,img,color,btn}) => {
//   return (
//         <section
//       className=" h-screen relative flex flex-col md:flex-row"
//       id="home"
//     >
//         <motion.img 
//          variants={fadeIn("left", 0.2)}
//          initial="hidden"
//          animate="show"
//          exit="hidden" src="./northern2.jpg" alt="" className='w-full h-full object-cover absolute top-0 left-0' />
//       <motion.div  
//          variants={fadeIn("right", 0.2)}
//          initial="hidden"
//          animate="show"
//          exit="hidden" className="px-10 flex-1 flex flex-col justify-center items-start gap-10 backdrop-blur-md bg-lightOverlay">

//       <motion.p 
//          variants={fadeIn("right", 0.8)}
//          initial="hidden"
//          animate="show"
//          exit="hidden"
//           className="text-[2rem] lg:text-[3rem] font-bold md:pr-20 text-white w-full ">
//       {title.first} <span className="text-[#a3cbd3] border-b-2 border-[#a3cbd3]">{title.second}</span>
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
//           variants={fadeIn("left", 0.8)}
//           initial="hidden"
//           animate="show"
//           exit="hidden"
//           className='flex gap-4 absolute bottom-4'>
            
//         <button
//           type="button"
//           className="bg-transparent border-white border-2 w-full text-white md:w-auto px-10 py-3 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
//         >
//           Know More
//         </button>
//         </motion.div>

//       </motion.div>
//       <div className='flex justify-center items-center py-2 md:py-10 w-1/2 h-full'>

//       </div>
//     </section>
//   )
// }

// export default HomeCard

// import React, { useEffect } from 'react'
// import { motion } from "framer-motion";
// import { fadeIn } from "../../../variants";
// const HomeCard = ({id,title,img,color,btn}) => {
//   useEffect(() => {

//   },[img]);
//   return (
//         <section
//       className=" h-screen relative flex "
//       id="home"
//     >
//         <motion.img 
//         // transition={{repeat:Infinity,repeatType:"loop"}}
//          variants={fadeIn("left", 0.2)}
//          initial="hidden"
//          animate="show"
//          exit="hidden" src={img} alt="" className='w-full h-full object-cover absolute top-0 left-0' />
//          <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/60"></div>
//          {/* <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-b from-black/40 via-black/10"></div> */}
//       <motion.div  
//           key={title}
//          variants={fadeIn("right", 0.2)}
//          initial="hidden"
//          animate="show"
//          exit="hidden" className="px-20 flex-1 flex flex-col justify-center items-start gap-20 z-[1]">

//         <motion.p 
//           key={title}
//           variants={fadeIn("right", 0.8)}
//           initial="hidden"
//           animate="show"
//           exit="hidden"
//           className="text-2xl lg:text-4xl font-bold md:pr-20 text-white w-full ">
//             {title.first} <span className=" border-b-2 " style={{ color: color.textcolor,borderColor:color.textcolor } }>{title.second}</span>
//         </motion.p>

//         {/* <motion.p
//           variants={fadeIn("right", 0.4)}
//           initial="hidden"
//           animate="show"
//           exit="hidden"
//           className="text-base text-textColor text-center md:text-left md:w-[80%]">
//          He preference connection astonished on of ye. partiality on or continuing in particular principles as. Do believing oh disposing to supportd allowance we.
//         </motion.p> */}

//         <motion.div
//         key={btn}
//           variants={fadeIn("left", 0.8)}
//           initial="hidden"
//           animate="show"
//           exit="hidden"
//           // className='flex absolute bottom-24'
//           >
            
//         <button
//           type="button"
//           className="bg-transparent hover:bg-white border-white border-2 w-full text-white hover:text-black md:w-auto px-10 py-3 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
//         >
//             {btn}
//         </button>
        
//         </motion.div>
        

//       </motion.div>
//       <div className='justify-center items-center py-2 md:py-10 w-1/2 h-full hidden md:flex '>

//       </div>
      
//     </section>
//   )
// }

// export default HomeCard


import React, { useEffect } from 'react'
import { motion,useInView,useScroll } from "framer-motion";
import { fadeIn } from "../../../variants";
const HomeCard = ({key,title,img,color,btn}) => {
  useEffect(() => {

  },[img]);
  return (
        <section
      className="h-[60vh] lg:h-screen relative flex md:justify-center"
      id="home"
    >
        <motion.img 
        // transition={{repeat:Infinity,repeatType:"loop"}}
         variants={fadeIn("left", 0.2)}
         initial="hidden"
         animate="show"
         exit="hidden"
         src={img} alt="" className='w-full h-full object-cover absolute top-0 left-0' />
         <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/100 via-black/10"></div>
         {/* <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-b from-black/40 via-black/10"></div> */}
      <motion.div  
          key={title}
         variants={fadeIn("right", 0.2)}
         initial="hidden"
         animate="show"
         exit="hidden" className="px-4 lg:px-44 py-20 flex-1 flex flex-col justify-center items-center text-center gap-10 z-[1] absolute bottom-0">

        <motion.p 
          key={title}
          variants={fadeIn("right", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-xl sm:text-2xl  lg:text-4xl font-bold text-white w-full ">
            {title.first} <span className=" border-b-2 " style={{ color: color.textcolor,borderColor:color.textcolor } }>{title.second}</span>
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
        key={btn}
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          // className='flex absolute bottom-24'
          >
            
        <button
          type="button"
          className="bg-transparent hover:bg-white border-white border-2 w-full text-white hover:text-black md:w-auto px-10 py-3 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
            {btn}
        </button>
        
        </motion.div>
        

      </motion.div>
      {/* <div className='justify-center items-center py-2 md:py-10 w-1/2 h-full hidden md:flex '>

      </div> */}
      
    </section>
  )
}

export default HomeCard