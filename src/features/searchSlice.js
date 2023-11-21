import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name : 'filter',
    initialState : {
        jobTitleTags : [],
        locationTags : [],
        experience: {
            minexp: 0,
            maxexp: 10
        },
        shift: ''
    },
    reducers : {
        addJobTitleTags : (state, action)=>{
            state.jobTitleTags.push(action.payload);
        },
        removeJobTitleTags : (state, action)=>{
            state.jobTitleTags = state.jobTitleTags.filter((tag)=>{
                return tag !== action.payload
            });
        },
        addLocationTags : (state, action)=>{
            state.locationTags.push(action.payload);
        },
        removeLocationTags : (state, action)=>{
            state.locationTags = state.locationTags.filter((tag)=>{
                return tag !== action.payload
            });
        },
        updateExperience : (state, action)=>{
            state.experience.minexp = action.payload[0]
            state.experience.maxexp = action.payload[1]
        },
        updateShiftPreference : (state, action)=>{
            state.shift = action.payload;
        },
        resetState : (state, action)=>{
            state.jobTitleTags = [];
            state.locationTags = [];
            state.experience.minexp = 0;
            state.experience.maxexp = 16;
            state.shift = '';
        }
}})

export const {addJobTitleTags, removeJobTitleTags, addLocationTags, removeLocationTags, updateExperience, updateShiftPreference, resetState} = filterSlice.actions;
export default filterSlice.reducer;