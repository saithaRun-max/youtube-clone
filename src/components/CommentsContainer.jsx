import React from "react";
import { commentData } from "../utils/helper";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  return (
    <>
      <div className="border border-gray-200 rounded-lg shadow-lg sm:mt-20 p-3 w-[666px] ">
        <h1 className="font-bold text-xl">Comments </h1>

        <CommentsList comment={commentData} />
      </div>
    </>
  );
};

export default CommentsContainer;
