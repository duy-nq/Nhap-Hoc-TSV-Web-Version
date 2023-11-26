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
                title="Hướng dẫn đặt tên File"
                content="Tên file gồm 3 phần: 
                Mã hồ sơ-MSSV-Thứ tự của từng file ảnh.
                Ví dụ với mục Giấy khai sinh: 03-N23xxxx001-1.
                Ví dụ với mục Học bạ: 01-N23xxxx001-1, 01-N23xxxx001-2, v.v
                "
            />
        </div>
    );
}