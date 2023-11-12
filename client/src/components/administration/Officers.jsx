import React, { useState } from 'react';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import sp_img from '../../assets/sp_img.jpeg';
import addSp_img from '../../assets/addSp_img.jpeg';
import add_sp_dop_img from '../../assets/add_sp_dop_img.gif';
import add_sp_crime_img from '../../assets/add_sp_crime_img.gif';
import montosh_img from '../../assets/montosh_img.gif';
import sujon_img from '../../assets/sujon_img.gif';
import shottho_jit_img from '../../assets/shottho_jit_img.gif';
import delower_img from '../../assets/delower_img.gif';
import shasheen_img from '../../assets/shasheen_img.gif';
import samuel_img from '../../assets/samuel_img.jpg';
import { useEffect } from 'react';
import axios from 'axios';
import imgUrl from '../../imgUrl';

const Officers = () => {

    const [officerData, setOfficerData] = useState([
        {
            id: "০১",
            image: sp_img,
            name: "জনাব মোহাম্মদ রাসেল শেখ পিপিএম (বার)।",
            rank: "পুলিশ সুপার, কিশোরগঞ্জ।",
            contact: "০১৩২০-০৯৫৩০০",
            off_phone: "০৯৪১৬১৮৬০",
            batch: "২৭",
        },
        {
            id: "০২",
            image: addSp_img,
            name: "জনাব মোঃ মোস্তাক সরকার",
            rank: "অতিঃ পুলিশ সুপার(প্রশাসন ও অর্থ)",
            contact: "০১৩২০-০৯৫৩০২",
            off_phone: "",
            batch: "২৮",
        },
        {
            id: "০৩",
            image: add_sp_dop_img,
            name: "জনাব মোহাম্মদ নূরে আলম",
            rank: "অতিঃ পুলিশ সুপার(ডিএসবি)",
            contact: "০১৩২০-০৯৫৩০৪",
            off_phone: "",
            batch: "২৮",
        },
        {
            id: "০৪",
            image: montosh_img,
            name: "জনাব মনতোষ বিশ্বাস",
            rank: "অতিঃ পুলিশ সুপার (সদর সার্কেল)।",
            contact: "০১৩২০-০৯৫৩৪৬",
            off_phone: "",
            batch: "",
        },
        {
            id: "০৫",
            image: sujon_img,
            name: "জনাব সুজন চন্দ্র সরকার ",
            rank: "সহকারি পুলিশ সুপার, হোসেনপুর সার্কেল।",
            contact: "০১৩২০-০৯৫৩৫১",
            off_phone: "",
            batch: "",
        },
        {
            id: "০৬",
            image: add_sp_crime_img,
            name: "জনাব মোঃ আল আমিন হোসাইন",
            rank: "অতিঃ পুলিশ সুপার,(ক্রাইম অ্যান্ড অপস্)",
            contact: "০১৩২০-০৯৫৩০৩",
            off_phone: "",
            batch: "৩০",
        },
        {
            id: "০৭",
            image: shottho_jit_img,
            name: "জনাব সত্যজিৎ ঘোষ।",
            rank: "অতিরিক্ত পুলিশ সুপার, বাজিতপুর সার্কেল।",
            contact: "০১৩২০-০৯৫৩৬১",
            off_phone: "",
            batch: "",
        },
        {
            id: "০৮",
            image: delower_img,
            name: "জনাব মোঃ দেলোয়ার হোসেন খানঁ",
            rank: "সহকারী পুলিশ সুপার, ভৈরব সার্কেল।",
            contact: "০১৩২০-০৯৫৩৬১",
            off_phone: "",
            batch: "",
        },
        {
            id: "০৯",
            image: shasheen_img,
            name: "জনাব একেএম শাহীন মন্ডল",
            rank: "সহকারী পুলিশ সুপার, করিমগঞ্জ, সার্কেল।",
            contact: "০১৩২০-০৯৫৩৬৬",
            off_phone: "",
            batch: "",
        },
        {
            id: "১০",
            image: samuel_img,
            name: "জনাব সামুয়েল সাংমা",
            rank: "পুলিশ সুপার, অষ্টগ্রাম সার্কেল।",
            contact: "০১৩২০-০৯৫৩৭১",
            off_phone: "",
            batch: "",
        },
    ]);

    useEffect(() => {
        axios.get('officers')
        .then(res => {
            setOfficerData(res.data)
        })
    }, [])
    return (
        <div className="container py-3">
            <div className="row g-3">
                <div className="col-md-9">
                    <div className="geo__familarity">
                        <h6 className="geo__familarity__title">কর্মকর্তাগণ</h6>
                    </div>
                    <div className="table-responsive pt-1 d-flex justify-content-start">
                        <table className="table table-bordered officers__table">
                            <thead>
                                <tr>
                                    <th className="th__sr">#</th>
                                    <th>ছবি</th>
                                    <th className="subject__officers__th">নাম</th>
                                    <th>পদবী</th>
                                    <th>মোবাইল</th>
                                    <th>ফোন(অফিস)</th>
                                    <th>বিসিএস (ব্যাচ)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    officerData.length > 0 && officerData.map((item, i) => {
                                        return (
                                            <tr key={i} className="tr__body">
                                                <td>{i+1}.</td>
                                                <td className="text-center"><img src={`${imgUrl}/${item.image}`} className="img-fluid" style={{ width: '110px', height: '80px' }} alt="image" loading='lazy' /></td>
                                                <td>{item.name}</td>
                                                <td>{item.designation}</td>
                                                <td>{item.mobile}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.bcs_batch}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>


                </div>
                <div className="col-md-3">
                    <LeftHomePage />
                </div>
            </div>

        </div>
    );
};

export default Officers;