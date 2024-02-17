import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { FaRegShareFromSquare } from "react-icons/fa6";

const VideoDetails = ({ data }) => {
  // const {snippet, statistics} = data;

  // const {channelTitle, title} = snippet;

  // const {likeCount, } = statistics
  console.log(data);
  if (!data) return null;

  return (
    <div className="">
      <div>
        <h1 className="text-lg p-2 m-1 mt-2  font-medium ">
          {data?.snippet?.title}
        </h1>
      </div>
      <div className="flex mt-5 justify-between pr-5 sm:mr-22 xl:mr-1">
        <div className="mt-2  flex align-middle">
          <div className="ml-3  outline-indigo-200 outline-double flex-shrink-0 w-10 h-10 bg-slate-200 rounded-full font-semibold text-xl text-center ">
            <div className="mt-1">{data?.snippet?.channelTitle[0]}</div>
          </div>
          <div className="ml-3 mt-1 ">
            <h1 className="font-semibold font-mono text-xl xl:font-bold xl:text-2xl ">
              {data?.snippet?.channelTitle}
            </h1>
          </div>
        </div>
        <div className="flex ">
          <div className="h-11 bg-indigo-100 flex rounded-full text-nowrap w-32">
            <div className="flex px-2 pt-1">
              <div className="mt-1">
                <AiOutlineLike className="text-2xl  mx-1" />
              </div>
              <div className="font-bold border-r-2 my-1 border-black pr-2">
                {Math.floor(data?.statistics?.likeCount / 1000)}K
              </div>
            </div>

            <div className="mt-2 pt-1">
              <AiTwotoneDislike className="text-2xl " />
            </div>
          </div>
          <div className="ml-2">
            <div className="h-11 bg-indigo-100 flex rounded-full text-nowrap w-16">
              <FaRegShareFromSquare className="text-xl  ml-6  mt-3 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
