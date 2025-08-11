import React, { useEffect, useState } from "react";

const MemoryGame = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  const [shuffledArr, setShuffledArr] = useState(arr);
  const [clickedCard,setClicked]=useState([])
  const getShuffledArr = (arr) => {
    const shuffled = arr.sort(() => Math.random() - 0.5);
    setShuffledArr(shuffled);
  };
  useEffect(() => {
    getShuffledArr(arr);
   
  }, []);

  const handleCardClick = (e) => {
    const card = e.target.textContent;
    const checkOutside = e.target.closest("[data-id]");
    if (!checkOutside) return;
    
  
    if (e.target.querySelector("SPAN").classList.contains("hidden")) {
      e.target.querySelector("SPAN").classList.remove("hidden");
     
      setClicked((prev)=>[...prev,{index:e.target.getAttribute('data-id'),card:card}])
    } else {
      e.target.querySelector("SPAN").classList.add("hidden");
    }
  };
  
    if(clickedCard.length==2){
        console.log('length is 2',clickedCard)
        checkCard(clickedCard);
    }

    function checkCard(arr){
        if(arr[0].card===arr[1].card){
            console.log('same')
           
        }else{
            const getCard=document.getElementById(`span${arr[0].index}`) 
             const getCard1=document.getElementById(`span${arr[1].index}`) 
             setTimeout(()=>{
 getCard.classList.add('hidden')
            getCard1.classList.add('hidden')
         
             },2000)
           
    }
       setClicked([])
}

  return (
    <div>
      <h1>Memory Game</h1>
      <p>Memory Game is a game where you have to match pairs of cards.</p>
      <p>Click on a card to flip it over and try to find its matching pair.</p>
      <div className="grid grid-cols-4" onClick={handleCardClick}>
        {shuffledArr.map((item, index) => (
          <div
            data-id={index}
            className="cursor-pointer  hover:bg-gray-100 border bg-gray-300"
            key={index}
            style={{
              margin: "10px",
              height: "50px",
              textAlign: "center",
              lineHeight: "50px",
              fontSize: "24px",
              borderRadius: "5px",
            }}
          >
            <span className="hidden" id={`span${index}`}> {item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
