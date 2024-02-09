import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="col-span-10 mt-3 ml-10">
      <input
       className="h-10 ml-10 w-1/2 border-2 border-gray-500 rounded-l-full bg-gray-200 focus:none"
        type="text"
      />
      <button className="h-10 mr-10 absolute  px-2 p-2 bg-gray-300 rounded-r-full border-2 border-gray-500 box-border">
        <CiSearch  className="w-8 h-6 " />
      </button>
    </div>
  );
};

export default SearchBar;
