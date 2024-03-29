import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  if (movies === null) return;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className=" pt-[35%] bg-black md:pt-0">
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
