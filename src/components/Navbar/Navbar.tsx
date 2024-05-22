"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isOpenNavbar, setisOpenNavbar] = useState(false);

  const toggleNavbar = () => {
    setisOpenNavbar(!isOpenNavbar);
  };

  return (
    <>
      <div className="container md:mx-auto md:max-w-4xl pt-4">
        <nav className="flex justify-between items-center">
          {/* left side for mobile view */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleNavbar} className="mr-2 ml-4">
              {isOpenNavbar ? <CloseIcon /> : <MenuOpenIcon />}
            </button>
            <Typography
              variant="h1"
              className="font-bold font-Roboto_Slab text-2xl text-black"
            >
              Miralou
            </Typography>
          </div>

          {/* Typography for larger screens */}
          <div className="hidden md:block">
            <Typography
              variant="h1"
              className="font-bold font-Roboto_Slab text-2xl text-black"
            >
              Miralou
            </Typography>
          </div>

          <ul
            className={`flex justisfy-start flex-col md:flex-row md:flex space-x-6  text-sm text-zinc-500 mt-4  ${
              isOpenNavbar ? "flex" : "hidden"
            } md:flex`}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/product">Product</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/pages">Pages</Link>
            </li>
          </ul>

          <div className="icon-items space-x-5 text-zinc-700 mr-4">
            <SearchIcon />

            <Link href="#">
              <FavoriteBorderIcon />
            </Link>
            <Link href="#">
              <ShoppingCartOutlinedIcon />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
