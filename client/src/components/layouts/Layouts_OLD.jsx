import React from 'react';
import Header from '../header/Header';
import { Outlet } from "react-router-dom";
import Footer from '../footer/Footer';
import HeaderTop from '../headerTop/HeaderTop';

const Layouts = ({ children }) => {
    // console.log('children checking',children)
    return (
        <>
            <HeaderTop />
            <Header />
            <div>{children}</div>
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Layouts;