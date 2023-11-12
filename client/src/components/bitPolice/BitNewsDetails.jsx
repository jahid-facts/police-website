import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import imgUrl from '../../imgUrl';
import LeftHomePage from '../mainHomePage/LeftHomePage';


const BitNewsDetails = () => {
    const params = useParams();
    const [rcDetails, setRcDetails] = useState({})

    useEffect(() => {
        axios.get(`bit-news/${params.id}`)
            .then(res => {
                setRcDetails(res.data)
            })
    }, [params.id]);
    return (
        <div className="container py-3">
            <div className="row g-3">
                <div className="col-md-9">
                    <div className="geo__familarity mb-2">
                        <h6 className="geo__familarity__title">{rcDetails?.title}</h6>
                    </div>
                    <div dangerouslySetInnerHTML={{__html:rcDetails?.content}}></div>

                </div>
                <div className="col-md-3">
                    <LeftHomePage />
                </div>
            </div>

        </div>
    );
};

export default BitNewsDetails;
