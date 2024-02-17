import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { YT_SEARCH_SUGGESIONS_API } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import { YT_API_BY_KEYWORDS } from "./constants";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggesitions, setSuggesitions] = useState([]);
  const [visible, setVisible] = useState("");

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);



  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggesitions(searchCache[searchQuery]);
      } else {
        getSuggesitions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggesitions = async () => {
    const data = await fetch(YT_SEARCH_SUGGESIONS_API + searchQuery);
    const json = await data.json();
    setSuggesitions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <>
      <div className="col-span-10 mt-3 ml-10">
        <input
          className=" px-5 h-10 ml-10 w-1/2 font-medium border-2 border-gray-500 rounded-l-full bg-gray-200 focus:none"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setVisible(true)}
          onBlur={() => setVisible(false)}
        />
        <button className="h-10 mr-10 absolute  px-2 p-2 bg-gray-300 rounded-r-full border-2 border-l-0 border-gray-500 box-border">
          <CiSearch className="w-8 h-6 " />
        </button>
        {visible && (
          <div className="fixed  bg-slate-100 w-1/4 sm:w-[196px] xl:w-[516px]  border  border-green-200 rounded-md mx-12">
            <ul className="py-2 px-3 ">
              {suggesitions.map((s) => (
              <li
                  key={s}
                  className="shadow-sm hover:bg-gray-300 text-nowrap overflow-clip"
                 
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
