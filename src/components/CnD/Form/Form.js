import React from "react";
import { useState } from "react";
import './Form.css';
import SizePicker from "./SizePicker/Size";
import Quantity from "./SizePicker/Quantity";
import { useEffect } from "react";

export default function Form() {
    const [text, setText] = useState("");
    
    const [data, setData] = useState([]);

    var apiLink = 'api/DongPhuc/danhsachdongphuc';

    useEffect(() => {
        fetch(apiLink).then((res) => res.json()).then((data) => setData(data));
    }, []);

    const quantity = data.map((item) => {
        return (
            <Quantity id = {item.maDongPhuc} name={item.tenDongPhuc} min="1"/>
        );
    });

    const changeDorm = () => {
        var value = document.querySelector(".select-ktx").value;
        if (value != "0") {
            setText("Ban Quản lý KTX của học viện sẽ tiến hành sắp xếp phòng theo nhu cầu và thông báo lại với bạn qua gmail sinh viên!");
        }
        else {
            setText("");
            console.log("im here");
        }
    }

    const HandleConfirm = () => {
        var quantity = document.querySelectorAll(".quantity");
        var size = document.querySelectorAll(".select-size");
        var data = [];

        for (var i = 0; i < quantity.length; i++) {
            var tmp = quantity[i].value;

            if (tmp < 1) tmp = '1';
            else if (tmp > 3) tmp = '3';
            
            var temp = {
                id: quantity[i].parentNode.id,
                quantity: tmp,
                size: size[i].value
            }
            data.push(temp);
        }
        
        console.log(data);
    }

    return (
        <div className="form-container">
            <div className="ktx">
                <select className="select-ktx" onChange={changeDorm}>
                    <option value="0">Không đăng ký dịch vụ KTX tại học viện</option>
                    <option value="1">KTX thông thường - 250.000đ / 5 tháng</option>
                    <option value="2">KTX dịch vụ - 500.000đ / 5 tháng</option>
                </select>
                <p className="ktx-text">{text}</p>
            </div>
            <div className="uniform-container">
                <p className="uniform-title">Lựa chọn đồng phục</p>
                <a className="size-text" href="https://www.igift.hk/upload/xheditor/20151022140042112.jpg" target="_blank">Xem bảng hướng dẫn tại đây</a>
                {quantity}
            </div>
            <div className="btn-holding">
                <button className="btn-confirm" onClick={HandleConfirm}>Xác nhận</button>
            </div>
        </div>
    );
}