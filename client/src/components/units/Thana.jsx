import { useState, useEffect } from 'react';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import imgUrl from '../../imgUrl';
import DomDaines from '../../assets/DomDaines.png';



const Thana = () => {

    const [data, setData] = useState({});

    const { id } = useParams();
    useEffect(() => {
        axios.get(`sub-units/${id}`)
            .then(res => {
                setData(res.data);
            })
    }, [id])

    if (!data) {
        return <div>Loading...</div>;
    }


    return (
        <div className="container pt-3">
            <div className="row g-3">
                <div className="col-md-9">
                    <div className="geo__familarity">
                        <h6 className="geo__familarity__title">{data.title}</h6>
                    </div>

                    {/* {
                        data?.forces?.length > 0 &&
                        <div className="table-responsive pt-1 d-flex justify-content-start">
                            <table className="table table-bordered officers__table">
                                <thead>
                                    <tr>
                                        <th className="th__sr">#</th>
                                        <th>ছবি</th>
                                        <th className="subject__officers__th">নাম</th>
                                        <th>পদ</th>
                                        <th>পদবী</th>
                                        <th>মোবাইল</th>
                                        <th>ফোন(অফিস)</th>
                                        <th>বিসিএস (ব্যাচ)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data?.forces?.length > 0 &&
                                        data.forces.map((item, index) => <tr key={index} className="tr__body">
                                            <td>{index + 1}.</td>
                                            <td className="text-center"><img src={`${imgUrl}/${item?.image}`} className="img-fluid" style={{ width: '90px', height: '80px' }} alt="image" loading='lazy' /></td>
                                            <td>{item?.name}</td>
                                            <td>{item?.designation}</td>
                                            <td>{item?.current_designation}</td>
                                            <td>{item?.mobile}</td>
                                            <td>{item?.phone}</td>
                                            <td>{item?.bcs_batch}</td>
                                        </tr>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    } */}
                    <div className="mt-2">
                        <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
                    </div>
                    {
                        data?.ex_forces?.length > 0 &&
                        <div className='cleafix mt-3'>
                            <div className="dig__details">
                                <h6 className="dig__details__title">সাবেক {data?.title}</h6>
                            </div>
                            <div className="row g-3 mb-3 pt-2">
                                {
                                    data?.ex_forces?.map((item, index) => {
                                        return (
                                            <div className="col-md-3" key={index}>
                                                <div className="cheif__sp__card">
                                                    <div className="card">
                                                        <div className="card__cheif__sp pt-3">
                                                            <img src={item.image ? `${imgUrl}/${item.image}` : DomDaines} className="card-img-top" alt="..." loading='lazy' />
                                                        </div>
                                                        <div className="card-body">
                                                            <h6 className="cheif__sp__card__title">{item.name}</h6>
                                                            <p className="cheif__sp__card__desc">{item.designation}</p>
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

export default Thana;