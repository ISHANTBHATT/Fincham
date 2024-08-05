import React from 'react'
import { PhoneIcon,EnvelopeIcon} from '@heroicons/react/20/solid'
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
<footer class="bg-white relative">
<div class="border-t-4 border-blue-800 absolute top-0 left-0 w-1/2 h-0"></div>
<div class="border-t-4 border-yellow-500 absolute top-0 right-0 w-1/2 h-0"></div>
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between md:gap-10 xl:gap-24">
          <div className="mb-6 md:mb-0 ">
              <a href="https://www.finchamindia.com/" class="flex justify-center">
                  <img src="../finchamlogo.png" class="h-12 me-3 mt-10" alt="Logo" />
              </a>
              <p class="self-center text-sm mt-4">The Finland Chamber of Commerce in India (“FINCHAM India”) was incorporated as a Section 8 Company on February 28, 2018.</p>

          </div>
          <div class="grid grid-cols-2  sm:grid-cols-3 md:px-20 xl:px-0">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Quick Links</h2>
                  <ul class="text-gray-500 font-medium">
                      <li class="mb-4">
                          <a href="/" class="hover:underline">Home</a>
                      </li>
                      <li className='mb-4'>
                          <a href="../about-us" class="hover:underline">About Us</a>
                      </li>
                      <li className='mb-4'>
                          <a href="../membership" class="hover:underline">Membership</a>
                      </li>
                      <li className='mb-4'>
                          <a href="#" class="hover:underline">News</a>
                      </li>
                      <li className='mb-4'>
                          <a href="../events/upcoming" class="hover:underline">Events</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                  <ul class="text-gray-500 font-medium">
                      {/* <li class="mb-4">
                          <a href="" class="hover:underline ">Twitter</a>
                      </li> */}
                      <li>
                          {/* <a href="https://www.linkedin.com/company/fincham-india/" class="hover:underline">Linkedin</a> */}
                          <a href="https://www.linkedin.com/company/fincham-india/" class="hover:underline"><img src="../LinkedIn_Logo.png" className='w-20' /></a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Contact Info</h2>
                  <ul class="text-gray-500 font-medium">
                      {/* <div className='flex gap-6 items-center mb-4'>
                      <div className='sm:hidden xl:flex'>
                      <PhoneIcon className='w-6'/>
                      </div>
                      <li>
                          <p className='font-bold text-black'>Call Us</p>
                          <a href="#" class="hover:underline text-sm">+91 9999999999</a>
                      </li>
                      </div> */}
                      <div className='flex gap-6 items-center mb-4'>
                        <div className='sm:hidden xl:flex'>
                        <FaMapMarkedAlt className='w-6' />
                        </div>

                      <li>
                          <p className='font-bold text-black'>Vist Us</p>
                          <a href="#" class="hover:underline text-sm ">Finland Chamber of Commerce in India 202, Tolstoy House 15, Tolstoy MargNew Delhi 110001.</a>
                      </li>
                      </div>
                      <div  className='flex  gap-6 items-center mb-4'>
                        <div className='sm:hidden xl:flex'>
                        <EnvelopeIcon className='w-6' /> 
                        </div>

                        <li className='flex-col mr-20'>
                          <p className='font-bold text-black'>Mail Us</p>
                          <a href="#" class="hover:underline text-sm ">info@finchamindia.com </a>
                          <a href="#" class="hover:underline text-sm ">swati.grover@finchamindia.com</a>
                        </li>
                      </div>

                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between text-center">
          <span class="text-sm text-gray-500 sm:text-center">Copyright © 2024 <a href="https://www.finchamindia.com/" class="hover:underline">Fincham™ India |</a> Website Developed By <a href="https://apacedigitalcargo.com/" class="hover:underline">Apace Digital Cargo</a>   | . All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              {/* <a href="#" class="text-gray-500 hover:text-gray-900">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a> */}
              {/* <a href="#" class="text-gray-500 hover:text-gray-900 ms-5">
                 <FaSquareXTwitter />
                  <span class="sr-only">Twitter page</span>
              </a> */}
              <a href="#" class="text-gray-500 hover:text-gray-900 ms-5 sm:flex hidden">
                    <FaLinkedin />
                  <span class="sr-only">Linkedin page</span>
              </a>
          </div>
      </div>
    </div>
</footer>
  )
}

export default Footer