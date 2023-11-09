import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CountDown() {

    const [counter, setCounter] =useState(5)
  const navigate =useNavigate()
  useEffect(()=>{
    counter > 0 && setTimeout(()=>setCounter(counter-1),1000)
    if(counter ===0){
       navigate('/page2')
    }
  },[counter,navigate])
  return (
    <div>
      {counter}
    </div>
  )
}

export default CountDown
