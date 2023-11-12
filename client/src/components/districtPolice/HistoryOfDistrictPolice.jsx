import React, { useState } from 'react';
import LeftHomePage from '../mainHomePage/LeftHomePage';

const HistoryOfDistrictPolice = () => {
    const [hdpData, setHdpData] = useState([
        {
            id: "০১",
            subject_name: "ইউনিটের নাম",
            details: "পুলিশ সুপারের কার্যালয়, কিশোরগঞ্জ।",
        },
        {
            id: "০২",
            subject_name: "গঠনের তারিখ",
            details: "১২-১২-১৯৮৪ খ্রিঃ।",
        },
        {
            id: "০৩",
            subject_name: "গঠনের আইন বা এসআরও নম্বর ও তারিখ",
            details: "গণপ্রজাতন্ত্রী বাংলাদেশ এর রাষ্ট্রপতি কার্যালয়ের কেবিনেট ডিভিশন সেক্রেটারী স্মারক নং- সিডি/ ডিএ-১/১২(১৩)/৮৪ (পিটি- ১) ৫৮৫ তাং- ১২-১২-১৯৮৪ খ্রিঃ আইন মোতাবেক।",
        },
        {
            id: "০৪",
            subject_name: "গঠনের সংক্ষিপ্ত প্রেক্ষাপট",
            details: "১৯৮৪ সালে বাংলাদেশ সরকার বাংলাদেশের ১৯ টি জেলাকে ৬৪ জেলায় রুপান্তর করলে পুলিশি সেবা জনগণের দোরগোড়ায় পৌঁছে দিতে এবং আইন- শৃংখলা পরিস্থিতি নিয়ন্ত্রণে রাখতে এই ইউনিট গঠন করা হয়।",
        },
    ]);
    const [hdpUnitData, setHdpUnitData] = useState([
        {
            id: "০১",
            subject_name: "জনাব মোঃ গোলাম কিবরিয়া ভূইয়া",
            details: "০১-০২- ১৯৮৪ থেকে ২৯-০৭-১৯৮৫",
        },
        {
            id: "০২",
            subject_name: "জনাব মোঃ আনিসুর রহমান খান",
            details: "২৩-০৯- ১৯৮৫ থেকে ০৬-০৪-১৯৮৯",
        },
        {
            id: "০৩",
            subject_name: "জনাব মোঃ নুরুল আনোয়ার",
            details: "০৬-০৪- ১৯৮৯ থেকে ২৪-১২-১৯৮৯",
        },
        {
            id: "০৪",
            subject_name: "জনাব মোঃ লুৎফর রহমান",
            details: "২৫-০২- ১৯৯০ থেকে ০৯-০২-১৯৯২",
        },
        {
            id: "০৫",
            subject_name: "জনাব মোঃ গোলাম কিবরিয়া ভূইয়া",
            details: "২৪-০২-১৯৯২ থেকে ১০-০৭-১৯৯৩",
        },
        {
            id: "০৬",
            subject_name: "জনাব মোঃ আব্দুল মান্নান",
            details: "১০-০৭- ১৯৯৩ থেকে ২৬-১০-১৯৯৫",
        },
        {
            id: "০৭",
            subject_name: "জনাব মোঃ মতিউর রহমান",
            details: "২৬-১০-১৯৯৫ থেকে ১৯-০৯-১৯৯৬",
        },
        {
            id: "০৮",
            subject_name: "জনাব চৌধুরী আহ্সানুল কবির",
            details: "২৯-১২-১৯৯৬ থেকে ২০-০৮-১৯৯৮",
        },
        {
            id: "০৯",
            subject_name: "জনাব বেনজীর আহমেদ",
            details: "২০-০৮-১৯৯৮ থেকে ০৯-০৪-২০০০",
        },
        {
            id: "১০",
            subject_name: "জনাব এ,কে,এম মাহফুজুল হক",
            details: "১০-০৪-২০০০ থেকে ০৯-০৭-২০০১",
        },
        {
            id: "১১",
            subject_name: "জনাব বিনয় কৃষ্ণ বালা, পিপিএম",
            details: "১১-০৭-২০০১ থেকে ১৯-১১-২০০১",
        },
        {
            id: "১২",
            subject_name: "জনাব মোঃ সাইফুল আলম",
            details: "০৫-১২-২০০১ থেকে ১২-০৪-২০০৪",
        },
        {
            id: "১৩",
            subject_name: "জনাব মল্লিক ফখরুল ইসলাম",
            details: "১২-০৪-২০০৪ থেকে ২৭-০৪-২০০৬",
        },
        {
            id: "১৪",
            subject_name: "জনাব খন্দকার গোলাম ফারুক, বিপিএম (সেবা)",
            details: "২২-০৫-২০০৬ থেকে ২৪-১১-২০০৬",
        },
        {
            id: "১৫",
            subject_name: "জনাব মোঃ লুৎফর রহমান মন্ডল",
            details: "২৫-১১-২০০৬ থেকে ১০-০৬-২০০৭",
        },
        {
            id: "১৬",
            subject_name: "জনাব মোঃ মিজানুর রহমান",
            details: "১২-০৬-২০০৭ থেকে ২৬-০৮-২০০৮",
        },
        {
            id: "১৭",
            subject_name: "জনাব ফারুক আহমেদ",
            details: "৩১-০৮-২০০৮ থেকে ২০-০৪-২০০৯",
        },
        {
            id: "১৮",
            subject_name: "জনাব ভানু লাল দাস",
            details: "২০-০৪-২০০৯ থেকে ১৮-১১-২০০৯",
        },
        {
            id: "১৯",
            subject_name: "জনাব মীর রেজাউল আলম",
            details: "২০-০২-২০১০ থেকে ৩০-০৪-২০১৩",
        },
        {
            id: "২০",
            subject_name: "জনাব মোঃ আনোয়ার হোসেন খান, বিপিএম",
            details: "৩০-০৪-২০১৩ থেকে ১৯-০৩-২০১৮",
        },
        {
            id: "২১",
            subject_name: "জনাব মোঃ মাশরুকুর রহমান খালেদ, বিপিএম (বার)",
            details: "১৯-০৩-২০১৮ থেকে বর্তমান পর্যন্ত",
        },
    ]);
    const [hdpSpeacialHistoryData, setHdpSpeacialHistoryData] = useState([
        {
            id: "০১",
            subject_name: "প্রতিষ্ঠা থেকে অদ্যবধি উল্লেখযোগ্য ঘটনাবলী",
            details: "০১-০২- ১৯৮৪ থকেে ২৯-০৭-১৯৮৫",
        },
        {
            id: "০২",
            subject_name: "ইউনিটের বিশেষ কৃতিত্ব",
            details: "২৩-০৯- ১৯৮৫ থকেে ০৬-০৪-১৯৮৯",
        },
        {
            id: "০৩",
            subject_name: "ইউনিটে চাকুরিরত সদস্যদের আত্মদানের সংক্ষিপ্ত বিবরণ",
            details: "০৬-০৪- ১৯৮৯ থকেে ২৪-১২-১৯৮৯",
        },
    ]);


    return (
        <div className="container py-3">
            <div className="row g-3">
                <div className="col-md-9">
                    <div className="geo__familarity">
                        <h6 className="geo__familarity__title">জেলা পুলিশের ইতিহাস</h6>
                    </div>
                    <div className="pt-1">
                        <p className="geo__familarity__desc">
                            কিশোরগঞ্জ জেলার জেলা পুলিশের ইতিহাস নিম্নরূপ-
                        </p>
                    </div>
                    <div className="table-responsive pt-1 d-flex justify-content-start">
                        <table className="table table-bordered hdp__table">
                            <thead>
                                <tr>
                                    <th className="th__sr">ক্রমিক নং</th>
                                    <th className="subject__hdp__th">বিষয়</th>
                                    <th>বিস্তারিত</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    hdpData.length > 0 && hdpData.map((item, i) => {
                                        return (
                                            <tr key={i} className="tr__body">
                                                <td>{item.id}.</td>
                                                <td>{item.subject_name}</td>
                                                <td>{item.details}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>


                    <div className="pt-1">
                        <p className="geo__familarity__desc">
                        ইউনিট প্রধানদের তালিকা ও কার্যকাল নিম্নরূপ-
                        </p>
                    </div>
                    <div className="table-responsive pt-1 d-flex justify-content-start">
                        <table className="table table-bordered hdp__unit__table">
                            <thead>
                                <tr>
                                    <th className="th__sr">ক্রমিক নং</th>
                                    <th className="subject__hdp__th">ইউনিট প্রধানদের নামের তালিকা</th>
                                    <th>কার্যকাল</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    hdpUnitData.length > 0 && hdpUnitData.map((item, i) => {
                                        return (
                                            <tr key={i} className="tr__body">
                                                <td>{item.id}.</td>
                                                <td>{item.subject_name}</td>
                                                <td>{item.details}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>


                    <div className="pt-1">
                        <p className="geo__familarity__desc">
                        উল্লেখযোগ্য ঘটনাবলী তালিকা ও কার্যকাল নিম্নরূপ-
                        </p>
                    </div>
                    <div className="table-responsive pt-1 d-flex justify-content-start">
                        <table className="table table-bordered hdp__special__history__table">
                            <thead>
                                <tr>
                                    <th className="th__sr">ক্রমিক নং</th>
                                    <th className="subject__hdp__th">উল্লেখযোগ্য ঘটনাবলী তালিকা</th>
                                    <th>কার্যকাল</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    hdpSpeacialHistoryData.length > 0 && hdpSpeacialHistoryData.map((item, i) => {
                                        return (
                                            <tr key={i} className="tr__body">
                                                <td>{item.id}.</td>
                                                <td>{item.subject_name}</td>
                                                <td>{item.details}</td>
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

export default HistoryOfDistrictPolice;