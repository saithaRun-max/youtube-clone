import ButtonList from "./ButtonList";
import Sidebar from "./Sidebar";
import CardContainer from "./CardContainer";

const Body = () => {
  return (
    <><div className="">
      <div className="grid grid-flow-col col-span-11">
        <Sidebar />
        <CardContainer /> 
      </div>
      <div>
     
      </div>
      </div>
    </>
  );
};

export default Body;
