import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "../utils/moviesSlice";

const useMovieDetails = (resId) => {
  const dispatch = useDispatch();
  const movieDetails = useSelector((store) => store.movieDetails);

  useEffect(() => {
    !movieDetails && getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + resId,
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addMovieDetails(json));
  };
};

export default useMovieDetails;
