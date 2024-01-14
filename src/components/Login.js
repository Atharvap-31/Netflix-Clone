import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/checkValiation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, USER_AVATAR } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleFormValidation = () => {
    // Validate the form
    const message = checkValidation(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);

    if (message) return; // means there is an error

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          // User Profile Update
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, displayName, email } = auth.currentUser;
              dispatch(addUser({ uid, displayName, email }));
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-screen h-screen object-cover"
          alt="logo"
          src={BG_IMG}
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80"
      >
        <h1 className="font-bold text-3xl my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-4 my-4 w-full bg-gray-700 rounded-md"
            type="text"
            placeholder="Enter Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-700  rounded-md"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-4 my-4 w-full bg-gray-700  rounded-md"
          type="password"
          placeholder="Password"
        />
        <p className="p-2 text-red-500 font-medium">{errorMessage}</p>
        <button
          onClick={handleFormValidation}
          className="bg-red-700 p-4 my-6 w-full rounded-md"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="p-4 cursor-pointer">
          {isSignInForm
            ? "New to Netflix?  Sign Up Now"
            : "Already a User! Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
