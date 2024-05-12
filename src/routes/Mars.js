import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import MarsSection from "../components/Mars";

const Mars = () => {
  return (
    <div>
      <Navbar />
      <HeroImage
        heading="MARS ROVER EXPLORER."
        text="experience
          Mars through the lens of NASA's cutting-edge rover missions."
      />
      <MarsSection />
      <Footer />
    </div>
  );
};

export default Mars;
