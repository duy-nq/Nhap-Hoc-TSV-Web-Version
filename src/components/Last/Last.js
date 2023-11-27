import React from "react";
import './Last.css';
import { useNavigate } from "react-router-dom";

export default function Last() {
    // navigate to home page
    const navigate = useNavigate();

    function ToHome() {
        navigate("/");
    }

    setTimeout(ToHome, 3000);

    return(
        <div className="last--container">
            <h1 className="last--title">Cảm ơn bạn đã hoàn thành hồ sơ</h1>
            <h3 className="last--content">Hồ sơ của bạn đã được gửi đi. Hãy kiểm tra email của bạn để xem thông tin chi tiết.</h3>
        </div>
    );
}