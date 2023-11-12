import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import dawod_img from '../../assets/dawod_img.gif';
import shamsul_img from '../../assets/shamsul_img.gif';
import morshed_img from '../../assets/morshed_img.gif';
import kolindranath_img from '../../assets/kolindranath_img.gif';
import sarower_img from '../../assets/sarower_img.gif';
import sarower_img2 from '../../assets/sarower_img2.gif';
import mosthafuizar_img from '../../assets/mosthafuizar_img.gif';
import shadat_img from '../../assets/shadat_img.gif';
import golam_img from '../../assets/golam_img.gif';
import sofikul_img from '../../assets/sofikul_img.jpg';
import DomDaines from '../../assets/DomDaines.png';
import samsur_img from '../../assets/samsur_img.gif';
import abu_bokkor_img from '../../assets/abu_bokkor_img.gif';
import kabir_img from '../../assets/kabir_img.gif';
import abu_jafor_img from '../../assets/abu_jafor_img.gif';
import shajhan_img from '../../assets/shajhan_img.gif';
import omar_faruk_img from '../../assets/omar_faruk_img.gif';

const UnitsSubmenu = () => {

    const [unitsData, setUnitsData] = useState([
        {
            id: 1,
            sl_no: "#",
            th_pic: "ছবি",
            th_name: "নাম",
            th_title: "পদবী",
            th_post: "পদ",
            th_mobile: "মোবাইল",
            th_mobile_office: "ফোন(অফিস)",
            th_batch: "বিসিএস (ব্যাচ)",
            ht_title: "জেলা বিশেষ শাখা (ডিএসবি)",
            submenu_details: [
                {
                    id: "০১",
                    image: DomDaines,
                    name: "মোঃ মামুনুর রশিদ",
                    rank: "পুলিশ পরিদর্শক (নিঃ)",
                    post_rank: "ডিআইও-১ জেলা বিশেষ শাখা, কিশোরগঞ্জ।",
                    contact: "০১৩২০-০৯৫৩৭৬",
                    off_phone: "",
                    batch: "",
                },
            ]
        },
        {
            id: 2,
            sl_no: "#",
            th_pic: "ছবি",
            th_name: "নাম",
            th_title: "পদবী",
            th_post: "পদ",
            th_mobile: "মোবাইল",
            th_mobile_office: "ফোন(অফিস)",
            th_batch: "বিসিএস (ব্যাচ)",
            ht_title: "জেলা গোয়েন্দা শাখা (ডিবি)",
            submenu_details: [
                {
                    id: "০১",
                    image: samsur_img,
                    name: "মোঃ সামছুর রহমান",
                    rank: "পুলিশ পরিদর্শক (নিঃ)",
                    post_rank: "অফিসার ইনচার্জ জেলা গোয়েন্দা শাখা, কিশোরগঞ্জ।",
                    contact: "০১৩২০-০৯৫৭২৯",
                    off_phone: "",
                    batch: "",
                },
            ]
        },
        {
            id: 3,
            sl_no: "#",
            th_pic: "ছবি",
            th_name: "নাম",
            th_title: "পদবী",
            th_post: "পদ",
            th_mobile: "মোবাইল",
            th_mobile_office: "ফোন(অফিস)",
            th_batch: "বিসিএস (ব্যাচ)",
            ht_title: "সদর কোর্ট",
            submenu_details: [
                {
                    id: "০১",
                    image: abu_bokkor_img,
                    name: "মোঃ আবু বকর সিদ্দিক",
                    rank: "পুলিশ পরিদর্শক (নিঃ)",
                    post_rank: "সদর কোর্ট, কিশোরগঞ্জ।",
                    contact: "০১৩২০-০৯৫৭৪৪",
                    off_phone: "",
                    batch: "",
                },
            ]
        },
        {
            id: 4,
            sl_no: "#",
            th_pic: "ছবি",
            th_name: "নাম",
            th_title: "পদবী",
            th_post: "পদ",
            th_mobile: "মোবাইল",
            th_mobile_office: "ফোন(অফিস)",
            th_batch: "বিসিএস (ব্যাচ)",
            ht_title: "পুলিশ লাইন্স",
            submenu_details: [
                {
                    id: "০১",
                    image: kabir_img,
                    name: "মোঃ কবির হোসেন",
                    rank: "পুলিশ পরিদর্শক (নিঃ)",
                    post_rank: "আর আই, পুলিশ লাইন্স, কিশোরগঞ্জ।",
                    contact: "০১৩২০-০৯৫৭৭৪",
                    off_phone: "",
                    batch: "",
                },
                {
                    id: "০২",
                    image: abu_jafor_img,
                    name: "মোহাম্মদ মোর্শেদ জামান, বিপিএম",
                    rank: "এসআই (নিঃ)",
                    post_rank: "আরও (১), কিশোরগঞ্জ।",
                    contact: "01320-095341",
                    off_phone: "",
                    batch: "",
                },
            ]
        },
        {
            id: 5,
            sl_no: "#",
            th_pic: "ছবি",
            th_name: "নাম",
            th_title: "পদবী",
            th_post: "পদ",
            th_mobile: "মোবাইল",
            th_mobile_office: "ফোন(অফিস)",
            th_batch: "বিসিএস (ব্যাচ)",
            ht_title: "ট্রাফিক বিভাগ",
            submenu_details: [
                {
                    id: "০১",
                    image: shajhan_img,
                    name: "মোঃ শাহজাহান",
                    rank: "পুলিশ পরিদর্শক (শহর ও যানবাহন)",
                    post_rank: "ট্রাফিক ইন্সপেক্টর (প্রশাসন) কিশোরগঞ্জ।",
                    contact: "০১৩২০-০৯৫৭৫৯",
                    off_phone: "",
                    batch: "",
                },
            ]
        },
        {
            id: 6,
            // sl_no: "#",
            // th_pic: "ছবি",
            // th_name: "নাম",
            // th_title: "পদবী",
            // th_post: "পদ",
            // th_mobile: "মোবাইল",
            // th_mobile_office: "ফোন(অফিস)",
            // th_batch: "বিসিএস (ব্যাচ)",
            ht_title: "তদন্ত কেন্দ্র",
            // submenu_details: [
            //     {
            //         id: "০১",
            //         image: kolindranath_img,
            //         name: "কলিন্দ্রনাথ গোলদার",
            //         rank: "পুলিশ পরিদর্শক (নিঃ)",
            //         post_rank: "অফিসার ইনচার্জ মিঠামইন থানা।",
            //         contact: "০১৩২০০৯৫৬৫১",
            //         off_phone: "",
            //         batch: "",
            //     },
            // ]
        },
        {
            id: 7,
            // sl_no: "#",
            // th_pic: "ছবি",
            // th_name: "নাম",
            // th_title: "পদবী",
            // th_post: "পদ",
            // th_mobile: "মোবাইল",
            // th_mobile_office: "ফোন(অফিস)",
            // th_batch: "বিসিএস (ব্যাচ)",
            ht_title: "ফাঁড়ি",
            // submenu_details: [
            //     {
            //         id: "০১",
            //         image: sarower_img,
            //         name: "মোঃ সারোয়ার জাহান",
            //         rank: "পুলিশ পরিদর্শক (নিঃ)",
            //         post_rank: "অফিসার ইনচার্জ নিকলী থানা।",
            //         contact: "০১৩২০-০৯৫৬৭৭",
            //         off_phone: "",
            //         batch: "",
            //     },
            // ]
        },
        {
            id: 8,
            // sl_no: "#",
            // th_pic: "ছবি",
            // th_name: "নাম",
            // th_title: "পদবী",
            // th_post: "পদ",
            // th_mobile: "মোবাইল",
            // th_mobile_office: "ফোন(অফিস)",
            // th_batch: "বিসিএস (ব্যাচ)",
            ht_title: "ক্যাম্প",
            // submenu_details: [
            //     {
            //         id: "০১",
            //         image: sarower_img2,
            //         name: "মোঃ সারোয়ার জাহান",
            //         rank: "পুলিশ পরিদর্শক (নিঃ)",
            //         post_rank: "অফিসার ইনচার্জ পাকুন্দিয়া থানা।",
            //         contact: "০১৩২০-০৯৫৪৯৫",
            //         off_phone: "",
            //         batch: "",
            //     },
            // ]
        },
        {
            id: 9,
            sl_no: "#",
            th_pic: "ছবি",
            th_name: "নাম",
            th_title: "পদবী",
            th_post: "পদ",
            th_mobile: "মোবাইল",
            th_mobile_office: "ফোন(অফিস)",
            th_batch: "বিসিএস (ব্যাচ)",
            ht_title: "ক্রাইম শাখা",
            submenu_details: [
                {
                    id: "০১",
                    image: omar_faruk_img,
                    name: "মোঃ ওমর ফারুক",
                    rank: "পুলিশ পরিদর্শক (নিঃ)",
                    post_rank: "ক্রাইম শাখা, পুলিশ সুপারের কার্যালয়, কিশোরগঞ্জ।",
                    contact: "০১৭১১-৬৬০৫৭৬",
                    off_phone: "",
                    batch: "",
                },
            ]
        },
        {
            id: 10,
            // sl_no: "#",
            // th_pic: "ছবি",
            // th_name: "নাম",
            // th_title: "পদবী",
            // th_post: "পদ",
            // th_mobile: "মোবাইল",
            // th_mobile_office: "ফোন(অফিস)",
            // th_batch: "বিসিএস (ব্যাচ)",
            ht_title: "প্রসিকিউশন",
            // submenu_details: [
            //     {
            //         id: "০১",
            //         image: shadat_img,
            //         name: "এসএম শাহাদত হোসেন",
            //         rank: "পুলিশ পরিদর্শক (নিঃ)",
            //         post_rank: "অফিসার ইনচার্জ কটিয়াদী মডেল থানা।",
            //         contact: "০১৩২০-০৯৫৫২১",
            //         off_phone: "",
            //         batch: "",
            //     },
            // ]
        },
        {
            id: 11,
            // sl_no: "#",
            // th_pic: "ছবি",
            // th_name: "নাম",
            // th_title: "পদবী",
            // th_post: "পদ",
            // th_mobile: "মোবাইল",
            // th_mobile_office: "ফোন(অফিস)",
            // th_batch: "বিসিএস (ব্যাচ)",
            ht_title: "ইন্টেলিজেন্স",
            // submenu_details: [
            //     {
            //         id: "০১",
            //         image: sofikul_img,
            //         name: "মোহাম্মদ শফিকুল ইসলাম",
            //         rank: "পুলিশ পরিদর্শক (নিঃ)",
            //         post_rank: "অফিসার ইনচার্জ বাজিতপুর মডেল থানা।",
            //         contact: "০১৩২০-০৯৫৫৪৭",
            //         off_phone: "",
            //         batch: "",
            //     },
            // ]
        },
        {
            id: 12,
            // sl_no: "#",
            // th_pic: "ছবি",
            // th_name: "নাম",
            // th_title: "পদবী",
            // th_post: "পদ",
            // th_mobile: "মোবাইল",
            // th_mobile_office: "ফোন(অফিস)",
            // th_batch: "বিসিএস (ব্যাচ)",
            ht_title: "স্টেট এন্ড ডেভেলপমেন্ট",
            // submenu_details: [
            //     {
            //         id: "০১",
            //         image: golam_img,
            //         name: "মোহম্মদ গোলাম মোস্তফা",
            //         rank: "পুলিশ পরিদর্শক (নিঃ)",
            //         post_rank: "অফিসার ইনচার্জ কুলিয়ারচর থানা।",
            //         contact: "০১৩২০-০৯৫৫৭৩",
            //         off_phone: "",
            //         batch: "",
            //     },
            // ]
        },
    ]);

    const param = useParams();
    // const AusServicesDetails = unitsData.find(item => item.id === param.id);
    const unitsDetails = unitsData.find(item => item.id === Number(param.id));
    // console.log( "unitsData", param.id,);
    // console.log("unitsDetails", unitsDetails);

    if (!unitsData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container py-3">
            <div className="row g-3">
                <div className="col-md-9">
                    <div className="geo__familarity">
                        <h6 className="geo__familarity__title">{unitsDetails?.ht_title}</h6>
                    </div>
                    <div className="table-responsive pt-1 d-flex justify-content-start">
                        <table className="table table-bordered thana__table">
                            <thead>
                                <tr>
                                    {unitsDetails?.sl_no && <th className="th__sr">{unitsDetails?.sl_no}</th>}
                                    {unitsDetails?.th_pic && <th>{unitsDetails?.th_pic}</th>}
                                    {unitsDetails?.th_name && <th className="thana__th">{unitsDetails?.th_name}</th>}
                                    {unitsDetails?.th_title && <th>{unitsDetails?.th_title}</th>}
                                    {unitsDetails?.th_post && <th>{unitsDetails?.th_post}</th>}
                                    {unitsDetails?.th_mobile && <th>{unitsDetails?.th_mobile}</th>}
                                    {unitsDetails?.th_mobile_office && <th>{unitsDetails?.th_mobile_office}</th>}
                                    {/* {unitsDetails?.th_batch && <th>{unitsDetails?.th_batch}</th>} */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    unitsDetails.submenu_details !== undefined && unitsDetails.submenu_details.map((item, i) => {
                                        return (
                                            <tr key={i} className="tr__body">
                                                <td>{item.id}.</td>
                                                <td className="text-center"><img src={item.image} className="img-fluid" style={{ width: '160px', height: '90px' }} alt="image" loading='lazy' /></td>
                                                <td>{item.name}</td>
                                                <td>{item.rank}</td>
                                                <td>{item.post_rank}</td>
                                                <td>{item.contact}</td>
                                                <td>{item.off_phone}</td>
                                                <td>{item.batch}</td>
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

export default UnitsSubmenu;