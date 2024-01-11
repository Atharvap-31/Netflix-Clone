import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80">
        <h1 className="font-bold text-3xl my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 my-4 w-full bg-gray-700 rounded-md"
            type="text"
            placeholder="Enter Name"
          />
        )}

        <input
          className="p-4 my-4 w-full bg-gray-700  rounded-md"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-4 my-4 w-full bg-gray-700  rounded-md"
          type="password"
          placeholder="Password"
        />

        <button className="bg-red-700 p-4 my-6 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="p-4 cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a User! Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
