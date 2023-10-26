import React from 'react';
import { useState } from 'react';
import './FileHolder.css';
import Box from './Box';

export default function FileHolder(props) {
    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(selectedFiles);
    };

    const handleUploadClick = () => {
        const button = document.querySelector('.upload-btn');       

        // Attach the hidden input to the button
        const input = document.createElement('input');
        input.type = 'file';
        input.multiple = true;
        input.accept = props.accept;
        input.onchange = handleFileChange;
        input.click();
    };
    
    return (
        <div className="file-container">
            <div className="file-title">
                <h2>{props.title}</h2>
                <h3 className='sub'>{props.sub}</h3>
                <button className="upload-btn" onClick={handleUploadClick}>
                    <i className="fa fa-upload"></i> 
                    Upload   
                </button>
            </div>
            <div className="file-content">
                {files.map((file, index) => (
                    <Box fileName={file.name} />
                ))}
            </div>
        </div>
    );
}