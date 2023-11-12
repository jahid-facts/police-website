import  { useState } from 'react';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import imgUrl from '../../imgUrl';
import DomDaines from '../../assets/DomDaines.png';

const SpMessage = () => {
    const { id } = useParams();
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get(`administration-pages/${id}`)
            .then(res => {
                setData(res.data)
            })
    }, [id])

    return (
        <div className="container py-3">
            <div className="row g-3">
                <div className="col-md-9">
                    <div className="geo__familarity mb-2">
                        <h6 className="geo__familarity__title">{data?.title}</h6>
                    </div>
                    <div style={{display:"block", overflow:"hidden"}} dangerouslySetInnerHTML={{ __html: data?.content }}></div>
                    {
                        data?.exSp?.length > 0 &&
                        <div className='cleafix mt-3'>
                            <div className="dig__details">
                                <h6 className="dig__details__title">সাবেক {data?.title}</h6>
                            </div>
                            <div className="row g-3 mb-3 pt-2">
                                {
                                    data?.exSp?.map((item, index) => {
                                        return (
                                            <div className="col-md-3" key={index}>
                                                <div className="cheif__sp__card">
                                                    <div className="card">
                                                        <div className="card__cheif__sp pt-3">
                                                            <img src={item.image ? `${imgUrl}/${item.image}` : DomDaines} className="card-img-top" alt="..." loading='lazy' />
                                                        </div>
                                                        <div className="card-body">
                                                            <h6 className="cheif__sp__card__title">{item.name}</h6>
                                                            <p className="cheif__sp__card__desc">{item.title}</p>
                                                            <p className="cheif__sp__card__desc">{item.from_date} to {item.to_date}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }


                </div>
                <div className="col-md-3">
                    <LeftHomePage />
                </div>
            </div>

        </div>
    );
};

export default SpMessage;