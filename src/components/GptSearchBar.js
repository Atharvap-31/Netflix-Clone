import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const languageSelector = useSelector((state) => state.config.language);

  return (
    <div className="pt-[11%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9 text-lg "
          placeholder={lang[languageSelector].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-5 rounded-lg py-2 px-4 bg-red-500 text-white">
          {lang[languageSelector].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
