"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import GoogleIcon from "public/google.png";
import FacebookIcon from "public/facebook.png";
import Logo from "public/logo-real.png";
import mobileLogo from "public/oni-moon.png";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [color, setColor] = useState<boolean>(false);
  const [disappear, setDisappear] = useState<boolean>(false);

  const changeColor = () => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;
      setColor(scrollY >= 80);
      setDisappear(scrollY >= 80);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeColor);

      return () => {
        window.removeEventListener("scroll", changeColor);
      };
    }
  }, []);

  //menu animation
  const variants = {
    hidden: { opacity: 0, y: 0, transition: { delay: 3 } },
    visible: {
      opacity: 1,
      transition: { delay: 2.5 },
    },
  };

  //Mobile Menu
  const [openMenu, setOpenMenu] = useState(false);

  const toggleButton = () => {
    setOpenMenu((prev) => !prev);
  };

  //Log in page

  const [openLogin, setOpenLogin] = useState(false);

  const toggleLogin = () => {
    setOpenLogin(!openLogin);
  };

  // Set overflow property when component mounts and unmounts
  useEffect(() => {
    document.body.style.overflow = openLogin ? "hidden" : "auto";
    document.body.style.overflow = openMenu ? "hidden" : "auto";

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openLogin, openMenu]);

  return (
    <div
      className={`h-80 w-full flex fixed bg-gradient-to-b from-black via-black/50 to-transparent z-50 flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        color ? "" : ""
      } ${disappear ? "opacity-0 pointer-events-none " : " "}`}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="w-full m-auto flex justify-between items-center p-4 text-white"
      >
        <Link href="/" className="font-agrandir text-4xl md:text-5xl">
          <Image
            src={mobileLogo}
            alt="oni real estate logo"
            className="invert w-20"
          />
        </Link>
        <ul
          className={` text-white text-sm hidden  font-light font-montserrat h-full xl:flex justify-between  tracking-widest items-center gap-x-8  w-auto transition-colors duration-300 ease-in
          `}
        >
          <li className="relative p-4">
            <Link href="/">
              <span className="inline-block transition-all duration-500 before:content-[''] before:absolute before:left-0 before:top-10 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r  before:from-white before:via-white/30 before:to-white hover:before:w-full hover:before:opacity-100">
                Home
              </span>
            </Link>
          </li>
          <li className="relative p-4">
            <Link href="/listings">
              <span className="inline-block transition-all duration-500 before:content-[''] before:absolute before:left-0 before:top-10 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r  before:from-white before:via-white/30 before:to-white hover:before:w-full hover:before:opacity-100">
                Properties
              </span>
            </Link>
          </li>
          <li className="relative p-4">
            <Link href="/clients">
              <span className="inline-block transition-all duration-500 before:content-[''] before:absolute before:left-0 before:top-10 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r  before:from-white before:via-white/30 before:to-white hover:before:w-full hover:before:opacity-100">
                Ownership
              </span>
            </Link>
          </li>
          <li className="relative p-4">
            <button onClick={toggleLogin}>
              <span className="inline-block transition-all duration-500 before:content-[''] before:absolute before:left-0 before:top-10 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r  before:from-white before:via-white/30 before:to-white hover:before:w-full hover:before:opacity-100">
                Login
              </span>
            </button>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={toggleButton}
          className="w-12 h-12 flex flex-col relative justify-center items-center rounded-full  space-x-reverse xl:hidden z-10"
        >
          <span
            className={`block w-3/4 my-0.5 border border-white ${
              openMenu
                ? "rotate-45 transition-transform duration-300 ease-in-out"
                : "transition-transform duration-300 ease-in-out relative top-0.5"
            }`}
          ></span>
          <span
            className={`block w-3/4 my-0.5 border border-white ${
              openMenu
                ? "-rotate-45 w-3/4 absolute top-2/5 transition-transform duration-300 ease-in-out"
                : "transition-transform duration-300 ease-in-out relative top-0.5"
            }`}
          ></span>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="xl:hidden absolute top-0  right-0 bottom-0  flex justify-center items-center w-full  h-screen bg-mist  "
            >
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ ease: "easeInOut", duration: 0.2 }}
                className="xl:hidden absolute top-0   right-0 bottom-0 w-full h-screen bg-black shadow-xl "
              >
                <Image
                  src={mobileLogo}
                  alt="oni real estate logo"
                  className="invert w-24 p-4"
                />
                <ul
                  className={` gap-y-4  flex flex-col justify-center font-agrandir w-full h-1/2
          `}
                >
                  <li className="relative   w-full p-4 text-lg md:text-4xl tracking-wider font-extralight  ">
                    <Link href="/" className="w-full flex justify-between">
                      Home <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                  </li>
                  <li className="relative  flex justify-between  w-full p-4 text-lg md:text-4xl tracking-wider font-extralight  ">
                    <Link href="/login" className="w-full flex justify-between">
                      Login <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                  </li>
                  <li className="relative  flex justify-between  w-full p-4 text-lg md:text-4xl tracking-wider font-extralight  ">
                    <Link
                      href="/clients"
                      className="w-full flex justify-between"
                    >
                      Ownership <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                  </li>
                  <li className="relative  flex justify-between  w-full p-4 text-lg md:text-4xl tracking-wider font-extralight  ">
                    <Link
                      href="/listings"
                      className="w-full flex justify-between"
                    >
                      Properties <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                  </li>
                </ul>
                <div className="w-full flex justify-center items-center">
                  <button className="font-agrandir w-3/4 h-1/3 bg-white text-black border border-white p-4 text-lg rounded-xl">
                    Contact Us.
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Login Action */}
      {openLogin && (
        <div className=" fixed top-0 left-0 bg-black/75 w-full h-full">
          {/* Close Button */}
          <div className="flex justify-end w-full">
            <button
              onClick={() => setOpenLogin(false)}
              className="w-8 h-8 flex flex-col relative justify-center items-center rounded-full  space-x-reverse  z-10"
            >
              <span
                className={`block w-3/4 my-0.5 border absolute border-white rotate-45 transition-transform `}
              ></span>
              <span
                className={`block w-3/4 my-0.5 border absolute border-white -rotate-45 transition-transform `}
              ></span>
            </button>
          </div>
          {/* Sign In/ Log In form */}
          <div className="w-full h-full flex justify-center items-center">
            <div className="bg-white w-1/2 h-3/4 rounded-xl shadow-lg flex flex-col items-center">
              <div className="w-3/4 h-1/5 flex  items-center">
                <h2 className="text-4xl font-bold p-4 tracking-wide font-agrandir">
                  Sign in
                </h2>
              </div>
              {/* Form */}
              <form className="w-3/4 h-[85%] flex flex-col font-agrandir items-center ">
                {/* Email */}
                <div className="flex flex-col w-4/5">
                  <label className="py-2">Email</label>
                  <input
                    className="p-2 rounded-lg text-black bg-slate-400/10"
                    type="text"
                    id="Email"
                    name="Email"
                    placeholder="Email"
                  />
                </div>
                {/* Password */}
                <div className="flex flex-col w-4/5">
                  <label className="py-2">Password</label>
                  <input
                    className="p-2 rounded-lg text-black bg-slate-400/10"
                    type="text"
                    id="Password"
                    name="Password"
                    placeholder="Password"
                  />
                </div>
                {/* Log In Button */}
                <div className="flex flex-col justify-evenly w-4/5 h-1/2 my-4">
                  <button className="p-2 bg-gradient-to-r shadow-md from-pine via-mint/50 to-mint text-base text-black rounded-full tracking-wide">
                    Login
                  </button>
                  <button className="p-2 border border-black to-mint text-base text-black rounded-full tracking-wide">
                    Register
                  </button>
                  <button className="tracking-wide p-2 w-fit flex justify-center items-center">
                    Forgot Password?
                  </button>
                </div>
              </form>
              {/* Other sign in options */}
              <div className="w-3/4 h-2/5 flex flex-col items-center ">
                {/* or */}
                <div className="flex items-center w-3/4 h-fit ">
                  <hr className="flex-grow border-t-2 border-gray-300"></hr>
                  <span className="mx-4 uppercase text-sm text-gray-300">
                    or
                  </span>
                  <hr className="flex-grow border-t-2 border-gray-300"></hr>
                </div>
                {/* Sign In Options Google and Facebook */}
                <div className="h-3/5 w-3/4 ">
                  <button className="w-full my-2 p-4 flex items-center justify-center bg-black text-white text-sm rounded-2xl">
                    <Image
                      src={GoogleIcon}
                      alt="google icon"
                      className="w-5 mr-4"
                    />
                    Sign in with Google
                  </button>
                  <button className="w-full my-2 p-4 flex items-center justify-center bg-black text-white text-sm rounded-2xl">
                    <Image
                      src={FacebookIcon}
                      alt="facebook icon"
                      className="w-5 mr-4"
                    />
                    Sign in with Facebook
                  </button>
                  <div>
                    <h2></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
