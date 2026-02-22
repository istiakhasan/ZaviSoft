"use client";
import React, { useState } from "react";
import { Heart, Trash2, ChevronDown, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  incrementQuantityByInput,
  removeToCart,
} from "../redux/feature/cartSlice";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();
  const [openQuantityIndex, setOpenQuantityIndex] = useState(null);
  const [openSizeIndex, setOpenSizeIndex] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  // Calculations
  const subtotal = cartItems?.cart?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const delivery = cartItems?.cart?.length > 0 ? 6.99 : 0;
  const total = subtotal + delivery;

  const sizes = ["S", "M", "L", "XL", "XXL"];
  console.log(cartItems, "cart item");
  return (
    <div>
      <div className="rounded-[32px] h-auto md:flex shadow-lg mt-[32px]">
        {/* LEFT SIDE */}
        <div className="flex-1 p-6 md:p-12 bg-[#FAFAFA]">
          <h1 className="text-[32px] mb-2 font-semibold text-[#232321]">
            Your Bag
          </h1>
          <p className="text-[16px] text-[#232321]">
            Items in your bag not reserved - check out now to make them yours.
          </p>

          {cartItems?.cart?.map((item, i) => (
            <div
              key={item.id}
              className="flex  flex-row gap-6 md:gap-8 mt-8 md:mt-12"
            >
              {/* Image */}
              <div className="md:w-1/2 w-full h-[225px] bg-[#F2F2F2] rounded-[28px] flex items-center justify-center">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="h-full w-full object-cover rounded-[28px]"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 w-full flex flex-col justify-between">
                <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
                  <div>
                    <h2 className="md:text-[24px] text-[16px] font-semibold text-[#232321]">
                      {item.title.toUpperCase()}
                    </h2>
                    <p className="text-[#232321] text-[20px] mt-2">
                      {item?.description?.length > 80
                        ? item?.description.slice(0, 80) + "..."
                        : item?.description}
                    </p>
                  </div>
                  <p className="text-[#4C6EDB] md:text-[32px] text-[20px] font-semibold">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-12 mt-2 md:mt-8 relative">
                  {/* SIZE */}
                  <div className="relative">
                    <div
                      onClick={() =>
                        setOpenSizeIndex(openSizeIndex === i ? null : i)
                      }
                      className="flex items-center gap-2 text-[20px] cursor-pointer"
                    >
                      Size {selectedSizes[i] || "M"}
                      <ChevronDown size={20} />
                    </div>

                    {openSizeIndex === i && (
                      <div className="absolute top-10 left-0 bg-white shadow-lg rounded-xl w-[120px] z-50">
                        {sizes.map((size) => (
                          <div
                            key={size}
                            onClick={() => {
                              setSelectedSizes((prev) => ({
                                ...prev,
                                [i]: size,
                              }));
                              setOpenSizeIndex(null);
                            }}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            {size}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* QUANTITY */}
                  <div className="relative">
                    <div
                      onClick={() =>
                        setOpenQuantityIndex(openQuantityIndex === i ? null : i)
                      }
                      className="flex items-center gap-2 text-[20px] cursor-pointer"
                    >
                      Quantity {item?.quantity}
                      <ChevronDown size={20} />
                    </div>

                    {openQuantityIndex === i && (
                      <div className="absolute top-10 left-0 bg-white shadow-lg rounded-xl w-[120px] z-50">
                        {[1, 2, 3, 4, 5].map((qty) => (
                          <div
                            key={qty}
                            onClick={() => {
                              dispatch(
                                incrementQuantityByInput({
                                  index: i,
                                  value: qty,
                                }),
                              );
                              setOpenQuantityIndex(null);
                            }}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            {qty}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-6 mt-6 md:mt-8">
                  <Heart className="cursor-pointer" size={26} />
                  <Trash2
                    onClick={() => {
                      dispatch(removeToCart({ index: i }))
                      toast.error('Product remove from cart')
                    
                    }}
                    className="cursor-pointer"
                    size={26}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-[470px] w-full px-12 py-6 md:sticky top-10 self-start h-fit">
          <h2 className="text-[32px] font-semibold mb-5">Order Summary</h2>

          <div className="text-[20px]">
            <div className="flex mb-[16px] justify-between">
              <span>{cartItems?.cart?.length || 0} ITEM</span>
              <span>${subtotal?.toFixed(2) || "0.00"}</span>
            </div>

            <div className="flex mb-[16px] justify-between">
              <span>Delivery</span>
              <span>${delivery.toFixed(2)}</span>
            </div>

            <div className="flex mb-[16px] justify-between font-semibold text-[24px] mt-6">
              <span>Total</span>
              <span>${total?.toFixed(2) || "0.00"}</span>
            </div>
          </div>

          <button
            onClick={() => setShowSuccess(true)}
            className="w-full mt-10 bg-[#232321] text-white py-4 rounded-xl text-[14px] font-medium"
          >
            CHECKOUT
          </button>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999]">
          <div className="bg-white w-[420px] rounded-2xl p-8 relative shadow-2xl">
            <X
              className="absolute right-4 top-4 cursor-pointer"
              onClick={() => setShowSuccess(false)}
            />

            <h2 className="text-[26px] font-semibold text-center mb-6">
              Payment Successful
            </h2>

            <div className="border-t border-b py-4 text-[16px]">
              {cartItems?.cart?.map((item, i) => (
                <div key={i} className="flex justify-between mb-2">
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-4 font-semibold text-[18px]">
              <span>Total Paid</span>
              <span>${total?.toFixed(2)}</span>
            </div>

            <button
              onClick={() => setShowSuccess(false)}
              className="w-full mt-6 bg-[#232321] text-white py-3 rounded-lg"
            >
              Close
            </button>
            <button
              onClick={() => {
                if (!cartItems?.cart?.length) return;

                setShowSuccess(true);
               toast.success('Cart rest successfully...')
                // Clear cart after small delay (so invoice shows first)
                setTimeout(() => {
                  dispatch(clearCart());
                  setShowSuccess(false);
                  router.push("/");
                }, 300);
              }}
              className="w-full mt-6 bg-red-400 text-white py-3 rounded-lg"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
