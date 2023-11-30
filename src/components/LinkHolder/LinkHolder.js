import React from "react";
import "./LinkHolder.css"
import { useState } from "react";

export default function LinkHolder(props) {
    const Confirm = () => {
       
        document.querySelector(".popup-link").style.display = "none";
        console.log("confirm");
    }
    
    return (
        <div className="popup-link" id={props.id}>
            <div className="popup-inner">
                <h1>{props.title}</h1>
                <input classname="link" type="text"/>
                <button onClick={Confirm}>Xác nhận</button>
            </div>
        </div>
    );
}