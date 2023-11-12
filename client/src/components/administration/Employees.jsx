import React, { useState } from 'react';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import samimul_img from '../../assets/samimul_img.gif';
import alauddin_img from '../../assets/alauddin_img.gif';
import mohiuddin_img from '../../assets/mohiuddin_img.gif';
import hadi_img from '../../assets/hadi_img.gif';
import abdullah_img from '../../assets/abdullah_img.gif';
import emdadul_img from '../../assets/emdadul_img.gif';
import assadijjaman_img from '../../assets/assadijjaman_img.gif';
import shajahan_img from '../../assets/shajahan_img.gif';
import masud_img from '../../assets/masud_img.gif';
import alamin_img from '../../assets/alamin_img.gif';
import jaya_img from '../../assets/jaya_img.gif';
import rani_img from '../../assets/rani_img.gif';
import { useEffect } from 'react';
import axios from 'axios';
import imgUrl from '../../imgUrl';

const Employees = () => {

    const [officerData, setOfficerData] = useState([
        {
            id: "০১",
            image: samimul_img,
            name: "এসআই/ নিঃ মোঃ সামিউল ইসলাম",
            rank: "ইনচার্জ, মিডিয়াসেল, পুলিশ সুপারের কার্যালয়।",
            contact: "০1877-131314",
            off_phone: "",
        },
        {
            id: "০২",
            image: alauddin_img,
            name: "মোঃ আলাউদ্দিন",
            rank: "প্রধান সহকারী",
            contact: "০১৮১৭-৫৬১৭৩৬",
            off_phone: "",
        },
        {
            id: "০৩",
            image: mohiuddin_img,
            name: "মোঃ মহিউদ্দিন",
            rank: "প্রধান সহকারী (ডিএসবি)",
            contact: "০১৮২০-২৬৬৩৭৯",
            off_phone: "",
        },
        {
            id: "০৪",
            image: hadi_img,
            name: "এএসআই/ সঃ মোঃ আঃ হাদী",
            rank: "স্টেনো-১",
            contact: "০১৭১২-৯১৪৯৮৮",
            off_phone: "",
        },
        {
            id: "০৫",
            image: abdullah_img,
            name: "মোঃ আব্দুল্লাহ",
            rank: "অফিস সহকারী কাম কম্পিউটার মুদ্রক্ষরিক",
            contact: "০১৯১১-৭০৮৮৯০",
            off_phone: "",
        },
        {
            id: "০৬",
            image: masud_img,
            name: "এএসআই/নিঃ মোঃ মাসুদ রানা",
            rank: "স্টেনো-৩, গোপনীয় শাখা।",
            contact: "০১৭২২-৫৮৬২৬৩",
            off_phone: "",
        },
        {
            id: "০৭",
            image: emdadul_img,
            name: "এএসআই/নিঃ মোঃ এমদাদুল হক",
            rank: "কম্পিউটার অপারেটর, পুলিশ সুপারের কার্যালয়, কিশোরগঞ্জ।",
            contact: "০১৭১২-৪৯৪৮৪৯",
            off_phone: "",
        },
        {
            id: "০৮",
            image: assadijjaman_img,
            name: "এএসআই/নিঃ মোঃ আসাদুজ্জামান",
            rank: "কম্পিউটার অপারেটর, ডিএসবি (পাসপোর্ট শাখা)",
            contact: "০১৭২০-৬৪৬২৯৫",
            off_phone: "",
        },
        {
            id: "০৯",
            image: shajahan_img,
            name: "মোঃ শাহজাহান",
            rank: "হিসাব রক্ষক",
            contact: "০১৭১২-৮৫৫৯৮৪",
            off_phone: "",
        },
        {
            id: "১০",
            image: alamin_img,
            name: "মোঃ আল আমিন আহমেদ",
            rank: "(ইনচার্জ সিডিএমএস শাখা)",
            contact: "01736-708067",
            off_phone: "",
        },
        {
            id: "১১",
            image: jaya_img,
            name: "নারী কং/ নুরুন নাহার জয়া",
            rank: "কম্পিউটার অপারেটর (সিডিএমএস শাখা)",
            contact: "01736-708067",
            off_phone: "",
        },
        {
            id: "১২",
            image: rani_img,
            name: "নারী কং/ রিমা রানী দাস",
            rank: "কম্পিউটার অপারেটর (সিডিএমএস শাখা)",
            contact: "01736-708067",
            off_phone: "",
        },
    ]);
    useEffect(()=>{
        axios.get('employees')
        .then(res=>setOfficerData(res.data))
    },[])

    return (
        <div className="container py-3">
            <div className="row g-3">
                <div className="col-md-9">
                    <div className="geo__familarity">
                        <h6 className="geo__familarity__title"> কর্মচারীবৃন্দ </h6>
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
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    officerData.length > 0 && officerData.map((item, i) => {
                                        return (
                                            <tr key={i} className="tr__body">
                                                <td>{i+1}.</td>
                                                <td className="text-center"><img src={`${imgUrl}/${item.image}`} className="img-fluid" style={{ width: '90px', height: '90px' }} alt="image" loading='lazy' /></td>
                                                <td>{item.name}</td>
                                                <td>{item.designation}</td>
                                                <td>{item.mobile}</td>
                                                <td>{item.phone}</td>
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

export default Employees;