import React,{useEffect,useState} from 'react'
import { items } from './items'
const FilterProduct = () => {

    const [category,setCategory]=useState([])
    const arr=items
    const [filterArr,setFilterArr]=useState(items)
    function getCatories(){
console.log(items)
let item=[];
item=items.map((item)=> item.category)
item=[...new Set(item)]
console.log(item)
setCategory([...item,'Reset'])
    }

const handleCategory=(e)=>{
 
let filterCat=e.target.getAttribute('data-cat')
 if(filterCat=='Reset'){
    console.log('reset')
    setFilterArr(arr)
 }else{
const filterData=arr.filter((item)=>item.category==filterCat)
setFilterArr(filterData)
 }

}

    useEffect(() => {
        getCatories();
    }, []);
  return (
    <div>
<div className='category flex  gap-8 ' onClick={handleCategory}>
{
category.map((item)=><div data-cat={item} key={item} className='p-2 border bg-blue-400 cursor-pointer rounded-md'>{item}</div>)
}
</div>
<div className='grid grid-cols-4 gap-6 rounded-md mt-4'>
    {
        filterArr.map((item)=>{
            return <div className='border p-8'>
                {item.name}
                <p>{item.category}</p>
                
            </div>
        })
    }

</div>
    </div>
  )
}

export default FilterProduct