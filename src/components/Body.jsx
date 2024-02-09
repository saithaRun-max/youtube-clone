import Sidebar from "./Sidebar";
import Main from "./Main";

const Body = () => {
  return (
    <>
      <div className="">
        <div className="grid grid-flow-col ">
          <Sidebar />
          <Main />
        </div>
      </div>
    </>
  );
};

export default Body;
