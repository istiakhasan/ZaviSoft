"use client";
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Search from "../assets/searchicon.png";
import User from "../assets/User.png";
import Bar from "../assets/bar.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { ChevronDown, X } from "lucide-react";

const Header = () => {
  const state = useSelector((state) => state.cart);
  const router = useRouter();

  const [openDropdown, setOpenDropdown] = useState(""); // "men", "women", or ""
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? "" : menu);
  };

  return (
    <header className="sticky top-0 z-[10000] md:px-[32px] px-[16px] bg-white md:rounded-[24px] rounded-[12px] shadow-md mt-[32px]">
      <div className="mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Left Menu */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Mobile Hamburger */}
          <span
            className="md:hidden cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Image src={Bar} alt="menu" className="h-5 w-5" />
          </span>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-[#232321] font-medium text-sm md:text-base relative">
            {/* New Drops */}
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#FFA52F]">
              <a href="">New Drops</a>
              <span className="text-[#FF4B00]">🔥</span>
            </div>

            {/* Men Dropdown */}
            <div className="relative">
              <div
                className="flex items-center gap-1 cursor-pointer hover:text-[#FFA52F]"
                onClick={() => toggleDropdown("men")}
              >
                Men <ChevronDown size={16} />
              </div>
              {openDropdown === "men" && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    T-Shirts
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Hoodies
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Jackets
                  </a>
                </div>
              )}
            </div>

            {/* Women Dropdown */}
            <div className="relative">
              <div
                className="flex items-center gap-1 cursor-pointer hover:text-[#FFA52F]"
                onClick={() => toggleDropdown("women")}
              >
                Women <ChevronDown size={16} />
              </div>
              {openDropdown === "women" && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Dresses
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Tops
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Skirts
                  </a>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Logo */}
        <div className="cursor-pointer flex-shrink-0" onClick={() => router.push("/")}>
          <Image src={Logo} alt="logo" className="h-8 md:h-12 w-auto" />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <Image className="hidden md:block cursor-pointer" src={Search} alt="search" />
          <Image className="cursor-pointer" src={User} alt="user" />
          <span onClick={()=>router.push('/cart')} className="bg-[#FFA52F] cursor-pointer flex items-center justify-center h-8 w-8 rounded-full text-white text-sm font-medium">
            {state?.cart?.length || 0}
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white shadow-lg rounded-md py-4 px-4 space-y-2">
          <div className="flex justify-end mb-2">
            <X className="cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-[#FFA52F]">
            <a href="">New Drops</a> <span className="text-[#FF4B00]">🔥</span>
          </div>

          {/* Men Mobile */}
          <div className="relative">
            <div
              className="flex items-center gap-1 cursor-pointer hover:text-[#FFA52F]"
              onClick={() => toggleDropdown("men")}
            >
              Men <ChevronDown size={16} />
            </div>
            {openDropdown === "men" && (
              <div className="mt-2 pl-4 space-y-1">
                <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">
                  T-Shirts
                </a>
                <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">
                  Hoodies
                </a>
                <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">
                  Jackets
                </a>
              </div>
            )}
          </div>

          {/* Women Mobile */}
          <div className="relative">
            <div
              className="flex items-center gap-1 cursor-pointer hover:text-[#FFA52F]"
              onClick={() => toggleDropdown("women")}
            >
              Women <ChevronDown size={16} />
            </div>
            {openDropdown === "women" && (
              <div className="mt-2 pl-4 space-y-1">
                <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">
                  Dresses
                </a>
                <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">
                  Tops
                </a>
                <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">
                  Skirts
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;