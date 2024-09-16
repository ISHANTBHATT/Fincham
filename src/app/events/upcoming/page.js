"use client";
import React, { useEffect, useState } from "react";
import { events } from "../../Components/data";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import { BsFillPinAngleFill } from "react-icons/bs";
function Page() {
  const [futureEvents, setFutureEvents] = useState([]);

  useEffect(() => {
    const today = new Date();
    const filteredEvents = events.filter(
      (event) => new Date(event.date) > today
    );
    setFutureEvents(filteredEvents);
  }, []);
  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center bg-gradient-to-r from-[#005C97] to-[#363795] pt-28 pb-10">
        <h1 className="text-4xl md:text-5xl text-white font-bold">
          Upcoming Events
        </h1>
      </div>
      <div className="w-full h-full flex flex-wrap justify-center">
        {futureEvents && futureEvents.length > 0 ? (
          futureEvents.map((event, index) => (
            <div key={event.id} className="p-10">
              <div
                className="relative h-full w-72 md:w-[400px] rounded-tl-[200px] pl-10 pt-14 pr-2"
                style={{ backgroundColor: event.bg }}
              >
                <BsFillPinAngleFill className="text-red-600 absolute -top-2 -right-2 h-8 w-8 drop-shadow-lg" />
                <div className="flex items-center ml-12 w-40 h-40 md:w-64 md:h-64">
                  <img
                    src={`${event.img}`}
                    className="rounded-xl lg:rounded-3xl border-2 border-dashed border-black mb-6 h-full w-full transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[5px_5px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                  />
                </div>

                <div className="">
                  <h1 className="text-sm md:text-lg xl:text-xl font-bold">
                    {event.title}
                  </h1>
                  <div className="flex items-center gap-2 my-2">
                    <CalendarDaysIcon className="w-6" />
                    <p className="text-textcolor text-xs md:text-sm">
                      {event.date}
                    </p>
                  </div>
                  <p className="font-normal text-xs md:text-sm py-4">
                    {event.desc}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-full flex flex-col items-center py-10 text-textcolor">
            <img src="../noschedule.jpg" className="h-60 md:h-[500px]" />
            <p className="text-xl md:text-4xl text-headingColor font-semibold my-2">
              There are no upcoming events
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
