/** @format */

import React, { useEffect } from "react";
import Header from "../Utility/Header/Header";
import { Form, useFormik } from "formik";
import * as Yup from "yup";

function Contact() {
  useEffect(() => {
    document.title = "Contact US";
  }, []);
  const Schema = Yup.object().shape({
    userName: Yup.string()
      .required("Name is Required")
      .min(3, "Name must be at least 3 Characters")
      .max(10, "Name must be maximum 10 Characters"),
    userAge: Yup.number()
      .required("Age is Required")
      .min(15, "Age must be at least 15")
      .max(40, "Age must be at most 40")
      .integer("Age must be an integer"),
    userEmail: Yup.string().required("Email is Required").email("Email is Not Valid"),
    userPassword: Yup.string()
      .required("Password is Required")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    userRePassword: Yup.string()
      .required("Confirm Password is Required")
      .oneOf([Yup.ref("userPassword")], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      userAge: null,
      userEmail: "",
      userPassword: "",
      userRePassword: "",
    },
    onSubmit: Submitted,
    validationSchema: Schema,
  });

  function Submitted() {
    alert("Submitted");
  }
  return (
    <>
      <div className="py-40 bg-white flex flex-col justify-center items-center">
        <h2 className="text-4xl my-4 font-bold text-[#2c3e50] uppercase">Contact Section</h2>
        <Header color={"#2c3e50"} />
        <div class="container">
          <form onSubmit={formik.handleSubmit} className="md:px-48 lg:px-56">
            <div className="grid w-full sm:grid-cols-1">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1ABC9C] focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="userName"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  userName
                </label>
                {formik.errors.userName && formik.touched.userName ? (
                  <div
                    class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                    role="alert"
                  >
                    {formik.errors.userName}
                  </div>
                ) : null}
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="userAge"
                  id="userAge"
                  value={formik.values.userAge}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1ABC9C] focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="userAge"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  userAge
                </label>
                {formik.errors.userAge && formik.touched.userAge ? (
                  <div
                    class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                    role="alert"
                  >
                    {formik.errors.userAge}
                  </div>
                ) : null}
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="userEmail"
                  id="userEmail"
                  value={formik.values.userEmail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1ABC9C] focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="userEmail"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  userEmail
                </label>
                {formik.errors.userEmail && formik.touched.userEmail ? (
                  <div
                    class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                    role="alert"
                  >
                    {formik.errors.userEmail}
                  </div>
                ) : null}
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="userPassword"
                  id="userPassword"
                  value={formik.values.userPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1ABC9C] focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="userPassword"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  userPassword
                </label>
                {formik.errors.userPassword && formik.touched.userPassword ? (
                  <div
                    class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                    role="alert"
                  >
                    {formik.errors.userPassword}
                  </div>
                ) : null}
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="userRePassword"
                  id="userRePassword"
                  value={formik.values.userRePassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-[#1ABC9C] dark:focus:border-[#1ABC9C] focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="userRePassword"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm password
                </label>
                {formik.errors.userRePassword && formik.touched.userRePassword ? (
                  <div
                    class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                    role="alert"
                  >
                    {formik.errors.userRePassword}
                  </div>
                ) : null}
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-[#1ABC9C] hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-text-[#1ABC9C] dark:hover:bg-text-[#1ABC9C] dark:focus:ring-green-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
