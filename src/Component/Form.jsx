import React, { useRef } from "react";
import "./form.css"
import { useDispatch, useSelector } from "react-redux";
import { addFormData } from "./Slice/formSlicer";

export default function Form(){
    const dispatch = useDispatch();
    const data = useSelector(d=>d.formSlicer)
    let formData = {
        name:"",
        email:"",
        password:""
    }
    const form = useRef();
   function SubmitFunc(e){
    e.preventDefault();
    dispatch(addFormData({...formData}))
    form.current.reset();
     
   }

    return<>


    <div className="form-holder">
        <form action="" onSubmit={SubmitFunc} ref={form} >
        {data.name && data.email && <h3 style={{textAlign:"center" , color:"green"}}>Hello {data.name} ! Form Submited Successfully</h3>}

        <h1>User Details Form</h1>

            <div>
               <input type="text" placeholder="Enter Your Name"  onChange={(e)=>formData.name=e.target.value} required/>
            </div>
            <div>
               <input type="email" placeholder="Enter Your Email"onChange={(e)=>formData.email=e.target.value} required/>
            </div>
            <div>
               <input type="password" placeholder="Create Password"onChange={(e)=>formData.password=e.target.value} required/>
            </div>
            <div>
               <input type="password" placeholder="Comfirm Password" />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
    </>
}