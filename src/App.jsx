import React from "react";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import FeatureSection from "./Component/FeatureSection";
import WorkFlow from "./Component/WorkFlow";
import Pricing from "./Component/Pricing";
import Testimonial from "./Component/Testimonial";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <Testimonial />
      </div>
        <Footer />
    </div>
  );
};

export default App;
