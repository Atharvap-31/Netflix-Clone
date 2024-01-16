import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 md:w-44 pr-5  scrollbar-hide hover:scale-90 cursor-pointer transition-all">
      <img src={IMG_CDN_URL + posterPath} alt="post-img" />
    </div>
  );
};

export default MovieCard;
