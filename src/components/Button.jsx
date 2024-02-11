

const Button = ({name}) => {
  return (
    <div className=" h-3">
      <button className=' text-nowrap p-2  m-2 rounded-lg px-3 bg-gray-300 hover:bg-gray-500 focus:bg-gray-500'>{name}</button>
    </div>
  )
}

export default Button;
