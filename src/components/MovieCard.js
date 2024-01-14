import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-44 pr-4 scrollbar-hide">
      <img src={IMG_CDN_URL + posterPath} alt="post-img" />
    </div>
  );
};

export default MovieCard;
