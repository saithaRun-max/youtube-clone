import React from "react";
import { commentData } from "../utils/helper";
import CommentsList from "./CommentsList";






const CommentsContainer = () => {
  return (
    <>
      <h1 className="font-bold text-xl">Comments :</h1>

      <CommentsList comment={commentData} />
    </>
  );
};

export default CommentsContainer;
