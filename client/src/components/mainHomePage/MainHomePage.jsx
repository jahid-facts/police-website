import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import RecentActivities from '../recentActivities/RecentActivities';
import PhotoGalleryHome from '../gallery/PhotoGalleryHome';



import mainhome_slide1 from '../../assets/mainhome_slide1.jpeg';
import mainhome_slide2 from '../../assets/mainhome_slide2.jpeg';
import mainhome_slide3 from '../../assets/mainhome_slide3.jpeg';
import mainhome_slide4 from '../../assets/mainhome_slide4.jpeg';
import mainhome_slide5 from '../../assets/mainhome_slide5.jpeg';
import mainhome_slide6 from '../../assets/mainhome_slide6.jpeg';
import mainhome_slide7 from '../../assets/mainhome_slide7.jpeg';
import mainhome_slide8 from '../../assets/mainhome_slide8.jpeg';
import mainhome_slide9 from '../../assets/mainhome_slide9.jpeg';
import GrievanceRedManag from '../../assets/GrievanceRedManag.png';
import rightInf from '../../assets/rightInf.png';
import National_Purity from '../../assets/National_Purity.png';
import perMent from '../../assets/perMent.jpg';
import Departure_leave_img from "../../assets/Departure_leave_img.jpg";
import notice_imgee from "../../assets/notice_imgee.jpeg";
import Fe6bx24hpYfvTRV2svOW from "../../assets/Fe6bx24hpYfvTRV2svOW.jpg";
import obI6w42Sm1hApS2rnhot from "../../assets/obI6w42Sm1hApS2rnhot.jpeg";
import police_constable_img from "../../assets/police_constable_img.jpg";
import VideoGalleryHome from '../gallery/VideoGalleryHome';
import LeftHomePage from './LeftHomePage';
import axios from 'axios';
import imgUrl from '../../imgUrl';




