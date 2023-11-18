import React, {useState} from "react";
import './Form.css';

import Static from "./Static/Static";

export default function Form() {
    const [tmp, setTmp] = React.useState("");
    
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
    
    return (
        <div>
            <Static 
                Path="../../../../img/personal-test.jpg"
                SBD="020145200" 
                HoTen="Fernando Llorente" 
                NgaySinh="25-02-2005"
                GioiTinh={"Nam"}
            />
            <h1 className="sub-title">BỔ SUNG CÁC THÔNG TIN DƯỚI ĐÂY</h1>
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
            <div className="btn-container">
                <button className="btn btn--confirm">Xác nhận</button>
            </div>
        </div>
    );
}