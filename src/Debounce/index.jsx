import React,{useEffect,useState} from 'react'

const Debounce = () => {
    // https://api.frontendeval.com/fake/food/${input}
    const [query,setQuery]=useState("")
   const [options,setOptions]=useState("")

 
 
 
   
const handleChange=(e)=>{
    setQuery(e.target.value)
    
}

const fetchFood=async()=>{
    try {
        const data=await fetch(`https://api.frontendeval.com/fake/food/${query}`)
        const resData=await data.json()
    console.log(resData)
    setOptions(resData)
    } catch (error) {
        console.log(error)
    }
    
}

 

 useEffect(()=>{
    let timer;
if (query !== "") {
   timer= setTimeout(() => {
        fetchFood() 
    }, 3000);

  }
  return ()=>clearTimeout(timer)
    },[query])
 

  return (
    <div>
        <h1>Debounce</h1>
<form className=''>
    <input type="text" name="search" className='border mt-3' onChange={handleChange} value={query} />
    <div className='h-52 overflow-y-scroll border '>

    {
       options && options.map((item)=>{
            return <div>{item}</div>
        })
    }
    </div>
</form>
    </div>
  )
}

export default Debounce