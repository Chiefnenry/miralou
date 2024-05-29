import { Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const Wishlist_cc = () => {
  return (
    <>
      <div>
        <div className="mt-11 mx-5 md:mx-auto md:max-w-5xl md:flex md:flex-row-reverse md:justify-between md:pb-20">
          <Image
            src="/images/WL-cc.jpg"
            alt="Wishlist-img"
            width={300}
            height={500}
            className="w-45 h-70 md:w-41 md:h-50"
          />

          <div className="md:flex md:flex-col md:justify-center md:w-3/5">
            <Typography
              variant="h5"
              className="pt-4 font-Roboto_Slab font-bold md:pb-4 md:text-2xl"
            >
              No Products Added<br></br>To The Wishlist
            </Typography>
            <p className="w-auto text-gray-600 text-sm md:pb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
              ullam! Provident, impedit at. Facere distinctio explicabo sit dat
              consectetur adipisicing elit ipsum dolor sit amet, consectetur
              adipisicing elit. Magnam, ullam! Provident, impedit at
            </p>
            <Button
              variant="contained"
              className="mt-2 bg-yellow-400 w-28 h-8 capitalize text-xs text-black font-bold"
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist_cc;
