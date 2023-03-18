import React from "react";

import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img
        src={logo}
        alt="hoobank logo"
        className="w-[124px] h-[32px] cursor-pointer"
      ></img>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav: any, index: number) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((nav: any, index: number) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
