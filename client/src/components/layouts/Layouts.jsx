import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../footer/Footer';
import Header from '../header/Header';
import HeaderTop from '../header/HeaderTop';
import HeaderBottom from '../header/HeaderBottom';

const Layouts = ({ childdren }) => {
    return (
        <>
            <div className="pd__lr">
                <div className="bg-white">
                    <HeaderTop />
                    <Header />
                    <HeaderBottom />
                    <div>{childdren}</div>
                    <div className="content">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Layouts;