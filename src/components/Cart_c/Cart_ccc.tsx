import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

const Cart_ccc = () => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center mt-4">
          <Image
            src="/images/wishlist-img.jpg"
            alt="My Image"
            width={50}
            height={50}
            className="w-50 h-50 md:w-20 md:h-20"
          />
          <Typography
            variant="h6"
            className="text-sm font-Roboto_Slab font-bold flex-1 pl-5"
          >
            The Ordinary
          </Typography>
          <div className="flex-1 text-center">
            <p className="text-sm text-gray-600">$4.29</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-xs text-gray-600">&lt; 1 &gt;</p>
          </div>
          <div className="flex-1 text-right">
            <p className="text-sm text-gray-600">$4.29</p>
          </div>
        </div>
        <hr className="border-t-1 border-zinc-200 w-full mt-4"></hr>
      </div>
    </>
  );
};

export default Cart_ccc;
