import React from "react";
import './Form.css';

export default function Form() {
    const [placeholder, setPlaceholder] = React.useState("");
    const [inputValue, setInputValue] = React.useState("");
    const [name, setName] = React.useState("");
    const [sdt, setSdt] = React.useState("");
    const [selectedOption, setSelectedOption] = React.useState("SMS Banking");

    const strictMode = false;

    React.useEffect(() => {
        setPlaceholder("Tối đa 12 chữ số");
    }, []);
    
    // name on card: max 20 characters
    const regex01 = /^[a-zA-Z\s]{0,20}$/;
    // id on passport: start with 1 capital letter, max 7 numbers
    const regex02 = /^[A-Z]{0,1}[0-9]{0,7}$/;
    // default id: 12 numbers
    const regex03 = /^[0-9]{0,12}$/;

    const validateName = (e) => {
        const input = e.target.value;
        if (regex01.test(input)) {
            setName(input);
        } else {
            setName(input.slice(0, -1));
        }
    };
    
    const validatePassport = (e) => {
        const input = e.target.value;
        if (regex02.test(input)) {
            setInputValue(input);
        } else {
            setInputValue(input.slice(0, -1));
        }
    };
    
    const validateID = (e) => {
        const input = e.target.value;
        if (regex03.test(input)) {
            setInputValue(input);
        } else {
            setInputValue(input.slice(0, -1));
        }
    };

    const [onchange, setOnchange] = React.useState(() => validateID);

    const HandleChange = (e) => {
        const input = e.target.value;
        if (input === "passport") {
            setInputValue("");
            setPlaceholder("Tối đa 8 ký tự");
            setOnchange(() => validatePassport);
        } else {
            setInputValue("");
            setPlaceholder("Tối đa 12 ký tự");
            setOnchange(() => validateID);
        }
    }

    const HandleBankChange = (e) => {
        const input = e.target.value;
        setSelectedOption(input);
    }

    async function Banking() {
        var apiLink = "api/SinhVien/banking/" + localStorage.getItem("id");
        
        const response = await fetch(apiLink, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "soCCCD": inputValue,
                "hoTenInTrenThe": name,
                "ngayCap": document.getElementsByClassName("date-picker")[0].value,
                "sdt": sdt,
                "dichVu": selectedOption
            })
        
        });

        console.log(response);

        if (response.ok) {
            try {
                const data = await response.text();
                console.log(data);
                alert("Đăng ký thành công");
                window.location.href = "/main";
            } catch (error) {
                const data = await response.json();
                console.log(data);
            }
        }
        else {
            alert("Đã có lỗi xảy ra, vui lòng thử lại sau");
        }
    }

    const validate = () => {
        if (name === "" || inputValue === "" || sdt === "") {
            alert("Vui lòng điền đầy đủ thông tin");
            return false;
        }

        if (document.getElementsByClassName("date-picker").value === undefined) {
            alert("Vui lòng chọn ngày cấp");
            return false;
        }

        if (sdt.length !== 10) {
            alert("Số điện thoại không hợp lệ");
            return false;
        }

        return true;
    }
    
    const HandleConfirm = () => {
        if (strictMode) {
            validate();
        }

        Banking();

        //window.location.href = "/main";
    }

    return (
        <div className="form-container">
            <div className="form-content-col">
                <h2 className="form-title">Tên in trên thẻ</h2>
                <input className="text" type="text" value={name} placeholder="Tối đa 20 ký tự" onChange={validateName} required={true}/>
            </div>
            <div className="form-content-col">
                <select className="select" onChange={HandleChange}>
                    <option value="cccd">Căn cước công dân</option>
                    <option value="passport">Hộ chiếu</option>
                </select> 
                <input id="id" className="text" type="text" value={inputValue} placeholder={placeholder} onChange={onchange} required={true}/>
            </div>
            <div className="form-content-row">
                <div className="form-content-col">
                    <h2 className="form-title">Ngày cấp</h2>
                    <input className="date-picker" type="date" required={true}/>
                </div>
                <div className="form-content-col">
                    <h2 className="form-title">Số điện thoại</h2>
                    <input className="text" type="text" required={true} value={sdt} onChange={(e) => (setSdt(e.target.value))}/>
                </div>
            </div>
            <div className="form-content-col">
                <select className="select" id="bank" value={selectedOption} onChange={HandleBankChange}>
                    <option value="None">Tôi không tham gia các dịch vụ mở rộng</option>
                    <option value="SMS Banking">Tôi đồng ý tham gia dịch vụ SMS Banking</option>
                    <option value="Giao dịch Internet (E-Commerce)">Tôi đồng ý tham gia dịch vụ Internet Banking</option>
                    <option value="All">Tôi đồng ý tham gia cả hai dịch vụ SMS Banking và Internet Banking</option>
                </select>
            </div>
            <div className="form-content-row">
                <button className="btn-confirm" onClick={HandleConfirm}>Xác nhận</button>
            </div>
        </div>
    );
}