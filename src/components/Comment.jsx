
import { RxAvatar } from "react-icons/rx";



const Comment = ({ data }) => {
    const { name, text } = data;
  
    return (
      <div>
        <div className="m-2 my-2 bg-gray-200 rounded-lg p-1">
          <div className="flex items-center ">
           
            <RxAvatar className="h-5 w-8 mt-4 col-span-1 cursor-pointer" />
            <p className="mx-2 mt-3 font-medium">{name}</p>
          </div>
          <p className="ml-12">{text}</p>
        </div>
      </div>
    );
  };

  export default Comment;