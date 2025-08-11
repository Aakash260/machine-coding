import React from 'react'
import useLocalStorage from './useLocalStorage'

const CustomHook = () => {
    // key and value in hook
    const [theme,setTheme]=useLocalStorage('theme','dark')
    const [count,setCount]=useLocalStorage('count',0)
    const handleClick=()=>{
        if(theme==="dark"){
            setTheme('light')
        }else{
            setTheme('dark')
        }
    }
  return (
    <div>
        <h2> CustomHook</h2>
       
<h1>{theme}</h1>
<button onClick={handleClick}>theme</button>
<h4 onClick={()=>setCount(prev=>prev+1)}>{count}</h4>
    </div>
  )
}

export default CustomHook