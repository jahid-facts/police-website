import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SiteMap() {
    const [divisionPoliceData, setDivisionPoliceData] = useState([]);
    // console.log("divisionPoliceData", divisionPoliceData);

    const [adminData, setAdminData] = useState([]);
    // console.log("adminData", adminData);

    const [unitsData, setUnitsData] = useState([]);
    // console.log("unitsData", unitsData);


    const [activitiesData, setActivitiesData] = useState([]);
    // console.log("activitiesData", activitiesData);

    const [servicesData, setServicesData] = useState([]);


    const [crimeManagementData, setCrimeManagementData] = useState([]);

    const [noticeBoardData, setNoticeBoard] = useState([
    ]);

    const [galleryData, setSignificantAchievementsData] = useState([

        {
            name: 'ফটো গ্যালারী',
            link: 'photo-gallery',
            bg_color: '#609513',
            color: '#609513',
            margin_bottom: "0px",
            font_size: "14px",
            font_weight: "400",
        },
        {
            name: 'ভিডিও গ্যালারী',
            link: 'video-gallery',
            bg_color: '#609513',
            color: '#609513',
            margin_bottom: "0px",
            font_size: "14px",
            font_weight: "400",
        },
    ]);

    const [bitPolicingData, setBitPolicingData] = useState([]);

    const [communicationAddressData, setCommunicationAddressData] = useState([

        {
            name: 'ফোন ডিরেক্টরি',
            link: 'phone-directory',
            bg_color: '#692E8F',
            color: '#692E8F',
            margin_bottom: "0px",
            font_size: "14px",
            font_weight: "400",
        },
        {
            name: 'ম্যাপ ',
            link: 'map-kishorganj',
            bg_color: '#692E8F',
            color: '#692E8F',
            margin_bottom: "0px",
            font_size: "14px",
            font_weight: "400",
        },
    ]);


    useEffect(() => {
        axios.get(`zilla-police-pages`)
            .then((res) => {
                setDivisionPoliceData(res.data);
            });
        axios.get(`administration-pages-only`)
            .then((res) => {
                setAdminData(res.data);
            });
        axios.get(`units`)
            .then((res) => {
                setUnitsData(res.data);
            });
        axios.get(`activities-pages`)
            .then((res) => {
                setActivitiesData(res.data);
            });
        axios.get(`services-pages`)
            .then((res) => {
                setServicesData(res.data);
            });
        axios.get(`notice-categories`)
            .then((res) => {
                setNoticeBoard(res.data);
            });
        axios.get(`bit-police-pages`)
            .then((res) => {
                setBitPolicingData(res.data);
            });
        axios.get(`crime-pages`)
            .then((res) => {
                setCrimeManagementData(res.data);
            });
    }, [])

    return (
        <div className="sit-map-container">
            <h5 className='p-2'>সাইট ম্যাপ</h5>
            <div className="ms-5 ps-5 mt-3">
                <p>
                    <Link to="/">প্রথম পাতা</Link>
                </p>
                <p>
                    <Link to="/">জেলা পুলিশ</Link>
                </p>
                {
                    divisionPoliceData.map((item, i) => {
                        return (
                            <p key={i} className="inner">
                                <Link to={item?.subPages?.length > 0 ? "#" : `/zilla-police-page-details/${item?.id}`} >
                                    <span>
                                        {item.title}
                                    </span>
                                </Link>

                                {
                                    item.subPages !== undefined && item.subPages.map((item, i) => {
                                        return (
                                            <Link key={i} to={`/zilla-police-sub-page-details/${item.id}`} >
                                                <p className="ms-4">{item.title}
                                                </p>
                                            </Link>
                                        )
                                    })
                                }
                            </p>
                        )
                    })
                }
                <p>
                    <Link to="/">প্রশাসন</Link>
                </p>
                {
                    adminData.map((item, i) => {
                        return (
                            <p key={i} className="inner">
                                <Link to={item?.subPages?.length > 0 ? "#" : `/administration-page-details/${item?.id}`} >
                                    <span>
                                        {item.title}
                                    </span>
                                </Link>

                                {
                                    item.subPages !== undefined && item.subPages.map((item, i) => {
                                        return (
                                            <Link key={i} to={`/zilla-police-sub-page-details/${item.id}`} >
                                                <p className="ms-4">{item.title}
                                                </p>
                                            </Link>
                                        )
                                    })
                                }
                            </p>
                        )
                    })
                }
                <p>
                    <Link to="/">ইউনিট সমূহ</Link>
                </p>
                {
                    unitsData.map((item, i) => {
                        return (
                            <p key={i} className="inner">
                                <Link to={item?.sub_units?.length > 0 ? "#" : `/unit-details/${item?.id}`} >
                                    <span>
                                        {item.title}
                                    </span>
                                </Link>

                                {
                                    item.sub_units !== undefined && item.sub_units.map((item, i) => {
                                        return (
                                            <Link key={i} to={`/sub-unit-details/${item.id}`} >
                                                <p className="ms-4">{item.title}
                                                </p>
                                            </Link>
                                        )
                                    })
                                }
                            </p>
                        )
                    })
                }

                <p>
                    <Link to="/">কার্যক্রম</Link>
                </p>
                {
                    activitiesData.map((item, i) => {
                        return (
                            <p key={i} className="inner">
                                <Link to={item?.subPages?.length > 0 ? "#" : `/activities-details/${item?.id}`} >
                                    <span>
                                        {item.title}
                                    </span>
                                </Link>

                                {
                                    item.subPages !== undefined && item.subPages.map((item, i) => {
                                        return (
                                            <Link key={i} to={`/activities-sub-page-details/${item.id}`} >
                                                <p className="ms-4">{item.title}
                                                </p>
                                            </Link>
                                        )
                                    })
                                }
                            </p>
                        )
                    })
                }
                <p>
                    <Link to="/">সেবা</Link>
                </p>
                {
                    servicesData.map((item, i) => {
                        return (
                            <p key={i} className="inner">
                                <Link to={item?.subPages?.length > 0 ? "#" : `/service-details/${item?.id}`} >
                                    <span>
                                        {item.title}
                                    </span>
                                </Link>

                                {
                                    item.subPages !== undefined && item.subPages.map((item, i) => {
                                        return (
                                            <Link key={i} to={`/services-submenu-details/${item.id}`} >
                                                <p className="ms-4">{item.title}
                                                </p>
                                            </Link>
                                        )
                                    })
                                }
                            </p>
                        )
                    })
                }
                <p>
                    <Link to="/">অপরাধ ব্যাবস্থাপনা</Link>
                </p>
                {
                    crimeManagementData.map((item, i) => {
                        return (
                            <p key={i} className="inner">
                                <Link to={item?.subPages?.length > 0 ? "#" : `/crime-management-details/${item?.id}`} >
                                    <span>
                                        {item.title}
                                    </span>
                                </Link>

                                {
                                    item.subPages !== undefined && item.subPages.map((item, i) => {
                                        return (
                                            <Link key={i} to={`/crime-management-details/${item.id}`} >
                                                <p className="ms-4">{item.title}
                                                </p>
                                            </Link>
                                        )
                                    })
                                }
                            </p>
                        )
                    })
                }
                <p>
                    <Link to="/">নোটিশ বোর্ড</Link>
                </p>
                {
                    noticeBoardData.map((item, i) => {
                        return (
                            <p key={i} className="inner">
                                <Link to={`/notices/${item?.id}`} >
                                    <span>
                                        {item.title}
                                    </span>
                                </Link>
                            </p>
                        )
                    })
                }
                <p>
                    <Link to="/">গ্যালারি</Link>
                </p>
                {
                    galleryData.map((item, i) => {
                        return (
                            <p key={i} className="inner">
                                <Link to={`/${item?.link}`} >
                                    <span>
                                        {item.name}
                                    </span>
                                </Link>
                            </p>
                        )
                    })
                }
                <p>
                    <Link to="/">বিট পুলিশিং</Link>
                </p>
                {
                    bitPolicingData.map((item, i) => {
                        return (
                            <p key={i} className="inner">
                                <Link to={item?.subPages?.length > 0 ? "#" : `/bit-policing-details/${item?.id}`} >
                                    <span>
                                        {item.title}
                                    </span>
                                </Link>
                            </p>
                        )
                    })
                }
                <p className="inner">
                    <Link to={`/info-bit-officers`} >
                        <span>
                            বিট অফিসারগণের তথ্য
                        </span>
                    </Link>
                </p>

                <p>
                    <Link to="/">বিট পুলিশিং</Link>
                </p>
                {
                    bitPolicingData.map((item, i) => {
                        return (
                            <p key={i} className="inner">
                                <Link to={item?.subPages?.length > 0 ? "#" : `/bit-policing-details/${item?.id}`} >
                                    <span>
                                        {item.title}
                                    </span>
                                </Link>
                            </p>
                        )
                    })
                }
                <p>
                    <Link to="/">যোগাযোগ ও ঠিকানা</Link>
                </p>
                {
                    communicationAddressData.map((item, i) => {
                        return (
                            <p key={i} className="inner">
                                <Link to={`/${item?.link}`} >
                                    <span>
                                        {item.name}
                                    </span>
                                </Link>
                            </p>
                        )
                    })
                }
            </div>

        </div>
    )
}
