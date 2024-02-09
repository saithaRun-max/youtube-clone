import Button from "./Button";

const ButtonList = () => {

    const names = ["All", "T-Series", "Ashay Saini", "Telangana", "United States","All", "T-Series", "Ashay Saini", "Telangana", "United States"]

  return (
    <div className="flex">
        {
            names.map((item)=>  <Button name={item} /> )
        }
     
    </div>
  );
};

export default ButtonList;
