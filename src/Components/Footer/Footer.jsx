/** @format */

import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdBasketball } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-800  text-white dark:bg-gray-900">
      <div className="mx-auto w-full  max-w-screen-xl p-28">
        <div className="md:flex md:justify-center">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div className="text-center mb-3">
              <h3 className="text-3xl mb-2">LOCATION</h3>
              <p className="text-lg mb-2">2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="text-center mb-3">
              <h3 className="text-3xl mb-2">AROUND THE WEB</h3>
              <div className="flex mt-4 justify-center items-center sm:mt-4">
                <NavLink
                  to="https://www.facebook.com/"
                  className="text-white p-2 border-2 rounded-full hover:bg-slate-50 hover:text-green-400 dark:hover:text-white"
                >
                  <FaFacebookF />
                </NavLink>
                <NavLink
                  to="https://x.com/?lang=en"
                  className="text-white p-2 border-2 rounded-full hover:bg-slate-50 hover:text-green-400 dark:hover:text-white ms-5"
                >
                  <FaTwitter />
                </NavLink>
                <NavLink
                  to="https://www.linkedin.com/"
                  className="text-white p-2 border-2 rounded-full hover:bg-slate-50 hover:text-green-400 dark:hover:text-white ms-5"
                >
                  <FaLinkedin />
                </NavLink>
                <NavLink
                  to="#"
                  className="text-white p-2 border-2 rounded-full hover:bg-slate-50 hover:text-green-400 dark:hover:text-white ms-5"
                >
                  <IoMdBasketball />
                </NavLink>
              </div>
            </div>
            <div className="text-center mb-3">
              <h3 className="text-3xl mb-2">ABOUT FREELANCER</h3>
              <p className="text-lg mb-2">
                Freelance is a free to use, licensed Bootstrap theme created by Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-900">
        <span className="text-white text-center dark:text-white">
          Copyright © Your Website 2024
        </span>
      </div>
    </footer>
  );
}

export default Footer;
