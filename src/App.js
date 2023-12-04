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
import withAuth from "./HOCS";

export default function App() {
    const protectedPage01 = withAuth(Main);

    const protectedPage = [
        withAuth(Main),
        withAuth(Info),
        withAuth(UploadFile),
        withAuth(Bank),
        withAuth(CnD),
        withAuth(Bill),
        withAuth(Last)
    ]
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/main" Component={protectedPage[0]}/>
                <Route path="/info" Component={protectedPage[1]} />
                <Route path="/bank"Component={protectedPage[3]} />
                <Route path="/cnd" Component={protectedPage[4]} />
                <Route path="/upload" Component={protectedPage[2]} />
                <Route path="/bill" Component={protectedPage[5]} />
                <Route path="/done" Component={protectedPage[6]} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    );
}