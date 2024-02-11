import { FiMenu } from "react-icons/fi";
import SearchBar from "./SearchBar";
import { RxAvatar } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/colapseSlice";
import { logo } from "./constants";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();

  const togglegeHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <div className="grid grid-flow-col p-2 m-2 h-18 shadow-lg box-border align-middle ">
        <div className="flex">
          <FiMenu
            className="h-8 w-10 m-2 mt-3 col-span-1 cursor-pointer"
            onClick={() => togglegeHandler()}
          />

          <img className=" h-14 mx-2 " src={logo} alt="logo" />
        </div>
        <SearchBar />

        <RxAvatar className="h-7 w-8 mt-4 col-span-1 cursor-pointer" />
      </div>
    </>
  );
};

export default Head;
