/** @format */

import React from "react";
import styles from "./LayOut.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function LayOut() {
  return( 
  <>
  <NavBar/>
  <Outlet />
  <Footer/>
  </>
  )
}

export default LayOut;
