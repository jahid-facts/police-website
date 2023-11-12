import React, { useState } from 'react';
import DomDaines from '../../assets/DomDaines.png';
import Masrukur_img from '../../assets/Masrukur_img.png';
import benjirAhamed_img from '../../assets/benjirAhamed_img.jpg';
import Mollik_img from '../../assets/Mollik_img.jpg';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import { useEffect } from 'react';
import axios from 'axios';
import imgUrl from '../../imgUrl';


const FormerChiefOfSP = () => {

    const [chiefOfSpData, setChiefOfSpData] = useState([
        { id: 1, imgs: Masrukur_img, name: "জনাব মোঃ মাশরুকুর রহমান খালেদ", date_duration: "(১৯-০৩-১৮ - - -", edu_degree: "বিপিএম (বার)" },
        { id: 1, imgs: DomDaines, name: "জনাব মোঃ আনোয়ার হোসেন খান", date_duration: "(৩০-০৪-১৩ - - - ১৯-০৩-১৮)", edu_degree: "বিপিএম ,পিপিএম" },
        { id: 1, imgs: DomDaines, name: "জনাব মীর রেজাউল আলম", date_duration: "(২০-০২-১০ - - - ৩০-০৪-১৩)", edu_degree: "" },
        { id: 1, imgs: DomDaines, name: "জনাব ভানু লাল দাস", date_duration: "(২০-০৪-০৯ - - - ১৮-১১-০৯)", edu_degree: "" },
        { id: 1, imgs: DomDaines, name: "জনাব ফারুক আহমেদ", date_duration: "(৩১-০৮-০৮ - - - ২০-০৪-০৯)", edu_degree: "" },
        { id: 1, imgs: DomDaines, name: "জনাব মোঃ মিজানুর রহমান", date_duration: "(১২-০৬-০৭ - - - ২৬-০৮-০৮)", edu_degree: "" },
        { id: 1, imgs: DomDaines, name: "জনাব মোঃ লুৎফর রহমান মন্ডল", date_duration: "(২৫-১১-০৬ - - - ১০-০৬-০৭)", edu_degree: "" },
        { id: 1, imgs: DomDaines, name: "জনাব খন্দকার গোলাম ফারুক", date_duration: "(২২-০৫-০৬ - - - ২৪-১১-০৬)", edu_degree: "বিপিএম সেবা" },
        { id: 1, imgs: Mollik_img, name: "জনাব মল্লিক ফখরুল ইসলাম", date_duration: "(১২-০৪-০৪ - - - ২৭-০৪-০৬)", edu_degree: "বিপিএম, পিপিএম" },
        { id: 1, imgs: DomDaines, name: "জনাব মোঃ সাইফুল আলম", date_duration: "(০৫-১২-০১ - -- ১২-০৪-০৪)", edu_degree: "" },
        { id: 1, imgs: DomDaines, name: "জনাব বিনয় কৃষ্ণ বালা", date_duration: "(১১-০৭-০১ - - -১৯-১১-০১)", edu_degree: "পিপিএম" },
        { id: 1, imgs: DomDaines, name: "জনাব একএম মাহফুজুল হক", date_duration: "(১০-০৪-০০ - - - ০৯-০৭-০১)", edu_degree: "" },
        { id: 1, imgs: benjirAhamed_img, name: "জনাব বেনজীর আহমেদ", date_duration: "(২০-০৮-৯৮ - - -০৯-০৪-০০)", edu_degree: " বিপিএম(বার)" },
        { id: 1, imgs: DomDaines, name: "জনাব মোঃ চৌধুরী আহসানুল কবির", date_duration: "(২৯-১২-৯৬ - - - ২০-০৮-৯৮)", edu_degree: "" },
        { id: 1, imgs: DomDaines, name: "জনাব মোঃ মতিউর রহমান", date_duration: "( ২৬-১০-৯৫ - - - ১৯-০৯-৯৬ )", edu_degree: "" },
        { id: 1, imgs: DomDaines, name: "জনাব মোঃ আব্দল মান্নান", date_duration: "১০-০৭-৯৩ - - ২৬-১০-৯৫ )", edu_degree: "" },
        { id: 1, imgs: DomDaines, name: "জনাব কাজী জয়নুল আবেদীন বীর প্রতীক", date_duration: "(২৪-০৯-৯২ --- ১০-০৭-৯৩)", edu_degree: "" },
        { id: 1, imgs: DomDaines, name: "জনাব মোঃ লুৎফর রহমান", date_duration: "( ২৫-০২-৯০ --- ০৯-০২-৯২ )", edu_degree: "" },
        { id: 1, imgs: DomDaines, name: "জনাব মোঃ নূরুল আনোয়ার", date_duration: "(০৬-০৪-৮৯ -- ২৪-১২-৮৯)", edu_degree: "" },
        { id: 1, imgs: DomDaines, name: "জনাব মোঃ আনিসুর রহমান খান", date_duration: "( ২৩-০৯-৮৫ to ০৬-০৪-৮৯)", edu_degree: "" },
        { id: 1, imgs: DomDaines, name: "জনাব মোঃ গোলাম কিবরিয়া ভূইয়া", date_duration: "(০১-০২-৮৪ to ২৯-০৭-৮৫)", edu_degree: "" },
        // { id: 1, imgs: DomDaines, name: "Dom", date_duration: "August", edu_degree: "Chief" },
    ])
    useEffect(() => {
        axios.get('ex-police-super')
            .then(res => {
                setChiefOfSpData(res.data)
            })
    },[])
    return (
        <div className="container pt-1">
            <div className="row">
                <div className="col-md-9">
                    <div className="dig__details">
                        <h6 className="dig__details__title">সাবেক পুলিশ সুপার</h6>
                    </div>
                    <div className="row g-3 mb-3 pt-2">
                        {
                            chiefOfSpData !== undefined && chiefOfSpData.map((item, index) => {
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
                <div className="col-md-3">
                    <LeftHomePage />
                </div>
            </div>
        </div>
    );
};

export default FormerChiefOfSP;