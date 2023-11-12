import React, { useEffect, useState } from 'react';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BitIntroduction = () => {
    const {id} = useParams();
    const [data,setData] = useState({});
    useEffect(() => {
        axios.get(`bit-police-pages/${id}`)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[id])
    return (
        <div className="container pt-1">
            <div className="row">
                <div className="col-md-9">
                    <div className="dig__details mb-2">
                        <h6 className="dig__details__title">{data?.title}</h6>
                    </div>
                    <div dangerouslySetInnerHTML={{__html:data?.content}}></div>
                </div>
                <div className="col-md-3">
                    <LeftHomePage />
                </div>
            </div>
        </div>
    );
};

export default BitIntroduction;