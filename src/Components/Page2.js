import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Page2() {
  const val= useSelector((state)=>state.enroll);

console.log(val)
  return (
    <div>
      <h3 className='m-5'>Your name {val.name} aged {val.age} has been added to student system. You may now exit.</h3>
    </div>
  )
}

export default Page2
