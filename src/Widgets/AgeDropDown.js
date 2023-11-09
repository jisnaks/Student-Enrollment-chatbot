import React from 'react'
import { useDispatch } from 'react-redux';
import { setAge } from '../Redux/EnrollSlice';

function AgeDropDown(props) {

  const dispatch= useDispatch();
 
  const age = [];
  for(let i=18;i<=40;i++){
    age.push(i);
  }
  

  return (
    <div>
      <div className="dropup ">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Age
        </button>
        <ul className="dropdown-menu">
          {
            age.map((item,key) =>{
              return (
                <button className='btn btn-sm btn-secondary m-1' key={item.id} 
                onClick={() => { 
                   dispatch(setAge(item)) 
                   props.actionProvider.handleExit()}}
               >{item}</button>
            )
            }
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default AgeDropDown
