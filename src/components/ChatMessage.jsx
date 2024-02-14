import { RxAvatar } from "react-icons/rx";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="mx-1 my-2 flex">
      <RxAvatar className="h-6 w-8 " />
      <span className="font-bold px-2">{name}</span>
      <span>alldald{message}</span>
    </div>
  );
};

export default ChatMessage;
