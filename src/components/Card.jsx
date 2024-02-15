const Card = ({ info, message }) => {

  // const { snippet, statistics} = info;
  // console.log(info.snippet.channelId);

  //  const [ thumbnails, channelTitle, title ] = snippet;
  //  console.log(info)
  // const { viewCount } = statistics;

  // if (!info) return null;

  return (
    <div className="mt-5">
      <div className="pt-2 pb-2   max-w-full w-72 rounded-lg shadow-lg  m-5 ">
     
        <img
          className=" w-80 h-44 rounded-lg"
          src={info.snippet.thumbnails.medium.url}
          alt="thumbnail"
        />
        <div className=" pb-2">
          <ul className="h-28 bg-transparent text-sm">
            <li className="font-medium px-2   flex-nowrap">
              {info.snippet.title.slice(0, 80).concat("...")}
            </li>
            <li className="mt-2 px-3 ">{info.snippet.channelTitle}</li>
            <li className=" px-3">{info.statistics.viewCount} views</li>
            <h1 className="font-bold pb-2">{message}</h1>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const AdCard = ({ info }) => {
  return (
    <div className="p-1 m-1  inset-36 bg-fixed bg-center ">
      <Card info={info} message={"Ad' Card"}  />
      <div className="w-60 h-80 opacity-0 hover:opacity-100 duration-300  absolute top-36 inset-36  flex   justify-center items-center text-7xl  text-center  text-white font-semibold">
        Ad 
      </div>
    </div>
  );
};

export default Card;
