import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import axios from 'axios';


const ServicesSubmenuDetails = () => {

    const [servicesData, setServicesData] = useState({});

    const { id } = useParams();
    useEffect(() => {
        axios.get(`services-sub-pages/${id}`)
            .then(res => {
                setServicesData(res.data)
            })
    },[id])

    return (
        <div className="container py-3">
            <div className="row g-3">
                <div className="col-md-9">
                    <div className="geo__familarity">
                        <h6 className="geo__familarity__title">{servicesData?.title}</h6>
                    </div>
                    <div dangerouslySetInnerHTML={{__html:servicesData?.content}}></div>

                </div>
                <div className="col-md-3">
                    <LeftHomePage />
                </div>
            </div>

        </div>
    );
};

export default ServicesSubmenuDetails;