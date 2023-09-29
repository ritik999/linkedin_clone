import {createReducer} from '@reduxjs/toolkit';

const initialState={
    user:{}
}

export const coustemReducer=createReducer(initialState,{
    increment:(state,action)=>{
        state.a=action.payload;
    },

    login:(state,action)=>{
        state.user=action.payload;
    }
})