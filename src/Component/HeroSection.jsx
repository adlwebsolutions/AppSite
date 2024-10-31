import React from "react";
import video1 from "../assets/banner-code.jpg";
import video2 from "../assets/banner-code2.jpg";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirutalR Build Tools{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
          for Developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life wiht our
        intuitive development tools. Get Started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex flex-col lg:flex-row justify-center my-10 space-y-4 lg:space-y-0 lg:space-x-6">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md text-center"
        >
          Get a Free Consultation
        </a>
        <a href="#" className="py-3 px-4 rounded-md border text-center">
          Documentation
        </a>
      </div>

      <div className="flex  mt-10 justify-center">
        <img
          src={video1}
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        ></img>
        <img
          src={video2}
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        ></img>
      </div>
    </div>
  );
};

export default HeroSection;
