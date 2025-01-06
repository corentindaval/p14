import { configureStore } from '@reduxjs/toolkit';
import list_employer from '../assets/list_employer';


export const store = configureStore({
    reducer: {
        List_employer: list_employer,
    },
});
