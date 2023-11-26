import React from "react";
import "./PopUp.css"

export default function PopUp(props) {
    const ClosePopUp = () => {
        document.querySelector(".popup").style.display = "none";
    }
    
    return (
        <div className="popup">
            <div className="popup-inner">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button onClick={ClosePopUp}>Tôi đã hiểu</button>
            </div>
        </div>
    );
}