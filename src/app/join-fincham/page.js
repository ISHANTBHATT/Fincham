"use client";
import React, { useState } from "react";

function Page() {
  const categories = [
    {
      id: 1,
      img: "team.png",
      title: "1. Corporate Member:",
      desc: "To become a member in this category, a corporate entity i.e. company, firm or organisation should be part of the business community of Finland in India. The corporate entity could be a Finnish entity doing business in India directly, or through a legal corporate entity in the form of a subsidiary, joint venture or branch office/liaison office of a Finnish entity in India. A Corporate Member shall have full voting rights at General Body Meetings and shall be entitled to have a nominee elected to the Board of Directors.",
    },
    {
      id: 3,
      img: "medal.svg",
      title: "2. Honorary member:",
      desc: "Upon nomination, persons of distinction and/or persons who are eminently qualified to support and contribute to the objects of FINCHAM India, may be elected as Honorary Members. Honorary Members shall enjoy all the rights and privileges of Corporate Members, except that an Honorary Members shall not have the right to vote in General Body Meetings. Honorary Members shall be exempted from payment of all dues and fees.",
    },
    {
      id: 1,
      img: "affiliate.png",
      title: "3. Affiliate Member:",
      desc: `a) Associate Member: To become a member in this category, a corporate entity i.e. company, firm or organization must be registered under India laws and should be doing business in Finland directly, or through a legal corporate entity in the form of a subsidiary or joint venture or branch office/liaison in Finland, for a minimum period of 3 years. An Associate Member shall enjoy all the rights and privileges of Corporate Members, except that it shall not have the right to vote in General Body Meetings and not be entitled to have its nominee elected to the Board of Directors of FINCHAM India.
             
b) Overseas Member: An Indian corporate entity which is a subsidiary or joint venture or branch office/liaison office of a non-Finnish European entity, having significant business interest in Finland, may apply to become a member under this category. An Overseas Member shall enjoy all the rights and privileges of Corporate Members, except that it shall not have the right to vote in General Body Meetings and not be entitled to have its nominee elected to the Board of Directors of FINCHAM India. `,
    },
  ];
  return (
    <div className="h-full w-full text-textcolor flex flex-col ">
      <div className="flex justify-center items-center bg-gradient-to-r from-[#005C97] to-[#363795] pt-28 pb-10">
        <h1 className="text-4xl md:text-5xl text-white font-bold">
          Join Fincham
        </h1>
      </div>
      <div className="w-full h-full flex flex-col md:flex-row py-20 px-10 md:px-20 justify-around gap-10">
        <div className="md:w-1/2">
          <p className="text-3xl font-bold">Join Fincham</p>
          <p className="pr-4 mt-6">
            FINCHAM India acts as an organization for the business community of
            Finland in India where in stakeholders are inducted subject to
            satisfaction of the qualifications to become members of the chamber.
          </p>
          <img src="join-us.svg" className="w-[500px]" />
        </div>
        <div className="flex-col md:w-1/2">
          <a
            href="AFFILIATION-FORM_FINCHAM-India.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="w-full p-8 mb-10 rounded-xl text-red relative overflow-hidden border border-blue-800 bg-white text-blue-800 shadow-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-800 before:transition-all before:duration-500 hover:text-white hover:shadow-blue-500 hover:before:left-0 hover:before:w-full">
              <span class="relative z-10">
                Download FINCHAM Membership Form – Finnish companies in India
              </span>
            </button>
          </a>

          <a
            href="Affiliate-Member-Application-Form_FINCHAM_Revised.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="w-full p-8  rounded-xl text-red  relative overflow-hidden border border-yellow-500 bg-white text-yellow-500 shadow-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-yellow-500 before:transition-all before:duration-500 hover:text-white hover:shadow-yellow-400 hover:before:left-0 hover:before:w-full">
              <span class="relative z-10">
                Download FINCHAM Affiliate Membership Form
              </span>
            </button>
          </a>
        </div>
      </div>
      <hr class="h-px w-full border-gray-300" />
      <div className="py-20 px-10 md:px-20 flex flex-col gap-4">
        <p className="text-xl font-bold ">CATEGORIES</p>
        <div>
          <p className="text-2xl font-medium">
            There shall be the following classes of members of FINCHAM India.
          </p>
          <p className="mt-4">
            In order to be eligible for becoming a member of FINCHAM India, is
            it essential that the corporate entity or individual (i) must be
            committed to the objects of FINCHAM India; and (ii) should not be
            declared as an undischarged insolvent or not have applied to be
            adjudicated as an insolvent. The Membership categories and
            additional eligibility criteria for FINCHAM India are set out below:
          </p>
        </div>
        <div className="flex flex-wrap py-10 gap-10 justify-center">
          {categories.map((e) => (
            <Card
              key={e.id}
              onClick={() => setIsOpen(true)}
              img={e.img}
              title={e.title}
              desc={e.desc}
            />
          ))}
        </div>
      </div>
      <div className="py-20 px-8 md:px-20 flex flex-col gap-6 bg-gray-100 bg-gradient-to-r from-[#667db6] via-[#0082c8] to-[#667db6] text-white">
        <p className="text-3xl md:text-4xl flex justify-center items-center font-bold mb-4 md:mb-10">
          Let’s Get Connected
        </p>
        <p className="text-lg md:text-xl">Membership Validity.</p>
        <p className="text-lg md:text-xl">
          The validity of membership shall be for a period of 1 year commencing
          on the 1st day of the ongoing quarter.
        </p>
        <p className="text-lg md:text-xl">
          For any queries email us on swati.grover@finchamindia.com
        </p>
      </div>
    </div>
  );
}

export default Page;

const Card = ({ title, desc, img }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const wordLimit = 50;
  const isDescLong = desc.split(" ").length > wordLimit;
  const displayedDesc =
    isExpanded || !isDescLong
      ? desc
      : desc.split(" ").slice(0, wordLimit).join(" ") + "...";

  return (
    <div className="relative w-96 h-full bg-gradient-to-t from-[#081e69] to-black rounded-3xl p-10 flex flex-col gap-4 transform hover:scale-105 transition-transform ease-in-out duration-300 ">
      <div className="flex flex-col gap-4">
        <p className="text-white font-medium text-2xl">{title}</p>
        <p className="text-sm text-white whitespace-pre-wrap text-justify">
          {displayedDesc}
        </p>
      </div>

      <span>
        {isDescLong && (
          <button
            class="relative h-10 w-32 rounded-xl  overflow-hidden border bg-white border-blue-600 text-[#081E69] shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#081E69] before:duration-300 before:ease-out hover:text-white hover:shadow-blue-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80"
            onClick={toggleReadMore}
          >
            <span class="relative z-10">
              {isExpanded ? "Read Less" : "Read More"}
            </span>
          </button>
        )}
      </span>
    </div>
  );
};
