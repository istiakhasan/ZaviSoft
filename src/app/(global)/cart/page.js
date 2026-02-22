"use client";
/* eslint-disable @next/next/no-img-element */
import ProductCard from "../../../components/ProductCard";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartPage from "../../../components/CartPage";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useGetAllProductQuery } from "../../../redux/api/productApi";
const Page = () => {
  const { data, isLoading } = useGetAllProductQuery(undefined);

  const state = useSelector((state) => state.cart);
  const router = useRouter();
  const NextArrow = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        className="absolute -top-20 right-0 w-12 h-12 bg-[#2C2C2C] hover:bg-black 
                 flex items-center justify-center rounded-lg cursor-pointer z-10"
      >
        <span className="text-white text-xl">›</span>
      </div>
    );
  };
  if (isLoading) {
    return;
  }
  const groupProducts = (arr, groupSize = 4) => {
    const groups = [];
    for (let i = 0; i < arr.length; i += groupSize) {
      groups.push(arr.slice(i, i + groupSize));
    }
    return groups;
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        className="absolute -top-20 right-16 w-12 h-12 bg-[#2C2C2C] hover:bg-black 
                 flex items-center justify-center rounded-lg cursor-pointer z-10"
      >
        <span className="text-white text-xl">‹</span>
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  const smallDeviceGroups = groupProducts(data || [], 4);
  const mobileSliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className=" md:mx-[60px] mx-[16px]">
      <div className="">
        <h1 className="text-[#232321] text-[32px] mb-[8px] mt-[32px] font-semibold">
          Saving to celebrate{" "}
        </h1>
        <p className="text-[#232321] text-[14px] font-semibold">
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed.{" "}
        </p>
        <p className="text-[#232321] text-[14px] font-semibold">
          Join us or Sign-in
        </p>
        <CartPage />
      </div>

      <div className="products mb-[60px]">
        <div className="section-header flex justify-between items-center mb-8">
          <h2 className="text-[48px] font-semibold uppercase">
            You may also like
          </h2>
        </div>
        <div className="hidden md:block">
          <Slider {...settings}>
            {data?.slice(0, 10)?.map((item) => (
              <div key={item?.id} className="px-3">
                <ProductCard item={item} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="block md:hidden">
          <Slider {...mobileSliderSettings}>
            {smallDeviceGroups?.map((group, index) => (
              <div key={index}>
                <div className="grid grid-cols-2 gap-4">
                  {group.map((item) => (
                    <div key={item.id} className="w-full">
                      <ProductCard item={item} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Page;
