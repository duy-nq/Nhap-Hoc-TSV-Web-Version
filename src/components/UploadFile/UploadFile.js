import React from "react";
import Header from "../MainHeader/MainHeader";
import "./UploadFile.css";
import Form from "./Form/Form";
import PopUp from "../PopUp/PopUp";

export default function UploadFile() {
    return (
        <div className="upload-container">
            <Header number="2" title="HỒ SƠ SINH VIÊN" />
            <Form />
            <PopUp 
                title="Hướng dẫn"
                content="Thí sinh upload file lên cloud trước khi thực hiện đăng ký online.
                        Mỗi hồ sơ cần đặt vào 1 thư mục riêng biệt, tên thư mục là mã hồ sơ.
                        Tên file gồm 2 phần: mã hồ sơ và thứ tự của các file, cách nhau bởi dấu gạch dưới.
                        Ví dụ: có 10 trang học bạ thì tên file trong các thư mục sẽ là: 01_Page01, 01_Page02, 01_Page03, ..., 01_Page10.
                    "
            />
        </div>
    );
}