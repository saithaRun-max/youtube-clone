import React, { useEffect, useState } from "react";
import Card from "./Card";
import { YT_API } from "./constants";
import { Link } from "react-router-dom";

const CardContainer = () => {
  const [videos, setVideos] = useState([]);
  const getData = async () => {
    const data = await fetch(YT_API);
    const json = await data.json();
    setVideos(json.items);
    // console.log(json);
  };
  console.log(videos);
  useEffect(() => {
    getData();
  }, []);

  if (!videos) return null;

  return (
    <div className="flex flex-wrap mt-8">
      {videos.map((video, index) => (
        <Link to={"/watch?v=" + video.id}>
          <Card info={video} key={index} />
        </Link>
      ))}
    </div>
  );
};

export default CardContainer;
