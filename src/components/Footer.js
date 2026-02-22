import React from "react";
import FooterLogo from '../assets/footerlogo.png'
import Image from "next/image";
import FacebookIcon from '../assets/facebookicon.png'
import Instagram from '../assets/mdi_instagram.png'
import Xicon from '../assets/xicon.png'
import Tiktok from '../assets/tiktok.png'

const ClubFooter = () => {
  return (
    <div className=" md:mx-[60px] mx-[16px]">
      {/* Top Section */}
      <div className="bg-[#4F6BD9] md:rounded-t-[60px] rounded-t-[24px] px-6 sm:px-12 lg:px-16 pt-16 sm:pt-20 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
          
          {/* Left Content */}
          <div className="max-w-full lg:max-w-xl">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-[48px] font-bold leading-snug sm:leading-tight uppercase">
              Join Our KicksPlus <br /> Club & Get 15% Off
            </h1>

            <p className="text-white/80 mt-4 sm:mt-6 text-base sm:text-[20px]">
              Sign up for free! Join the community.
            </p>

            <div className="flex flex-col sm:flex-row mt-6 sm:mt-8">
              <input
                type="email"
                placeholder="Email address"
                className="w-full sm:w-[380px] px-4 sm:px-5 py-3 sm:py-4 rounded-l-xl bg-transparent border border-white text-white placeholder-white/70 outline-none mb-4 sm:mb-0"
              />
              <button className="bg-[#232321] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-r-xl sm:ml-[4px] font-semibold">
                SUBMIT
              </button>
            </div>
          </div>

          {/* Right Big Text */}
          <div className="relative flex items-center justify-center">
            <h1 className="text-white text-[80px] sm:text-[100px] lg:text-[120px] font-extrabold tracking-wide">
              KICKS
            </h1>

            <div className="absolute top-2 sm:top-4 right-[-15px] sm:right-[-20px] bg-orange-400 w-6 sm:w-7 h-6 sm:h-7 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
              +
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gradient-to-r from-[#1a1a1a] to-[#222222] px-6 sm:px-12 lg:px-16 pt-16  rounded-b-[60px] relative overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
          
          {/* About */}
          <div>
            <h2 className="text-orange-400 text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              About us
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              We are the biggest hyperstore in the universe.
              We got you all cover with our exclusive collections
              and latest drops.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-orange-400 text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Categories
            </h2>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <li>Runners</li>
              <li>Sneakers</li>
              <li>Basketball</li>
              <li>Outdoor</li>
              <li>Golf</li>
              <li>Hiking</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-orange-400 text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Company
            </h2>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <li>About</li>
              <li>Contact</li>
              <li>Blogs</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="text-orange-400 text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Follow us
            </h2>
            <div className="flex gap-4 sm:gap-5 text-gray-300 text-xl sm:text-[20px]">
              <Image className="w-6 h-6 sm:w-[24px] sm:h-[24px] cursor-pointer" src={FacebookIcon} alt="Facebook" />
              <Image className="w-6 h-6 sm:w-[24px] sm:h-[24px] cursor-pointer" src={Instagram} alt="Instagram" />
              <Image className="w-6 h-6 sm:w-[24px] sm:h-[24px] cursor-pointer" src={Xicon} alt="X" />
              <Image className="w-6 h-6 sm:w-[24px] sm:h-[24px] cursor-pointer" src={Tiktok} alt="Tiktok" />
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-[97px] flex justify-center">
          <Image alt="Footer Logo" src={FooterLogo} className="" />
        </div>
      </div>

      <p className="text-[#232321] text-[14px] sm:text-[16px] my-6 sm:my-[28px] text-center">
        © All rights reserved
      </p>
    </div>
  );
};

export default ClubFooter;