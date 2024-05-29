import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";

const Cart_cc = () => {
  return (
    <>
      <div className="mx-5 mt-10 md:mx-auto md:max-w-5xl">
        <Typography
          variant="h4"
          className="font-bold font-Roboto_Slab text-2xl"
        >
          Similar Products
        </Typography>
        <div className="md:flex md:justify-between">
          <p className="py-3 text-sm text-zinc-600 md:w-3/5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            voluptates voluptas doloremque porro, atque incidunt veniam in
            reiciendis ad similique.
          </p>
          <p className="hidden md:block text-gray-500 text-sm font-bold md:text-lg">
            &larr;&nbsp;&nbsp;&nbsp;&nbsp;&rarr;
          </p>
        </div>

        <div className="md:flex md:justify-between">
          <div className="py-5">
            <Image
              src="/images/cartlist-img.jpg"
              alt="cart-img"
              width={200}
              height={500}
            />
            <p className="pt-3 font-bold font-Roboto_Slab ">Anti-Acne Serum</p>
            <p className="text-gray-500 text-sm">
              <span className="text-gray-200">$7.99 </span>$4.99
            </p>
          </div>

          <div className="py-5">
            <Image
              src="/images/cartlist2-img.jpg"
              alt="cart-img"
              width={200}
              height={500}
            />
            <p className="pt-3 font-bold font-Roboto_Slab ">Neccessaire</p>
            <p className="text-gray-500 text-sm">$5.49</p>
          </div>

          <div className="py-5">
            <Image
              src="/images/cartlist3-img.jpg"
              alt="cart-img"
              width={200}
              height={500}
            />
            <p className="pt-3 font-bold font-Roboto_Slab ">Skin Care</p>
            <p className="text-gray-500 text-sm">$5.99</p>
          </div>

          <div className="py-5">
            <Image
              src="/images/wishlist-img.jpg"
              alt="cart-img"
              width={200}
              height={500}
            />
            <p className="pt-3 font-bold font-Roboto_Slab ">The Ordinary</p>
            <p className="text-gray-500 text-sm">$4.29</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart_cc;
