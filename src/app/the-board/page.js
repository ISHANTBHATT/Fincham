"use client";
import React, { useState } from "react";
import BoardCard from "../Components/BoardCard";
import { board } from "../Components/data";
function Page() {
  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center bg-gradient-to-r from-[#005C97] to-[#363795] pt-28 pb-10">
        <h1 className="text-4xl md:text-5xl text-white font-bold">The Board</h1>
      </div>
      <div className="flex flex-wrap gap-10 py-20 md:px-20 justify-center">
        {board.map((e) => (
          <BoardCard
            key={e.id}
            name={e.name}
            img={e.img}
            position={e.position}
            desc={e.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
