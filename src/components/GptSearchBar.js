import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import openai from "../utils/openAl";

const GptSearchBar = () => {
  const languageSelector = useSelector((state) => state.config.language);

  const searchText = useRef(null);

  const handleSearch = async () => {
    // console.log(searchText.current.value);

    const queryContent =
      "Act as a movie recommendation system and suggests some movies for the query : " +
      searchText.current.value +
      ". only give me names of  5 movies, comma seprated like examples results given ahead. Example results: Don, Golmaal, Sholay, Hera Pheri, Kantara";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: queryContent }],
      model: "gpt-3.5-turbo",
    });

    // console.log(gptResults);
  };

  return (
    <div className="pt-[11%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 text-lg "
          placeholder={lang[languageSelector].gptSearchPlaceholder}
        />
        <button
          onClick={handleSearch}
          className="col-span-3 m-5 rounded-lg py-2 px-4 bg-red-500 text-white"
        >
          {lang[languageSelector].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
