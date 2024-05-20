import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto max-w-4xl pt-4">
        <nav className="flex justify-between">
          <div>
            <h1 className="font-bold font-Roboto_Slab text-2xl text-black">
              Miralou
            </h1>
          </div>

          <ul className="flex space-x-6 text-sm text-zinc-500">
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

          <div className="icon-items space-x-5 text-zinc-700">
            <FontAwesomeIcon icon={faMagnifyingGlass} />

            <Link href="#">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <Link href="#">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
