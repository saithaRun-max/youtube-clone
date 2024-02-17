import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import generateRandomName from "./generateRadomName";
import generateRandomText from "./generateRandomText";

const LiveChat = () => {
  const [inputMessage, setInputMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //api polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(25),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="xl:w-[500px] sm:ml-2 sm:w-[677px] sm:my-10  border  sm:h-[397px] xl:h-[510px]  xl:mx-20 mx-5 rounded-lg xl:-mt-1">
        <div className="flex items-center justify-between p-2 xl:p-4  border-b border-gray-200 shadow-lg">
          <h1 className="text-base font-semibold xl:text-lg">Live Chat</h1>
        </div>
        <div className="h-96 flex flex-col-reverse  overflow-y-auto">
          {chatMessages.map((c, i) => (
            <ChatMessage name={c.name} message={c.message} key={i} />
          ))}
        </div>
        <form
          className="p-2  border-t border-gray-200 flex"
          onSubmit={(e) => {
            e.preventDefault(),
              setInputMessage(""),
              dispatch(
                addMessage({
                  name: "User",
                  message: inputMessage,
                })
              );
          }}
        >
          <input
            type="text"
            placeholder="Type your message here..."
            className="3/4 px-4 py-2 text-sm bg-gray-200 border border-gray-300 rounded-lg focus:outline-none w-full"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button className="ml-2 px-4 py-2 bg-gray-200 rounded-lg focus:outline-none">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
