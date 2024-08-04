/** @format */

import React, { useEffect } from "react";
import { TbError404 } from "react-icons/tb";
import Header from "../Utility/Header/Header";
function NotFound() {
  useEffect(() => {
    document.title = "Notfound";
  }, []);
  return (
    <>
      <div className="py-20 bg-[#1ABC9C]">
        <div className="container">
          <div className="flex flex-col justify-center text-white items-center mt-36">
            <TbError404 className="text-8xl"/>
            <h4 className="text-4xl my-7 font-bold uppercase">Not Found</h4>
            <Header color={"#fff"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
