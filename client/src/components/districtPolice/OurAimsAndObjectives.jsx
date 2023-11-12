import React, { useState } from 'react';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import map_kishorgonj from "../../assets/map_kishorgonj.jpg";

const OurAimsAndObjectives = () => {
    const [ourAimData, setOurAimData] = useState([
        {
            id: 1,
            txt: "১। আইনের শাসন সমুন্নত রাখা।",
        },
        {
            id: 2,
            txt: "২। প্রত্যেক নাগরিকের নিরাপত্তা নিশ্চিত করা।",
        },
        {
            id: 3,
            txt: "৩। অপরাধ প্রতিরোধ করা এবং অপরাধীদের সনাক্ত করা।",
        },
        {
            id: 4,
            txt: "৪। অপরাধীদের আইনের আওতায় নিয়ে আসা।",
        },
        {
            id: 5,
            txt: "৫। শান্তি এবং শৃংখলা বজায় রাখা।",
        },
        {
            id: 6,
            txt: "৬। পুলিশ এবং জনগণের মধ্যে আস্থা বৃদ্ধি করা।",
        },
        {
            id: 7,
            txt: "৭। আইন শৃঙ্খলা রক্ষা করা।",
        },
        {
            id: 8,
            txt: "৮। জেলার সর্বস্তরের নিরাপত্তা বিধান ও জনগনের সেবা করা।",
        },

        {
            id: 9,
            txt: "৯। অপরাধ দমন করা।",
        },
        {
            id: 10,
            txt: "১০। সন্ত্রাস ও জঙ্গিবাদ মুক্ত দেশ গড়া।",
        },
        {
            id: 11,
            txt: "১১। দেশকে মাদকমুক্ত করা।",
        },
        {
            id: 12,
            txt: "১২। নারীর ন্যায্য অধিকার নিশ্চিত করার লক্ষ্যে নারীদেরকে আইনগত সহায়তা প্রদান করা।",
        },
        {
            id: 13,
            txt: "১৩। যৌতুক মুক্ত দেশ ও সমাজ গড়া।",
        },
        {
            id: 14,
            txt: "১৪। অবৈধ ব্যবসায় বাণিজ্য ও চোরাচালানী বন্ধ করা।",
        },
        {
            id: 15,
            txt: "১৫। চুরি, ডাকাতি, দস্যুতা, অপহরণ ইত্যাদি বন্ধ করা।",
        },
        {
            id: 16,
            txt: "১৬। দুষ্টের দমন ও শিষ্টের লালন করা।",
        },
    ]);






    return (
        <div className="container py-3">
            <div className="row g-3">
                <div className="col-md-9">
                    <div className="geo__familarity">
                        <h6 className="geo__familarity__title">আমাদের লক্ষ্য ও উদ্দেশ্য</h6>
                    </div>
                    <div className="pt-2">
                        <ul className="list-unstyled">
                            {
                                ourAimData.map((item) => (
                                    <li key={item.id} className="dig__desc">{item.txt}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <LeftHomePage />
                </div>
            </div>
        </div>
    );
};

export default OurAimsAndObjectives;