import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import generateRandomName from "./generateRadomName";

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
          message: "lorem 100 nmmw",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="bg-slate-100 mx-5 w-full border border-black sm:h-[397px] xl:h-[480px] rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c) => (
          <ChatMessage name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 mx-5 border border-black rounded-lg"
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
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          type="text"
          className="border border-black px-2"
        />
        <button
          type="submit"
          className="mx-2 p-1 px-2 bg-slate-300 border rounded-lg"
        >
          {" "}
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
