"use client"
import React from "react";
import ProductCard from "./ProductCard";
import { useGetAllProductQuery } from "../redux/api/productApi";

const ProductsSection = () => {
  const {data,isLoading}=useGetAllProductQuery(undefined)

  if(isLoading){
    return
  }
  return (
    <div className="products">
      <div className="section-header">
        <h2 className="md:w-175 md:text-[74px] text-[22px] md:font-semibold uppercase">
          Don’t miss out new drops
        </h2>
        <button className="btn-primary px-2 text-[14px] text-nowrap uppercase">Shop new drops</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
        {data?.slice(0,4)?.map((item) => (
          <ProductCard key={item?.id} item={item}  />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
