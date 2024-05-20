import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faTelegram,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer-container mx-auto max-w-4xl pt-4">
        <div className="footer flex justify-between  ">
          <div className="footer-wrapper">
            <h2 className="font-bold font-Roboto_Slab text-2xl pb-7 text-gray-700">
              Miralou
            </h2>
            <p className="text-sm text-zinc-500 pb-7">
              Lorem ipsum dolor sit amet <br></br>consectetur adipisicing elit
              Qui
            </p>
            <div className="footer-icons flex space-x-3 text-zinc-500">
              <Link href="#">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-zinc-500">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </Link>

              <Link href="#">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-zinc-500">
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
              </Link>

              <Link href="#">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-zinc-500">
                  <FontAwesomeIcon icon={faTelegram} />
                </div>
              </Link>

              <Link href="#">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-zinc-500">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </Link>
            </div>
          </div>

          <div className="footer-wrap">
            <h3 className="font-bold font-Roboto_Slab text-lg pb-7 text-black">
              Information
            </h3>
            <p className=" text-zinc-500 pb-7">
              <div className="footer-links flex flex-col gap-7">
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
            <h3 className="font-bold font-Roboto_Slab text-lg pb-7 text-black">
              Quick Links
            </h3>
            <p className=" text-zinc-500 pb-7">
              <div className="footer-links flex flex-col gap-7">
                <Link href="#">Wishlist</Link>
                <Link href="#">Checkout</Link>
                <Link href="#">Cart</Link>
              </div>
            </p>
          </div>

          <div className="footer-wrap">
            <h3 className="font-bold font-Roboto_Slab text-lg pb-7 text-black">
              Contact Us
            </h3>
            <p className=" text-zinc-500 pb-7">
              <div className="footer-links flex flex-col gap-7">
                <div className="space-x-3">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>2715 Ash Dr. San Jose, South Dakota 83475</span>
                </div>
                <div className="space-x-3">
                  <FontAwesomeIcon icon={faPhone} />
                  <span>(808) 555-0111</span>
                </div>
                <div className="space-x-3">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>willie.jennings@example.com</span>
                </div>
              </div>
            </p>
          </div>
        </div>

        <hr className="border-t-2 border-zinc-400" />
        <div className="flex justify-between pt-3 pb-3">
          <p className="text-sm text-zinc-700">Copyright &copy; 2022 Miralou</p>
          <p className="text-sm text-zinc-700">All right reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
