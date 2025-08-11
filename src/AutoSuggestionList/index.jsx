import React, { useState ,useEffect} from 'react'

const AutoSuggestion = () => {
    const [item,setItem]=useState("")
const [data,setData]=useState([]);
const [selectedItem, setSelectedItem] = useState([]);
    const getData=async ()=>{
        const data=await fetch(`https://api.frontendeval.com/fake/food/${item}`)
        const result=await data.json()
     setData(result);
       
    }
    const handleChange=(e)=>{
        setItem(e.target.value)
        
    }

    const handleClickOnParent=(event)=>{
        const value = event.target.getAttribute('data-value');
       setSelectedItem(prev => [...prev, {
            value: value,
            id:Math.random().toString(8).slice(2, 10),
            checked: false
       }]);
        setItem('');
    }

    const handleSelectedData =(event)=>{
      if(event.target.tagName === 'SPAN') {
        const id =event.target.getAttribute('data-id');
        setSelectedItem(prev => prev.filter(item => item.id !== id));
      }
      if(event.target.tagName === 'INPUT') {
        if(event.target.checked) {
       event.target.parentElement.querySelector('p').classList.add('underline');
        
        
      }else{
        event.target.parentElement.querySelector('p').classList.remove('underline');
      }
    }
    }
  useEffect(() => {
    getData();
    
  }, [item]);
  
  return (
    <div>
        <div>
        <input className='border' type="text" value={item} onChange={handleChange}/>
<div onClick={handleClickOnParent}>
        {data.map((item, index) => (
            <div key={index} className='border p-2 my-2 rounded-md hover:bg-gray-100 cursor-pointer'>
                <p data-value={item}>{item}</p>
              
            </div>
        ))}
</div>
        </div>
        
        <button className='ml-4 border p-1 rounded-md'>Add</button>

        <p>Selected Items</p>
        <div onClick={handleSelectedData} className='border p-2 my-2 rounded-md'>
          {
            selectedItem.map((item) => (
              <div key={item.id} className='border p-2 my-2 rounded-md flex justify-between cursor-pointer hover:bg-gray-100'>
                <input type="checkbox" name=""  />
                <p data-id={item.id} className={item.checked ?'underline':null}>{item.value}</p>
                <span data-id={item.id}>x</span>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default AutoSuggestion