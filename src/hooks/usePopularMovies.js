import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const { useEffect } = require("react");
const { API_OPTIONS } = require("../utils/constant");

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json.results);

    dispatch(addPopularMovies(json.results));
  };
};

export default usePopularMovies;
