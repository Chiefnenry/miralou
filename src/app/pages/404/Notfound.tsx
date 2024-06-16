import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Typography, Button } from "@mui/material";
import React from "react";

const Notfound = () => {
  return (
    <>
      <div className="md:mx-auto md:max-w-5xl">
        <Navbar />
        <div className="flex flex-col justify-center items-center mx-4 my-20">
          <Typography variant="h1" className="font-serif font-extrabold pb-7">
            404
          </Typography>
          <p className="font-extrabold font-Roboto_Slab text-2xl">
            Oops! That Page Can&apos;t Be Found.
          </p>
          <p className="text-gray-400 text-sm py-5 text-center">
            Unfortunately this page does not exist. We apologize and give
            <br></br> a 15% discount on any product.
          </p>
          <Button
            variant="contained"
            className="bg-yellow-300 w-2/5 font-bold text-black text-xs capitalize mt-3 md:w-1/5 md:h-14"
          >
            To Shopping
          </Button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Notfound;
