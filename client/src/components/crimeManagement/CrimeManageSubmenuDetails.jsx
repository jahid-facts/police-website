import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import { useEffect } from 'react';
import axios from 'axios';


const CrimeManageSubmenuDetails = () => {

    const [crimeData, setCrimeData] = useState([]);

    const {id} = useParams();
    useEffect(() => {
      axios.get(`crime-pages/${id}`)
      .then((res) => {
        setCrimeData(res.data);
      })  
    },[id])
    if (!crimeData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container py-3">
            <div className="row g-3">
                <div className="col-md-9">
                    <div className="geo__familarity">
                        <h6 className="geo__familarity__title">{crimeData?.title}</h6>
                    </div>
                    <div dangerouslySetInnerHTML={{__html:crimeData?.content}}></div>
                </div>
                <div className="col-md-3">
                    <LeftHomePage />
                </div>
            </div>

        </div>
    );
};

export default CrimeManageSubmenuDetails;