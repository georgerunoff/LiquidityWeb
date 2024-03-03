import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Slideshow } from "./components/slideshow";
import { OnLoad } from "./components/onload";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setLandingPageData(JsonData);
    
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
    };

    setIsMobile(checkIfMobile());
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} isMobile={isMobile} />
      <About data={landingPageData.About} />
      <Slideshow isMobile={isMobile} ></Slideshow>
      <Services data={landingPageData.Services} />
      {isMobile ? <></> :  <Gallery data={landingPageData.Gallery} />}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
