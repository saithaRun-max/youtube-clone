const Card = ({ info }) => {
  console.log(info)
  // const { snippet, statistics} = info;
  // console.log(info.snippet.channelId);

  //  const [ thumbnails, channelTitle, title ] = snippet;
  //  console.log(info)
  // const { viewCount } = statistics;

  // if (!info) return null;
  return (
    <div className="mt-5">
      <div className="pt-2 w-72 rounded-lg shadow-lg  m-5 ">
        <img
          className="  rounded-lg"
          src={info.snippet.thumbnails.medium.url}
          alt="thumbnail"
        />
        <ul>
          <li className="font-medium px-1  pr-5 flex-nowrap">{info.snippet.title}</li>
          <li className="mt-2 px-1 ">{info.snippet.channelTitle}</li>
          <p  className=" px-1">{info.statistics.viewCount} views</p>
          
        </ul>

      
      </div>
    </div>
  );
};

export default Card;
