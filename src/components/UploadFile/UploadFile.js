import React from "react";
import Header from "../MainHeader/MainHeader";
import "./UploadFile.css";
import Form from "./Form/Form";

export default function UploadFile() {
    return (
        <div className="upload-container">
            <Header number="2" title="HỒ SƠ SINH VIÊN" />
            <Form />
        </div>
    );
}