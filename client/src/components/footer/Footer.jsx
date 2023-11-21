
import '../footer/Footer.css';
import { Link } from "react-router-dom";
import FooterBottom from './FooterBottom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Footer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`footer-heading`)
            .then(res => {
                setData(res.data)
            })
    }, [])
    return (
        <>
            <div className="pt-0" style={{background: '#f5f5f5'}}>
                <hr className="ft__hr" />
                <div className="p-3">
                    <div className="container">
                        <div className="row g-3">
                            {
                                data.map((item, index) => <div key={index} className="col-md-3 pe-md-3">
                                    <h5 className="ft__link__txt mb-2">{item.title}</h5>
                                    <div className="footer_contact pt-2">
                                        <ul className="list-unstyled">
                                            {
                                                item.footerData.map((link) => {
                                                    return <li key={link.id}>
                                                        <Link to={link.link} className="link_footer">
                                                            <span className="d-flex align-items-start ">
                                                                <i className="p-1 ft__rt__arrow fa-solid fa-play"></i>
                                                                <p className="px-2 ft__txt">{link.title}</p>
                                                            </span>
                                                        </Link>
                                                    </li>
                                                })
                                            }

                                        </ul>
                                    </div>
                                </div>)
                            }

                        </div>
                    </div>
                </div>
                <hr className="fb__hr m-0" />
                <FooterBottom />
            </div>

        </>
    );
};

export default Footer;