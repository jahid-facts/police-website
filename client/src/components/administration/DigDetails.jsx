import React, { useEffect, useState } from 'react';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import { useParams } from 'react-router-dom';
import dig_img from '../../assets/dig_img.gif';
import sp_img from '../../assets/sp_img.jpeg';
import axios from 'axios';
import imgUrl from '../../imgUrl';



const DigDetails = () => {
    const [digData, setDigData] = useState({});
    useEffect(() => {
       axios.get(`dig`)
       .then(res => setDigData(res.data)) 
    },[])

    return (
        <div className="container pt-1">
            <div className="row">
                <div className="col-md-9 pe-md-3">
                    <div className="dig__details">
                        <h6 className="dig__details__title">ডিআইজি</h6>
                    </div>
                    <div className="pt-2">
                        <div className="dig__detils__image pe-md-3" style={{ float: "left" }}>
                            <img src={`${imgUrl}/${digData?.image}`} className="img-fluid" alt="image" loading='lazy' />
                        </div>
                        <div className="">
                            <h5 className="dig__details__card__title">{digData?.name}</h5>
                            <small className="fw-bold">{digData?.designation}</small>
                            <div dangerouslySetInnerHTML={{ __html: digData?.content }} className="dig__desc pt-1"></div>
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

export default DigDetails;