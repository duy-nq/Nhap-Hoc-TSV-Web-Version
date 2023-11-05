import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import Form from './Form/Form';
import './CnD.css';

export default function CnD() {
    return(
        <div className='cnd-container'>
            <MainHeader number="4" title="KÝ TÚC XÁ VÀ ĐỒNG PHỤC"/>
            <Form/>
        </div>
    );
}