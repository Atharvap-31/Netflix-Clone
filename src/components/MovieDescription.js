import React from "react";
import useMovieDetails from "../hooks/useMovieDetails";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constant";

const MovieDescription = () => {
  const movieDetails = useSelector((store) => store.movies.movieDetails);

  const { resId } = useParams();
  useMovieDetails(resId);

  if (!movieDetails) return;
  return (
    <div className="text-white grid grid-cols-12">
      <div className="mx-0 md:mx-9 p-0 md:p-10 pt-40 md:pt-0 col-span-4 ">
        <img
          className="w-auto ml-4 md:ml-0 md:w-96 mt-10 rounded-lg hover:scale-95 transition-all cursor-pointer"
          src={IMG_CDN_URL + movieDetails.poster_path}
          alt="icon"
        />
      </div>
      <div className="mx-10 my-4 col-span-8 py-20">
        <h1 className="text-2xl  md:text-5xl font-bold mb-5">
          Title : {movieDetails.title}
        </h1>
        <h2 className="text-xl md:text-4xl font-medium mb-5">
          {movieDetails.tagline ? "Tagline : " + movieDetails.tagline : ""}
        </h2>
        <h2 className="text-xl md:text-2xl  mb-8">
          Overview : {movieDetails.overview}
        </h2>
        <h3 className="flex text-lg md:text-2xl font-semibold mb-6">
          Genres :
          {movieDetails.genres.map((gener) => (
            <p className="mx-2" key={gener.id}>
              {gener.name}
            </p>
          ))}
        </h3>
        <h3 className="text-xl md:text-2xl mt-3 ">
          Realease-Date : {movieDetails.release_date}
        </h3>
      </div>
    </div>
  );
};

export default MovieDescription;
