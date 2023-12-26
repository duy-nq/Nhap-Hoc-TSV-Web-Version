import React from 'react';
import { useState } from 'react';
import './FileHolder.css';
import './LinkHolder.css';
import Box from './Box';

export default function FileHolder(props) {
    const [files, setFiles] = useState([]);
    const [link, setLink] = useState(false);
    const [linkToFile, setLinkToFile] = useState('');
    const [isConfirm, setIsConfirm] = useState(false);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(selectedFiles);
    };

    const handleUploadClick = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.multiple = true;
        input.accept = props.accept;
        input.onchange = handleFileChange;
        input.click();

        console.log('fetching files');
    };

    function linkHolder() {
        setLink(true);
    }

    function LinkHolder() { 
        async function UploadFile(id, yourLink) {
            var apiLink = '/api/SinhVien/hoso/' + localStorage.getItem('id');
            
            const response = await fetch(apiLink, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'maHoSo': id, 'soCCCD': localStorage.getItem('id'), 'duongDan': yourLink }),
            });

            console.log(JSON.stringify({ 'maHoSo': id, 'soCCCD': localStorage.getItem('id'), 'duongDan': yourLink }));
            
            if (response.ok) {
                alert('Thao tác hành công');
            }
            else {
                alert('Nộp file thất bại');
            }
        }

        const Confirm = () => {
            if (linkToFile !== '') {
                setIsConfirm(true);
                UploadFile(props.id, linkToFile);
            }
            setLink(false);
        }

        const Cancel = () => {
            setLinkToFile('');
            UploadFile(props.id, "");
            setIsConfirm(false);
            setLink(false);
        }
        
        return (
            <div className="popup-link" id={props.id}>
                <div className="popup-inner-link">
                    <h1>{props.title}</h1>
                    <input 
                        className="link" 
                        type="text" 
                        value={linkToFile} 
                        onChange={(e) => setLinkToFile(e.target.value)}
                    />
                    <button onClick={Confirm}>Xác nhận</button>
                    {isConfirm && <button onClick={Cancel}>Hủy nộp file</button>}
                </div>
            </div>
        );
    }

    return (
        <div id={props.id} className="file-container">
            <div className="file-title">
                <h2>{props.title}</h2>
                <h3 className='sub'>{props.sub}</h3>
                <button className="upload-btn" onClick={linkHolder}>
                    <i className="fa fa-upload"></i> 
                    Upload   
                </button>
            </div>
            <div className="file-content">
                {files.map((file, index) => (
                    <Box key={index} fileName={file.name}/>
                ))}
            </div>
            {link && <LinkHolder id={props.id} title={props.title} />}
        </div>
    );
}