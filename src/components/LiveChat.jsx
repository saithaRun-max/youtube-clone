import ChatMessage from "./ChatMessage";
import { namesFemale } from "../utils/helper";
import { namesMale } from "../utils/helper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      //api polling

      dispatch(
        addMessage({
          name: "akashay saini",
          message: "lorem 100 nmmw",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="p-2 mx-1  ml-6 border border-black w-3/4 sm:h-[360px] xl:h-[480px] rounded-lg flex flex-col-reverse flex-nowrap justify-between items-end overflow-hidden ">
        <div className=" w-full  ">
          <h1 className="text-center text-nowrap">Live Chat</h1>
          <hr className="border border-black min-w-full" />
          <div>
            {chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))}
          </div>
        </div>
      </div>
      <form className=" w-full  ">
        <hr className="border border-black min-w-full my-2" />
        <div className=" flex justify-center w-full">
          <input
            className=" rounded-lg focus:outline-none border border-black h-10"
            type="text"
          />
          <button className="px-5 mx-2 rounded-lg border border-black ">
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default LiveChat;
