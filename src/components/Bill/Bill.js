import React from 'react';
import './Bill.css';
import MainHeader from '../MainHeader/MainHeader';
import Detail from './Details/Detail';
import { useNavigate } from 'react-router-dom';
import PopUp from '../PopUp/PopUp';

export default function Bill() {
    const navigate = useNavigate();
    const [showPopUp, setShowPopUp] = React.useState(false);

    const isPurchase = false;

    function ToMain() {
        navigate("/main");
    }

    function Guide() {
        if (isPurchase) {
            alert("Bạn đã thanh toán học phí online");
            return;
        }
        
        setShowPopUp(true);

        setTimeout(ToMain, 3000);
    }
    
    async function Purchase() {
        var apiLink = 'api/HocPhi/getlink/' + localStorage.getItem('id');
        
        const response = await fetch(apiLink, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.text();

        if (data === "Sinh viên đã thanh toán học phí online!") {
            alert(data);
            navigate("/main");
        }

        if (response.ok) {
            window.open(data, "_blank")
        }
        else {
            console.log("Fail");
        }
    }

    return(
        <div className="bill-container">
            <MainHeader number="5" title="Hóa đơn thanh toán"/>
            <div className="form-container">
                <Detail />
                <div className="btn-holder-2">
                    <button className="btn-2" onClick={Guide}>Thanh toán tại học viện</button>
                    <button className="btn-2" onClick={Purchase}>Thanh toán trực tuyến</button>
                </div>
                {showPopUp && 
                <PopUp 
                    title="Thanh toán tại học viện"
                    content="Đến phòng tài chính để thanh toán học phí trước ngày 30/09/2023"                    
                />
                }
            </div>
        </div>
    );
}