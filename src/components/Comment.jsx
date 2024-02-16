
import { RxAvatar } from "react-icons/rx";



const Comment = ({ data }) => {
    const { name, text } = data;
  
    return (
      <div>
      
        <div className="flex items-start p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-200 rounded-full">
                    <RxAvatar className="h-6 w-8 mt-1  col-span-1 cursor-pointer" />
                    </div>
                    <div className="ml-3">
                        <div className="text-gray-800 font-semibold">{name}</div>
                        <div className="text-gray-700">{text}</div>
                    </div>
                </div>

      </div>
    );
  };

  export default Comment;