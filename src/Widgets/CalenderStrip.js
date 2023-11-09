import React from 'react'
import { useDispatch } from 'react-redux';
import { setdate } from '../Redux/EnrollSlice';

function CalenderStrip(props) {
    const dispatch = useDispatch();

    const options = [
        {
            id: 1,
            text: "14 MAY SUN",
        },
        {
            id: 2,
            text: "15 MAY MON",
        },
        {
            id: 3,
            text: "16 MAY TUE",
        },
    ]

    return (
        <div>
            {
                options.map((item, key) => {
                    return (
                         <button className='btn btn-sm btn-secondary m-1' key={item.id} 
                         onClick={() => { 
                            dispatch(setdate(item.text))
                            props.actionProvider.handleTime()}}
                        >{item.text}</button>
                    )
                }
                )
            }

        </div>
    )

}

export default CalenderStrip
