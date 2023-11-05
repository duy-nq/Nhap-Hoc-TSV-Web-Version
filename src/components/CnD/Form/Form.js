import React from "react";
import { useState } from "react";
import './Form.css';
import SizePicker from "./SizePicker/Size";

export default function Form() {
    const [text, setText] = useState("");
    
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

    const NoTyping = (e) => {
        e.preventDefault();
    }

    const HandleConfirm = () => {
        var value = document.querySelector(".select-ktx").value;
        var quantity = [];
        var size = [];

        var uniform = document.getElementsByName("uniform");
        var uniform_value = "";
        for (var i = 0; i < uniform.length; i++) {
            if (uniform[i].checked) {
                uniform_value = uniform[i].value;
                break;
            }
        }

        if (uniform_value == "no") {
            for (var i = 0; i < 2; i++) {
                var q = document.getElementsByName("quantity")[i].value;
                if (q == "") {
                    alert("Vui lòng nhập số lượng đồng phục!");
                }
                else {
                    quantity.push(q);
                }
            }
        }
        else if (uniform_value == "yes"){
            quantity.push("1");
            quantity.push("1");
        }

        // get value from size picker
        var size_picker = document.querySelectorAll(".select-size");
        for (var i = 0; i < 2; i++) {
            var s = size_picker[i].value;
            if (s == "0") {
                alert("Vui lòng chọn size đồng phục!");
            }
            else {
                size.push(s);
            }
        }
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
                <p className="uniform-title">Số lượng đồng phục</p>
                <div className="uniform-option">
                    <input type="radio" id="yes" name="uniform" value="yes"/>
                    <label for="yes">Tiêu chuẩn (1 áo sơ mi + 1 bộ đồ thể dục)</label>
                </div>
                <div className="uniform-option">
                    <input type="radio" id="no" name="uniform" value="no" />
                    <label for="no">Tự chọn</label>
                    <div className="uniform-quantity">
                        <input type="number" id="quantity" name="quantity" min="1" max="3" onKeyDown={NoTyping}/>
                        <label for="quantity">áo sơ mi</label>
                    </div>
                    <div className="uniform-quantity">
                        <input type="number" id="quantity" name="quantity" min="1" max="3" onKeyDown={NoTyping}/>
                        <label for="quantity">bộ đồ thể dục</label>
                    </div>
                </div>
                <p className="uniform-title">Size đồng phục</p>
                <a className="size-text" href="https://www.igift.hk/upload/xheditor/20151022140042112.jpg" target="_blank">Xem bảng hướng dẫn tại đây</a>
                <div className="uniform-size">
                    <SizePicker name="Áo sơ mi"/>
                    <SizePicker name="Đồng phục thể dục"/>
                </div>
            </div>
            <div className="btn-holding">
                <button className="btn-confirm" onClick={HandleConfirm}>Xác nhận</button>
            </div>
        </div>
    );
}