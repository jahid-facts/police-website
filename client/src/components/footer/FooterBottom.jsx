
import { useEffect, useState } from 'react';
import '../footer/Footer.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FooterBottom = () => {
    const [data, setData] = useState({})
    const [visitorData, setVisitorData] = useState({ allVisitorCount: 0, todayVisitorCount: 0 });
    const [button, setButton] = useState([])
    useEffect(() => {
        axios.get(`footer-branding`)
            .then(res => setData(res.data))
        axios.get(`visitor-counter`)
            .then(res => setVisitorData(res.data))
        axios.get(`footer-button-link`)
            .then(res => {
                setButton(res.data)
            })
    }, [])
    return (
        <div className="pt-0" style={{ background: '#e9edf1' }}>
            <div className="container mb-3">
                <div className="mb-2 footer-button-section text-center">
                    <ul className='list-unstyled m-0'>
                        {
                            button?.length > 0 && button.map((item, index) =>
                                <li className='d-inline-block' key={index}><Link className='footer-button' to={item.link}>{item.title}</Link></li>)
                        }
                    </ul>
                </div>
                <div className="row g-3">
                    <div className="col-md-8">
                        <div className="d-flex ">
                            <h6 className="fb__link__txt"> <Link className='text-decoration-none' to='/phone-directory'>অভিযোগ ও অনুসন্ধান</Link></h6>
                            <h6 className="px-2"> | </h6>
                            <h6 className="fb__link__txt"> <Link className='text-decoration-none' to='/site-map'>সাইট ম্যাপ</Link></h6>
                            <h6 className="px-2"> | </h6>
                            <h6 className="fb__link__txt"><Link className='text-decoration-none' to='http://35.240.201.91:4002/'>ওয়েব এডমিন</Link></h6>
                            <h6 className="px-2"> | </h6>
                            <h6 className="fb__link__txt"><Link className='text-decoration-none' to='/map-kishorganj'>ফিডব্যাক ফরম</Link></h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex">
                            <h6 className="fb__link__txt mb-2">সামাজিক যোগাযোগ</h6>
                            <div className="ht-social">
                                <a href={data?.facebook ? data?.facebook : "#"} target='_blank' className="facebook"><i className="fab fa-facebook-f"></i></a>
                                <a href={data?.whatsapp ? `https://api.whatsapp.com/send?phone=${data.whatsapp}` : "#"} target='_blank' className="whatsapp"><i className="fab fa-whatsapp"></i></a>
                                <a href={data?.youtube ? data.youtube : "#"} target='_blank' className="youtube"><i className="fab fa-youtube"></i></a>
                                {/* <a href='#' className="twitter"><i className="fab fa-twitter"></i></a>
                                    <a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#" className="instagram"><i className="fab fa-instagram"></i></a> */}
                                {/* <a href="#" className="pinterest"><i className="fab fa-pinterest-p"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{borderTop: "2px dotted #800000", margin: "-5px 0"}} />
            <div className="d-md-flex justify-content-between ft__copyright">
                <p className=" mb-0"> <span className="me-3"><span className="me-3"> <i className="fa-solid fa-users me-1"></i>Users Today : {visitorData?.todayVisitorCount}</span> <i className="fa-solid fa-chart-simple"></i> Total Users : {visitorData?.allVisitorCount}</span> </p>
                <p className=" mb-0">ডিজাইন & ডেভেলপড বাইঃ <a href={data?.company_link ? data?.company_link : "#"} target='_blank' style={{ color: 'red', background: 'inherit', textDecoration: "none" }}>{data?.company}</a></p>
            </div>
            <hr style={{borderTop: "3px solid #800000", margin: "-5px 0"}} />
        </div>
    );
};

export default FooterBottom;

