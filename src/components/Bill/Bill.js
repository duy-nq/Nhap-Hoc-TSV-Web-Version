import React from 'react';
import './Bill.css';
import MainHeader from '../MainHeader/MainHeader';
import Detail from './Details/Detail';

export default function Bill() {
    return(
        <div className="bill-container">
            <MainHeader number="5" title="Hóa đơn thanh toán"/>
            <div className="form-container">
                <Detail />
                <div className="btn-holder-2">
                    <button className="btn-2">Thanh toán tại học viện</button>
                    <button className="btn-2">Thanh toán trực tuyến</button>
                </div>
            </div>
        </div>
    );
}