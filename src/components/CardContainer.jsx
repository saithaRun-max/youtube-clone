import React, { useEffect } from "react";
import Card from "./Card";
import { YT_API } from "./constants";

const CardContainer = () => {
  const getData = async () => {
    const data = await fetch(YT_API);
    const json = await data.json();
    console.log(json)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-wrap mt-8">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardContainer;
