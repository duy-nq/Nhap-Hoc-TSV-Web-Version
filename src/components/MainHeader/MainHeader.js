import React from "react";
import './MainHeader.css';

export default function MainHeader(props) {
    return (
        <div className="header">
            <h1 className="number">{props.number}</h1>
            <h1 className="title">{props.title}</h1>    
        </div>
    );
}