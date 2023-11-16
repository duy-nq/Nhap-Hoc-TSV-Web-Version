import React from "react";
import './Main.css';

export default function ContentBox(props) {
    function MouseIn() {
        document.getElementsByClassName("box--number")[props.number-1].style.fontSize = "55px";
        document.getElementsByClassName("box--content")[props.number-1].style.fontSize = "2rem";
        // cursor change to hand
        document.getElementsByClassName("main--box")[props.number-1].style.cursor = "pointer";
    }

    function MouseOut() {
        document.getElementsByClassName("box--number")[props.number-1].style.fontSize = "50px";
        document.getElementsByClassName("box--content")[props.number-1].style.fontSize = "1.8rem";
    }
    
    return (
        <div className="main--box" onMouseEnter={MouseIn} onMouseLeave={MouseOut}>
            <div className="box--number">{props.number}</div>
            <div className="box--content">{props.title}</div>
        </div>
    );
}