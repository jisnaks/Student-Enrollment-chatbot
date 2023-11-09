import React from 'react'
import { useDispatch } from 'react-redux';
import { setTime } from '../Redux/EnrollSlice';

function TimeStrip(props) {
    const dispatch = useDispatch();

    const options = [
        {
            id: 1,
            text: "11 AM",
        },
        {
            id: 2,
            text: "2 PM",
        },
        {
            id: 3,
            text: "5 PM",
        },
    ]

    return (
        <div>
            {
                options.map((item, key) => {
                    return (
                        <button className='btn btn-sm btn-secondary m-1' key={item.id} 
                        onClick={() => { 
                           dispatch(setTime(item.text)) 
                           props.actionProvider.handleSchedule()}}
                       >{item.text}</button>
                    )
                }
                )
            }

        </div>
    )

}

export default TimeStrip
