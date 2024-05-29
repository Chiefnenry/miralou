import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Wishlist_c from "@/components/Wishlist_c/Wishlist_c";
import React from "react";

const Wishlist = () => {
  return (
    <>
      <div>
        <Navbar />
        <Wishlist_c />
        <Wishlist_c />
        <Wishlist_c />
        <Footer />
      </div>
    </>
  );
};

export default Wishlist;
