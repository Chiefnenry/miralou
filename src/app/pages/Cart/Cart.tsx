"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Cart_cc from "@/components/Cart_c/Cart_cc";
import Cart_ccc from "@/components/Cart_c/Cart_ccc";

const Cart = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="mt-10 mx-5 md:mx-auto md:max-w-5xl flex flex-col md:flex-row md:justify-between">
          <div className="container md:max-w-xl">
            <div className="flex justify-between md:justify-start ">
              <Typography
                variant="h6"
                className="font-bold font-Roboto_Slab text-sm flex-1"
              >
                Product
              </Typography>

              <Typography
                variant="h6"
                className="font-bold font-Roboto_Slab text-sm text-center flex-1 "
              >
                Price
              </Typography>

              <Typography
                variant="h6"
                className="font-bold font-Roboto_Slab text-sm text-center flex-1"
              >
                Quantity
              </Typography>

              <Typography
                variant="h6"
                className="font-bold font-Roboto_Slab text-sm text-right flex-1"
              >
                Subtotal
              </Typography>
            </div>

            <Cart_ccc />
            <Cart_ccc />
            <Cart_ccc />
          </div>

          <div className="wrapper pt-7">
            <Typography
              variant="h3"
              className="font-serif font-extrabold text-2xl"
            >
              Cart Totals
            </Typography>
            <div className="flex justify-between pt-3">
              <p className="font-serif font-bold text-lg">Subtotal</p>
              <p className=" text-zinc-400">$ 15.27</p>
            </div>
            <p className="pt-2 font-serif font-bold text-lg">Shipping </p>
            <p className="pt-2 text-sm text-gray-500">
              Flat rate.<br></br>Shipping options will be updated during
              checkout
            </p>
            <div className="flex justify-between pt-3">
              <p className="font-serif font-bold text-lg">Total</p>
              <p className="text-zinc-400">$ 15.27</p>
            </div>
            <Button
              variant="contained"
              className="mt-3 bg-yellow-400 capitalize font-bold text-sm text-black px-24 py-5"
            >
              Proceed To Checkout
            </Button>
          </div>
        </div>

        <div className="mt-6 ml-5 mx-5 md:mx-auto md:max-w-5xl">
          <Button
            variant="outlined"
            className="mr-3 border-gray-500 capitalize text-gray-400 text-sm px-9 "
          >
            Coupon Code
          </Button>
          <Button
            variant="contained"
            className="bg-yellow-400 font-bold text-black capitalize text-xs px-9 py-2"
          >
            Apply Coupon
          </Button>
        </div>
        <Cart_cc />
        <Footer />
      </div>
    </>
  );
};

export default Cart;
