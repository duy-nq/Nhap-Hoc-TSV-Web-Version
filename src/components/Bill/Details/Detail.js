import React from "react";
import './Detail.css';
import Row from './Row';

export default function Detail() {
    const fakeDataJson = [
        {
            "id": 1,
            "name": "Học phí",
            "price": "10025200"
        },
        {
            "id": 2,
            "name": "Ký túc xá",
            "price": "350000"
        },
        {
            "id": 3,
            "name": "Đồng phục các loại",
            "price": "350000"
        }
    ];

    // add to fakeData with fakeDataJson

    const fakeData = fakeDataJson.map((item) => {
        return (
            <Row id={item.id} name={item.name} price={item.price} />
        );
    });

    // calculate total price
    const totalPrice = fakeDataJson.reduce((total, item) => {
        return total + parseInt(item.price.replace(/\./g, ''));
    }, 0);

    // add a row with class="table-footer" for total price" in format 1.000.000
    fakeData.push(
        <tr className="table-footer">
            <td></td>
            <td>Tổng tiền</td>
            <td>{totalPrice.toLocaleString('en-US')}</td>
        </tr>
    );
    return(
        <table className="detail-container">
            <tr className="table-header">
                <th>STT</th>
                <th>Khoản thu</th>
                <th>Thành tiền</th>
            </tr>
            {fakeData}
        </table>
    );
}