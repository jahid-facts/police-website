import React, { useState, useEffect } from 'react';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import { useParams } from 'react-router-dom';
import shottho_jit_img from '../../assets/shottho_jit_img.gif';
import shasheen_img from '../../assets/shasheen_img.gif';
import samuel_img from '../../assets/samuel_img.jpg';
import montosh_img from '../../assets/montosh_img.gif';
import delower_img from '../../assets/delower_img.gif';
import axios from 'axios';
import imgUrl from '../../imgUrl';
import DomDaines from '../../assets/DomDaines.png';

const circleOfficeArr = [
    {
        id: 1,
        table_id: "০১",
        ht_title: "কিশোরগঞ্জ সদর সার্কেল",
        image: shottho_jit_img,
        name: "জনাব মনতোষ বিশ্বাস",
        rank: "অতিঃ পুলিশ সুপার, সদর সার্কেল",
        contact: "০১৩২০-০৯৫৩৪৬",
        off_phone: "",
        batch: "",
    },
    {
        id: 2,
        table_id: "০২",
        ht_title: "করিমগঞ্জ সার্কেল",
        image: shasheen_img,
        name: "জনাব একেএম শাহীন মন্ডল",
        rank: "সহকারী পুলিশ সুপার, করিমগঞ্জ, সার্কেল।",
        contact: "০১৩২০-০৯৫৩৬৬",
        off_phone: "",
        batch: "",
    },
    {
        id: 3,
        table_id: "০",
        ht_title: "অষ্টগ্রাম সার্কেল",
        image: samuel_img,
        name: "সামুয়েল সাংমা",
        rank: "সহকারী পুলিশ সুপার, অষ্টগ্রাম সার্কেল।",
        contact: "০১৩২০-০৯৫৩৭১",
        off_phone: "",
        batch: "",
    },
    {
        id: 4,
        table_id: "০১",
        ht_title: "হোসেনপুর সার্কেল",
        image: montosh_img,
        name: "জনাব মনতোষ বিশ্বাস",
        rank: "অতিঃ পুলিশ সুপার, সদর সার্কেল",
        contact: "০১৩২০-০৯৫৩৪৬",
        off_phone: "",
        batch: "",
    },
    {
        id: 5,
        table_id: "০২",
        ht_title: "বাজিতপুর সার্কেল",
        image: shottho_jit_img,
        name: "জনাব সত্যজিৎ ঘোষ",
        rank: "অতিঃ পুলিশ সুপার, বাজিতপুর সার্কেল",
        contact: "০১৩২০-০৯৫৩৬১",
        off_phone: "",
        batch: "",
    },
    {
        id: 6,
        table_id: "০১",
        ht_title: "ভৈরব সার্কেল।",
        image: delower_img,
        name: "জনাব মোঃ দেলোয়ার হোসেন খানঁ",
        rank: "সহকারী পুলিশ সুপার, ভৈরব সার্কেল।",
        contact: "০১৩২০-০৯৫৩৬১",
        off_phone: "",
        batch: "",
    },
];

const CircleOffice = () => {

    const [data, setData] = useState({});

    const { id } = useParams();
    useEffect(() => {
        axios.get(`units/${id}`)
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
                    <div className="mt-2">
                        <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
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

export default CircleOffice;