import React from "react";
import { members } from "../Components/data";
import MemberCard from "../Components/MemberCard";
function Page() {
  return (
    <div className="w-full h-full bg-[#f5f3f3]">
      <div className="flex justify-center items-center bg-gradient-to-r from-[#005C97] to-[#363795] pt-28 pb-10">
        <h1 className="text-4xl md:text-5xl text-white font-bold">Members</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10 p-14">
        {members.map((e) => (
          <MemberCard key={e.id} name={e.name} img={e.img} link={e.link} />
        ))}
      </div>
    </div>
  );
}

export default Page;
