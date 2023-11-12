import React, { useEffect, useState } from 'react';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const GeographicalFamiliarity = () => {
    const [geoFamilaritydata, setGeoFamilarityData] = useState([
        {
            id: 1,
            upazila_name: "কিশোরগঞ্জ সদর",
            volume: "২,৬৮৯ বর্গ কিমি",
            location: "জেলার উত্তরে নেত্রকোনা জেলা ও উত্তর-পশ্চিমে ময়মনসিংহ জেলা, দক্ষিণে নরসিংদী জেলা ও ব্রাহ্মণবাড়ীয়া জেলা, পূর্বে সুনামগঞ্জ জেলা ও হবিগঞ্জ জেলা, পশ্চিমে ময়মনসিংহ জেলা ও গাজীপুর জেলা।",
        },
    ]);
    const { id } = useParams();
    useEffect(() => {
        axios.get(`zilla-police-pages/${id}`)
            .then(res => {
                setGeoFamilarityData(res.data)
            })
    }, [id])
    return (
        <div className="container py-3">
            <div className="row g-3">
                <div className="col-md-9">
                    <div className="geo__familarity mb-2">
                        <h6 className="geo__familarity__title">{geoFamilaritydata?.title}</h6>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: geoFamilaritydata?.content }}></div>

                </div>
                <div className="col-md-3">
                    <LeftHomePage />
                </div>
            </div>

        </div>
    );
};

export default GeographicalFamiliarity;