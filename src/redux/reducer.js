import {createSlice } from '@reduxjs/toolkit';

const initialState={
    user:null
}

// export const coustemReducer=createReducer(initialState,{
//     increment:(state,action)=>{
//         state.a=action.payload;
//     },

//     login:(state,action)=>{
//         state.user=action.payload;
//     }
// })

export const userDetail=createSlice({
    name:'user',
    initialState,
    reducers:{
        storeDetail:(state,action)=>{
            state.user=action.payload;
        },

        logOut:(state)=>{
            state.user=null;
        }
    }
})

export const {storeDetail, logOut}=userDetail.actions;
export default userDetail.reducer;