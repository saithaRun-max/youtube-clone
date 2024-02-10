import Sidebar from "./Sidebar";
import Main from "./Main";
import WatchPage from "./WatchPage";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div className="">
        <div className="grid grid-flow-col ">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Body;
