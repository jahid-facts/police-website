import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import imgUrl from '../../imgUrl';


const RecentActivitiesDetails = () => {
    const params = useParams();
    const [rcDetails, setRcDetails] = useState({})

    useEffect(() => {
        axios.get(`recent-activity/${params.id}`)
            .then(res => {
                setRcDetails(res.data)
            })
    }, [params.id]);
    return (
        <div className="container pt-4">
            {
                rcDetails.id &&
                <div className="col-12">
                    <h4 className="hd__txt">{rcDetails.heading}</h4>
                    <div className="row g-3">
                        <div className="col-md-12">
                            <p>
                                <div className="rca__detalis__img">
                                    <img src={`${imgUrl}/${rcDetails.image}`} alt="" className="img-fluid" loading="lazy" />
                                </div>
                                <h6 className="hd__txt">{rcDetails.heading}</h6>
                                <p className="rca__detalis__desc">{rcDetails.content}</p></p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default RecentActivitiesDetails;
