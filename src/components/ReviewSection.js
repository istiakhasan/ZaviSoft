import Image from "next/image";
import React from "react";
import Avatar1 from "../assets/avatar1.png";
import Avatar2 from "../assets/avatar2.png";
import Avatar3 from "../assets/avatar3.png";
import Review1 from "../assets/review1.png";
import Review2 from "../assets/review2.png";
import Review3 from "../assets/review3.png";
import Star from "../assets/star.png";

const ReviewSection = () => {
  // Array of review data
  const reviews = [
    {
      avatar: Avatar1,
      image: Review1,
      title: "Good Quality",
      text: "I highly recommend shopping from kicks",
      rating: 5,
    },
    {
      avatar: Avatar2,
      image: Review2,
      title: "Amazing Service",
      text: "The shoes are very comfortable and stylish",
      rating: 5,
    },
    {
      avatar: Avatar3,
      image: Review3,
      title: "Love the Product",
      text: "The shoes are very comfortable and stylish",
      rating: 5,
    },
  ];

  return (
    <div className="">
      <div
        style={{ marginTop: "128px" }}
        className="mt-[128px] flex justify-between items-center"
      >
        <h1 className="text-[#232321] md:text-[74px] text-[24px] uppercase font-bold">
          Reviews
        </h1>
        <button className="btn-primary">SEE ALL</button>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mt-10 mb-[128px]">
        {reviews.map((review, index) => (
          <div key={index} className="review-card rounded-[16px] md:rounded-[32px]">
            <div style={{ padding: "32px" }} className="flex justify-between items-center gap-5">
              <div>
                <h1 className="text-[#232321] text-[24px] font-semibold">
                  {review.title}
                </h1>
                <p className="text-[#232321] text-[16px] font-thin  line-clamp-2">
                  {review.text}
                </p>
                <p className="flex gap-[8px] items-center mt-[12px]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Image key={i} alt="" src={Star} />
                  ))}
                  <span className="text-[#232321] text-[16px] font-semibold">
                    {review.rating}.0
                  </span>
                </p>
              </div>
              <div>
                <Image alt="" className="h-[64px] w-[64px]" src={review.avatar} />
              </div>
            </div>

            <Image className="w-full" alt="" src={review.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;