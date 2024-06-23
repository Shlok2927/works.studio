import React from "react";
import "./FourthFooter.css";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
const FourthFooter = () => {
  const locomotivescroll = new LocomotiveScroll();
  const hoverEnterGsap = (elem) => {
    let timeline = gsap.timeline();
    timeline.to(elem.currentTarget.querySelector(".hoverDiv"), {
      transformOrigin: "center",
      width: 100 + "%",
      duration: 0.4,
    });
  };
  const hoverLeaveGsap = (elem) => {
    let timeline = gsap.timeline();
    timeline.to(elem.currentTarget.querySelector(".hoverDiv"), {
      transformOrigin: "center",
      width: 0 + "%",
      duration: 0.2,
    });
  };
  let mouseOver = (elem) => {
    hoverEnterGsap(elem);
  };
  let mouseLeave = (elem) => {
    hoverLeaveGsap(elem);
  };

  return (
    <>
      <section id="fourthFooterContainer">
        <div
          data-scroll
          data-scroll-container="-0.9"
          onClick={() => {
            locomotivescroll.scrollTo(0);
          }}
          id="fourthContainerTop"
        >
          <img src="https://works.studio/images/ui/icon-scroll-down-black.svg" />
          <span>BACK TO TOP</span>
        </div>
        <div id="fourthContainerBottom">
          <div
            id="fourthBottomLeft"
            onMouseOver={(elem) => {
              mouseOver(elem);
            }}
            onMouseLeave={(elem) => {
              mouseLeave(elem);
            }}
            className="hoverAnimation"
          >
            <div className="hoverDiv"></div>
            HELLO@WORKS.STUDIO
          </div>
          <div id="fourthBottomRight">
            <span
              onMouseOver={(elem) => {
                mouseOver(elem);
              }}
              onMouseLeave={(elem) => {
                mouseLeave(elem);
              }}
              className="hoverAnimation"
            >
              <div className="hoverDiv"></div>
              NEWSLETTER
            </span>
            <span
              onMouseOver={(elem) => {
                mouseOver(elem);
              }}
              onMouseLeave={(elem) => {
                mouseLeave(elem);
              }}
              className="hoverAnimation"
            >
              <div className="hoverDiv"></div>
              312 898 9664
            </span>
            <span
              onMouseOver={(elem) => {
                mouseOver(elem);
              }}
              onMouseLeave={(elem) => {
                mouseLeave(elem);
              }}
              className="hoverAnimation"
            >
              <div className="hoverDiv"></div>
              INSTAGRAM
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default FourthFooter;
