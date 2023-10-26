import React from 'react';
import Header from '../MainHeader/MainHeader';
import Form from './Form/Form';
import './Info.css';

export default function Info() {
  return (
    <div className='info-container'>
      <Header number="1" title="THÔNG TIN CÁ NHÂN"/>
      <Form />
    </div>
  );
}