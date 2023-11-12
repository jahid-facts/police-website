import  { useEffect, useState } from 'react';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import axios from 'axios';
import imgUrl from '../../imgUrl';
import { useParams } from 'react-router-dom';



const SpDetails = () => {
    const [digData, setDigData] = useState({});
    const {id} = useParams();
    useEffect(() => {
       axios.get(`police-super/${id}`)
       .then(res => setDigData(res.data)) 
    },[])

    return (
        <div className="container pt-1">
            <div className="row">
                <div className="col-md-9 pe-md-3">
                    <div className="dig__details">
                        <h6 className="dig__details__title">{digData?.title}</h6>
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

export default SpDetails;