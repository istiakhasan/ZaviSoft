"use client";
import Image from "next/image";
import React from "react";
import ButtonPng from "../assets/Button.png";
import { useGetAllMainCategoryQuery } from "../redux/api/categoryApi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategoriesSection = () => {
  const { data, isLoading } = useGetAllMainCategoryQuery(undefined);

  if (isLoading) {
    return null; // render nothing while loading
  }

  const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute mr-[20px] -top-20 right-0 w-12 h-12 bg-[#2C2C2C] hover:bg-black 
                 flex items-center justify-center rounded-lg cursor-pointer z-10"
    >
      <span className="text-white text-xl">›</span>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute mr-[20px] -top-20 right-16 w-12 h-12 bg-[#2C2C2C] hover:bg-black 
                 flex items-center justify-center rounded-lg cursor-pointer z-10"
    >
      <span className="text-white text-xl">‹</span>
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className=" px-[16px] py-[90px] bg-[#232321]">
      <p className="uppercase font-semibold text-[24px] md:text-[74px] text-[#FFFFFF]">
        Categories
      </p>

      {/* Large screens: Slider */}
      <div className="hidden lg:block">
        <Slider {...sliderSettings}>
          {data?.map((item, i) => (
            <div
              key={i}
              style={{ padding: "0 48px" }}
              className={`category-card flex-col relative ${i % 2 === 0 ? "light" : ""}`}
            >
              <div>
                <img
                  style={{ margin: "0 auto" }}
                  src={item?.image}
                  alt={item?.name}
                  className="md:h-150 h-[348px] w-full"
                />
              </div>
              <div
                style={{ padding: "0 48px",paddingLeft:"86px", }}
                className="absolute right-[48px] mt-[20px] md:bottom-[30px] bottom-[5px] items-end w-full flex justify-between"
              >
                <h1 className="text-[#232321] md:text-[36px] text-[24px] font-semibold uppercase">
                  {item?.name}
                </h1>
                <Image alt="" src={ButtonPng} />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Small screens: Column layout */}
      <div className="flex flex-col  lg:hidden">
        {data?.map((item, i) => (
          <div
            key={i}
            className={`category-card flex-col pb-[10px] relative ${i % 2 === 0 ? "light" : ""}`}
          >
            <div>
              <img
                style={{ margin: "0 auto" }}
                src={item?.image}
                alt={item?.name}
                className="w-full h-[348px] object-cover"
              />
            </div>
            <div
              className="flex justify-between w-full px-[10px] items-center mt-4"
            >
              <h1 className="text-[#232321] max-w-[104px] md:text-[36px] text-[24px] font-semibold uppercase">
                {item?.name}
              </h1>
              <Image alt="" src={ButtonPng} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;