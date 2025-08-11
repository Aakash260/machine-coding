import React, { useState, useEffect } from "react";

//  const getData=fetch('https://fakestoreapi.com/products').then(res=>res.json())

const BarChart = () => {
  const [Xaxis, setAxis] = useState([]);
  const [Yaxis, setYxis] = useState("");
 const [Ylength,setYlength]=useState([])
 const [Freq,setFreq]=useState([])
  const numbers = [
    10, 8, 10, 4, 2, 6, 4, 10, 5, 10, 2, 2, 9, 2, 1, 8, 9, 3, 2, 2, 8, 2, 3, 5,
    5, 4, 5, 7, 3, 5, 10, 10, 3, 5, 10, 2, 1, 9, 8, 8, 3, 3, 7, 2, 3, 7, 2, 5,
    1, 7, 6, 4, 5, 9, 4, 5, 8, 7, 7, 8, 2, 4, 1, 9, 9, 2, 9, 8, 3, 2, 3, 10, 5,
    9, 8, 8, 2, 7, 6, 7, 1, 8, 8, 2, 1, 7, 10, 6, 8, 6, 10, 5, 1, 2, 3, 3, 5,
    10, 9, 7, 3, 7, 6, 10, 3, 5, 9, 4, 5, 9, 8, 2, 8, 2, 2, 2, 7, 3, 8, 7, 2, 8,
    8, 8, 4, 10, 8, 10, 6, 8, 10, 3, 5, 2, 8, 5, 9, 10, 7, 6, 8, 3, 7, 8, 6, 3,
    6, 10, 10, 5, 2, 1, 4, 8, 7, 3, 10, 4, 4, 9, 4, 5, 2, 7, 3, 9, 8, 9, 7, 9,
    5, 5, 6, 1, 5, 2, 5, 6, 1, 2, 7, 5, 1, 10, 5, 7, 2, 2, 2, 4, 9, 1, 2, 1, 5,
    6, 6, 4, 8, 10,
  ];

  function getCountFreq(num) {
    let fre = {};
    num.map((item) => {
      fre[item] = fre[item] ? fre[item] + 1 : 1;
    });
    return fre;
  }

  function setMaxYlength(len) {
    console.log(len);
    setYlength([])
    setFreq([])
    let max = -Infinity;
    let data = [];
    for (let a in len) {
      console.log(len[a]);
      setFreq((prev)=>[...prev,len[a]])
      max = Math.max(len[a], max);
      data.push(a);
    }
    setAxis(data);
    console.log(max);
    const high_leng = Math.ceil(max / 10) * 10;
    setYxis(high_leng);
    for(let i=0;i<=high_leng;i=i+10){
setYlength((prev)=>[i,...prev])
    }
  }

  useEffect(() => {
    const fre = getCountFreq(numbers);
   
    setMaxYlength(fre);
  }, []);
  console.log(Xaxis, Yaxis,Ylength,Freq);

  // const avc=use(getData)
  return <div>
    Bar Chart

    <div className="barContainer border border-t-0 border-r-0 h-[50vh] w-[70vw] relative">
        <div className="flex flex-col h-[100%] justify-around items-start">
            {
                Ylength.map((item,ind)=>{
                    return <div key={ind}>{item}</div>
                })
            }
        </div>

        <div className=" flex justify-between ml-20 h-full absolute bottom-0 left-0 items-end w-full">
{
     Freq.map((item,ind)=>{
                    return <div 
                    key={ind}
                    style={{
                        height:`${item}%`
                        
                    }}
                    className="bg-red-400"
                    >{item}</div>
                })
}

        </div>

        <div className="flex justify-between ml-20">
{
     Xaxis.map((item,ind)=>{
                    return <div key={ind}>{item}</div>
                })
}

        </div>

    </div>
  </div>;
};

export default BarChart;
