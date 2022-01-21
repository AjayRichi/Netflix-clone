import React, {  useEffect, useState } from 'react';
import './Nav.css'

function Nav() {
    const [show,handleShow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else handleShow(false)
        })
        return()=>{
            window.removeEventListener("scroll",null)
        }
    },[])

    const Play=()=>{
        new Audio("./Netflix-Intro-Sound.mp3").play()
    }

        return (
            <div className={`nav ${show && "nav_black"}`}>
                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt="Netflix-logo"
                    onClick={()=>Play()}
                />
                <img
                    className="avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="User-logo"
                />
            </div>

        )
}
export default Nav;
