"use client";
import React from "react";
import "./ThirdPage.css";
const ThirdPage = () => {
  const imgColumnOne = [
    {
      number: 1,
      imgSrc:
        "https://works.studio/assets/imager/images/nike-studio-45/1098/Nike-Studio-45-Gym-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["NIKE", "STUDIO 45"],
    },
    {
      number: 2,
      imgSrc:
        "https://works.studio/assets/imager/images/versace-trigerca-identity/9928/Versace-Trigreca-Identity-Photography-Black-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["VERSACE TRIGRECA", "IDENTITY"],
    },
    {
      number: 3,
      imgSrc:
        "https://works.studio/assets/imager/images/jeen-yuhs/35858/v1.5-home-image2_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["`JEEN-YUHS`", "FILM IDENTITY"],
    },

    {
      number: 4,
      imgSrc:
        "https://works.studio/assets/imager/images/dreamhaus/6658/DreamHaus-Identity-Wordmark-Lines_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["DREAMHAUS", "IDENTITY"],
    },
    {
      number: 5,
      imgSrc:
        "https://works.studio/assets/imager/images/heron-preston-website/9194/Heron-Preston-Website-Thumbnail_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["HERON PRESTON", "WEBSITE"],
    },
    {
      number: 6,
      imgSrc:
        "https://works.studio/assets/imager/images/public/17314/Public-Campaign-Photography-Portrait-Millana-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["PUBLIC.COM", "CAMPAIGN"],
    },
    {
      number: 7,
      imgSrc:
        "https://works.studio/assets/imager/images/nike-air-max-day-21-nyc-identity/10909/Nike-Air-Max-21-Film-Title-Card-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["NIKE AIR MAX 21", "FILM IDENETITY"],
    },
    {
      number: 8,
      imgSrc:
        "https://works.studio/assets/imager/images/guns-n-roses-pop-up/2544/Guns-N-Roses-Pop-Up-Police-Car-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["GUNS N'ROSES", "POP UP"],
    },
    {
      number: 9,
      imgSrc:
        "https://works.studio/assets/imager/images/kith-sport-ss18/9940/JACKIELEEPHOTO_090717_INSTITUTE-KITHSPORT-203255_201124_023510_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["KITH", "SPORT SS18"],
    },
  ];
  const imgColumnTwo = [
    {
      number: 1,
      imgSrc:
        "https://works.studio/assets/imager/images/converse-nextstudio/35375/Cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["CONVERSE", "NEXTSTUDIO 45"],
    },

    {
      number: 2,
      imgSrc:
        "https://works.studio/assets/imager/images/converse-basketball-ho19/1767/Converse-Basketball-HO19-Photography-Yellow-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["CONVERSE", "BASKETBALL ", "HO19"],
    },
    {
      number: 3,
      imgSrc:
        "https://works.studio/assets/imager/images/the-xi/972/XI-Identity-Architecture-Photography-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["THE XI", "BRAND DESIGN"],
    },
    {
      number: 4,
      imgSrc:
        "https://works.studio/assets/imager/images/john-elliott-nepal/26169/21_john-elliott-nepal_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["JOHN ELLIOT", "SCENES FROM", "NEPAL"],
    },
    {
      number: 5,
      imgSrc:
        "https://works.studio/assets/imager/images/CDL-2021-champs/10987/Call-of-Duty-League-Championship-2021-Air-Force-1-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["CDL", "CHAMPIONSHIP", "KIT 2021"],
    },
    {
      number: 6,
      imgSrc:
        "https://works.studio/assets/imager/images/fear-of-god-house-of-god/1564/Fear-of-God-House-of-God-Creative-Direction-Altar-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["FEAR OF GOD", "POP UP"],
    },

    {
      number: 7,
      imgSrc:
        "https://works.studio/assets/imager/images/converse-basketball-explorations/10270/Converse-Basketball-Explorations-Typography-Cover_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["CONVERSE", "BASKETBALL", "EXPLORATIONS"],
    },
    {
      number: 8,
      imgSrc:
        "https://works.studio/assets/imager/images/call-of-duty-league-championship-kit/10679/Call-of-Duty-League-Championship-2020-Ring-Thumbnail_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["CDL", "CHAMPIONSHIP", "KIT 2020"],
    },
    {
      number: 9,
      imgSrc:
        "https://works.studio/assets/imager/images/john-elliott-shows/10017/John-Elliot-Shows-Experiential-Photography-00_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["JOHN ELLIOTT", "SHOWS"],
    },
  ];
  const imgColumnThree = [
    {
      number: 1,
      imgSrc:
        "https://works.studio/assets/imager/images/Fear-of-God-Nike/9769/Nike-x-Fear-of-God-16_rectangle_1600_201124_014130_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["NIKE X FEAR OF", "GOD IDENTITY"],
    },
    {
      number: 2,
      imgSrc:
        "https://works.studio/assets/imager/images/us-soccer/21753/NewThumb_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["U.S. SOCCER", "CAMPAIGN", "IDENTITY"],
    },
    {
      number: 3,
      imgSrc:
        "https://works.studio/assets/imager/images/nike-nfl-2022/35879/Frame-17_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["NIKE NFL 2022", "CAMPAIGN"],
    },
    {
      number: 4,
      imgSrc:
        "https://works.studio/assets/imager/images/converse/824/Converse-Basketball-Photography-02_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["CONVERSE", "BASKETBALL", "IDENTITY"],
    },
    {
      number: 5,
      imgSrc:
        "https://works.studio/assets/imager/images/led-studio/26053/thumbnail_230526_162436_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["L.E.D. STUDIO", "WEBSITE"],
    },
    {
      number: 6,
      imgSrc:
        "https://works.studio/assets/imager/images/reebok/10721/Reebok-Split-From-Packaging-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["REEEBOK SPLIT", "FROM ZINE"],
    },
    {
      number: 7,
      imgSrc:
        "https://works.studio/assets/imager/images/nars-x-susanne-bartsch/9181/Nars-Susanne-Bartsch-Zine-Collage_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["NARS X", "SUSANNE", "BARTSCH", "ZINE"],
    },
    {
      number: 8,
      imgSrc:
        "https://works.studio/assets/imager/images/peloton/10563/Peloton-Tread-Film-Still-Frame_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["PELOTON", "TREAD FILM"],
    },
    {
      number: 9,
      imgSrc:
        "https://works.studio/assets/imager/images/reshape-identity/2769/Reshape-Identity-Logo-Blue_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      tagline: ["RESHAPE", "IDENTITY"],
    },
  ];
  return (
    <>
      <section id="thirdPage">
        <div id="thirdLeftColumn" data-scroll data-scroll-speed="0.5">
          {imgColumnOne.map((items, index) => (
            <div key={index}>
              <img src={`${items.imgSrc}`} />
              <div className="thirdTaglineContainer">
                {items.tagline.map((tagline, taglineIndex) => (
                  <div key={taglineIndex}>
                    <div>{tagline}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div id="thirdCenterColumn" data-scroll data-scroll-speed="0.3">
          {imgColumnTwo.map((items, index) => (
            <div key={index}>
              <img src={`${items.imgSrc}`} />
              <div className="thirdTaglineContainer">
                {items.tagline.map((tagline, taglineIndex) => (
                  <div key={taglineIndex}>
                    <div>{tagline}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div id="thirdRightColumn" data-scroll data-scroll-speed="0.5">
          {imgColumnThree.map((items, index) => (
            <div key={index}>
              <img src={`${items.imgSrc}`} />
              <div className="thirdTaglineContainer">
                {items.tagline.map((tagline, taglineIndex) => (
                  <div key={taglineIndex}>
                    <div>{tagline}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ThirdPage;
