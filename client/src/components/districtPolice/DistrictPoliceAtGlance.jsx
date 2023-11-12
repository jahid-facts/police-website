import React, { useEffect, useState } from 'react';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import police_rank from '../../assets/police_rank.jpg';
import police_rank2 from '../../assets/police_rank2.jpg';
import police_rank3 from '../../assets/police_rank3.jpg';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DistrictPoliceAtGlance = () => {
    const [districtAtGlanceData, setData] = useState(
        //     [
        //     {
        //         id: "০১",
        //         subject_name: "পুলিশ অফিস",
        //         quantity: "০১ টি",
        //     },
        //     {
        //         id: "০২",
        //         subject_name: "সার্কেল অফিস",
        //         quantity: "০৬ টি",
        //     },
        //     {
        //         id: "০৩",
        //         subject_name: "থানা",
        //         quantity: "১৩ টি",
        //     },
        //     {
        //         id: "০৪",
        //         subject_name: "তদন্ত কেন্দ্র",
        //         quantity: "০৬ টি",
        //     },
        //     {
        //         id: "০৫",
        //         subject_name: "ফাড়ি",
        //         quantity: "০৪ টি",
        //     },
        //     {
        //         id: "০৬",
        //         subject_name: "ক্যাম্প",
        //         quantity: "০২ টি",
        //     },
        //     {
        //         id: "০৭",
        //         subject_name: "পুলিশ লাইন্স",
        //         quantity: "০১ টি",
        //     },
        // ]
    );
    const [hdpUnitData, setHdpUnitData] = useState([
        {
            id: "০১",

        },
        {
            id: "০২",

        },
        {
            id: "০৩",

        },
        {
            id: "০৪",

        },
        {
            id: "০৫",

        },
        {
            id: "০৬",

        },
        {
            id: "০৭",

        },
        {
            id: "০৮",

        },
        {
            id: "০৯",

        },
        {
            id: "১০",

        },
        {
            id: "১১",

        },
        {
            id: "১২",

        },
        {
            id: "১৩",

        },
        {
            id: "১৪",

        },
        {
            id: "১৫",

        },
        {
            id: "১৬",

        },
        {
            id: "১৭",

        },
    ]);
    const { id } = useParams();
    useEffect(() => {
        axios.get(`zilla-police-sub-pages/${id}`)
            .then(res => {
                setData(res.data)
            })
    }, [id])

    return (
        <div className="container py-3">
            <div className="row g-3">
                <div className="col-md-9">
                    <div className="geo__familarity mb-2">
                        <h6 className="geo__familarity__title">{districtAtGlanceData?.title}</h6>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: districtAtGlanceData?.content }}></div>


                </div>

                <div className="col-md-3">
                    <LeftHomePage />
                </div>
            </div>

        </div>
    );
};

export default DistrictPoliceAtGlance;