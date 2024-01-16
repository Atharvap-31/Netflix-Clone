import React from "react";

import MovieDescription from "./MovieDescription";
import MovieDetailsTrailer from "./MovieDetailsTrailer";

const MovieDetails = () => {
  return (
    <div className="  bg-gray-800 ">
      <MovieDescription />
      <MovieDetailsTrailer />
    </div>
  );
};

export default MovieDetails;
