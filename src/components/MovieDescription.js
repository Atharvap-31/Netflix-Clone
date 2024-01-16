import React from "react";
import useMovieDetails from "../hooks/useMovieDetails";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constant";

const MovieDescription = () => {
  const movieDetails = useSelector((store) => store.movies.movieDetails);
  console.log(movieDetails);

  const { resId } = useParams();
  useMovieDetails(resId);

  if (!movieDetails) return;
  return (
    <div className="text-white grid grid-cols-12  bg-gray-800 ">
      <div className="mx-9 p-12 col-span-4 ">
        <img
          className="w-72 rounded-lg"
          src={IMG_CDN_URL + movieDetails.poster_path}
          alt="icon"
        />
      </div>
      <div className="mx-10 my-4 col-span-8 py-20">
        <h1 className="text-3xl font-semibold mb-3">
          Title : {movieDetails.title}
        </h1>
        <h2 className="text-2xl font-semibold mb-3">
          Tagline : {movieDetails.tagline}
        </h2>
        <h2 className="text-xl  mb-3">Overview: {movieDetails.overview}</h2>
        <h3 className="flex text-2xl font-semibold">
          Genres :
          {movieDetails.genres.map((gener) => (
            <p className="mx-2" key={gener.id}>
              {gener.name}
            </p>
          ))}
        </h3>
        <h3 className="text-lg mt-3 ">
          Realease-Date : {movieDetails.release_date}
        </h3>
      </div>
    </div>
  );
};

export default MovieDescription;
