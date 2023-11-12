import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import "./HeaderBootom.css";
// import 'react-fast-marquee/dist/style.css';
// import "../../../node_modules/react-fast-marquee/dist/style.css";


const HeaderBottom = () => {
    const [marqqueeData, setMarqqueeData] = React.useState([
        { id: 1, text: 'পুলিশ কস্টেবল পদে নিয়োগ বিজ্ঞপ্তি।', text_link: "#", },
        { id: 2, text: 'বাংলাদেশ পুলিশের ক্যাডেট সাব ইন্সপেক্টর পদে নিয়োগ/২০২১ এর কার্যক্রম', text_link: "#", },
        { id: 3, text: 'প্রতিপাদন পত্র', text_link: "#", },
        { id: 4, text: 'চাকরির আবেদন ফর্ম', text_link: "#", },
        { id: 5, text: 'জেলা পুলিশ কিশোরগঞ্জের টেন্ডার নোটিশ 01/03/2020', text_link: "#", },
    ]);

    return (
        <div className="container pt-1">
            <div className="marquee__container">
                <Marquee
                    pauseOnHover={true}
                    speed={60}
                >
                    {marqqueeData.map((item, id) => (
                        <div key={id} className="d-flex justify-content-center">
                            <p className="me-4 marquee__txt">
                                <i className="fas fa-hand-point-right me-2"></i> 
                                <a href={item.text_link} target="_blank" className="text-decoration-none txt__color">{item.text}</a>
                                </p>
                        </div>
                    ))}
                </Marquee>
                <div className="marquee__news">
                    <Link to="/news" className="text-decoration-none"><p className="btn__marquee">সর্বশেষ সংবাদ</p></Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderBottom;