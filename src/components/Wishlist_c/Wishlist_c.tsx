"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const Wishlist_c = () => {
  return (
    <>
      <div className="mt-4 mx-5 md:mx-auto md:max-w-5xl">
        <div className="flex justify-between md:justify-start">
          <Image
            src="/images/wishlist-img.jpg"
            alt="My Image"
            width={100}
            height={100}
            className="w-50 h-50 md:w-20 md:h-20"
          />

          <div className="pt-1 md:flex md:items-center ">
            <Typography
              variant="h6"
              className="text-lg font-Roboto_Slab font-bold md:text-sm md:pl-6"
            >
              The Ordinary
            </Typography>
            <p className="text-sm text-gray-600 pr-2 md:text-xs md:pl-40">
              $4.29
            </p>
            <p className="text-xs text-gray-600 md:pl-20 md:pr-48">In Stock</p>

            <Button
              variant="contained"
              size="small"
              className="bg-yellow-400 min-w-20 min-h-7 capitalize text-xs text-black font-bold md:w-30 md:h-9 md:px-7 md:ml-11"
            >
              Add To Cart
            </Button>
          </div>
        </div>
        <hr className="border-t-1 border-zinc-200  w-auto md:w-auto mr-4 mt-4"></hr>
      </div>
    </>
  );
};

export default Wishlist_c;
