"use client";
import React from "react";
import "./SecondPage.css";
import gsap from "gsap";
const SecondPage = () => {
  const secondContent = [
    {
      index: 1,
      imgSrc:
        "https://works.studio/assets/imager/images/mineral-health/35736/Mineral_FW_200645_EDITED_0be67f6425c95e0e40cce41a8b15564b.jpg",
      secondHeading: "MINERAL",
      taglines: [
        "BRANDING & IDENTITIY",
        "PACKAGING DESIGN",
        "CREATIVE DIRECTION",
        "STRATEGY",
        "BRANDING & IDENTITIY",
        "PACKAGING DESIGN",
        "CREATIVE DIRECTION",
        "STRATEGY",
        "BRANDING & IDENTITIY",
        "PACKAGING DESIGN",
        "CREATIVE DIRECTION",
        "STRATEGY",
        "BRANDING & IDENTITIY",
        "PACKAGING DESIGN",
        "CREATIVE DIRECTION",
        "STRATEGY",
        "BRANDING & IDENTITIY",
        "PACKAGING DESIGN",
        "CREATIVE DIRECTION",
        "STRATEGY",
      ],
    },
    {
      index: 2,
      imgSrc:
        "https://works.studio/assets/imager/images/skky-partners/35819/21_1a58980f77ae6d8c6a1e26c40e92a05d.jpg",
      secondHeading: "SKKY PARTNERES",
      taglines: [
        "BRANDING & IDENTITY",
        "DIGITAL DESIGN",
        "DEVELOPMENT",
        "CREATIVE DIRECTION",
        "BRANDING & IDENTITY",
        "DIGITAL DESIGN",
        "DEVELOPMENT",
        "CREATIVE DIRECTION",
        "BRANDING & IDENTITY",
        "DIGITAL DESIGN",
        "DEVELOPMENT",
        "CREATIVE DIRECTION",
        "BRANDING & IDENTITY",
        "DIGITAL DESIGN",
        "DEVELOPMENT",
        "CREATIVE DIRECTION",
        "BRANDING & IDENTITY",
        "DIGITAL DESIGN",
        "DEVELOPMENT",
        "CREATIVE DIRECTION",
      ],
    },
    {
      index: 3,
      imgSrc:
        "https://works.studio/assets/imager/images/converse-global-fa23/36303/v1.5-HomeCover-B_1a58980f77ae6d8c6a1e26c40e92a05d.jpg",
      secondHeading: "CONVERSE",
      taglines: [
        "STRATEGY",
        "BRANDING & IDENTITY",
        "MOTION & ANIMATION",
        "DIGITAL DESIGN",
        "STRATEGY",
        "BRANDING & IDENTITY",
        "MOTION & ANIMATION",
        "DIGITAL DESIGN",
        "STRATEGY",
        "BRANDING & IDENTITY",
        "MOTION & ANIMATION",
        "DIGITAL DESIGN",
        "STRATEGY",
        "BRANDING & IDENTITY",
        "MOTION & ANIMATION",
        "DIGITAL DESIGN",
        "STRATEGY",
        "BRANDING & IDENTITY",
        "MOTION & ANIMATION",
        "DIGITAL DESIGN",
        "STRATEGY",
        "BRANDING & IDENTITY",
        "MOTION & ANIMATION",
        "DIGITAL DESIGN",
        "STRATEGY",
        "BRANDING & IDENTITY",
        "MOTION & ANIMATION",
        "DIGITAL DESIGN",
      ],
    },
    {
      index: 4,
      imgSrc:
        "https://works.studio/assets/imager/images/futurevvorld/17915/FUTUREVVORLD-Brand-Identity-Photography-Gallery_WORKS_1a58980f77ae6d8c6a1e26c40e92a05d.jpg",
      secondHeading: "FUTURE VVORLD",
      taglines: [
        "BRANDING & IDENTITY",
        "DIGITAL DESIGN",
        "DEVELOPMENT",
        "CREATIVE DIRECTION",
        "BRANDING & IDENTITY",
        "DIGITAL DESIGN",
        "DEVELOPMENT",
        "CREATIVE DIRECTION",
        "BRANDING & IDENTITY",
        "DIGITAL DESIGN",
        "DEVELOPMENT",
        "CREATIVE DIRECTION",
        "BRANDING & IDENTITY",
        "DIGITAL DESIGN",
        "DEVELOPMENT",
        "CREATIVE DIRECTION",
        "BRANDING & IDENTITY",
        "DIGITAL DESIGN",
        "DEVELOPMENT",
        "CREATIVE DIRECTION",
        "BRANDING & IDENTITY",
        "DIGITAL DESIGN",
        "DEVELOPMENT",
        "CREATIVE DIRECTION",
      ],
    },
    {
      index: 5,
      imgSrc:
        "https://works.studio/assets/imager/images/boldly/35777/v1.5-home-feature_1a58980f77ae6d8c6a1e26c40e92a05d.jpg",
      secondHeading: "BOLDLY",
      taglines: [
        "CRAETIVE DIRECTION",
        "BRANDING & IDENTITY",
        "DIGITAL DESIGN",
        "DEVELOPMENT",
        "PHOTOGRAPHY",
        "CRAETIVE DIRECTION",
        "BRANDING & IDENTITY",
        "DIGITAL DESIGN",
        "DEVELOPMENT",
        "PHOTOGRAPHY",
        "CRAETIVE DIRECTION",
        "BRANDING & IDENTITY",
        "DIGITAL DESIGN",
        "DEVELOPMENT",
        "PHOTOGRAPHY",
        "CRAETIVE DIRECTION",
        "BRANDING & IDENTITY",
        "DIGITAL DESIGN",
        "DEVELOPMENT",
        "PHOTOGRAPHY",
        "CRAETIVE DIRECTION",
        "BRANDING & IDENTITY",
        "DIGITAL DESIGN",
        "DEVELOPMENT",
        "PHOTOGRAPHY",
      ],
    },
  ];
  const mouseOver = (event) => {
    let timeline = gsap.timeline();
    timeline.to(
      `.secondTitles`,
      {
        backgroundImage: `url(${secondContent[event.target.className].imgSrc})`,
      },
      0
    );
    timeline.to(
      `.lol${event.target.className}`,
      {
        scaleY: 1,
      },
      0
    );
    timeline.to(
      event.target,
      {
        color: "black",
        delay: 0.2,
      },
      0
    );
  };
  const mouseLeave = (event) => {
    let timeline = gsap.timeline();
    timeline.to(`.lol${event.target.className}`, {
      scaleY: 0,
    });

    timeline.to(
      event.target,
      {
        color: "white",
      },
      0
    );
  };

  return (
    <>
      {/* <div className="locoContainer"> */}
      <section id="secondPage" data-scroll data-scroll-speed="2">
        <div id="secondHeadings">
          <div className="secondTitles">
            {secondContent.map((items, index) => (
              <div key={index}>
                <div
                  data-imgSrc={items.imgSrc}
                  className={`movers lol${index}`}
                >
                  {items.taglines.map((tagline, taglineIndex) => (
                    <span key={taglineIndex}>
                      <span>{tagline}</span>
                    </span>
                  ))}
                </div>
                <h2
                  className={`${index}`}
                  onMouseOver={(event) => {
                    mouseOver(event);
                  }}
                  onMouseLeave={(event) => {
                    mouseLeave(event);
                  }}
                >
                  {items.secondHeading}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* </div> */}
    </>
  );
};

export default SecondPage;
