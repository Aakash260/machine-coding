import React, { useState, useEffect } from 'react'

const TicTac = () => {
    const [isXTurn,setIsXTurn]=useState(true)
  const [Xarr,setXarr]=useState([])
  const [Yarr,setYarr]=useState([])
    const winningCombos = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal from top-left
  [2, 4, 6], // Diagonal from top-right
];

    const handleClick=(e)=>{
        console.log(e.target.textContent)
        if(e.target.textContent.length!=4) return;
        e.target.textContent=isXTurn?'X':'Y'
        setIsXTurn(!isXTurn)
        
     if(isXTurn){
        
            setXarr((prev)=>[...prev,e.target.id])
         
     }else{
       setYarr((prev)=>[...prev,e.target.id])
     }
  
    }

   function checkIsWinning() {
  function checkWin(playerArr, playerName) {
    for (let i = 0; i < winningCombos.length; i++) {
      const isWin = winningCombos[i].every(pos => playerArr.includes(pos));
      if (isWin) {
        alert(`${playerName} wins!`);
        return true;
      }
    }
    return false;
  }

  if (Xarr.length >= 3) checkWin(Xarr.map(Number), "X");
  if (Yarr.length >= 3) checkWin(Yarr.map(Number), "Y");
}


    useEffect(()=>{
   checkIsWinning();
    },[Xarr,Yarr,setIsXTurn])
 console.log("Xarr",Xarr)
     console.log("Yarr",Yarr)
  return (
    <div className='grid place-content-center gap-4'>
        <h1>TicTac Toe Game</h1>
<div onClick={handleClick} className='grid grid-cols-3 gap-2 [&>div]:size-30 [&>div]:bg-gray-400 w-fit [&>div]:hover:bg-gray-200 [&>div]:cursor-pointer'>

        {Array(9).fill("").map((item,index)=>{
return <div key={index} id={index} className='grid items-center text-4xl font-bold'>
{item}    
</div>
        })
        }
</div>


    </div>
  )
}

export default TicTac