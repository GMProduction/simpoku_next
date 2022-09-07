import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiXCircle } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("black");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#FFFFFF");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("black");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="sticky left-0 top-0 w-full z-10 ease-in duration-300"
    >
      
      <div className="container m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl ">
            Simpoku
          </h1>
        </Link>
        <div>
          <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
            <li className="py-4 px-8 text-gray-500  hover:text-primaryC ease-in duration-300">
              <Link href="/">Beranda</Link>
            </li>
            <li className="py-4 px-8 text-gray-500  hover:text-primaryC ease-in duration-300">
              <Link href="/#gallery">Cari Event</Link>
            </li>
            <li className="py-4 px-8 text-gray-500  hover:text-primaryC ease-in duration-300">
              <Link href="/work">Tentang Kami</Link>
            </li>

            <li className="py-4 px-8 text-gray-500  hover:text-primaryC ease-in duration-300">
              <Link href="/contact">Bantuan</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="relative mt-1 rounded-full hidden md:block">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center ">
              <FiSearch size={20} className="text-gray-500 ml-5" />
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-full border border-gray-300 outline-none ring-0  pr-12  py-3 pl-10 ml-2  text-gray-800 sm:text-sm"
              placeholder="Cari Simposium"
            />
          </div>
        </div>

        {/* MOBILE  */}
        <div className="block sm:hidden z-10" onClick={handleNav}>
          {!nav ? (
            <FiMenu size={20} color={textColor} />
          ) : (
            <FiXCircle size={20} />
          )}
        </div>

        {/* SLIDE MENU */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center w-full items-center h-screen bg-primaryC text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-primaryC text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/work">Work</Link>
            </li>

            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
