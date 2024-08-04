/** @format */

import React, { useEffect } from "react";
import homeImg from "../../assets/avataaars.svg";
import Header from "../Utility/Header/Header";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <div className="pt-5 py-10 bg-[#1ABC9C]">
        <div className="container">
          <div className="flex flex-col justify-center text-white items-center mt-36">
            <img
              src={homeImg}
              alt="laughing Person Avatar"
              className="max-w-96 sm:max-w-80 rounded-full drop-shadow-lg"
            />
            <h1 className="text-4xl my-4 font-bold ">START FRAMEWORK</h1>
            <Header color={"#fff"} />
            <p className="my-3">Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
