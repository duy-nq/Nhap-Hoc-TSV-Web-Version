import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Info from './components/GeneralInfomation/Info';
import HomePage from './components/HomePage/HomePage';
import UploadFile from './components/UploadFile/UploadFile';
import Bank from './components/Bank/Bank';
import CnD from './components/CnD/CnD';
import Main from './components/Main/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className='container'>
    <Main />
  </div>
)
