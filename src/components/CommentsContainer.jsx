import React from "react";
import { RxAvatar } from "react-icons/rx";

const CommentsContainer = () => {
  return <div className="m-2 my-5">
    <h1 className="font-bold text-xl">Comments :</h1>
    <div className="flex items-center ">
    <RxAvatar className="h-6 w-8 mt-4 col-span-1 cursor-pointer" />
        <p className="mx-2 mt-3 font-medium">Name</p>
       
    </div>
    <p className="ml-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quam officia voluptatibus cum fuga ullam modi recusandae qui necessitatibus voluptatum reprehenderit, sed illo, a sit ex vitae aspernatur nulla dolore?</p>
  </div>;
};

export default CommentsContainer;
