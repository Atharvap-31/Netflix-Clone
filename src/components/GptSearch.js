import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-30">
        <img
          className="w-screen h-screen object-cover"
          alt="logo"
          src={BG_IMG}
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
