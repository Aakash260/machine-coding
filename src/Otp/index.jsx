import React,{useEffect,useRef,useState} from 'react'

const Otp = () => {
    const arr=["","","",""];
    const [inputs,setInputs] = useState(["","","",""]);
const refs=[useRef(),useRef(),useRef(),useRef()];
    useEffect(()=>{
refs[0].current.focus();
    },[])
    const handleEventChange=(e,ind)=>{
        const value = e.target.value;
        console.log(value,ind);
        if(!Number(value)) return;

        if(ind<inputs.length-1){
            refs[ind+1].current.focus();
        }
        const newInputs = [...inputs];
        newInputs[ind] = value;
        setInputs(newInputs);

    }

    const handleKeyDown=(e,ind)=>{
        const value = e.keyCode;
        if(value===8 ){
           
            const newInputs = [...inputs];
            newInputs[ind] = "";
            setInputs(newInputs);
             if(ind>0) {
            refs[ind-1].current.focus();
            }
        }
    console.log(value,ind)
}

const handlePaste=(e)=>{
    
    const pasteData = e.clipboardData.getData('text');
    
    
   if(!Number(pasteData) || pasteData.length != inputs.length) return;

    const newInputs = pasteData.split('')
    setInputs(newInputs);
    refs[inputs.length-1].current.focus();
}

    // console.log(inputs);
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
      <h1 className='text-2xl font-bold'>OTP Verification</h1>
      <p className='text-gray-500'>Enter the OTP sent to your email</p>
        <div className='flex gap-4 [&>div]:w-10 [&>div]:h-10 [&>div]:border-2 [&>div]:border-gray-300 [&>div]:rounded-md [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>input]:border-0 [&>input]:text-center [&>input]:text-lg focus-within:[&>div]:border-purple-500'>
 {
        arr.map((_, index) => (
          <div key={index}>
            <input onPaste={handlePaste} onKeyDown={(e)=>handleKeyDown(e,index)} value={inputs[index]} onChange={(e)=>handleEventChange(e,index)} ref={refs[index]} type="text" maxLength={1} className='w-full h-full appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' />
          </div>
        ))
 }
       
        </div>
      <button  type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Submit</button>
    </div>
  )
}

export default Otp