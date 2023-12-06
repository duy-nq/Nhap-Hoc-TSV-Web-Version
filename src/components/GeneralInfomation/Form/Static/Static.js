import React from "react";
import './Static.css';
import Img from '../../../../img/personal-test.jpg'

export default function Static({Path, SBD, HoTen, NgaySinh, GioiTinh}) {   
    return (
        <div className="static-container">
            <div className="personal-img">
                <img alt="3x4" src={Img} />
            </div>
            <div className="personal-info">
                <div id="pi--id">Căn Cước Công Dân: {SBD}</div>
                <div id="pi--name">Họ Và Tên: {HoTen}</div>
                <div id="pi--date">Ngày Sinh: {NgaySinh}</div>
                <div id="pi--gender">Giới Tính: {GioiTinh}</div>
            </div>
        </div>
    );
}