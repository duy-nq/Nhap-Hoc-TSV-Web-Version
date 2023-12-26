import React from "react";
import { useState } from "react";

import './Relative.css';

export default function Relative(props) {
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

    const [selectedOption, setSelectedOption] = React.useState(options[188]);
    const [name, setName] = useState("");
    const [nation, setNation] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [year, setYear] = useState("");
    const [job, setJob] = useState("");

    const HandleNationality = (e) => {
        setSelectedOption(e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        const data = {
            "hoTen": name,
            "namSinh": year,
            "danToc": selectedOption,
            "soDienThoai": phoneNumber,
            "ngheNghiep": job,
            "diaChi": address
        };

        // check if any field is empty
        if (name === "" || year === "" || phoneNumber === "" || address === "" || job === "") {
            alert("Vui lòng điền đầy đủ thông tin");
            return;
        }

        // check if phone number is valid
        if (phoneNumber.length !== 10) {
            alert("Số điện thoại không hợp lệ");
            return;
        }

        // check if year is valid
        if (year.length !== 4) {
            alert("Năm sinh không hợp lệ");
            return;
        }

        alert("Đã lưu thông tin");
        console.log(data);
    }
    
    return (
        <form className="form-container" id={props.id}>
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
            <select required className="nationality" id={props.id} value={selectedOption} onChange={HandleNationality}>
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
            <div className="btn-container">
                <button onClick={submit} className="btn btn--confirm" id="submitRelative">Lưu</button>
            </div>
        </form>
    );
}
