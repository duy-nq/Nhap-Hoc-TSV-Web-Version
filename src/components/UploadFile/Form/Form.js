import React from "react";
import "./Form.css";
import FileHolder from "./FileHolder/FileHolder";

export default function Form() {
    const OpenPopUp = () => {
        document.querySelector('.popup').style.display = 'flex';
    }
    
    return (
        <div className="form-container">
            <FileHolder
                id="1"
                title="1. Học bạ THPT (*)"
                sub="Bản sao công chứng"/>
            <FileHolder 
                id="2"
                title="2. Giấy xác nhận tốt nghiệp THPT tạm thời (*)"
                sub="Yêu cầu bằng tốt nghiệp đối với thí sinh tốt nghiệp từ năm 2022 trở về trước"/>
            <FileHolder 
                id="3"
                title="3. Giấy khai sinh (*)"
                sub="Bản sao công chứng"/>
            <FileHolder 
                id="4"
                title="4. Đối tượng ưu tiên"
                sub="Bản sao công chứng với các loại giấy tờ trong danh sách đính kèm"/>
            <FileHolder 
                id="5"
                title="5. Giấy báo trúng tuyển (*)"
                sub="Bản gốc"/>
            <FileHolder 
                id="6"
                title="6. Giấy chứng nhận"
                sub="Giấy khen các cuộc thi HSG cấp quốc gia, tỉnh/thành phố; chứng chỉ quốc tế; giấy chứng nhận kết quả thi ĐGNL năm 2023"/>
            <FileHolder 
                id="7"
                title="7. Hồ sơ sinh viên (*)"
                sub="Theo mẫu của Bộ Giáo dục & Đào tạo, có dán ảnh, đóng dấu giáp lai và xác nhận của UBND phường, xã nơi cư trú"/>
            <FileHolder 
                id="8"
                title="8. Giấy chuyển sinh hoạt Đoàn (Đảng)"/>
            <FileHolder 
                id="9"
                title="9. Giấy chuyển NVQS (với nam giới)"
                sub="Ban chỉ huy quân sự quận, huyện nơi đăng ký hộ khẩu thường trú cấp"/>
            <FileHolder 
                id="10"
                title="10. Thẻ BHYT (*)"/>
            <FileHolder 
                id="11"
                title="11. Chứng chỉ Anh Văn hoặc QPAN"
                sub="Xem trong danh mục đính kèm"/>
            <div className="btn-container">
                <button className="guide-btn" onClick={OpenPopUp}>Xem hướng dẫn</button>
                <button className="confirm-btn">Xác nhận</button>
            </div>
        </div>
    );
}