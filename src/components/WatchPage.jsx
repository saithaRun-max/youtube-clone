import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/colapseSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import ChatMessage from "./ChatMessage";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <>
      <div className="p-5 my-2 mx-4  flex">
        <div className="w-full h-full rounded-lg">
          {" "}
          <div className="flex  sm:flex-col xl:flex-row">
            <iframe
              className="sm:w-[696px] sm:h-[397px] xl:w-[853px] xl:h-[480px]  rounded-lg"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullS
              creen
            ></iframe>

            <div className=" ">
              <LiveChat />
            </div>
          </div>
          <div className="mt-5 p-2">
            <CommentsContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchPage;

// className="mx-10 m-4 max-w-4xl w-3/4 min-h-full max-h-3.5 rounded-lg"
