import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/HomePage/HomePage";
import Info from './components/GeneralInfomation/Info';
import UploadFile from './components/UploadFile/UploadFile';
import Bank from './components/Bank/Bank';
import CnD from './components/CnD/CnD';
import Main from './components/Main/Main';
import Bill from './components/Bill/Bill';
import Last from "./components/Last/Last";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/main" element={<Main />} />
                <Route path="/info" element={<Info />} />
                <Route path="/bank" element={<Bank />} />
                <Route path="/cnd" element={<CnD />} />
                <Route path="/upload" element={<UploadFile />} />
                <Route path="/bill" element={<Bill />} />
                <Route path="/done" element={<Last />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    );
}