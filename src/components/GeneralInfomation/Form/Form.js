import React from "react";
import './Form.css';

import Static from "./Static/Static";

export default function Form() {
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
                <input type="text" placeholder="Số điện thoại" id="phone-number" required/>
                <input type="text" placeholder="Địa chỉ thường trú" id="address" required/>
                <div className="form-container--select">
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check" id="check-text">Tạm trú</label>
                </div>
                <input type="text" placeholder="Địa chỉ tạm trú" id="tmp-address"/>
            </form>
        </div>
    );
}