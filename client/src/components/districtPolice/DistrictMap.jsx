import React from 'react';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import map_kishorgonj from "../../assets/map_kishorgonj.jpg";

const DistrictMap = () => {
    return (
        <div className="container py-3">
            <div className="row g-3">
                <div className="col-md-9">
                    <div className="geo__familarity">
                        <h6 className="geo__familarity__title">কিশোরগঞ্জ জেলার ম্যাপ</h6>
                    </div>
                    <div className="district__map">
                        <img src={map_kishorgonj} alt="map" loading='lazy' />
                    </div>
                </div>
                <div className="col-md-3">
                    <LeftHomePage />
                </div>
            </div>
        </div>
    );
};

export default DistrictMap;