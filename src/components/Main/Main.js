import React, {useState} from "react";
import './Main.css';
import logo from '../../logo/Logo_PTIT_University.png';
import ContentBox from './ContentBox';

var isDone = [false, false, false, false, false, false];

export default function Main() {
    // json data for content box
    const [contentBoxes, setContentBoxes] = useState([
        { number: "1", title: "Thông tin cá nhân" },
        { number: "2", title: "Upload hồ sơ" },
        { number: "3", title: "Thẻ liên kết sinh viên" },
        { number: "4", title: "Đồng phục và KTX" },
        { number: "5", title: "Phương thức thanh toán" },
        { number: "6", title: "Hoàn thành" },
    ]);

    const [showContentBoxes, setShowContentBoxes] = useState(true);

    const Click = (e) => {
        //get the id of the clicked element
        var id = e.target.id;
        console.log(id);

        // if id is overview, remove all children of main--content
        if (id === "overview") {
            setShowContentBoxes(false);
        } else if (id === "catalogue") {
            setShowContentBoxes(true);
        }
    }

    return (
        <div className="main--container">
            <div className="main--nav">
                <img src={logo} alt="PTIT" className="main--logo" />
                <div className="main--select">
                    <h3 className="selection" id="catalogue" onMouseDown={Click}>Danh mục</h3>
                    <h3 className="selection" id="overview" onMouseDown={Click}>Tổng quan hồ sơ</h3>
                </div>
            </div>
            <div className="main--content">
                {showContentBoxes && contentBoxes.map((box, index) => (
                    <ContentBox key={index} number={box.number} title={box.title} />
                ))}
                {!showContentBoxes && 
                    <div className="main--overview">
                        <h1 className="overview--title">Tổng quan hồ sơ</h1>
                    </div>
                }
            </div>
        </div>
    );
}