import Image from "next/image";
import React from "react";
import Rectangle1 from "../assets/Rectangle1.png";
import Rectangle2 from "../assets/Rectangle2.png";
const Banner = () => {
  return (
    <div>
      <h1 style={{lineHeight:"1"}} className="font-bold uppercase text-[60px] text-center my-[24px] md:my-[0px] md:text-[223px] ">
        Do it <span className="text-[#4A69E2]">right</span>
      </h1>
      <div className="hero-image rounded-[24px] md:rounded-[64px] md:p-[60px] p-[16px] relative">
        <div className="vertical-banner md:top-[80px] top-[20px]">
          <span>Nike product of the year</span>
        </div>
        <div className="flex justify-between items-end w-full">
          <div className="hero-content">
            <h2 className="text-[24px] md:text-[48px]">NIKE AIR MAX</h2>
           <p className="text-[14px] md:text-[16px]">Nike introducing the new air max for everyone span&apos;s comfort</p>
            <button className="btn-primary">Shop Now</button>
          </div>
          <div className="flex gap-4 flex-col">
            <Image className="h-[64px] w-[64px]" src={Rectangle1} alt="" />
            <Image className="h-[64px] w-[64px]" src={Rectangle2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
