import React from 'react';
import './Bill.css';
import MainHeader from '../MainHeader/MainHeader';
import Detail from './Details/Detail';
import { useNavigate } from 'react-router-dom';
import PopUp from '../PopUp/PopUp';

export default function Bill() {
    const navigate = useNavigate();
    const [showPopUp, setShowPopUp] = React.useState(false);

    function ToMain() {
        navigate("/main");
    }

    function Guide() {
        setShowPopUp(true);

        setTimeout(ToMain, 3000);
    }
    
    return(
        <div className="bill-container">
            <MainHeader number="5" title="Hóa đơn thanh toán"/>
            <div className="form-container">
                <Detail />
                <div className="btn-holder-2">
                    <button className="btn-2" onClick={Guide}>Thanh toán tại học viện</button>
                    <button className="btn-2">Thanh toán trực tuyến</button>
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