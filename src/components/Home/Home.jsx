import React from "react";
import LawServices from "../LawServices/LawServices";
import BestLawyers from "../BestLawyers/BestLawyers";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="bg-white text-black">
      <div className="w-full max-w-[1280px] mx-auto">
        <Banner></Banner>
        <BestLawyers></BestLawyers>
        <LawServices></LawServices>
      </div>
    </div>
  );
};

export default Home;
