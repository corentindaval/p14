import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'




import { createSlice } from '@reduxjs/toolkit'

const initialState = [] 

const maj_list_employer = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addemployer(state,action) {
            state.push(action.payload)
        },
      
    },
})

export const { addemployer } = maj_list_employer.actions
export default maj_list_employer.reducer