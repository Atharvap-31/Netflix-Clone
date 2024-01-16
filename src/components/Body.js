import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetails from "./MovieDetails";

const Body = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/moviedetails/:resId",
      element: <MovieDetails />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default Body;
