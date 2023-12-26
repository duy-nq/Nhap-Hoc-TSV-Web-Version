import React from "react";
import { useNavigate } from "react-router-dom";
import './Main.css';
import Main from "./Main";

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

    const navigate = useNavigate();

    function ToPage() {
        switch (props.number) {
            case "1":
                navigate("/info");
                break;
            case "2":
                navigate("/upload");
                break;
            case "3":
                navigate("/bank");
                break;
            case "4":
                navigate("/cnd");
                break;
            case "5":
                navigate("/bill");
                break;
            case "6":
                navigate("/done");
                break;
            default:
                break;
        }
    }
    
    return (
        <div className="main--box" onMouseEnter={MouseIn} onMouseLeave={MouseOut} onClick={ToPage}>
            <div className="box--number">{props.number}</div>
            <div className="box--content">{props.title}</div>
        </div>
    );
}