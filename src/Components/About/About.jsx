/** @format */

import React, { useEffect } from "react";
import Header from "../Utility/Header/Header";

function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <div className="py-80 bg-[#1ABC9C] flex flex-col justify-center items-center">
        <h2 className="text-4xl my-4 font-bold text-white uppercase">About Component</h2>
        <Header color={"#fff"} />
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white">
            <div className="mb-3 sm:pl-32">
              <h3>
                Freelancer is a free bootstrap theme created by Route. The download includes the
                complete source files including HTML, CSS, and JavaScript as well as optional SASS
                stylesheets for easy customization.
              </h3>
            </div>
            <div className="sm:pr-32">
              <h3>
                Freelancer is a free bootstrap theme created by Route. The download includes the
                complete source files including HTML, CSS, and JavaScript as well as optional SASS
                stylesheets for easy customization.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
