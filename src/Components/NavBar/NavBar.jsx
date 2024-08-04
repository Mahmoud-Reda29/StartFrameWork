/** @format */

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css"; // Import the CSS module

function NavBar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="bg-slate-800 fixed top-0 left-0 right-0 border-gray-200 dark:bg-gray-900 z-50">
        <div
          className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ${
            scroll ? "p-4" : "p-7"
          } duration-700 `}
        >
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-white text-4xl font-bold whitespace-nowrap dark:text-white">
              START FRAMEWORK
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-400 rounded-lg md:hidden hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-slate-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-slate-800 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-3 text-white rounded hover:bg-green-400 md:hover:bg-green-400 duration-1000 md:border-0 md:text-white md:p-2 dark:text-white dark:hover:bg-green-400 dark:hover:text-white md:dark:hover:bg-green-400 ${
                      isActive ? styles.activeLink : ""
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    `block py-3 px-3 text-white rounded hover:bg-green-400 md:hover:bg-green-400 duration-1000 md:border-0 md:hover:text-white md:p-2 dark:text-white dark:hover:bg-green-400 dark:hover:text-white md:dark:hover:bg-green-400 ${
                      isActive ? styles.activeLink : ""
                    }`
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-3 text-white rounded hover:bg-green-400 md:hover:bg-green-400 duration-1000 md:border-0 md:hover:text-white md:p-2 dark:text-white dark:hover:bg-green-400 dark:hover:text-white md:dark:hover:bg-green-400 ${
                      isActive ? styles.activeLink : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
