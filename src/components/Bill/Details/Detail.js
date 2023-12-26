import React, { useEffect } from "react";
import './Detail.css';
import Row from './Row';

export default function Detail() {
    const [data, setData] = React.useState([]);

    var apiLink = 'api/HocPhi/chitiethp/' + localStorage.getItem('id');

    useEffect(() => {
        fetch(apiLink).then((res) => res.json()).then((data) => setData(data));
    }, []);

    const fakeDataJson = [
        {
            "id": 1,
            "name": "Học phí",
            "price": String(data.hocPhi)
        },
        {
            "id": 2,
            "name": "Kinh phí nhập học",
            "price": String(data.kinhPhiNhapHoc)
        },
        {
            "id": 3,
            "name": "Bảo hiểm y tế",
            "price": String(data.phiBHYT)
        },
        {
            "id": 4,
            "name": "Bảo hiểm tai nạn",
            "price": String(data.phiBHTN)
        },
        {
            "id": 5,
            "name": "Ký túc xá",
            "price": String(data.phiKTX)
        },
        {
            "id": 6,
            "name": "Đồng phục các loại",
            "price": String(data.phiDongPhuc)
        },
        {
            "id": 7,
            "name": "Phí chất lượng cao",
            "price": String(data.phiCLC)
        }
    ];


    const fakeData = fakeDataJson.map((item) => {        
        if (item.price == "0") return;
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