import React from "react";

//INERNAL IMPORT
import Style from "../styles/index.module.css";
import { 
  HeroSection, 
  Service, 
  BigNFTSlider,
  Subscribe,
} from "../components/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Subscribe />
    </div>
  )
};

export default Home;
