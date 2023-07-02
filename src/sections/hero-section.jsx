"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import React from "react";

// eslint-disable-next-line react/display-name
const HeroLogo = React.memo(({ screen }) => {
  return (
    <Image
      className="nav-logo"
      src="/Logo.png"
      alt="logo"
      width={screen ? 148 : 89}
      height={screen ? 40 : 24}
    />
  );
});

export default function HeroSection() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screen, setScreen] = useState(true);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    screenWidth < 440 ? setScreen(false) : setScreen(true);
  }, [screenWidth]);

  return (
    <section className="nav-hero-section">
      <div id="navbar">
        <nav className="navigation">
          <HeroLogo screen={screen} />
          <div className="buttons">
            <div className="nav-dropdown">
              &nbsp;
              <Image src="/globe.png" alt="globe" width={16} height={16} />
              &nbsp;
              <select id="0d063585dce50" name="LanguageSelect">
                {!screen && (
                  <option disabled selected value defaultValue={""}></option>
                )}
                <option lang="en" label="English" value="en-IN">
                  English
                </option>
                <option lang="hi" label="हिन्दी" value="hi-IN">
                  हिन्दी
                </option>
              </select>
            </div>
            <button className="active-btn"> Sign In </button>
          </div>
        </nav>
      </div>

      <div id="hero-section">
        <div className="layer"></div>
        <div className="hero-container">
          <div className="home-section">
            <h1 className="home-heading heading">
              Unlimited movies, TV shows and more.
            </h1>
            <h2 className="home-heading sub-heading">
              Watch anywhere. Cancel anytime.
            </h2>
            <div className="movie-search">
              <h3 className="home-heading minor-heading">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="search">
                <input
                  type="email"
                  name="email"
                  id="subscribe"
                  placeholder="Email address"
                />
                <br />
                <button className="big-search-button">
                  Get Started
                  <Image
                    src="/side-arrow.png"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
