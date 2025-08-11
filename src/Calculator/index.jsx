import React from 'react'

const Calculator = () => {
    const [input, setInput] = React.useState('');
 

    const handleClick = (e) => {
     
        const value=e.target.textContent;
        setInput((prev) => prev + value);
        if (value === `=`){
        const res=  eval(input)
           setInput(res);
        }else if (value === 'C') {
            setInput('');
        }
    }
  return (
    <div>
        <h1 className='text-2xl font-bold'>Calculator</h1>
        <p className='text-gray-500'>A simple calculator app</p>
<div className='grid'>
<input value={input} type="text" className='border' />

<div onClick={handleClick} className="grid grid-cols-3 [&>div]:border [&>div]:border-gray-300 [&>div]:p-4 [&>div]:text-center [&>div]:cursor-pointer [&>div]:hover:bg-gray-100 [&>div]:transition-colors [&>div]:duration-200 [&>div]:ease-in-out'>">
   
   
    <div id="1" >1</div>
 
    <div id="2">2</div>
  
    <div id="3">3</div>
 
    <div id="4">4</div>
 
    <div id="5">5</div>
   
    <div id="6">6</div> 
    <div id="7">7</div>
    <div id="8">8</div>
    <div id="9">9</div>
  <div id="0">0</div>

    <div>+</div>
    <div>-</div>
    <div>*</div>
    <div>=</div>
    <div>C</div>
</div>
</div>
    </div>
  )
}

export default Calculator