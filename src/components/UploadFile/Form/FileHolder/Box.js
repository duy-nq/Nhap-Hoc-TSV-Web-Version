import React from "react";
import './Box.css';

export default function Box(props) {
    const handleRemove = (event) => {
        event.target.parentElement.remove();

        if (event.target.parentElement.className == 'remove-btn') {
            event.target.parentElement.parentElement.remove();
        }
        else {
            event.target.parentElement.remove();
        }
    };
    
    return (
        <div className="box-container">
            <i id="file-logo" className="fa fa-file"></i>
            <h3 id="file-name">{props.fileName}</h3>
            {/* <button className="remove-btn" onClick={handleRemove}>
                <i className="fa fa-times"></i>
            </button> */}
        </div>
    )
}