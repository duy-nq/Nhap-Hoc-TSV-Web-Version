import React from "react";
import { useState } from "react";
import './Form.css';
import SizePicker from "./SizePicker/Size";
import Quantity from "./SizePicker/Quantity";
import { useEffect } from "react";

export default function Form() {
    const [text, setText] = useState("");
    
    const [data, setData] = useState([]);

    const [dataKTX, setDataKTX] = useState([]);

    var apiLink = 'api/DongPhuc/danhsachdongphuc';
    var apiThanhToan = 'api/HocPhi/getlink/' + localStorage.getItem('id');

    useEffect(() => {
        fetch(apiThanhToan).then((res) => res.text()).then((data) => 
            {
                if (data === "Sinh viên đã thanh toán học phí online!")
                {
                    alert("Đã thanh toán học phí, không thể đăng ký đồng phục và KTX!");
                    window.location.href = "/main";
                }
            }
        );
    }, []);

    useEffect(() => {
        fetch(apiLink).then((res) => res.json()).then((data) => setData(data));
    }, []);

    useEffect(() => {
        fetch('api/KTX/danhsachktx').then((res) => res.json()).then((data) => setDataKTX(data));
    }, []);

    const options = dataKTX.map((item) => {
        var id = item.donGia == 480000 ? "DV" : "TC";
        return (
            <option value={id}>{item.tenPhong} - {item.donGia}</option>
        );
    });

    const quantity = data.map((item) => {
        var min_val = item.maDongPhuc === 'dp004' || item.maDongPhuc === 'dp003' ? '0' : '1';
        
        return (
            <Quantity id = {item.maDongPhuc} name={item.tenDongPhuc} min={min_val}/>
        );
    });

    const changeDorm = () => {
        var value = document.querySelector(".select-ktx").value;
        if (value != "0") {
            setText("Ban Quản lý KTX của học viện sẽ tiến hành sắp xếp phòng theo nhu cầu và thông báo lại với bạn qua gmail sinh viên!");
        }
        else {
            setText("");
        }
    }

    async function CND(item) {
        const link = 'api/DongPhuc/muadongphuc/' + localStorage.getItem("id");
        
        const response = await fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });

        if (response.ok) {
        
        }
        else {
            alert("Đăng ký đồng phục thất bại!");
        }
    }

    async function KTX() {
        const data = {
            soCCCD: localStorage.getItem("id"),
            maPhong: document.querySelector(".select-ktx").value,
            ghiChu: ""
        }

        const link = 'api/KTX/dangky/' + localStorage.getItem("id");
        
        const response = await fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("Đăng ký KTX thành công!");
        }
        else {
            alert("Đăng ký KTX thất bại!");
        }
    }

    const HandleConfirm = () => {
        var quantity = document.querySelectorAll(".quantity");
        var size = document.querySelectorAll(".select-size");
        var data = [];

        for (var i = 0; i < quantity.length; i++) {
            var tmp = quantity[i].value;
            
            var temp = {
                soCCCD: localStorage.getItem("id"),
                maDongPhuc: quantity[i].parentNode.id,
                kichCo: size[i].value,
                soLuong: tmp 
            }
            data.push(temp);
        }
       
        var value = document.querySelector(".select-ktx").value;
        if (value != "0") KTX();

        for (var item in data) CND(data[item]);


        alert("Đăng ký thành công!");
        window.location.href = "/main";
    }

    return (
        <div className="form-container">
            <div className="ktx">
                <select className="select-ktx" onChange={changeDorm}>
                    <option value="0">Không đăng ký dịch vụ KTX tại học viện</option>
                    {options}
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