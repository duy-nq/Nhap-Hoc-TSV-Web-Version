import React from "react";
import './Box.css';

export default function Box(props) {
    return (
        <div className="box-container">
            <i id="file-logo" className="fa fa-file"></i>
            <h3 id="file-name">{props.fileName}</h3>
            <button className="remove-btn">
                <i className="fa fa-times"></i>
            </button>
        </div>
    )
}