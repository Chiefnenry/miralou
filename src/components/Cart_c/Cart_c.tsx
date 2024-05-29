import React from "react";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Cart_c = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="mt-11 mx-5 md:mx-auto md:max-w-4xl md:flex md:flex-row-reverse md:justify-between md:pb-20">
          <Image
            src="/images/cart-img.jpg"
            alt="cart-img"
            width={300}
            height={500}
            className="w-45 h-70 md:w-42 md:h-80"
          />

          <div className="md:flex md:flex-col md:justify-center md:w-3/5">
            <Typography
              variant="h5"
              className="pt-4 font-Roboto_Slab font-bold md:pb-4 md:text-3xl"
            >
              Your Shopping Cart<br></br>Is Empty Now
            </Typography>
            <p className="w-auto text-gray-600 text-sm md:pb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
              ullam! Provident, impedit at. Facere distinctio explicabo sit dat
              consectetur adipisicing elit ipsum dolor sit amet, consectetur
            </p>
            <Button
              variant="contained"
              className="mt-2 bg-yellow-400 w-28 h-8 capitalize text-xs text-black font-bold md:w-32 md:px-5"
            >
              To Shopping
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cart_c;
