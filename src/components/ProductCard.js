"use client";

import { useRouter } from "next/navigation";
/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProductCard = ({ item }) => {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col h-full w-full">
        <div className="overflow-hidden relative">
          <img
            src={item?.images[0]}
            alt="product"
            className="product-img h-[180px] md:h-[334px] w-full object-cover"
          />
          <div className="badge absolute left-0 top-0 bg-yellow-400 px-2 py-1">
            New
          </div>
        </div>

        <div className="flex flex-col flex-1 p-4">
          <h1 className="md:text-[24px] text-[16px] font-semibold text-[#232321] min-h-[64px] line-clamp-2">
            {item?.title}
          </h1>

          <button
            onClick={() => router.push(`/products/${item?.id}`)}
            className="btn-dark text-[14px] cursor-pointer text-nowrap font-medium mt-auto"
          >
            View product -{" "}
            <span className="text-[#FFA52F]">${item?.price}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
