"use client";

import React from "react";
import Link from "next/link";
import { Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <div className="footer-container md:mx-auto md:max-w-5xl ml-4 pt-4">
        <div className="footer flex flex-col md:flex-row justify-between ">
          <div className="footer-wrapper">
            <Typography
              variant="h2"
              className="font-bold font-Roboto_Slab text-2xl pb-6 text-gray-700"
            >
              Miralou
            </Typography>
            <p className="text-sm text-zinc-500 pb-7">
              Lorem ipsum dolor sit amet <br></br>consectetur adipisicing elit
              Qui
            </p>
            <div className="footer-icons flex space-x-3 text-zinc-500 pb-5">
              <Link href="#">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-zinc-500">
                  <TwitterIcon />
                </div>
              </Link>

              <Link href="#">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-zinc-500">
                  <FacebookOutlinedIcon />
                </div>
              </Link>

              <Link href="#">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-zinc-500">
                  <TelegramIcon />
                </div>
              </Link>

              <Link href="#">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-zinc-500">
                  <InstagramIcon />
                </div>
              </Link>
            </div>
          </div>

          <div className="footer-wrap">
            <Typography
              variant="h3"
              className="font-bold font-Roboto_Slab text-lg pb-5 text-black"
            >
              Information
            </Typography>
            <p className=" text-zinc-500 pb-7">
              <div className="footer-links flex flex-col gap-3">
                <Link href="/about" className="text-sm ">
                  About Miralou
                </Link>

                <Link href="#" className="text-sm">
                  FAQ
                </Link>
                <Link href="#" className="text-sm">
                  Contact Us
                </Link>
              </div>
            </p>
          </div>

          <div className="footer-wrap">
            <Typography
              variant="h3"
              className="font-bold font-Roboto_Slab text-lg pb-5 text-black"
            >
              Quick Links
            </Typography>
            <p className=" text-zinc-500 pb-7">
              <div className="footer-links flex flex-col gap-3">
                <Link href="#">Wishlist</Link>
                <Link href="#">Checkout</Link>
                <Link href="#">Cart</Link>
              </div>
            </p>
          </div>

          <div className="footer-wrap">
            <Typography
              variant="h3"
              className="font-bold font-Roboto_Slab text-lg pb-5 text-black"
            >
              Contact Us
            </Typography>
            <p className=" text-zinc-500 pb-7">
              <div className="footer-links flex flex-col gap-3">
                <div className="space-x-3">
                  <LocationOnOutlinedIcon />
                  <span>2715 Ash Dr. San Jose, South Dakota 83475</span>
                </div>
                <div className="space-x-3">
                  <LocalPhoneIcon />
                  <span>(808) 555-0111</span>
                </div>
                <div className="space-x-3">
                  <MailOutlineIcon />
                  <span>willie.jennings@example.com</span>
                </div>
              </div>
            </p>
          </div>
        </div>

        <hr className="border-t-2 border-zinc-400 w-auto md:w-auto " />
        <div className="flex flex-col md:flex-row justify-between pt-3 pb-3">
          <p className="text-sm text-zinc-700">Copyright &copy; 2022 Miralou</p>
          <p className="text-sm text-zinc-700 ">All right reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
