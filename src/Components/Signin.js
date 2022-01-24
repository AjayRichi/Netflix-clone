import React from 'react';
import { useNavigate } from "react-router-dom";
import './Signin.css'


function Signin() {
    const navigate=useNavigate()
    const handleBack =()=>{
        navigate("/")
    }
        return (
            <div className='main'>
                <h1 >Work In progress... Hangin</h1>
                <button onClick={()=>handleBack()}>Go Back</button>
            </div>

        )
}
export default Signin;
