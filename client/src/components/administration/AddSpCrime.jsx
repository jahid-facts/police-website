import React, { useState } from 'react';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import { useParams } from 'react-router-dom';
import add_sp_crime_img from '../../assets/add_sp_crime_img.gif';



const AddSpCrime = () => {
   
    return (
        <div className="container pt-1">
            <div className="row">
                <div className="col-md-9 pe-md-3">
                    <div className="dig__details">
                        <h6 className="dig__details__title">অতিরিক্ত পুলিশ সুপার ( ক্রাইম অ্যান্ড অপস্ )</h6>
                    </div>
                    <div className="pt-2">
                        <div className="dig__detils__image pe-md-3" style={{ float: "left" }}>
                            <img src={add_sp_crime_img} className="img-fluid" alt="image" loading='lazy' />
                        </div>
                        <div className="">
                            <h6 className="dig__details__card__title">জনাব মোঃ আল আমিন হোসাইন</h6>
                            <p className="dig__desc">অতিঃ পুলিশ সুপার ( ক্রাইম অ্যান্ড অপস্ )</p>
                            <p className="dig__desc pt-1">মোবাঃ ০১৩২০-০৯৫৩০৩</p>
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

export default AddSpCrime;