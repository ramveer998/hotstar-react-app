import React from 'react'
import { useState } from 'react'

function Counter() {
    let [data, setValue] = useState(0);
    // let dec = () =>{
    //     // data--;
    //     setValue(data-1)
    //    } 
    // let inc = () =>{
    //     // data++;
    //     setValue(data+1)
    //    } 
    // let reset = () =>{
        
    //     setValue(0)
    //    } 
  return (
    <div>
        
        <h1>{data}</h1>
        
        <button onClick={()=>setValue(data-1)}>Dec</button>
        <button onClick={()=>setValue(0)}>Reset</button>
        <button onClick={()=>setValue(data+1)}>Inc</button>
    </div>
  )
}

export default Counter