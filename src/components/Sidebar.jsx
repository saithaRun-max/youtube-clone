import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  segments,
  userSubscriptions,
  mainNavigation,
  userChannel,
} from "../utils/helper";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-2 m-2 w-36 mr-7 shadow-xl  ">
      <div className=" text-lg font-medium border-b border-slate-400 pb-4">
        <ul>
          {mainNavigation.map((m, i) => (
            <Link to={"/" + m.toLowerCase()} key={i}>
              <li>{m}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className=" mt-3  border-b border-slate-400 pb-4">
        <h1 className="font-bold">You </h1>
        <ul>
          {userChannel.map((c, i) => (
            <Link to={"/" + c.toLowerCase()} key={i}>
              <li>{c}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="mt-3  border-b border-slate-400 pb-4">
        <h1 className="font-medium">Subcriptions</h1>
        <ul>
          {userSubscriptions.map((s, i) => (
            <Link to={"/" + s.toLowerCase()} key={i}>
              <li>{s}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="mt-3 border-b border-slate-400 pb-4">
        <h1 className="font-medium mt-3 ">Explore</h1>
        <ul>
          {segments.map((s, i) => (
            <Link to={"/" + s.toLowerCase()} key={i}>
              <li>{s}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="mt-3 font-medium border-b border-slate-400 pb-4 ">
        <ul>
          <Link to="/settings">
            <li>Settings</li>
          </Link>
          <Link to="/history">
            <li>History</li>
          </Link>
          <Link to="/help">
            <li>Help</li>
          </Link>
          <Link to="/send">
            <li>Send feedback</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
