import { RxAvatar } from "react-icons/rx";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="">
    <div className="mx-1 my-2 px-2  flex sm:text-sm xl:text-base xl:mx-5">
      <RxAvatar className="h-6 w-6 " />
      <span className="font-bold px-2 ">{name}</span>
      <span className="">{message}</span>
    </div>
    </div>
  );
};

export default ChatMessage;
