import React from "react";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { FaMapMarkedAlt } from "react-icons/fa";
function page() {
  return (
    <div className="w-full h-full flex flex-col text-textcolor ">
      {/* <div className="flex justify-center items-center bg-gradient-to-r from-[#FF4E50] to-[#F9D423] p-10">
        <h1 className="text-5xl text-white font-bold">Contact Us</h1>
      </div> */}
      <div className="flex justify-center items-center bg-gradient-to-r from-[#005C97] to-[#363795] pt-28 pb-10">
        <h1 className="text-5xl text-white font-bold">Contact Us</h1>
      </div>
      <div className="lg:flex-row flex flex-col xl:px-40 px-10 py-20">
        <div className="flex flex-col gap-8">
          <p className="text-3xl font-bold">
            Reach out with any questions you have
          </p>
          <ul class="text-gray-500 font-medium flex flex-col gap-8">
            <div className="flex gap-6 items-center mb-4">
              <div className="sm:hidden xl:flex">
                <FaMapMarkedAlt className="w-10 h-10 text-blue-800" />
              </div>
              <li>
                <p className="font-bold text-black text-xl">Vist Us</p>
                <a href="#" class="hover:underline  ">
                  Finland Chamber of Commerce in India 202, Tolstoy House 15,
                  Tolstoy MargNew Delhi 110001.
                </a>
              </li>
            </div>
            <div className="flex  gap-6 items-center mb-4">
              <div className="sm:hidden xl:flex">
                <EnvelopeIcon className="w-10 text-yellow-500" />
              </div>

              <li className="flex-col mr-20 flex">
                <p className="font-bold text-black text-xl">Mail Us</p>
                <a href="#" class="hover:underline">
                  info@finchamindia.com
                </a>
                <a href="#" class="hover:underline">
                  swati.grover@finchamindia.com
                </a>
              </li>
            </div>
          </ul>
          <img src="./Singing Contract.gif" className="w-96 h-96" />
        </div>
        <div className=" md:ml-10">
          <div className="p-10 shadow-2xl rounded-3xl">
            <div className="flex justify-center">
              <p className="text-2xl">Ready to Get Started?</p>
            </div>
            <form>
              <div className="space-y-12">
                <div className=" pb-12">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First name <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          autoComplete="given-name"
                          placeholder="First name"
                          required
                          className="p-2 block w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last name <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          id="last-name"
                          name="last-name"
                          type="text"
                          placeholder="Last name"
                          autoComplete="family-name"
                          required
                          className="p-2 block w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="Email address"
                          required
                          className="p-2 block w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          id="phone-number"
                          name="phone-number"
                          type="tel"
                          autoComplete="phone"
                          placeholder="Phone Number"
                          required
                          className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          autoComplete="text"
                          placeholder="Subject"
                          required
                          className="block p-2 w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="col-span-full">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Your Message <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="about"
                            name="about"
                            rows={3}
                            placeholder="Your Message"
                            required
                            className="p-2 block w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                            defaultValue={""}
                          />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">
                          Write your Message Here.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="md:w-2/3">
                    <button
                      class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
                      type="button"
                    >
                      Submit Now
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
