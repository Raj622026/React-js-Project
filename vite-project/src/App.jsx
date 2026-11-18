import { useState } from "react";


function App() {

  let [count,setCount]=useState(0);


  // let count = 0;
  function increment(){
    count++;
    // const para=document.querySelector('p');
    // para.textContent=`Counter : ${count}`;

    setCount(count);


  }
  return(
    <>
    <p>Counter: {count}</p>
    <button onClick={increment}>Increment : {count}</button>
    </>
  )
  
}
export default App;
