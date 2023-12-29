import React, { useEffect } from 'react';
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

    async function CheckBill() {
        var apiLink = 'api/HocPhi/chitiethp/' + localStorage.getItem('id');
        
        const response = await fetch(apiLink, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            if (data["phiDongPhuc"] === 0) {
                alert("Vui lòng đăng ký đồng phục trước khi thực hiện thanh toán");
                ToMain();
            }
        }
        else {
            console.log("Fail");
        }   
    }

    async function GetBill() {
        var apiLink = 'api/HocPhi/hoadon/' + localStorage.getItem('id');
        
        const response = await fetch(apiLink, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            var info = 'Mã hóa đơn: ' + data["maHD"] + '\n' 
                        + 'Số tiền: ' + data["soTien"] + '\n' 
                        + 'Thời điểm: ' + data["thoiDiem"] + '\n'
                        + 'Nội dung: ' + data["noiDung"] + '\n';
            alert(info);
        }
        else {
            console.log("Fail");
        }
    }

    function Guide() {
        if (isPurchase) {
            alert("Bạn đã thanh toán học phí online");
            return;
        }
        
        setShowPopUp(true);

        setTimeout(ToMain, 3000);
    }

    useEffect(() => {
        var apiLink = 'api/HocPhi/getlink/' + localStorage.getItem('id');
        
        fetch(apiLink).then((res) => res.text()).then((data) => 
            {
                if (data === "Sinh viên đã thanh toán học phí online!")
                {
                    GetBill();
                    window.location.href = "/main";
                }
            }
        );
    }, []);

    useEffect(() => {
        CheckBill();
    }, []);
    
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
            GetBill();
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