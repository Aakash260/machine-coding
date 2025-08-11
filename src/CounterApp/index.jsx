
import { useActionState,useState,useEffect } from "react";


const CounterApp = () => {
   const [state, formAction] = useActionState(showData, null);
    const[count,setCount]=useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [timerId, setTimerId] = useState(null);
  const [started, setStarted] = useState(false);

   async function showData(previousState, formData) {

  const hours=formData.get('hrs') 
  const minutes=formData.get('min') 
  const seconds=formData.get('ss') 
  console.log(`Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);
  setCount({
    hours: hours>9? hours: `0${hours}`,
    minutes: minutes>9? minutes: `0${minutes}`,
    seconds: seconds>9? seconds: `0${seconds}`
  });
 
  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

const handleReset = () => {
  setCount({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  setStarted(false);
}

useEffect(() => {
let id=null;
  if(started) {
id=setInterval(() => {
 setCount((prev) => {
  let { hours, minutes, seconds } = prev;

  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(timerId);
    setStarted(false);
    return prev;
  }

  if (seconds > 0) {
    seconds -= 1;
  } else {
    if (minutes > 0) {
      minutes -= 1;
      seconds = 59;
    } else if (hours > 0) {
      hours -= 1;
      minutes = 59;
      seconds = 59;
    }
  }

  return { hours, minutes, seconds };
});
  }, 1000);
  setTimerId(id);
  }
return () => {
  clearInterval(id);  
}
  
  
}, [count,started]);

console.log(count);

  return (
    <div className='grid gap-4'>
        <h1>Counter App</h1>
      
{count.hours<=0 && count.minutes<=0 && count.minutes<=0 ?<form action={formAction}>
    <div className='flex gap-2 [&>input]:border [&>input]:w-12  justify-center' >
    <input type="number" name='hrs' placeholder='HH'/>
    <input type="number"  name='min' placeholder='MM' />
    <input type="number" name='ss' placeholder='SS'/>
    </div>
<div className="flex justify-center mt-4">
 <button  
 onClick={() => setStarted(true)}
 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Start</button>
</div>
</form>:
<div className='flex flex-col items-center'>
  <h2 className='text-2xl'>Counter Started</h2>
  <div className='text-xl flex gap-4'>
    <p> {count.hours>9?count.hours:`0${count.hours}`}:</p>
    <p> {count.minutes>9?count.min:`0${count.minutes}`}:</p>
    <p> {count.seconds>9?count.min:`0${count.seconds}`}</p>
  </div>
<div className='flex gap-4 justify-center'>
<button
onClick={handleReset}
type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" >Reset</button>
<button onClick={() => setStarted(!started)} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Stop</button>
</div>
</div>}

    </div>
  )
}

export default CounterApp