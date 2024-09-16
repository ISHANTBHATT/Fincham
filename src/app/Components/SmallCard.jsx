import React from "react";
function SmallCard({ img, heading }) {
  return (
    <div>
      <div className="relative grid h-[45.5rem] w-full max-w-[50rem] flex-col items-end justify-center overflow-hidden   bg-clip-border text-center text-gray-700">
        <div
          className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </div>
  );
}

export default SmallCard;
