import Button from "./Button";
import { btnNames } from "../utils/helper";
import { Link } from "react-router-dom";
const ButtonList = () => {
  return (
    <div className="mx-2 sm:w-[710px] xl:w-full flex flex-row  flex-nowrap overflow-x-scroll">
      {btnNames.map((item, index) => (
        <Link to={"/" + item.toLocaleLowerCase()} key={index}>
        <Button  name={item}  /></Link>
      ))}
    </div>
  );
};

export default ButtonList;
