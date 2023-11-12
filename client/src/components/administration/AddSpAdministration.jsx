import React, { useState } from 'react';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import { useParams } from 'react-router-dom';
import addSp_img from '../../assets/addSp_img.jpeg';



const AddSpAdministration = () => {
   
    return (
        <div className="container pt-1">
            <div className="row">
                <div className="col-md-9 pe-md-3">
                    <div className="dig__details">
                        <h6 className="dig__details__title">অতিরিক্ত পুলিশ সুপার( প্রশাসন ও অর্থ)</h6>
                    </div>
                    <div className="pt-2">
                        <div className="dig__detils__image pe-md-3" style={{ float: "left" }}>
                            <img src={addSp_img} className="img-fluid" alt="image" loading='lazy' />
                        </div>
                        <div className="">
                            <h6 className="dig__details__card__title">জনাব মোঃ মোস্তাক সরকার</h6>
                            <p className="dig__desc">অতিঃ পুলিশ সুপার( প্রশাসন ও অর্থ)</p>
                            <p className="dig__desc pt-1">মোবাঃ - ০১৩২০-০৯৫৩০২</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <LeftHomePage />
                </div>
            </div>
        </div>
    );
};

export default AddSpAdministration;