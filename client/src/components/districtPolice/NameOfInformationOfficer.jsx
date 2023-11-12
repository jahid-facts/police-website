import React, { useState } from 'react';
import LeftHomePage from '../mainHomePage/LeftHomePage';

const NameOfInformationOfficer = () => {
   


    return (
        <div className="container py-3">
            <div className="row g-3">
                <div className="col-md-9">
                    <div className="geo__familarity">
                        <h6 className="geo__familarity__title">তথ্য র্কমর্কতার নাম</h6>
                    </div>
                </div>
                <div className="col-md-3">
                    <LeftHomePage />
                </div>
            </div>

        </div>
    );
};

export default NameOfInformationOfficer;