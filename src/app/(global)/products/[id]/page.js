"use client";
/* eslint-disable @next/next/no-img-element */
import ProductCard from "../../../../components/ProductCard";
import ProductDetails from "../../../../components/ProductDetails";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  useGetProductByIdQuery,
  useGetAllProductQuery,
} from "../../../../redux/api/productApi";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const { data, isLoading } = useGetProductByIdQuery({ id: params?.id });
  const { data: products } = useGetAllProductQuery(undefined);

  if (isLoading) return null;

  const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute -top-20 right-0 w-12 h-12 bg-[#2C2C2C] hover:bg-black flex items-center justify-center rounded-lg cursor-pointer z-10"
    >
      <span className="text-white text-xl">›</span>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute -top-20 right-16 w-12 h-12 bg-[#2C2C2C] hover:bg-black flex items-center justify-center rounded-lg cursor-pointer z-10"
    >
      <span className="text-white text-xl">‹</span>
    </div>
  );

  const groupProducts = (arr, groupSize = 4) => {
    const groups = [];
    for (let i = 0; i < arr.length; i += groupSize) {
      groups.push(arr.slice(i, i + groupSize));
    }
    return groups;
  };

  const smallDeviceGroups = groupProducts(products || [], 4);

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
    <div  className=" md:mx-[60px] mx-[16px]">
      <div className="grid md:grid-cols-3 gap-[16px] my-[32px]">
        <div className="md:col-span-2">
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 gap-[16px]">
            {data?.images?.map((img, index) => {
              let radiusClass = "";
              if (index === 0) radiusClass = "rounded-tl-[48px]";
              if (index === 1) radiusClass = "rounded-tr-[48px]";
              if (index === 2) radiusClass = "rounded-bl-[48px]";
              if (index === 3) radiusClass = "rounded-br-[48px]";

              return (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className={`h-[510px] w-full object-cover ${radiusClass}`}
                />
              );
            })}
          </div>

          {/* Mobile Custom Thumbnail Gallery */}
          <MobileThumbnailGallery images={data?.images || []} />
        </div>

        <ProductDetails item={data} />
      </div>

      <div className="products mb-[60px]">
        <div className="section-header flex justify-between items-center mb-8">
          <h2 className="text-[48px] font-semibold uppercase">
            You may also like
          </h2>
        </div>

        <div className="hidden md:block">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={4}
            slidesToScroll={4}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
          >
            {products?.map((item) => (
              <div key={item?.id} className="px-3 h-full flex">
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

const MobileThumbnailGallery = ({ images }) => {
  const [mainImage, setMainImage] = React.useState(images[0] || "");

  if (!images.length) return null;

  return (
    <div className="md:hidden">
      <div className="mb-4">
        <img
          src={mainImage}
          alt=""
          className="h-[400px] w-full object-cover rounded-[24px]"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setMainImage(img)}
            className="flex-shrink-0"
          >
            <img
              src={img}
              alt=""
              className={`h-20 w-20 object-cover rounded-lg border-2 ${
                mainImage === img ? "border-black" : "border-transparent"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
