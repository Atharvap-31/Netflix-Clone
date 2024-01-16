import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGAUGES, USER_AVATAR } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { languageToggle } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((state) => state.gpt.gptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleToggleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleToggleLanguage = (e) => {
    dispatch(languageToggle(e.target.value));
  };

  return (
    <div className="absolute w-screen  px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <img className="w-44" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-2 items-center">
          {showGptSearch && (
            <select
              onChange={handleToggleLanguage}
              className="bg-red-500 font-semibold text-white py-2 px-4 rounded-lg mr-4"
            >
              {SUPPORTED_LANGAUGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleToggleGptSearch}
            className="text-white font-medium p-2 rounded-lg bg-blue-500 my-2 mx-6"
          >
            {showGptSearch ? "HomePage" : " GPT Search"}
          </button>

          <img
            className="w-12 h-12 rounded-lg mx-4"
            src={USER_AVATAR}
            alt="photoicon"
          />
          <button
            onClick={handleSignOut}
            className="text-white font-semibold hover:text-red-500"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
