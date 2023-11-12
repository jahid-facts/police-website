import React, { useState } from 'react';
import LeftHomePage from '../mainHomePage/LeftHomePage';

const DoRegarding = () => {
   


    return (
        <div className="container py-3">
            <div className="row g-3">
                <div className="col-md-9">
                    <div className="geo__familarity">
                        <h6 className="geo__familarity__title">ডিও সংক্রান্ত</h6>
                    </div>
                </div>
                <div className="col-md-3">
                    <LeftHomePage />
                </div>
            </div>

        </div>
    );
};

export default DoRegarding;