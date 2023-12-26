import React from "react";
import { useEffect } from "react";
import './Form.css'; 

import Static from "./Static/Static";
import Relative from "./Static/Relative";
import Main from "../../Main/Main";

export default function Form() {
    const [tmp, setTmp] = React.useState("");
    
    // get json via API
    const [data, setData] = React.useState([]);

    const link = "/api/SinhVien/"+localStorage.getItem("id");

    useEffect(() => {
        fetch(link)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    const HandleChange = () => {
        //if checkbox is checked
        if(document.getElementById("check").checked) {
            document.getElementById("tmp-address").disabled = false;
        }
        else {
            document.getElementById("tmp-address").disabled = true;
            setTmp("");
        }
    }

    const date = formatDate(data.ngaySinh);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
        const year = date.getFullYear();
      
        return `${day}/${month}/${year}`;
    }

    const test = () => {
        // redirect to home page
        window.location.href = "/main";
    }
    
    return (
        <div>
            <Static 
                Path={data.link}
                SBD={data.soCCCD}
                HoTen={data.hoTen} 
                NgaySinh={date}
                GioiTinh={data.gioiTinh}
            />
            <h1 className="sub-title">THÔNG TIN CÁ NHÂN (*)</h1>
            <form className="form-container">
                <input 
                    type="text" 
                    placeholder="Số điện thoại" 
                    id="phone-number" 
                    required
                />
                <input 
                    type="text" 
                    placeholder="Địa chỉ thường trú: 15/2, Tổ 2, Ấp 3, Xã Bình Mỹ, Huyện Củ Chi, Tp.HCM" 
                    id="address" 
                    required
                />
                <div className="form-container--select">
                    <input type="checkbox" id="check" onChange={HandleChange}/>
                    <label htmlFor="check" id="check-text">Tạm trú</label>
                </div>
                <input 
                    type="text" 
                    placeholder="Địa chỉ tạm trú: 26/5, Tổ 2, Khu phố 3, Phường Bình Hưng Hòa B, Quận Bình Tân, Tp.HCM" 
                    id="tmp-address" 
                    disabled={true} 
                    value={tmp}
                    onChange={(e) => setTmp(e.target.value)}
                />
            </form>
            <h1 className="sub-title">THÔNG TIN NGƯỜI THÂN 1 (*)</h1>
            <Relative id="1"/>
            <h1 className="sub-title">THÔNG TIN NGƯỜI THÂN 2 (TÙY CHỌN)</h1>
            <Relative id="2"/>
            <div className="btn-container">
                <button onClick={test} className="btn btn--confirm">Xác nhận</button>
            </div>
        </div>
    );
}