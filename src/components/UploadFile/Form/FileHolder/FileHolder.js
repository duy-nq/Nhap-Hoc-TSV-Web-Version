import React from 'react';
import { useState } from 'react';
import './FileHolder.css';
import './LinkHolder.css';
import Box from './Box';

export default function FileHolder(props) {
    const [files, setFiles] = useState([]);
    const [link, setLink] = useState(false);
    const [linkToFile, setLinkToFile] = useState('');

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

    function linkChange(event) {
        setLinkToFile(event.target.value);
    }


    function LinkHolder() {
        const Confirm = () => {
            
            
            setLink(false);
        }
        
        return (
            <div className="popup-link" id={props.id}>
                <div className="popup-inner-link">
                    <h1>{props.title}</h1>
                    <input className="link" type="text" value={linkToFile} onchange={linkChange}/>
                    <button onClick={Confirm}>Xác nhận</button>
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