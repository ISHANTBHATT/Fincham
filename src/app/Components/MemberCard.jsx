// import React from 'react'

// function MemberCard({id,name,img}) {
//   return (
//     <div 
//       className='mx-10 hover:shadow-lg py-4 lg:py-6 px-4 lg:px-8 hover:bg-white bg-[#fcfcfd] border-gray-400' 
//     >
//       {/* <h1 className='text-gray-200  text-3xl lg:text-6xl font-bold z-0'>0{id}</h1> */}
//       <img src={img}/>
//       <div className="text-left relative z-10">
//         <h1 className="text-lg lg:text-xl font-bold mb-4 pt-4">
//           {name}
//         </h1>
//       </div>
//     </div>

//   )
// }

// export default MemberCard

import React from "react";

function MemberCard({id,img,name}) {
	return (

			<div 
      // class="flex items-center justify-center mt-12 "
     className=' w-60 h-40  mx-10 hover:shadow-lg  bg-[#fcfcfd] border-gray-400 rounded-xl' 
      >
				<a
					class="relative flex items-center justify-center  w-full h-full hover:bg-[#012f6d] group rounded-xl"
					href="#"
				>
					<img
						// class="absolute inset-0 object-cover w-fit h-fit group-hover:opacity-50 py-14 px-10"
						className="absolute  group-hover:opacity-50 p-10"
						src={img}
					/>
					<div class="relative p-5">
						<div class="">
							<div
								class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
							>
								<div class="p-2">
									<p class="text-lg text-white">
                  							{name}
									</p>
								</div>
							</div>
						</div>
					</div>
				</a>
			</div>

	);
}

export default MemberCard;


