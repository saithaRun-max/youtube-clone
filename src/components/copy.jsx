import React from 'react'

const copy = () => {
  return (
    <div>
      

      <div>
     
     <div className="bg-indigo-200 mx-5 w-full border border-b-none border-black sm:h-[397px] xl:h-[480px] rounded-lg overflow-y-scroll flex flex-col-reverse xl:mx-20 pb-5 shadow-inner">
 
       {chatMessages.map((c) => (
         <ChatMessage name={c.name} message={c.message} />
       ))}
     </div>
     <form
       className="w-full p-1  mx-5  xl:mx-20  relative bottom-10 bg-slate-200"
       onSubmit={(e) => {
         e.preventDefault(),
           setInputMessage(""),
           dispatch(
             addMessage({
               name: "User",
               message: inputMessage,
             })
           );
       }}
     >
       <hr className="border border-black " />
       <input
         value={inputMessage}
         onChange={(e) => setInputMessage(e.target.value)}
         type="text"
         className=" mx-3 focus:outline-none border border-black  bg-indigo-50 "
       />
       <button
         type="submit"
         className="mx-2 p-1 px-2 bg-slate-300 border rounded-lg"
       >
         {" "}
         Send
       </button>
     </form>
     </div>

    </div>
  )
}

export default copy
