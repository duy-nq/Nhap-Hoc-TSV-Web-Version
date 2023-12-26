import React from "react";
import './Size.css';

export default function QuantityAndSize(props) {
    return (
        <div className="uniform-product" id={props.id}>
            <p className="uniform-product-title">{props.name}</p>
            <input className="quantity" type="number" min={props.min} max="3" name="quantity" placeholder="Số lượng" defaultValue={1}
                onKeyDown={(e) => e.preventDefault()}
            />
            <select className="select-size" defaultValue={0}>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
        </div>
    ); 
}