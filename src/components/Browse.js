import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import ListContainer from "./ListContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/* 
       Main Container
       List Container
      */}
      <MainContainer />
      <ListContainer />
    </div>
  );
};

export default Browse;
