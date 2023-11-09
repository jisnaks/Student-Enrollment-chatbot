import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    day:{
        date: '',
        time:'',
    },
   
   name:'',
    age :'',
}

const EnrollSlice = createSlice({
    name: 'enroll',
    initialState,
    reducers: {
        setdate: (state, action) => {
            state.day.date = action.payload;
            console.log(state.day.date,"date")
        },
        setTime: (state, action) => {
            state.day.time = action.payload;
            console.log(state.day.time,"time")
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
            console.log(state.age,"time")
        }
    },

},
)
export const { setdate,setTime,setAge,setName, } = EnrollSlice.actions;
export default EnrollSlice.reducer;