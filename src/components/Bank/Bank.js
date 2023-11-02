import React from "react";
import './Bank.css';
import MainHeader from "../MainHeader/MainHeader";
import Form from "./Form/Form";

export default function Bank() {
    return (
        <div className="bank-container">
            <MainHeader number="3" title="THẺ LIÊN KẾT SINH VIÊN" />
            <Form />
        </div>
    );
}