import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:"",
    email:"",
    password:""
}

const formSlice = createSlice({
    name:"formData",
    initialState,
    reducers:{
        addFormData:(state , action)=>{
            console.log(action)
            state.name = action.payload.name ;
            state.email = action.payload.email;
            state.password = action.payload.password
        }
    }
})

export const {addFormData} = formSlice.actions
export default formSlice.reducer