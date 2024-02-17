import WatchPage from "./WatchPage";

const Card = ({ info, message }) => {
  const { snippet, statistics } = info;
  const { thumbnails, channelTitle, title } = info.snippet;
  const { viewCount } = info.statistics;

  if (!info) return null;

  return (
    <div className="mt-5">
      <div className="pt-2 pb-2   max-w-full w-72 rounded-lg shadow-lg  m-5 ">
        <img
          className=" w-80 h-44 rounded-lg"
          src={thumbnails?.medium?.url}
          alt="thumbnail"
        />
        <div className=" pb-2">
          <ul className="h-28 bg-transparent text-sm">
            <li className="font-medium px-2   flex-nowrap">
              {title?.slice(0, 80).concat("...")}
            </li>
            <li className="mt-2 px-3 ">{info.snippet.channelTitle}</li>
            <li className=" px-3">{viewCount} views</li>
            <h1 className="font-bold pb-2">{message}</h1>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const AdCard = ({ info }) => {
  return (
    <div className=" inset-36 bg-fixed bg-center  ">
      <Card info={info} message={"Ad'"} />
      <div className=" mt-7 w-60 h-80 opacity-0 hover:opacity-100 duration-300  absolute top-36 inset-36  flex   justify-center items-center text-7xl  text-center  text-gray-400 mix-blend-difference font-semibold">
        Ad
      </div>
    </div>
  );
};

export default Card;
