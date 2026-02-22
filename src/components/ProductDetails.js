"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import HeartIcon from "../assets/heart.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { productAddToCart } from "./../redux/feature/cartSlice";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

export default function ProductDetails({ item }) {
  const [selectedSize, setSelectedSize] = useState(38);
  const [selectedColor, setSelectedColor] = useState("navy");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  const router=useRouter()
  return (
    <div className=" ">
      {/* Badge */}
      <span className="inline-block bg-[#4A69E2] text-white px-[16px] py-[12px] rounded-[12px] text-[12px] font-semibold">
        New Release
      </span>

      {/* Title */}
      <h1 className="mt-[16px] text-[32px] font-semibold  text-[#232321]">
        {item?.title}
      </h1>

      {/* Price */}
      <p className="mt-[16px] mb-[32px] text-[24px] font-semibold text-[#4A69E2]">
        ${item?.price}
      </p>

      {/* COLOR */}
      <div className="mt-12">
        <h3 className="uppercase text-[16px] text-[#232321] font-semibold mb-[8px]">
          Color
        </h3>

        <div className="flex gap-6">
          <button
            onClick={() => setSelectedColor("navy")}
            className={`w-14 h-14 rounded-full border-4 p-[8px] ${
              selectedColor === "navy"
                ? "border-[#253043]"
                : "border-transparent"
            }`}
          >
            <div className="w-full  h-full rounded-full bg-[#253043]" />
          </button>

          <button
            onClick={() => setSelectedColor("green")}
            className={`w-14 h-14 rounded-full border-4 p-[8px] ${
              selectedColor === "green"
                ? "border-gray-500"
                : "border-transparent"
            }`}
          >
            <div className="w-full h-full rounded-full bg-[#7C8B7A]" />
          </button>
        </div>
      </div>

      {/* SIZE */}
      <div className="mt-12">
        <div className="flex justify-between items-center">
          <h3 className="uppercase text-[#232321] text-[16px] font-semibold">
            Size
          </h3>
          <button className="text-[#232321] text-[16px] underline">
            Size Chart
          </button>
        </div>

        <div className="flex  gap-[4px] mt-6 flex-wrap">
          {sizes.map((size) => {
            const isUnavailable = size === 39 || size === 40;
            const isSelected = selectedSize === size;

            return (
              <button
                key={size}
                disabled={isUnavailable}
                onClick={() => !isUnavailable && setSelectedSize(size)}
                className={`py-4 h-[48px] flex items-center justify-center w-[50px] rounded-[8px] text-[14px] font-semibold
        ${
          isUnavailable
            ? "bg-[#D2D1D3] text-[#8F8C91] cursor-not-allowed"
            : isSelected
              ? "bg-[#232321] text-white"
              : "bg-[#FFFFFF] text-black"
        }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-12 flex gap-4">
        <button
          disabled={state?.cart?.some((ct) => item?.id === ct?.id)}
          onClick={() => {
            dispatch(productAddToCart(item))
             toast.success("Product added to cart!");
          
          }
          }
          className={`flex-1  text-[#FFFFFF]  py-5 rounded-2xl text-[14px] font-medium ${state?.cart?.some((ct)=>item?.id === ct?.id)?"bg-gray-300":"bg-[#232321] cursor-pointer"}`}
        >
          ADD TO CART
        </button>

        <button className="w-16 flex items-center justify-center bg-zinc-800 rounded-2xl">
          <Image src={HeartIcon} alt="" />
        </button>
      </div>

      <button onClick={()=>{
         if(state?.cart?.some((ct) => item?.id === ct?.id)){
          router.push('/cart')
         }else{
          dispatch(productAddToCart(item))
          router.push('/cart')
         }
      }} className="w-full cursor-pointer text-[14px] text-[#FFFFFF] mt-6 bg-[#4A69E2] py-5 rounded-2xl text-xl font-semibold">
        BUY IT NOW
      </button>

      {/* About */}
      <div className="mt-16 max-w-3xl">
        <h3 className="uppercase text-[#232321] text-[16px] font-semibold mb-[8px] mb-[27px]">
          About the Product
        </h3>

        <p className="text-[#232321] mb-6">{item?.description || ""}</p>
      </div>
    </div>
  );
}
