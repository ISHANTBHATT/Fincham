// import React from 'react'

// function EventsContainer() {
//   return (
//     <div className='w-full h-full'>
//         <h1></h1>
//      <div className=' grid grid-cols-2 h-full w-full p-4 lg:p-20 text-[#121929]'>
//         <div  className=' pt-72 ml-52 w-full h-full flex flex-col gap-10'>
//             <div className=' bg-[#8c9d63] h-full w-8/12 rounded-tl-[200px] pt-20 pb-10 pl-16 lg:pl-24 pr-16'>
//                 <h1 className='text-3xl font-bold'>Responsible Media Matters</h1>
//                 <p className='font-normal text-sm py-6'>Gone are the days of advertising irreverence. Context has never been more important to ensure informed and impactful conversations with consumers. This is why advertisers turn to NOM. Simply put,our tech measured the pulse of consumer culture and cadence, so ypu don't have to.</p>
//             </div>
//             <div className='  bg-[#8c9d63] h-full w-8/12 rounded-tl-[200px] pt-20 pb-10 pl-16 lg:pl-24 pr-16'>
//                 <h1 className='text-3xl font-bold'>Responsible Media Matters</h1>
//                 <p className='font-normal text-sm py-6'>Gone are the days of advertising irreverence. Context has never been more important to ensure informed and impactful conversations with consumers. This is why advertisers turn to NOM. Simply put,our tech measured the pulse of consumer culture and cadence, so ypu don't have to.</p>
//             </div>
//         </div>

//         <div className=' w-full h-full'>
//             <div  className='w-full h-full flex flex-col gap-10'>
//             <div className='bg-[#BECFC6] rounded-tr-[200px] w-8/12 pt-20 pb-10 pl-16 lg:pl-16 pr-24'>
//                 <h1 className='text-3xl font-bold'>Responsible Media Matters</h1>
//                 <p className='font-normal text-sm py-6'>Gone are the days of advertising irreverence. Context has never been more important to ensure informed and impactful conversations with consumers. This is why advertisers turn to NOM. Simply put,our tech measured the pulse of consumer culture and cadence, so ypu don't have to.</p>
//             </div>
//             <div className='bg-[#ebbeba] rounded-tr-[200px] w-8/12 pt-20 pb-10 pl-16 lg:pl-16 pr-24'>
//                 <h1 className='text-3xl font-bold'>Responsible Media Matters</h1>
//                 <p className='font-normal text-sm py-6'>Gone are the days of advertising irreverence. Context has never been more important to ensure informed and impactful conversations with consumers. This is why advertisers turn to NOM. Simply put,our tech measured the pulse of consumer culture and cadence, so ypu don't have to.</p>
//             </div>
//             </div>

//         </div>

//     </div>
//     </div>
    
//   )
// }

// export default EventsContainer

// import React from 'react'
// import { events } from './data'

// function EventsContainer() {
//   return (
//     <div className='w-full h-full'>
//         <h1></h1>
//      <div className=' grid grid-cols-2 h-full w-full p-4 lg:p-20 text-[#121929]'>
//         {events.map((event) =>(
//             <div>
//                 {event.id%2 == 1 ?        
//                      (
//                      <div  className={`ml-52 w-full h-full flex flex-col gap-10 ${event.id === 1 ? 'pt-72' : 'pt-32'}`}>
//                         <h1>{event.id}</h1>
//                          <div className=' bg-[#8c9d63] h-full w-8/12 rounded-tl-[200px] pt-20 pb-10 pl-16 lg:pl-24 pr-16'>
//                              <h1 className='text-3xl font-bold'>{event.title}</h1>
//                              <p className='font-normal text-sm py-6'>{event.desc}</p>
//                          </div>
//                      </div>
//                       )
//                      :
//                     (<div  className='w-full h-full flex flex-col gap-10'>
//                         <h1>{event.id}</h1>
//                         <div className='bg-[#BECFC6] rounded-tr-[200px] w-8/12 pt-20 pb-10 pl-16 lg:pl-16 pr-24'>
//                             <h1 className='text-3xl font-bold'>{event.title}</h1>
//                             <p className='font-normal text-sm py-6'>{event.desc}</p>
//                         </div>
//                      </div>

//                      )
//                 }
//             </div>
//         ))}
//     </div>
//     </div>
    
//   )
// }

// export default EventsContainer

