import React from "react";
import './Size.css';

export default function Size(props) {
    return (
        <div className="uniform-product">
            <p className="uniform-product-title">{props.name}</p>
            <select className="select-size">
                <option value="0">S</option>
                <option value="1">M</option>
                <option value="2">L</option>
                <option value="3">XL</option>
                <option value="4">XXL</option>
            </select>
        </div>
    ); 
}