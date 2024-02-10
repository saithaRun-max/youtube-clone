import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-2 m-2 w-36 border-2">
      <div className=" text-lg font-medium">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <div className=" mt-3">
        <h1 className="font-bold">You </h1>
        <ul>
          <li>Your channel</li>
          <li>History</li>
          <li>Your videos</li>
          <li>Watch later</li>
        </ul>
      </div>

      <div className="mt-3">
        <h1 className="font-medium">Subcriptions</h1>
        <ul>
          <li>Akshay Saini</li>
          <li>Tseries</li>
          <li>Telangana-Hub</li>
          <li>React Developer</li>
        </ul>
      </div>

      <div>
        <h1 className="font-medium mt-3">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shoping</li>
          <li>Music</li>
          <li>Movies</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
        </ul>
      </div>

      <div className="mt-3 font-medium">
        <ul>
          <li>Settings</li>
          <li>History</li>
          <li>Help</li>
          <li>Send feedback</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
