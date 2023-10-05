import { configureStore } from "@reduxjs/toolkit";
import formSlicer from "../Slice/formSlicer";


export const store = configureStore({
    reducer:{
        formSlicer:formSlicer
    }
})