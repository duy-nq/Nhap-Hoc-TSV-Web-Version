import React from "react";
import { useEffect, useState } from "react";
import './Form.css'; 
import './Static/Relative.css'

import Static from "./Static/Static";

export default function Form() {
    const options = [
        "Afghan",
        "Albanian",
        "Algerian",
        "American",
        "Andorran",
        "Angolan",
        "Antiguans",
        "Argentinean",
        "Armenian",
        "Australian",
        "Austrian",
        "Azerbaijani",
        "Bahamian",
        "Bahraini",
        "Bangladeshi",
        "Barbadian",
        "Barbudans",
        "Batswana",
        "Belarusian",
        "Belgian",
        "Belizean",
        "Beninese",
        "Bhutanese",
        "Bolivian",
        "Bosnian",
        "Brazilian",
        "British",
        "Bruneian",
        "Bulgarian",
        "Burkinabe",
        "Burmese",
        "Burundian",
        "Cambodian",
        "Cameroonian",
        "Canadian",
        "Cape Verdean",
        "Central African",
        "Chadian",
        "Chilean",
        "Chinese",
        "Colombian",
        "Comoran",
        "Congolese",
        "Costa Rican",
        "Croatian",
        "Cuban",
        "Cypriot",
        "Czech",
        "Danish",
        "Djibouti",
        "Dominican",
        "Dutch",
        "East Timorese",
        "Ecuadorean",
        "Egyptian",
        "Emirian",
        "Equatorial Guinean",
        "Eritrean",
        "Estonian",
        "Ethiopian",
        "Fijian",
        "Filipino",
        "Finnish",
        "French",
        "Gabonese",
        "Gambian",
        "Georgian",
        "German",
        "Ghanaian",
        "Greek",
        "Grenadian",
        "Guatemalan",
        "Guinea-Bissauan",
        "Guinean",
        "Guyanese",
        "Haitian",
        "Herzegovinian",
        "Honduran",
        "Hungarian",
        "I-Kiribati",
        "Icelander",
        "Indian",
        "Indonesian",
        "Iranian",
        "Iraqi",
        "Irish",
        "Israeli",
        "Italian",
        "Ivorian",
        "Jamaican",
        "Japanese",
        "Jordanian",
        "Kazakhstani",
        "Kenyan",
        "Kittian and Nevisian",
        "Kuwaiti",
        "Kyrgyz",
        "Laotian",
        "Latvian",
        "Lebanese",
        "Liberian",
        "Libyan",
        "Liechtensteiner",
        "Lithuanian",
        "Luxembourger",
        "Macedonian",
        "Malagasy",
        "Malawian",
        "Malaysian",
        "Maldivan",
        "Malian",
        "Maltese",
        "Marshallese",
        "Mauritanian",
        "Mauritian",
        "Mexican",
        "Micronesian",
        "Moldovan",
        "Monacan",
        "Mongolian",
        "Moroccan",
        "Mosotho",
        "Motswana",
        "Mozambican",
        "Namibian",
        "Nauruan",
        "Nepalese",
        "New Zealander",
        "Nicaraguan",
        "Nigerian",
        "Nigerien",
        "North Korean",
        "Northern Irish",
        "Norwegian",
        "Omani",
        "Pakistani",
        "Palauan",
        "Panamanian",
        "Papua New Guinean",
        "Paraguayan",
        "Peruvian",
        "Polish",
        "Portuguese",
        "Qatari",
        "Romanian",
        "Russian",
        "Rwandan",
        "Saint Lucian",
        "Salvadoran",
        "Samoan",
        "San Marinese",
        "Sao Tomean",
        "Saudi",
        "Scottish",
        "Senegalese",
        "Serbian",
        "Seychellois",
        "Sierra Leonean",
        "Singaporean",
        "Slovakian",
        "Slovenian",
        "Solomon Islander",
        "Somali",
        "South African",
        "South Korean",
        "Spanish",
        "Sri Lankan",
        "Sudanese",
        "Surinamer",
        "Swazi",
        "Swedish",
        "Swiss",
        "Syrian",
        "Taiwanese",
        "Tajik",
        "Tanzanian",
        "Thai",
        "Togolese",
        "Tongan",
        "Trinidadian or Tobagonian",
        "Tunisian",
        "Turkish",
        "Tuvaluan",
        "Ugandan",
        "Ukrainian",
        "Uruguayan",
        "Uzbekistani",
        "Venezuelan",
        "Vietnamese",
        "Welsh",
        "Yemenite",
        "Zambian",
        "Zimbabwean"
    ];

    const strictMode = true;
    
    const [tmp, setTmp] = React.useState("");
    const [data, setData] = React.useState([]);
    
    const [selectedOption, setSelectedOption] = React.useState(options[188]);
    const [name, setName] = useState("");
    const [nation, setNation] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [year, setYear] = useState("");
    const [job, setJob] = useState("");

    const [selectedOption1, setSelectedOption1] = React.useState(options[188]);
    const [name1, setName1] = useState("");
    const [nation1, setNation1] = useState("");
    const [phoneNumber1, setPhoneNumber1] = useState("");
    const [address1, setAddress1] = useState("");
    const [year1, setYear1] = useState("");
    const [job1, setJob1] = useState("");

    const HandleNationality = (e) => {
        setSelectedOption(e.target.value);
    };

    const HandleNationality1 = (e) => {
        setSelectedOption1(e.target.value);
    };

    const link = "/api/SinhVien/"+localStorage.getItem("id");

    useEffect(() => {
        fetch(link)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    useEffect(() => {
        if (data.nguoiThan1) {
            setName(data.nguoiThan1.hoTen);
            setYear(data.nguoiThan1.namSinh);
            setNation(data.nguoiThan1.danToc);
            setSelectedOption(data.nguoiThan1.quocTich);
            setJob(data.nguoiThan1.ngheNghiep);
            setPhoneNumber(data.nguoiThan1.sdt);
            setAddress(data.nguoiThan1.diaChi);
        }

        if (data.nguoiThan2) {
            setName1(data.nguoiThan2.hoTen);
            setYear1(data.nguoiThan2.namSinh);
            setNation1(data.nguoiThan2.danToc);
            setSelectedOption1(data.nguoiThan2.quocTich);
            setJob1(data.nguoiThan2.ngheNghiep);
            setPhoneNumber1(data.nguoiThan2.sdt);
            setAddress1(data.nguoiThan2.diaChi);
        }
    }, [data]);

    const HandleChange = () => {
        //if checkbox is checked
        if(document.getElementById("check").checked) {
            document.getElementById("tmp-address").disabled = false;
        }
        else {
            document.getElementById("tmp-address").disabled = true;
            setTmp("");
        }
    }

    const date = formatDate(data.ngaySinh);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
        const year = date.getFullYear();
      
        return `${day}/${month}/${year}`;
    }

    async function Update(data) {
        var linkUpdate = "/api/SinhVien/updateSV/"+localStorage.getItem("id");
        const res = await fetch(linkUpdate, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            try {
                const response = await res.text();
                console.log(response.message);

                alert("Đã lưu thông tin");

                window.location.href = "/main";
            } catch (error) {
                const response = await res.json();
                console.log(response.message);
            }
        }
        else {
            alert("Đã xảy ra lỗi");
        }
    }

    function validate() {
        if (document.getElementById("address").value === "") {
            alert("Vui lòng điền địa chỉ thường trú của bạn");
            return false;
        }

        if (document.getElementById("phone-number").value === "") {
            alert("Vui lòng điền số điện thoại của bạn");
            return false;
        }

        if (document.getElementById("tmp-address").value === "" && document.getElementById("check").checked) {
            alert("Vui lòng điền địa chỉ tạm trú của bạn");
            return false;
        }

        if (name === "" || year === "" || phoneNumber === "" || address === "" || job === "" || nation === "") {
            alert("Vui lòng điền đầy đủ thông tin của người thân 1");
            return false;
        }

        if (name1 === "" || year1 === "" || phoneNumber1 === "" || address1 === "" || job1 === "" || nation1 === "") {
            alert("Vui lòng điền đầy đủ thông tin của người thân 2");
            return false;
        }

        // check if year is valid
        if (year.length !== 4) {
            alert("Năm sinh của người thân 1 không hợp lệ");
            return false;
        }

        if (year1.length !== 4) {
            alert("Năm sinh của người thân 2 không hợp lệ");
            return false;
        }

        // check if phone number is valid
        if (phoneNumber.length !== 10) {
            alert("Số điện thoại của người thân 1 không hợp lệ");
            return false;
        }

        if (phoneNumber1.length !== 10) {
            alert("Số điện thoại của người thân 2 không hợp lệ");
            return false;
        }

        return true;
    }

    const test = () => {
        if (strictMode ) {
            validate()
        }
        
        data.nguoiThan1 = {
            "hoTen": name,
            "namSinh": year,
            "danToc": nation,
            "quocTich": selectedOption,
            "ngheNghiep": job,
            "sdt": phoneNumber,
            "diaChi": address
        };

        data.nguoiThan2 = {
            "hoTen": name1,
            "namSinh": year1,
            "danToc": nation1,
            "quocTich": selectedOption1,
            "ngheNghiep": job1,
            "sdt": phoneNumber1,
            "diaChi": address1
        };

        data.thuongTru = document.getElementById("address").value;
        data.sdt = document.getElementById("phone-number").value;
        data.tamTru = tmp;
        data.avatarPath = "";
        data.quocTich = "Vietnamese";

        Update(data);
    }
    
    return (
        <div>
            <Static 
                Path={data.link}
                SBD={data.soCCCD}
                HoTen={data.hoTen} 
                NgaySinh={date}
                GioiTinh={data.gioiTinh}
            />
            <h1 className="sub-title">THÔNG TIN CÁ NHÂN (*)</h1>
            <form className="form-container">
                <input 
                    type="text" 
                    placeholder="Số điện thoại" 
                    id="phone-number" 
                    defaultValue={data.sdt}
                    required
                />
                <input 
                    type="text" 
                    placeholder="Địa chỉ thường trú: 15/2, Tổ 2, Ấp 3, Xã Bình Mỹ, Huyện Củ Chi, Tp.HCM" 
                    id="address" 
                    defaultValue={data.thuongTru}
                    required
                />
                <div className="form-container--select">
                    <input type="checkbox" id="check" onChange={HandleChange}/>
                    <label htmlFor="check" id="check-text">Tạm trú</label>
                </div>
                <input 
                    type="text" 
                    placeholder="Địa chỉ tạm trú: 26/5, Tổ 2, Khu phố 3, Phường Bình Hưng Hòa B, Quận Bình Tân, Tp.HCM" 
                    id="tmp-address" 
                    disabled={true} 
                    value={tmp}
                    onChange={(e) => setTmp(e.target.value)}
                />
            </form>
            <h1 className="sub-title">THÔNG TIN NGƯỜI THÂN 1 (*)</h1>
            <form className="form-container">
            <input 
                type="text" 
                placeholder="Họ và tên" 
                className="text-input"
                id="name"
                value={name}
                onChange={(e) => (
                    setName(e.target.value)
                )}
                required
            />
            <input 
                type="text" 
                placeholder="Năm sinh"
                className="text-input"
                id="year"
                value={year}
                onChange={(e) => (                    
                    !isNaN(e.target.value) && e.target.value.length <= 4 && 
                    setYear(e.target.value)      
                )}
                required
            />
            <input 
                type="text" 
                placeholder="Dân tộc"
                className="text-input"
                id="year"
                value={nation}
                onChange={(e) => (                    
                    e.target.value.length <= 20 && 
                    setNation(e.target.value)      
                )}
                required
            />
            <select required className="nationality" value={selectedOption} onChange={HandleNationality}>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
            <input 
                type="text" 
                placeholder="Số điện thoại" 
                id="phone-number"
                value={phoneNumber}
                onChange={(e) => (                    
                    !isNaN(e.target.value) && e.target.value.length <= 10 && 
                    setPhoneNumber(e.target.value)      
                )}
                required
            />
            <input 
                type="text" 
                placeholder="Nghề nghiệp" 
                className="text-input"
                id="name"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                required
            />
            <input 
                type="text" 
                placeholder="Địa chỉ thường trú: 15/2, Tổ 2, Ấp 3, Xã Bình Mỹ, Huyện Củ Chi, Tp.HCM" 
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
            />
            </form>
            <h1 className="sub-title">THÔNG TIN NGƯỜI THÂN 2 (*)</h1>
            <form className="form-container">
            <input 
                type="text" 
                placeholder="Họ và tên" 
                className="text-input"
                id="name"
                value={name1}
                onChange={(e) => (
                    setName1(e.target.value)
                )}
                required
            />
            <input 
                type="text" 
                placeholder="Năm sinh"
                className="text-input"
                id="year"
                value={year1}
                onChange={(e) => (                    
                    !isNaN(e.target.value) && e.target.value.length <= 4 && 
                    setYear1(e.target.value)      
                )}
                required
            />
            <input 
                type="text" 
                placeholder="Dân tộc"
                className="text-input"
                id="year"
                value={nation1}
                onChange={(e) => (                    
                    e.target.value.length <= 20 && 
                    setNation1(e.target.value)      
                )}
                required
            />
            <select required className="nationality" value={selectedOption1} onChange={HandleNationality1}>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
            <input 
                type="text" 
                placeholder="Số điện thoại" 
                id="phone-number"
                value={phoneNumber1}
                onChange={(e) => (                    
                    !isNaN(e.target.value) && e.target.value.length <= 10 && 
                    setPhoneNumber1(e.target.value)      
                )}
                required
            />
            <input 
                type="text" 
                placeholder="Nghề nghiệp" 
                className="text-input"
                id="name"
                value={job1}
                onChange={(e) => setJob1(e.target.value)}
                required
            />
            <input 
                type="text" 
                placeholder="Địa chỉ thường trú: 15/2, Tổ 2, Ấp 3, Xã Bình Mỹ, Huyện Củ Chi, Tp.HCM" 
                id="address"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                required
            />
            </form>
            <div className="btn-container">
                <button onClick={test} className="btn btn--confirm">Xác nhận</button>
            </div>
        </div>
    );
}