import React from "react";
import "./LinkHolder.css"
import { useState } from "react";

export default function LinkHolder(props) {
    const [link, setLink] = useState("");
    
    const Confirm = () => {
       
        document.querySelector(".popup-link").style.display = "none";
        console.log("confirm");
    }
    
    return (
        <div className="popup-link" id={props.id}>
            <div className="popup-inner">
                <h1>{props.title}</h1>
                <input
                    classname="link" 
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
                <button onClick={Confirm}>Xác nhận</button>
            </div>
        </div>
    );
}