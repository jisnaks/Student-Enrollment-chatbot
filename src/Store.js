import {configureStore} from '@reduxjs/toolkit';
import EnrollReducer from './Redux/EnrollSlice';

export const store= configureStore({
    reducer:{
        enroll: EnrollReducer,
    },
});