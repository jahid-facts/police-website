

import React from 'react';
import '../header/Header.css';
import Logo from '../../assets/Logo.jpg';
import { Link, Navigate, useNavigate } from "react-router-dom";
import NavigationMenu from './NavigationMenu';


const Header = () => {

    const navigate = useNavigate();
    const headerClickHandler = e => {
        e.preventDefault()
        // navigate(-1);
        navigate("/")
    };

    return (
        <div className="sticky__top">
            {/* <nav className="navbar navbar-expand-lg header__navbar">
                <div className="container container-fluid">
                    <Link to="/" className="navbar-brand active" aria-current="page" >
                        <img src={Logo} className="img-fluid" style={{ width: '120px', height: 'auto' }} alt="Logo" border="0" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <span onClick={headerClickHandler}></span>

                        <ul className="navbar-nav" id="nav_bar_nav">
                            <li className="nav-item mx-1">
                                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item dropdown mx-1" id="drop_down">
                                <Link to='#' className="nav-link dropdown-toggle" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>

                                <ul className="dropdown-menu dropdown-menu-services" aria-labelledby="navbarDropdown1">
                                    <li className="nav-item">
                                        <Link to="web-development" className="dropdown-item nav-link">
                                            <ul className="list-unstyled d-flex justify-content-between">
                                                <li>
                                                    <span>Link</span>
                                                </li>
                                            </ul>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="mobile-platform" className="dropdown-item nav-link">
                                            <ul className="list-unstyled d-flex justify-content-between">
                                                <li>
                                                    <span>Link</span>
                                                </li>
                                            </ul>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="cloud-cyber-cecurity" className="dropdown-item nav-link">
                                            <ul className="list-unstyled d-flex justify-content-between">
                                                <li>
                                                    <span>Link</span>
                                                </li>
                                            </ul>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="it-support-services" className="dropdown-item nav-link">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="it-audit-consultancy" className="dropdown-item nav-link">Link</Link>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item dropdown mx-1">
                                <Link to='#' className="nav-link dropdown-toggle" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">Expertise</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                    <li className="nav-item">
                                        <Link to="healthcare" className="dropdown-item nav-link">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="e-commerce" className="dropdown-item nav-link">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="erp-solutions" className="dropdown-item nav-link">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="ed-tech" className="dropdown-item nav-link">Link</Link>
                                    </li>

                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-1">
                                <Link to='#' className="nav-link dropdown-toggle" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown4">
                                    <li className="nav-item">
                                        <Link to="products" className="dropdown-item nav-link">Products</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='coverage' className="dropdown-item nav-link">Link</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-1">
                                <Link to='#' className="nav-link dropdown-toggle" id="navbarDropdown5" role="button" data-bs-toggle="dropdown" aria-expanded="false">Partners</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown5">
                                    <li className="nav-item">
                                        <Link to="partners" className="dropdown-item nav-link">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="become-a-partner" className="dropdown-item nav-link">Link</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-1">
                                <Link to='#' className="nav-link dropdown-toggle" id="navbarDropdown6" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown6">
                                    <li className="nav-item">
                                        <Link to='about-us' className="nav-link">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='career' className="nav-link" >Link</Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item mx-1">
                                <Link to='contact-us' className="nav-link">Contacts</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav> */}
            <div className="hd__navbar">
                <NavigationMenu />
            </div>
        </div>
    );
};

export default Header;



// .header__navbar .navbar-toggler {
//     color: #F7921E !important;
//     border-color: #F7921E !important;
// }
// .navbar-toggler:focus {
//     text-decoration: none;
//     outline: 0;
//     box-shadow: 0 0 0 0.1rem !important;
// }
// .header__navbar .navbar-toggler-icon {
//     background-image: url("../../Images/menu.png");
// }

// .navbar-toggler-icon {
//     display: inline-block;
//     width: 1em !important;
//     height: 1em !important;
// }
// .header__navbar {
//     background: #fff;
//     z-index: 100;
// }
// .dropdown:hover .dropdown-menu {
//     display: block;
// }

// #drop_down:hover .dropdown-menu {
//     display: block;
// }

// .dropdown-menu {
//     border: 1px solid #FFFFFF !important;
//     border-radius: 0.25rem;
//     /* background: #FFFFFF; */
//     box-shadow: 0px 0px 7px 1px rgb(0 0 0 / 10%);
//     padding: 0.5rem 0.3rem !important;
//     /* padding: 0.5rem 0.2rem 0rem 0.1rem !important; */
// }
// .dropdown-menu ul li{
//     padding: 1px 0px !important;
// }

// .dropdown-menu-services {
//     min-width: 17rem !important;
// }

// .navbar-expand-lg .navbar-nav .dropdown-menu {
//     position: absolute;
//     z-index: 1 !important;
// }
// /* .dropdown-menu-services li {
//     padding: 1px 0px !important;
// } */
// .navbar-expand-lg .navbar-nav .dropdown-menu {
//     position: absolute;
//     z-index: 1 !important;
// }
// .navbar-expand-lg .navbar-nav .nav-link {
//     padding-right: 0.5rem;
//     padding-left: 0.5rem;
//     font-size: 16px;
//     font-weight: 500;
//     /* color: #484848; */
//     color:#696969;
// }
// .navbar-nav .nav-item ul li{
//     font-size: 16px;
//     font-weight: 500
// }
// /* .navbar-nav .nav-link:hover {
//     color: #fff !important;
//     background: #939393 !important;
// } */
// #nav_bar_nav .nav-link:hover {
//     color: #fff !important;
//     background: #939393 !important;
// }

// .navbar-nav .nav_link_pay_online:hover {
//     color: #fff !important;
//     background: #2B327B !important;
// }

// .dropdown-toggle {
//     display: inline-block !important;
//     border-right: none !important;
//     border-bottom: none !important;
//     border-left: none !important;
// }

// .dropdown-toggle::after {
//     border-right: none !important;
//     border-bottom: none !important;
//     border-left: none !important;
// }

// .dropdown-item {
//     padding: 3px 10px !important;

// }

// /* .dropdown-item:hover {
//     color: #fff !important;
//     background: #939393 !important;
// } */

// @media only screen and (max-width:768px) {
//     .header__navbar {
//         background: #fff;
//         z-index: 100;
//     }
// }

// /* top navbar header end */