import React from 'react';
import { events } from './data';
import { FcCalendar } from "react-icons/fc";
import { CalendarDaysIcon } from '@heroicons/react/20/solid';
import { motion,useInView,useScroll } from "framer-motion";

const sortedevents = events
.sort((a, b) => new Date(b.date) - new Date(a.date))
.slice(0, 5);
function EventsContainer() {
  return (
    <>
{sortedevents && sortedevents.length > 0 ? (
    <div className='w-full h-full py-4 px-4 lg:px-10 lg:py-20 text-textcolor bg-white overflow-hidden'>
    <div className='pb-4 md:pb-10 flex items-center justify-center sm:justify-between'>
        <h1 className='text-2xl md:text-4xl  font-bold relative before:absolute before:rounded-lg before:content before:w-24 sm:before:w-32 before:h-1 before:-bottom-2 before:left-1/5 before:bg-gradient-to-tr from-blue-400 to-blue-600 transition-all ease-in-out duration-100'>Events</h1>
      </div>
  <div className='flex gap-4 h-full w-full text-[#121929]'>
    <div className='w-full h-full'>
        {sortedevents.map((event,index) => (
            <div key={event.id}>
              {event.id % 2 === 0 ?        
                (<motion.div 
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={{ duration: 1 }}
                   className={`lg:ml-32 xl:ml-52 w-full h-full flex flex-col relative ${index+1 === 2 ? 'mt-72' : 'mt-12'}`}>
                  <h1 className='bg-[#1a1f8b] rounded-full h-8 w-8 text-white flex items-center justify-center absolute top-12'>{index+1}</h1>
                  <div className=' h-full w-full lg:w-8/12 rounded-tl-[200px] pt-12 xl:pt-20 pb-4 xl:pb-10 pl-4 md:pl-16 xl:pl-24 pr-2 md:pr-8 xl:pr-16' style={{backgroundColor:event.bg}}>
                    <div className='flex items-center justify-center'>
                    <img src={event.img} className='rounded-xl lg:rounded-3xl border-2 border-dashed border-black mb-2 md:mb-6 h-20 w-20 md:h-32 md:w-32 lg:h-full lg:w-full transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[5px_5px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none' />
                    </div>

                    <h1 className='text-sm md:text-lg xl:text-2xl font-bold'>{event.title}</h1>
                    <div className='flex items-center gap-2 my-2'>
                     <CalendarDaysIcon className='w-6'/>
                     <p className='text-textcolor text-xs md:text-sm'>{event.date}</p>
                    </div>
                    <p className='font-normal text-xs md:text-sm py-4'>{event.desc}</p>
                  </div>
                </motion.div>)
                :
                (<></>)
              }
            </div>
        ))}
    </div>
    <div className='w-full h-full'>
    {sortedevents.map((event,index) => (
      <div key={event.id}>
        {event.id % 2 === 1 ?        
          (<motion.div 
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className={`w-full h-full flex flex-col  relative ${index+1 === 1 ? 'mt-10' : 'mt-12'}`}>
            <h1 className='bg-[#1a1f8b] rounded-full h-8 w-8 text-white flex items-center justify-center absolute right-10 lg:left-[58%]'>{index+1}</h1>
            <div className=' rounded-tr-[200px] w-full lg:w-8/12 pt-10 xl:pt-20 pb-4 xl:pb-10 pl-4 lg:pl-16 pr-2 xl:pr-24' style={{backgroundColor:event.bg}}>
                <div className='flex items-center justify-center mr-8'>
                    <img src={event.img} className='rounded-xl lg:rounded-3xl mb-2 md:mb-6 h-20 w-20 md:h-32 md:w-32 lg:h-full lg:w-full border-2 border-dashed border-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[5px_5px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none' />
                </div>
              <h1 className='text-sm md:text-lg xl:text-2xl font-bold'>{event.title}</h1>
              <div className='flex items-center gap-2 my-2'>
                     <CalendarDaysIcon className='w-6'/>
                     <p className='text-textcolor text-xs md:text-sm'>{event.date}</p>
              </div>
              <p className='font-normal text-xs md:text-sm py-4'>{event.desc}</p>
            </div>
          </motion.div>)
          :
          (<></>)
        }
      </div>
    ))}
    </div>
  </div>
</div>
):(<></>)
}
</>
  );
}

export default EventsContainer;
