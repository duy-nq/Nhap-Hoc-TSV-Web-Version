import React from "react";
import './Detail.css';

export default function Row(props) {
    return (
        <tr className="table-content">
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{Number(props.price).toLocaleString('en-US')}</td>
        </tr>
    );
}