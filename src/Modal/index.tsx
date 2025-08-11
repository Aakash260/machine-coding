 
import { useState } from "react"
const Modal = () => {
const [open, setOpen] = useState(false)
const handleOutsideClick=(e)=>{
   console.log(e.target.className);
   if(e.target.className.includes("modal")){
    setOpen(false)
   }
}
  return (
    <div>
<button onClick={() => setOpen(true)} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">open Modal</button>
{
    open &&

    <div className="modal" onClick={handleOutsideClick}>
        <div className="w-[400px] h-2xl bg-white">
            <p>I am a modal</p>
            
<button onClick={() => setOpen(false)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">close Modal</button>

        </div>

        </div>
}
    </div>
  )
}

export default Modal