import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { YT_SEARCH_SUGGESIONS_API } from "./constants";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggesitions, setSuggesitions] = useState("");

const dispatch = useDispatch();


  useEffect(() => {
    const timer = setTimeout(() => getSuggesitions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggesitions = async () => {
    const data = await fetch(YT_SEARCH_SUGGESIONS_API);
    const json = await data.json();
    setSuggesitions(json[1])
   
  };

  return (
    <div className="col-span-10 mt-3 ml-10">
      <input
        className=" px-5 h-10 ml-10 w-1/2 font-medium border-2 border-gray-500 rounded-l-full bg-gray-200 focus:none"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="h-10 mr-10 absolute  px-2 p-2 bg-gray-300 rounded-r-full border-2 border-l-0 border-gray-500 box-border">
        <CiSearch className="w-8 h-6 " />
      </button>
    </div>
  );
};

export default SearchBar;
