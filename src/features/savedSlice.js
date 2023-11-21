import { createSlice } from "@reduxjs/toolkit";

export const savedSlice = createSlice({
    name: 'savedCandidates',
    initialState: {
        value : [],
        id : []
    },
    reducers: {
        saveCandidateData: (state, action)=>{
            state.value.push(action.payload);
            state.id.push(action.payload.id);
        },
        removeCandidateData: (state, action)=>{
            state.value = state.value.filter(val=> val.id !== action.payload);
            state.id = state.id.filter(val=> val !== action.payload);
        }
    }
})

export const {saveCandidateData, removeCandidateData} = savedSlice.actions;
export default savedSlice.reducer;