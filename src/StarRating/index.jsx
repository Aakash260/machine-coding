import React from 'react'

const StarRating = () => {
    const [count, setCount] = React.useState(0);

    const handleCount=(ind)=>{
setCount(ind+1)
    }
    console.log(count)
  return (
    <div>
        <h1>Star Rating Component</h1>
        <p>This component allows users to rate something using stars.</p>

        {
            Array(5).fill('').map((_,index)=>{
                return (
                    <span onClick={()=>handleCount(index)} key={index} style={{ fontSize: '2rem', cursor: 'pointer' }} className={ count>index?`text-red-400`:null}>
                        ★
                    </span>
                )
            })
        }
    </div>
  )
}

export default StarRating