import React, { Suspense ,useState,useEffect} from 'react'
import { use } from 'react'
import { Link } from "react-router-dom";


const fetchData=fetch('https://hacker-news.firebaseio.com/v0/jobstories.json').then((res)=>res.json())
const JobBoard = () => {
    const [card,setCard]=useState([])
    const[pagination,setPagination]=useState(9)
const ids=use(fetchData)
console.log(ids)
 

function createPromiseArr(arr){
    const PromiseArr=arr.map((item)=>{
        return `https://hacker-news.firebaseio.com/v0/item/${item}.json`
    })
    // till here we have promise

  const fetchPromises=PromiseArr.map((item)=>fetch(item).then((res)=>res.json()))

Promise.all(fetchPromises)
  .then((data) => {
    console.log(data); 
    setCard(data)
  }) 
  .catch((err) => {
    console.error('At least one fetch failed', err);
  });
  
   
}
console.log(card)
useEffect(()=>{
createPromiseArr(ids)
},[])
  return (
    <Suspense fallback="loading">
        <div className='grid grid-cols-3 gap-6'>

     {
card.slice(0,pagination).map((item)=>{
   return <Link to={item.url} key={item.id} className='space-y-6 border p-4 cursor-pointer'>
<p>{item.title}</p>

<p>{item.time}</p>
<p>{item.by}</p>
    </Link>
})
     }
        </div>
       {pagination<card.length && <div onClick={()=>setPagination((prev)=>prev+9)} className='flex justify-center p-2 rounded-md bg-blue-400 cursor-pointer mt-2 w-fit'>
            Add More
        </div>}
    </Suspense>
  )
}

export default JobBoard