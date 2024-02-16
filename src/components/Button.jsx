const Button = ({ name }) => {
  return (
    <div className=" h-14">
    
        <button className=" text-nowrap p-2  mx-2 mt-1 rounded-lg px-3 bg-gray-300 hover:bg-gray-500 hover:text-white focus:bg-gray-500">
         {name}
        </button>
      
    </div>
  );
};

export default Button;
