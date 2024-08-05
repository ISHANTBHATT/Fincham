import React from 'react'
function SmallCard({img,heading}) {
  return (
    <div>
        {/* <h1 className='text-white p-2 font-semibold '>{heading}</h1> */}
<div className="relative grid h-[45.5rem] w-full max-w-[50rem] flex-col items-end justify-center overflow-hidden   bg-clip-border text-center text-gray-700">
    
  <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none"  
  style={{ backgroundImage: `url(${img})` }}
  >
    {/* <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div> */}
  </div>
  {/* <div class="relative p-6 px-6 py-14 md:px-12">
    <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
      How we design and code open-source projects?
    </h2>
    <h5 class="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
      Tania Andrew
    </h5>
    <img alt="Tania Andrew"
      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
      class="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" />
  </div> */}
</div> 
    </div>
 
  )
}

export default SmallCard