const MainHomePage = () => {

    const [marqqueeData, setMarqqueeData] = useState([
        // {
        //     id: 1,
        //     text: 'নো মাস্ক নো সার্ভিস। করোনাভাইরাসের বিস্তার রোধে এখনই ডাউনলোড করুন Corona Tracer BD অ্যাপ। ডাউনলোড করতে ক্লিক করুন',
        //     text_link: "https://bit.ly/coronatracerbd",
        // },
        // {
        //     id: 2, text: "। নিজে সুরক্ষিত থাকুন অন্যকেও নিরাপদ রাখুন। দেশের প্রথম ক্রাউডফান্ডিং প্ল্যাটফর্ম 'একদেশ'- এর মাধ্যমে আর্থিক অনুদান পৌঁছে দিন নির্বাচিত সরকারি-বেসরকারি প্রতিষ্ঠানসমূহে। ভিজিট করুন  ",
        //     text_link: "https://bit.ly/coronatracerbd",
        // },
        // { id: 3, text: "ekdesh.ekpay.gov.bd", text_link: "#", },
        // { id: 4, text: "Ek Desh, text_link:", text_link: "#", },
        // {
        //     id: 5,
        //     text: 'অ্যাপ ডাউনলোড করুন। করোনার লক্ষণ দেখা দিলে গোপন না করে ডাক্তারের পরামর্শের জন্য ফ্রি কল করুন ৩৩৩ ও ১৬২৬৩ নম্বরে। করোনাভাইরাস প্রতিরোধে নিয়ম মেনে মাস্ক ব্যবহার করুন। আতঙ্কিত না হয়ে বরং সচেতন থাকুন। ভিজিট করুন',
        //     text_link: "#",
        // },
        // { id: 6, text: 'https://bit.ly/coronatracerbd', text_link: "https://bit.ly/coronatracerbd", },
        // { id: 7, text: 'corona.gov.bd', text_link: "https://corona.gov.bd", },
    ]);


    

    
    const [homeCaraousel, setHomeCaraousel] = useState([
        { id: 1, title: "ওসি বাজিতপুর বিদায় সংবর্ধনা।", image: mainhome_slide1 },
        { id: 2, title: "ওসি বাজিতপুর বিদায় সংবর্ধনা।", image: mainhome_slide2 },
        { id: 3, title: "ওসি বাজিতপুর বিদায় সংবর্ধনা।", image: mainhome_slide3 },
        { id: 4, title: "ওসি বাজিতপুর বিদায় সংবর্ধনা।", image: mainhome_slide4 },
        { id: 5, title: "ওসি বাজিতপুর বিদায় সংবর্ধনা।", image: mainhome_slide5 },
        { id: 6, title: "ওসি বাজিতপুর বিদায় সংবর্ধনা।", image: mainhome_slide6 },
        { id: 7, title: "ওসি বাজিতপুর বিদায় সংবর্ধনা।", image: mainhome_slide7 },
        { id: 8, title: "ওসি বাজিতপুর বিদায় সংবর্ধনা।", image: mainhome_slide8 },
        { id: 9, title: "ওসি বাজিতপুর বিদায় সংবর্ধনা।", image: mainhome_slide9 },
    ]);


    const [rightInfoData, setRightInfoData] = useState([
        {
            id: 1, image: perMent, title: "কর্মসম্পাদন ব্যবস্থাপনা",
            title_list: [
                { id: 1, list_name: "বার্ষিক কর্মসম্পাদন চুক্তি", link: "annual-performance-agreement" },
                { id: 2, list_name: "বার্ষিক প্রতিবেদন", link: "annual-report" },
                { id: 3, list_name: "বাস্তবায়ন অগ্রগতি", link: "implementation-progress" },
            ],
        },
        {
            id: 2, image: National_Purity, title: "জাতীয় শুদ্ধাচার",
            title_list: [
                { id: 1, list_name: "জাতীয় শুদ্ধাচার কৌশল", link: "national-purification-strategy" },
                { id: 2, list_name: "কমিটি / ফোকাল পয়েন্ট", link: "committee-focal-point" },
                { id: 3, list_name: "কর্মপরিকল্পনা", link: "action-plan" },
            ],
        },
        {
            id: 3, image: rightInf, title: "তথ্য অধিকার",
            title_list: [
                { id: 1, list_name: "আইন/বিধি/কৌশল", link: "laws-rules-strategies" },
                { id: 2, list_name: "তথ্য প্রদানকারী কর্মকর", link: "information-officer" },
                { id: 3, list_name: "বিজ্ঞপ্তি ও প্রজ্ঞাপন", link: "notices-notifications" },
            ],
        },
        {
            id: 4, image: GrievanceRedManag, title: "অভিযোগ প্রতিকার ব্যবস্থাপনা",
            title_list: [
                { id: 1, list_name: "ফোকাল পয়েন্ট", link: "focal-point" },
                { id: 2, list_name: "প্রতিবেদন", link: "report" },
                { id: 3, list_name: "প্রসেস ম্যাপ", link: "process-map" },
            ],
        },
    ])

    const [noticeData, setNoticeData] = useState([
        {
            id: 1,
            image: police_constable_img,
            title: "পুলিশ কস্টেবল পদে নিয়োগ বিজ্ঞপ্তি।",
            desc: "অনলাইনে আবেদন শুরু ০২ ডিসেম্বর ২০২২ শেষ ২৮ ডিসেম্বর ২০২২",
            link: "#",
        },
        {
            id: 2,
            image: notice_imgee,
            title: "নোটিশ",
            desc: "ইংরেজি ০৬-০৫-২০২৩ তারিখ রাত্রি ২১.৪৫ ঘটিকায় ১০১১ (এক হাজার এগারো) পিস ইয়াবা ট্যাবলেটসহ বাজিতপুর থানাধীন বাহেরবালী খেয়া নৌকা ঘাটে অভিযান পরিচালনা করে বিবাদী ১। জামান মিয়াজি (২৫), পিতা- ইব্রাহিম মিয়াজি, মাতা- আসিয়া খাতুন, ২। মাকসুদুল হাসান @ মাসুম (২৫), পিতা- আক্কেল আলী, মাতা- পারভীন বেগম, উভয় সাং- পুরাকান্দা (মাইজচর), থানা- বাজিতপুর, জেলা- কিশোরগঞ্জদ্বয়কে বাজিতপুর থানা পুলিশ গ্রেফতার করেন। ইংরেজি ০৬-০৫-২০২৩ তারিখ রাত্রি ২০.৩৫ ঘটিকায় কিশোরগঞ্জের বাজিতপুর থানা কর্তৃক মাদকদ্রব্য উদ্ধার অভিযান কালে এসআই (নিরস্ত্র) সজীব সাহা অভিজিৎ গোপন সংবাদের ভিত্তিতে সঙ্গীয় অফিসার-ফোর্সের সহায়তায় উক্ত বিবাদীদ্বয়কে গ্রেফতার করে বিবাদীদ্বয়ের নিজ হাতে বের করে দেওয়া ১০১১ (এক হাজার এগারো) পিস ইয়াবা ট্যাবলেট উদ্ধারপূর্বক রাত্রি ২১.৪৫ ঘটিকায় জব্দ তালিকা মূলে জব্দ করেন। এ ঘটনায় বাজিতপুর থানায় মাদকদ্রব্য নিয়ন্ত্রণ আইন, ২০১৮-এ একটি নিয়মিত মামলা রুজু করা হয়েছে।",
            link: "#",
        },
        {
            id: 3,
            image: Departure_leave_img,
            title: "বহির্গমণ ছুটি",
            desc: "কিশোরগঞ্জ জেলা ",
            link: "#",
        },
        {
            id: 4,
            image: Fe6bx24hpYfvTRV2svOW,
            title: "বাংলাদেশ পুলিশের ক্যাডেট সাব ইন্সপেক্টর পদে নিয়োগ/২০২১ এর কার্যক্রম",
            desc: "০৪ ডিসেম্বর ২০২১ সকাল ০৯.৩০ ঘটিকায় হোটেল ইন্টারন্যাশনাল কন্টিনেন্টাল ঢাকা-র ক্রিস্টাল হলরুমে বাংলাদেশ পুলিশ এবং টেলিটক বাংলাদেশ লিমিটেডের যৌথ আয়োজনে পরিবর্তিত পদ্ধতিতে বাংলাদেশ পুলিশের ক্যাডেট সাব ইন্সপেক্টর পদে নিয়োগ/২০২১ এর কার্যক্রম সম্পর্কিত এক কর্মশালা অনুষ্ঠিত হয়। অনুষ্ঠানে বাংলাদেশ পুলিশের সম্মানিত ইন্সপেক্টর জেনারেল জনাব ড. বেনজীর আহমেদ বিপিএম (বার) মহোদয় প্রধান অতিথি হিসেবে উপস্থিত ছিলেন। সাব-ইন্সপেক্টর পদে নিয়োগ কার্যক্রম সম্পর্কিত কর্মশালায় প্রধান অতিথির বক্তব্যে তিনি সম্প্রতি নতুন পদ্ধতিতে সম্পন্ন হওয়া কনস্টেবল নিয়োগ প্রসঙ্গে দেশের জনগণকে নিশ্চয়তা দিয়ে বলেন যে, কনস্টেবল পদে জব মার্কেট থেকে 'বেস্ট অব দি বেস্ট' প্রার্থী নিয়োগে আমরা সক্ষম হয়েছি। আগামী এক থেকে দুই বছরের মধ্যে মানুষ এক্ষেত্রে পরিবর্তন দেখবেন বলে তিনি আশা প্রকাশ করেন।অনুষ্ঠানে স্বাগত বক্তব্য রাখেন অতিরিক্ত আইজি জনাব মোঃ মাজহারুল ইসলাম। সাব ইন্সপেক্টর নিয়োগ প্রক্রিয়ার সার্বিক দিক তুলে ধরে বক্তব্য রাখেন এআইজি (আরএন্ডসিপি-১) মোঃ মাহফুজুর রহমান আল-মামুন। ডাক ও টেলিযোগাযোগ বিভাগের সচিব মোঃ খলিলুর রহমান, টেলিটক বাংলাদেশ লিমিটেডের ব্যবস্থাপনা পরিচালক মোঃ সাহাব উদ্দিনও বক্তব্য রাখেন। উক্ত অনুষ্ঠানে ঢাকা রেঞ্জ ডিআইজি জনাব হাবিবুর রহমান বিপিএম (বার) পিপিএম (বার) সহ পুলিশের বিভিন্ন ইউনিটের উর্ধ্বতন পুলিশ কর্মকর্তাগণ উপস্থিত ছিলেন। কর্মশালায় বাংলাদেশ পুলিশের বিভিন্ন ইউনিটের সহকারী পুলিশ সুপার থেকে অতিরিক্ত ডিআইজি পদমর্যাদার কর্মকর্তাগণ ভার্চুয়ালি অংশগ্রহণ করেন।",
            link: "#",
        },
        {
            id: 5,
            image: obI6w42Sm1hApS2rnhot,
            title: "কনস্টেবল পদে নিয়োগ বিজ্ঞপ্তি (সংশোধিত)",
            desc: "অনলাইনে আবেদন শুরু ০২ ডিসেম্বর ২০২২ শেষ ২৮ ডিসেম্বর ২০২২",
            link: "#",
        },
    ]);

const [homeBanner, setHomeBanner] = useState({});
useEffect(() => {
    axios.get('/banner').then((res) => {
        setHomeBanner(res.data[0]);
    })
    .catch((err) => {
        console.log(err);
    })
    axios.get('/bottom-news').then((res) => {
        setMarqqueeData(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
    axios.get('/bottom-news').then((res) => {
        setMarqqueeData(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
    axios.get('/activity-slider').then((res) => {
        setHomeCaraousel(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
    axios.get('/work-document-section').then((res) => {
        setRightInfoData(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
    axios.get('/notice').then((res) => {
        setNoticeData(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
},[])

    return (
        <div className="container pt-1">
            <div className="row g-3">
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-12">
                            <img src={`${imgUrl}${homeBanner?.image}`} className="img-fluid" alt="image" loading='lazy' />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12">
                            <div className="home__marquee">
                                <Marquee
                                    pauseOnHover={true}
                                    speed={60}
                                >
                                    {marqqueeData.map((item, id) => (
                                        <div key={id} className="d-flex justify-content-center">
                                            <p className="me-4 home__marquee__txt">
                                                <a href={item.link} target="_blank" className="text-decoration-none hm__txt__link">{item.description}</a>
                                            </p>
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <RecentActivities />
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div className="col-12">
                            <div className="home__carousel">
                                <Carousel
                                    autoPlay
                                    infiniteLoop
                                    showArrows={true}
                                    showThumbs={false}
                                    interval="5000"
                                >
                                    {
                                        homeCaraousel !== undefined && homeCaraousel.map((item) => {
                                            return (
                                                <div key={item.id} className="home__carousel__box">
                                                    <img src={`${imgUrl}/${item.image}`} className="img-fluid" alt="AboutBanner" />
                                                    <div className="content__img">
                                                        <div className="container d-flex justify-content-center" >
                                                            <h6 className="text-white">{item.title}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </div>


                    <div className="row g-3 pt-5">
                        {
                            rightInfoData !== undefined && rightInfoData.map((item) => {
                                return (
                                    <div key={item.id} className="col-md-6">

                                        <div className="rc__card">
                                            <div className="card">
                                                <h6 className="rc__hd__txt">{item.title}</h6>
                                                <div className="row g-0">
                                                    <div className="col-4">
                                                        <div className="card__rc__img">
                                                            <img src={`${imgUrl}/${item.image}`} className="img-fluid" alt="..." loading='lazy' />
                                                        </div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="card-body">
                                                            <ul className="list-unstyled right__info">
                                                                {
                                                                    item?.works?.map((list) => {
                                                                        return (
                                                                            <li key={list.id}>
                                                                                <i className="me-2 right__info__list__arrow  fa-solid fa-play"></i>
                                                                                <Link to={`/view-action-details/${list.id}`} className="right__info__list" >{list.title}</Link>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="row g-3 pt-5">
                        <div className="col-12">
                            <h6 className="rc__hd__txt">নোটিশ বোর্ড</h6>
                            <div className="notice__area">
                                <div className="notice__bg">
                                    <div className="notice__content">
                                        <div className="notice__list" id="example">
                                            <ul className="list-unstyled">
                                                {
                                                    noticeData !== undefined && noticeData.slice(0, 4).map((item) => {
                                                        return (
                                                            <li key={item?.notice?.id}>
                                                                <Link to={`/notice-board-details/${item?.notice?.id}`} className="notice__list__link" rel="bookmark" title={item?.notice?.title}>
                                                                    <i className="me-2 fa-regular fa-circle-right"></i>{item?.notice?.title}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>

                                        <div className="notice__btn__area">
                                            <Link className="notice__btn" to="/all-notice">সব </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div className="col-12">
                            <PhotoGalleryHome />
                        </div>
                    </div>

                    <div className="row pt-4">
                        <div className="col-12">
                            <VideoGalleryHome />
                        </div>
                    </div>

                </div>


                <div className="col-md-3">
                    <LeftHomePage />
                </div>

            </div>
        </div>
    );
};

export default MainHomePage;