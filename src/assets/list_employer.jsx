import { createSlice } from '@reduxjs/toolkit'
export const list_employer = createSlice({
    name: 'list_employer',
    initialState: {
        list_employer: [],

    },
    reducers: {
        addList: (state, action) => {
            state.list_employer.push(action.payload)
        },
        emptyList: (state) => {
            state.list_employer = []
        }
    }
})
export const { addList, emptyList } = list_employer.actions
export const list = (state) => state.list_employer
export default list_employer.reducer



/*import { createSlice } from '@reduxjs/toolkit'


export const list_employer = createSlice({
    name: 'list_employer',
    initialState: {

        list_employer:[],
    
    },
    reducers: {
        addList: (state, action) => {
            state.list_employer.push(action.payload)
        },
        emptyList: (state) => {
            state.list_employer = []
        }
    }
})

export const { addList, emptyList } = list_employer.actions

export const list = (state) => state.list_employer

export default list_employer.reducer*/