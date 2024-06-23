"use client";
import React, { useEffect, useLayoutEffect } from "react";
import Loader from "./components/Loader/Loader";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";
import ThirdPage from "./components/ThirdPage/ThirdPage";
import FourthFooter from "./components/FourthPage/FourthFooter";
import LocomotiveScroll from "locomotive-scroll";
import "../node_modules/locomotive-scroll/bundled/locomotive-scroll.css";

const page = () => {
  useLayoutEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(".locoContainer"),
      smooth: true,
      lerp: 0.1,
      lenisOptions: {
        content: document.documentElement,
      },
    });
  }, []);

  return (
    <>
      <Loader />
      <FirstPage />;
      <SecondPage />
      <ThirdPage />
      <FourthFooter />
    </>
  );
};

export default page;
