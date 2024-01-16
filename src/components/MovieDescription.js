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
      <div className="mx-9 p-10 col-span-4 ">
        <img
          className="w-96 rounded-lg hover:scale-95 transition-all cursor-pointer"
          src={IMG_CDN_URL + movieDetails.poster_path}
          alt="icon"
        />
      </div>
      <div className="mx-10 my-4 col-span-8 py-20">
        <h1 className=" text-6xl font-bold mb-5">
          Title : {movieDetails.title}
        </h1>
        <h2 className="text-4xl font-medium mb-5">
          {movieDetails.tagline ? "Tagline : " + movieDetails.tagline : ""}
        </h2>
        <h2 className="text-2xl  mb-8">Overview : {movieDetails.overview}</h2>
        <h3 className="flex text-2xl font-semibold mb-6">
          Genres :
          {movieDetails.genres.map((gener) => (
            <p className="mx-2" key={gener.id}>
              {gener.names}
            </p>
          ))}
        </h3>
        <h3 className="text-2xl mt-3 ">
          Realease-Date : {movieDetails.release_date}
        </h3>
      </div>
    </div>
  );
};

export default MovieDescription;
