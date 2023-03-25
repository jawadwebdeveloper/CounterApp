import React, { useState , useEffect, useContext } from 'react'


function Counter() {
    const num = 0;
    const [count , setCount] = useState(num);
    const [screenwidth , setScreenWidth] = useState(window.screen.width);

    useEffect(()=>{
        document.title = count;
        // console.log(count);
    },[count]);

    const currenScreenWidth = ()=>{
        setScreenWidth(()=> window.innerWidth);
    }
    
    useEffect(()=>{
        window.addEventListener("resize" , currenScreenWidth);
        return()=>{
            window.removeEventListener("resize",currenScreenWidth)
        }
    });

    
  return (
    <div>
        
        <h1>YOur Machine Screen Width is : {screenwidth}</h1>
        <p>Pls Scroling the screnn to check the update width in your screen</p>
        <h4>Count Number is : {count}</h4>

        <button onClick={()=> setCount(count+1)}>Increment</button>
        <button onClick={()=>(count===0)?setCount(num):setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(num)}>Reset</button>

    </div>
  )
}

export default Counter