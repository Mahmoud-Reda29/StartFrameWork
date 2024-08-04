/** @format */

import React from "react";
import { FaStar } from "react-icons/fa6";

function Header({color}) {
  return (
    <>
      <div className="flex justify-between  items-center my-3 mb-5">
        <div style={{ backgroundColor: color }} className='w-28 h-1'></div>
        <FaStar style={{ color: color }} className='text-lg mx-5' />
        <div style={{ backgroundColor: color }} className='w-28 h-1'></div>
      </div>
    </>
  );
}

export default Header;
