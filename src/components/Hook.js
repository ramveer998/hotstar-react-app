import React from 'react'
import { useState } from 'react'

function Hook() {
    let [data, setValue] = useState("Hello")
    let handleClick = () =>{
     if(data=="Hello"){
      setValue("Hi")
     }else{
      setValue("Hello")
     }
    }
    
  return (
    <div className='hook'>
        <h1>{data}</h1>
        <button onClick={handleClick}>Change Value</button>
    </div>
  )
}

export default Hook