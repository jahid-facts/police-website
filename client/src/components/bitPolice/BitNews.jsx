import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import imgUrl from '../../imgUrl';
import LeftHomePage from '../mainHomePage/LeftHomePage';


const BitNews = () => {
    const params = useParams();
    const [rcDetails, setRcDetails] = useState([])

    useEffect(() => {
        axios.get(`bit-officers/${params.id}`)
            .then(res => {
                setRcDetails(res.data)
            })
    }, [params.id]);
    return (
        <div className="container py-3">
            <div className="row g-3">
                <div className="col-md-9">
                    <div className="geo__familarity mb-2">
                        <h6 className="geo__familarity__title">{rcDetails?.name}, {rcDetails?.designation} , {rcDetails?.thana?.title}</h6>
                    </div>
                    <div className="row g-3">
                {
                    rcDetails?.bitNews?.length > 0 && rcDetails?.bitNews?.map((news) => {
                        return (
                            <div key={news.id} className="col-md-3">
                                <Link to={`/bit-news-details/${news.id}`} style={{ textDecoration: "none" }} >
                                    <div className="rca__card">
                                        <div className="card">
                                            <div className="card__rca__img">
                                            <img src={`${imgUrl}/${news.image}`} className="img-fluid" alt="..." loading='lazy' />
                                            </div>
                                            <div className="card-body">
                                                <p className="card__rca__desc">{news.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

                </div>
                <div className="col-md-3">
                    <LeftHomePage />
                </div>
            </div>

        </div>
    );
};

export default BitNews;
