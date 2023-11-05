import React from "react";
import "./Form.css";
import FileHolder from "./FileHolder/FileHolder";

export default function Form() {
    return (
        <div className="form-container">
            <FileHolder title="1. Học bạ THPT (*)"
                sub="Bản sao công chứng"/>
            <FileHolder title="2. Giấy xác nhận tốt nghiệp THPT tạm thời (*)"
                sub="Yêu cầu bằng tốt nghiệp đối với thí sinh tốt nghiệp từ năm 2022 trở về trước"/>
            <FileHolder title="3. Giấy khai sinh (*)"
                sub="Bản sao công chứng"/>
            <FileHolder title="4. Đối tượng ưu tiên"
                sub="Bản sao công chứng với các loại giấy tờ trong danh sách đính kèm"/>
            <FileHolder title="5. Giấy báo trúng tuyển (*)"
                sub="Bản gốc"/>
            <FileHolder title="6. Giấy chứng nhận"
                sub="Giấy khen các cuộc thi HSG cấp quốc gia, tỉnh/thành phố; chứng chỉ quốc tế; giấy chứng nhận kết quả thi ĐGNL năm 2023"/>
            <FileHolder title="7. Hồ sơ sinh viên (*)"
                sub="Theo mẫu của Bộ Giáo dục & Đào tạo, có dán ảnh, đóng dấu giáp lai và xác nhận của UBND phường, xã nơi cư trú"/>
            <FileHolder title="8. Giấy chuyển sinh hoạt Đoàn (Đảng)"/>
            <FileHolder title="9. Giấy chuyển NVQS (với nam giới)"
                sub="Ban chỉ huy quân sự quận, huyện nơi đăng ký hộ khẩu thường trú cấp"/>
            <FileHolder title="10. Thẻ BHYT (*)"/>
            <FileHolder title="11. Chứng chỉ Anh Văn hoặc QPAN"
                sub="Xem trong danh mục đính kèm"/>
        </div>
    );
}