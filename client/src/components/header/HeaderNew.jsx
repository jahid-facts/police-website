











import React, { useEffect, useState } from 'react';
import '../header/HeaderNew.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const HeaderNew = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // const [hoveredTitle, setHoveredTitle] = useState(null);

    const headerClickHandler = () => {
        navigate('/');
    };

    // const handleTitleHover = (titleId) => {
    //     setHoveredTitle(titleId);
    // };

    // const handleTitleLeave = () => {
    //     setHoveredTitle(null);
    // };

    const [title, setTitle] = useState([]);

    useEffect(() => {
        axios.get(`title`)
            .then((res) => {
                setTitle(res.data);
            });
    }, [])

    return (
        <div className="ht__navbar">
            <nav className="navbar navbar-expand-lg bg__body navbar-dark">
                <div className="container container-fluid ht__navbar__logo">
                    <button
                        className="navbar-toggler text-end"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-start navbar__collapse" id="navbarNav">
                        <span onClick={headerClickHandler}></span>
                        <ul className="navbar-nav menu3">
                            <li className="nav-item">
                                <Link to="/" className={`navbar-brand nav-link pe-2 ${location.pathname === '/' && 'active-nav'}`} aria-current="page">
                                    <span>প্রথম পাতা</span>
                                </Link>
                            </li>

                           
                            {
                                title !== undefined && title.map((item, i) => {
                                    return (
                                        <li
                                            key={i}
                                            className={`nav-item dropdown`}
                                            // className={`nav-item dropdown ${hoveredTitle === item.id ? 'show' : ''}`}
                                            // onMouseEnter={() => handleTitleHover(item.id)}
                                            // onMouseLeave={handleTitleLeave}
                                        >
                                            <Link
                                                to='#'
                                                className={`navbar-brand drop__communication__hover ${location.pathname === "" && "active-nav"}`}
                                                id="navbarDropdown13"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                style={{
                                                    marginRight: item.margin_right,
                                                    color: item.color,
                                                    fontSize: item.font_size,
                                                    padding: item.padding,
                                                    display: item.display,
                                                }}
                                            >
                                                <span>{item.title} <i className="fa-solid fa-angle-down pl-2"></i></span>
                                            </Link>

                                        
                                            <div className="dropdown-menu drop__communication" aria-labelledby="navbarDropdown13">
                                                <div className="row">
                                                    {item.subtitle !== undefined &&
                                                        item.subtitle.map((subItem, j) => {
                                                            return (
                                                                <div key={j} className="col-sm-12">
                                                                    <div className="nav-item">
                                                                        <Link to={subItem.link} className="dropdown-item">
                                                                            <span>
                                                                                <div className="ps-2">
                                                                                    <p
                                                                                        style={{
                                                                                            color: subItem.color,
                                                                                            fontWeight: subItem.font_weight,
                                                                                            fontSize: subItem.font_size,
                                                                                            marginBottom: subItem.margin_bottom,
                                                                                        }}
                                                                                    >
                                                                                        {subItem.title}
                                                                                    </p>
                                                                                </div>
                                                                            </span>
                                                                        </Link>


                                                                        {subItem.pages !== undefined &&
                                                                            subItem.pages.map((pageItem, k) => {
                                                                                return (
                                                                                    <div key={k} className="col-sm-12">
                                                                                        <div className="nav-item">
                                                                                            <Link to={pageItem.link} className="dropdown-item">
                                                                                                <span>
                                                                                                    <div className="ps-2">
                                                                                                        <p
                                                                                                            style={{
                                                                                                                color: pageItem.color,
                                                                                                                fontWeight: pageItem.font_weight,
                                                                                                                fontSize: pageItem.font_size,
                                                                                                                marginBottom: pageItem.margin_bottom,
                                                                                                            }}
                                                                                                        >
                                                                                                            {pageItem.title}
                                                                                                        </p>
                                                                                                    </div>
                                                                                                </span>
                                                                                            </Link>
                                                                                        </div>
                                                                                    </div>
                                                                                );
                                                                            })}

                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                </div>
                                            </div>
                                        </li>


                                    )

                                })}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default HeaderNew;










// import React, { useEffect, useState } from 'react';
// import '../header/HeaderNew.css';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const HeaderNew = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [hoveredTitle, setHoveredTitle] = useState(null);

//     const headerClickHandler = () => {
//         navigate('/');
//     };

//     const handleTitleHover = (titleId) => {
//         setHoveredTitle(titleId);
//     };

//     const handleTitleLeave = () => {
//         setHoveredTitle(null);
//     };

//     const [title, setTitle] = useState([]);

//     useEffect(() => {
//         axios.get(`title`)
//             .then((res) => {
//                 setTitle(res.data);
//             });
//     }, [])

//     return (
//         <div className="ht__navbar">
//             <nav className="navbar navbar-expand-lg bg__body navbar-dark">
//                 <div className="container container-fluid ht__navbar__logo">
//                     <button
//                         className="navbar-toggler text-end"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#navbarNav"
//                         aria-controls="navbarNav"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse justify-content-start navbar__collapse" id="navbarNav">
//                         <span onClick={headerClickHandler}></span>
//                         <ul className="navbar-nav menu3">
//                             <li className="nav-item">
//                                 <Link to="/" className={`navbar-brand nav-link pe-2 ${location.pathname === '/' && 'active-nav'}`} aria-current="page">
//                                     <span>প্রথম পাতা</span>
//                                 </Link>
//                             </li>

//                             {/* {title &&
//                                 title.map((item, i) => { */}
//                             {
//                                 title !== undefined && title.map((item, i) => {
//                                     return (
//                                         <li
//                                             key={i}
//                                             className={`nav-item dropdown ${hoveredTitle === item.id ? 'show' : ''}`}
//                                             onMouseEnter={() => handleTitleHover(item.id)}
//                                             onMouseLeave={handleTitleLeave}
//                                         >
//                                             <Link to='#' className={`navbar-brand drop__communication__hover ${location.pathname === "" && "active-nav"}`} id="navbarDropdown13" role="button" data-bs-toggle="dropdown" aria-expanded="false"
//                                                 style={{
//                                                     marginRight: item.margin_right,
//                                                     color: item.color,
//                                                     // color: "692E8F",
//                                                     fontSize: item.font_size,
//                                                     // backgroundColor: item.bg_color,
//                                                     padding: item.padding,
//                                                     display: item.display,
//                                                 }}
//                                             >
//                                                 <span>{item.title} <i className="fa-solid fa-angle-down pl-2"></i></span>
//                                             </Link>
//                                             <div className="dropdown-menu drop__communication" aria-labelledby="navbarDropdown13">
//                                                 <div className="row">
//                                                     {
//                                                         item.subtitle !== undefined && item.subtitle.map((item, i) => {
//                                                             return (
//                                                                 <div key={i} className="col-sm-12">
//                                                                     <div className="nav-item">
//                                                                         <Link to={item.link} className="dropdown-item">
//                                                                             <span>
//                                                                                 <div className="ps-2">
//                                                                                     <p
//                                                                                         style={{
//                                                                                             color: item.color,
//                                                                                             fontWeight: item.font_weight,
//                                                                                             fontSize: item.font_size,
//                                                                                             marginBottom: item.margin_bottom,
//                                                                                         }}
//                                                                                     >{item.title}</p>
//                                                                                 </div>
//                                                                             </span>
//                                                                         </Link>

//                                                                         <div className="dropdown-menu drop__communication" aria-labelledby="navbarDropdown13">
//                                                                             <div className="row">
//                                                                                 {
//                                                                                     subItem.pages !== undefined && subItem.pages.map((pageItem, i) => {
//                                                                                         return (
//                                                                                             <div key={i} className="col-sm-12">
//                                                                                                 <div className="nav-item">
//                                                                                                     <Link to={pageItem.link} className="dropdown-item">
//                                                                                                         <span>
//                                                                                                             <div className="ps-2">
//                                                                                                                 <p
//                                                                                                                     style={{
//                                                                                                                         color: pageItem.color,
//                                                                                                                         fontWeight: pageItem.font_weight,
//                                                                                                                         fontSize: pageItem.font_size,
//                                                                                                                         marginBottom: pageItem.margin_bottom,
//                                                                                                                     }}
//                                                                                                                 >{pageItem.title}</p>
//                                                                                                             </div>
//                                                                                                         </span>
//                                                                                                     </Link>
//                                                                                                 </div>
//                                                                                             </div>
//                                                                                         )
//                                                                                     })
//                                                                                 }
//                                                                             </div>
//                                                                         </div>


//                                                                     </div>
//                                                                 </div>
//                                                             )
//                                                         })
//                                                     }
//                                                 </div>
//                                             </div>


//                                         </li>

//                                     )

//                                 })}
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default HeaderNew;














// import React, { useEffect, useState } from 'react';
// import '../header/HeaderNew.css';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const HeaderNew = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [activeTitle, setActiveTitle] = useState(null);
//     const [title, setTitle] = useState([]); // Initialize the state for titles

//     const headerClickHandler = () => {
//         navigate('/');
//     };

//     const handleTitleHover = (titleId) => {
//         setActiveTitle(titleId);
//     };

//     const handleTitleLeave = () => {
//         setActiveTitle(null);
//     };

//     useEffect(() => {
//         axios.get(`title`)
//             .then((res) => {
//                 setTitle(res.data);
//             });
//     }, [])

//     return (
//         <div className="ht__navbar">
//             <nav className="navbar navbar-expand-lg bg__body navbar-dark">
//                 <div className="container container-fluid ht__navbar__logo">
//                     <button
//                         className="navbar-toggler text-end"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#navbarNav"
//                         aria-controls="navbarNav"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse justify-content-start navbar__collapse" id="navbarNav">
//                         <span onClick={headerClickHandler}></span>
//                         <ul className="navbar-nav menu3">
//                             <li className="nav-item">
//                                 <Link to="/" className={`navbar-brand nav-link pe-2 ${location.pathname === '/' && 'active-nav'}`} aria-current="page">
//                                     <span>প্রথম পাতা</span>
//                                 </Link>
//                             </li>

//                             {title &&
//                                 title.map((item, i) => (
//                                     <div
//                                         key={i}
//                                         className="nav-item"
//                                         onMouseEnter={() => handleTitleHover(item.id)}
//                                         onMouseLeave={handleTitleLeave}
//                                     >
//                                         <Link to={item.subtitle.length > 0 ? '#' : `unit-details/${item.id}`} className={`navbar-brand drop__division__hover  ${location.pathname === '' && 'active-nav'}`} id="navbarDropdown13"
//                                             style={{
//                                                 color: 'rgb(132, 21, 77)',
//                                                 fontSize: '14px',
//                                                 padding: '0.4rem',
//                                                 display: 'block',
//                                             }}
//                                         >
//                                             <span>
//                                                 <div className="ps-2">
//                                                     <p style={{ color: '#098346', fontWeight: 400, fontSize: '14px', marginBottom: '0px' }}>{item.title} <i className="fa-solid fa-angle-down pl-2"></i></p>
//                                                 </div>
//                                             </span>
//                                         </Link>
//                                         <div className={`dropdown-menu drop__division`} aria-labelledby="navbarDropdown13">
//                                             <div className="row">
//                                                 {activeTitle === item.id && (
//                                                     <div className="submenu">
//                                                         {item.subtitle?.sort((a, b) => a.index - b.index).map((subItem, i) => (
//                                                             <div key={i} className="submenu-item">
//                                                                 <Link to={subItem.pages?.length > 0 ? '#' : `sub-unit-details/${subItem.id}`} className="navbar-brand drop__division__hover"
//                                                                     style={{
//                                                                         color: '#0072AB',
//                                                                         fontSize: '14px',
//                                                                         padding: '0.4rem',
//                                                                         display: 'block',
//                                                                     }}
//                                                                 >
//                                                                     <span>
//                                                                         <div className="ps-2">
//                                                                             <p style={{ color: '#0072AB', fontWeight: 400, fontSize: '14px', marginBottom: '0px' }}>{subItem.title} <i className="fa-solid fa-angle-down pl-2"></i></p>
//                                                                         </div>
//                                                                     </span>
//                                                                 </Link>
//                                                                 {subItem.pages !== undefined && (
//                                                                     <div className="submenu">
//                                                                         {subItem.pages.sort((a, b) => a.index - b.index).map((subItemPage, i) => (
//                                                                             <div key={i} className="submenu-item">
//                                                                                 {/* <Link to={`sub-unit-details/${subItemPage.id}`} className="dropdown-item"> */}
//                                                                                 <Link to={`sub-unit-details/${subItemPage.id}`} className="navbar-brand drop__division__hover"
//                                                                                     style={{
//                                                                                         color: '#8b8d8f',
//                                                                                         fontSize: '14px',
//                                                                                         padding: '0.4rem',
//                                                                                         display: 'block',
//                                                                                     }}
//                                                                                 >
//                                                                                     <span>
//                                                                                         <div className="ps-2">
//                                                                                             <p style={{ color: '#8b8d8f', fontWeight: 400, fontSize: '14px', marginBottom: '0px' }}>{subItemPage.title}</p>
//                                                                                         </div>
//                                                                                     </span>
//                                                                                 </Link>
//                                                                             </div>
//                                                                         ))}
//                                                                     </div>
//                                                                 )}
//                                                             </div>
//                                                         ))}
//                                                     </div>
//                                                 )}

//                                             </div>
//                                         </div>

//                                     </div>
//                                 ))}

//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default HeaderNew;







// import React, { useEffect, useState } from 'react';
// import '../header/HeaderNew.css';
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import axios from 'axios';


// const HeaderNew = () => {
//     const navigate = useNavigate();

//     const headerClickHandler = e => {
//         // e.preventDefault()
//         // navigate(-1);
//         navigate("/")
//     };

//     const [title, setTitle] = useState([]);
//     console.log(title)


//     useEffect(() => {
//         axios.get(`title`)
//             .then((res) => {
//                 setTitle(res.data);
//             });
//     }, [])

//     return (
//         <div className="ht__navbar">
//             <nav className="navbar navbar-expand-lg bg__body navbar-dark" >
//                 <div className="container container-fluid ht__navbar__logo">

//                     <button className="navbar-toggler text-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse justify-content-start navbar__collapse" id="navbarNav">
//                         <span onClick={headerClickHandler}></span>

//                         <ul className="navbar-nav menu3">
//                             <li className="nav-item">
//                                 <Link to='/' className={`navbar-brand nav-link pe-2 ${location.pathname === "/" && "active-nav"}`} aria-current="page"><span>প্রথম পাতা</span></Link>
//                             </li>


//                             {
//                                 title.map((item, i) => {
//                                     return (
//                                         <div key={i} className="col-sm-6">
//                                             <div className="nav-item">
//                                                 <Link to={item?.subtitle?.length > 0 ? "#" : `unit-details/${item?.id}`} className="dropdown-item">
//                                                     <span>
//                                                         <div className="ps-2">
//                                                             <p
//                                                                 style={{
//                                                                     color: "#098346",
//                                                                     fontWeight: 400,
//                                                                     fontSize: "14px",
//                                                                     marginBottom: "0px",
//                                                                 }}>{item.title}</p>
//                                                         </div>
//                                                     </span>
//                                                 </Link>
//                                                 <div className="row">
//                                                     {
//                                                         item.subtitle !== undefined && item.subtitle?.sort((a, b) => a.index - b.index).map((subItem, i) => {
//                                                             return (
//                                                                 <div key={i} className="col-sm-6">
//                                                                     <Link to={item?.pages?.length > 0 ? "#" : `sub-unit-details/${subItem?.id}`} className="dropdown-item">
//                                                                         <span>
//                                                                             <div className="ps-2">
//                                                                                 <p
//                                                                                     style={{
//                                                                                         color: '#8b8d8f',
//                                                                                         fontWeight: 400,
//                                                                                         fontSize: "14px",
//                                                                                         marginBottom: "0px",
//                                                                                     }}
//                                                                                 >{subItem.title}</p>
//                                                                             </div>
//                                                                         </span>
//                                                                     </Link>

//                                                                     <div className="row">
//                                                                         {
//                                                                             subItem.pages !== undefined && subItem.pages?.sort((a, b) => a.index - b.index).map((subItemPage, i) => {
//                                                                                 return (
//                                                                                     <div key={i} className="col-sm-6">
//                                                                                         <Link to={`sub-unit-details/${subItemPage?.id}`} className="dropdown-item">
//                                                                                             <span>
//                                                                                                 <div className="ps-2">
//                                                                                                     <p
//                                                                                                         style={{
//                                                                                                             color: '#8b8d8f',
//                                                                                                             fontWeight: 400,
//                                                                                                             fontSize: "14px",
//                                                                                                             marginBottom: "0px",
//                                                                                                         }}
//                                                                                                     >{subItemPage.title}</p>
//                                                                                                 </div>
//                                                                                             </span>
//                                                                                         </Link>
//                                                                                     </div>
//                                                                                 )
//                                                                             })
//                                                                         }
//                                                                     </div>
//                                                                 </div>
//                                                             )
//                                                         })
//                                                     }
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )
//                                 })
//                             }

//                         </ul>

//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default HeaderNew;










// import React, { useEffect, useState } from 'react';
// import '../header/HeaderNew.css';
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import axios from 'axios';


// const HeaderNew = () => {
//     const navigate = useNavigate();
//     const headerClickHandler = e => {
//         e.preventDefault()
//         // navigate(-1);
//         navigate("/")
//     };

//     const [menuTitle, setMenuTitle] = useState([]);

//     const location = useLocation();

//     const [divisionPoliceData, setDivisionPoliceData] = useState([]);
//     // console.log("divisionPoliceData", divisionPoliceData);

//     const [adminData, setAdminData] = useState([]);
//     // console.log("adminData", adminData);

//     const [unitsData, setUnitsData] = useState([]);
//     // console.log("unitsData", unitsData);


//     const [activitiesData, setActivitiesData] = useState([]);
//     // console.log("activitiesData", activitiesData);

//     const [servicesData, setServicesData] = useState([]);


//     const [crimeManagementData, setCrimeManagementData] = useState([]);

//     const [noticeBoardData, setNoticeBoard] = useState([
//         // {
//         //     name: 'নোটিশ বোর্ড',
//         //     link: '#',
//         //     bg_color: '#DE3163',
//         //     color: '#8b8d8f',
//         //     padding: "0.4rem",
//         //     display: "block",
//         //     font_size: "14px",
//         //     margin_right: "0px",

//         //     min_width: "47rem",
//         //     transform: "translateX(0px)",
//         //     // padding: "15px",
//         //     box_shadow: "0px 4px 4px rgb(0 0 0 / 25%)",
//         //     subMenu: [
//         //         {
//         //             name: 'টেন্ডার',
//         //             link: 'notice-tenders',
//         //             bg_color: '#DE3163',
//         //             color: '#DE3163',
//         //             margin_bottom: "0px",
//         //             font_size: "14px",
//         //             font_weight: "400",
//         //         },
//         //         {
//         //             name: 'এনওসি',
//         //             link: 'noc',
//         //             bg_color: '#DE3163',
//         //             color: '#DE3163',
//         //             margin_bottom: "0px",
//         //             font_size: "14px",
//         //             font_weight: "400",
//         //         },
//         //         {
//         //             name: 'নোটিশ',
//         //             link: 'notice',
//         //             bg_color: '#DE3163',
//         //             color: '#DE3163',
//         //             margin_bottom: "0px",
//         //             font_size: "14px",
//         //             font_weight: "400",
//         //         },
//         //         {
//         //             name: 'নিয়োগ বিজ্ঞপ্তি',
//         //             link: 'recruitment-notification',
//         //             bg_color: '#DE3163',
//         //             color: '#DE3163',
//         //             margin_bottom: "0px",
//         //             font_size: "14px",
//         //             font_weight: "400",
//         //         },
//         //     ],
//         // },
//     ]);

//     const [galleryData, setSignificantAchievementsData] = useState([
//         {
//             name: 'গ্যালারী',
//             link: '#',
//             bg_color: '#609513',
//             // color: '#8b8d8f',
//             color: '#609513',
//             padding: "0.4rem",
//             display: "block",
//             font_size: "14px",
//             margin_right: "0px",

//             min_width: "47rem",
//             transform: "translateX(0px)",
//             // padding: "15px",
//             box_shadow: "0px 4px 4px rgb(0 0 0 / 25%)",
//             subMenu: [
//                 {
//                     name: 'ফটো গ্যালারী',
//                     link: 'photo-gallery',
//                     bg_color: '#609513',
//                     color: '#609513',
//                     margin_bottom: "0px",
//                     font_size: "14px",
//                     font_weight: "400",
//                 },
//                 {
//                     name: 'ভিডিও গ্যালারী',
//                     link: 'video-gallery',
//                     bg_color: '#609513',
//                     color: '#609513',
//                     margin_bottom: "0px",
//                     font_size: "14px",
//                     font_weight: "400",
//                 },
//             ],
//         },
//     ]);

//     const [bitPolicingData, setBitPolicingData] = useState([]);

//     const [communicationAddressData, setCommunicationAddressData] = useState([
//         {
//             name: 'যোগাযোগ ও ঠিকানা',
//             link: '#',
//             bg_color: '#692E8F',
//             color: '#692E8F',
//             padding: "0.4rem",
//             display: "block",
//             font_size: "14px",
//             margin_right: "0px",

//             min_width: "47rem",
//             transform: "translateX(0px)",
//             // padding: "15px",
//             box_shadow: "0px 4px 4px rgb(0 0 0 / 25%)",
//             subMenu: [
//                 {
//                     name: 'ফোন ডিরেক্টরি',
//                     link: 'phone-directory',
//                     bg_color: '#692E8F',
//                     color: '#692E8F',
//                     margin_bottom: "0px",
//                     font_size: "14px",
//                     font_weight: "400",
//                 },
//                 {
//                     name: 'ম্যাপ ',
//                     link: 'map-kishorganj',
//                     bg_color: '#692E8F',
//                     color: '#692E8F',
//                     margin_bottom: "0px",
//                     font_size: "14px",
//                     font_weight: "400",
//                 },
//             ],
//         },
//     ]);


//     useEffect(() => {
//         axios.get(`zilla-police-pages`)
//             .then((res) => {
//                 setDivisionPoliceData(res.data);
//             });
//         axios.get(`administration-pages-only`)
//             .then((res) => {
//                 setAdminData(res.data);
//             });
//         axios.get(`units`)
//             .then((res) => {
//                 setUnitsData(res.data);
//             });
//         axios.get(`activities-pages`)
//             .then((res) => {
//                 setActivitiesData(res.data);
//             });
//         axios.get(`services-pages`)
//             .then((res) => {
//                 setServicesData(res.data);
//             });
//         axios.get(`notice-categories`)
//             .then((res) => {
//                 setNoticeBoard(res.data);
//             });
//         axios.get(`bit-police-pages`)
//             .then((res) => {
//                 setBitPolicingData(res.data);
//             });
//         axios.get(`crime-pages`)
//             .then((res) => {
//                 setCrimeManagementData(res.data);
//             });
//     }, [])

//     useEffect(() => {
//         const fetchTitles = async () => {
//             try {
//                 const res = await fetch('http://localhost:4000/get-all-menu-title');

//                 if (!res.ok) {
//                     throw new Error(`HTTP error! Status: ${res.status}`);
//                 }

//                 const menuData = await res.json();
//                 // setTitles(data[0].title);
//                 setMenuTitle(menuData.map((item, index) => item.title));
//             } catch (error) {
//                 console.error('Error fetching titles:', error);
//             }
//         };

//         fetchTitles();
//     }, []);

//     return (
//         <div className="ht__navbar">
//             <nav className="navbar navbar-expand-lg bg__body navbar-dark" >
//                 <div className="container container-fluid ht__navbar__logo">

//                     <button className="navbar-toggler text-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse justify-content-start navbar__collapse" id="navbarNav">
//                         <span onClick={headerClickHandler}></span>

//                         <ul className="navbar-nav menu3">
//                             <li className="nav-item">
//                                 <Link to='/' className={`navbar-brand nav-link pe-2 ${location.pathname === "/" && "active-nav"}`} aria-current="page"><span>প্রথম পাতা</span></Link>
//                             </li>

//                             <li className="nav-item dropdown">
//                                 <Link to='#' className={`navbar-brand drop__division__hover  ${location.pathname === "" && "active-nav"}`} id="navbarDropdown13" role="button" data-bs-toggle="dropdown" aria-expanded="false"
//                                     style={{
//                                         // marginRight: item.margin_right,
//                                         // color: "#8b8d8f",
//                                         color: 'rgb(132, 21, 77)',
//                                         fontSize: "14px",
//                                         // backgroundColor: item.bg_color,
//                                         padding: "0.4rem",
//                                         display: "block",
//                                     }}
//                                 >
//                                     {/* <span>জেলা পুলিশ <i className="fa-solid fa-angle-down pl-2"></i></span> */}
//                                     <span className="link-title">
//                                         {menuTitle.map((title, index) => (
//                                             <span key={index} className="link-title">
//                                                 {/* {index === 0 && `${title} is index no ${index + 1}`} */}
//                                                 {index === 0 && `${title}`}
//                                             </span>
//                                         ))}
//                                         <i className="fa-solid fa-angle-down pl-2"></i>
//                                     </span>
//                                 </Link>
//                                 <div className={`dropdown-menu drop__division`} aria-labelledby="navbarDropdown13">
//                                     <div className="row">
//                                         {
//                                             divisionPoliceData?.sort((a, b) => a.index - b.index).map((item, i) => {
//                                                 return (
//                                                     <div key={i} className="col-sm-4">
//                                                         <div className="nav-item">
//                                                             <Link to={item?.subPages?.length > 0 ? "#" : `zilla-police-page-details/${item?.id}`} className="dropdown-item">
//                                                                 <span>
//                                                                     <div className="ps-2">
//                                                                         <p
//                                                                             style={{
//                                                                                 color: "#84154D",
//                                                                                 fontWeight: 400,
//                                                                                 fontSize: "14px",
//                                                                                 marginBottom: "0px",
//                                                                             }}>{item.title}</p>
//                                                                     </div>
//                                                                 </span>
//                                                             </Link>

//                                                             {
//                                                                 item.subPages !== undefined && item.subPages?.sort((a, b) => a.index - b.index).map((item, i) => {
//                                                                     return (
//                                                                         <Link key={i} to={`zilla-police-sub-page-details/${item.id}`} className="dropdown-item">
//                                                                             <span>
//                                                                                 <div className="ps-2">
//                                                                                     <p
//                                                                                         style={{
//                                                                                             color: "#8b8d8f",
//                                                                                             fontWeight: 400,
//                                                                                             fontSize: "14px",
//                                                                                             marginBottom: "0px",
//                                                                                         }}
//                                                                                     >{item.title}</p>
//                                                                                 </div>
//                                                                             </span>
//                                                                         </Link>
//                                                                     )
//                                                                 })
//                                                             }
//                                                         </div>
//                                                     </div>
//                                                 )
//                                             })
//                                         }
//                                     </div>
//                                 </div>
//                             </li>
//                             <li className="nav-item dropdown">
//                                 <Link to='#' className={`navbar-brand drop__administration__hover ${location.pathname === "" && "active-nav"}`} id="navbarDropdown13" role="button" data-bs-toggle="dropdown" aria-expanded="false"
//                                     style={{
//                                         marginRight: "0px",
//                                         // color: "#8b8d8f",
//                                         color: '#c40a2a',
//                                         fontSize: "14px",
//                                         // backgroundColor: item.bg_color,
//                                         padding: "0.4rem",
//                                         display: "block",
//                                     }}
//                                 >
//                                     {/* <span>প্রশাসন <i className="fa-solid fa-angle-down pl-2"></i></span> */}

//                                     <span className="link-title">
//                                         {menuTitle.map((title, index) => (
//                                             <span key={index} className="link-title">
//                                                 {/* {index === 0 && `${title} is index no ${index + 1}`} */}
//                                                 {index === 1 && `${title}`}
//                                             </span>
//                                         ))}
//                                         <i className="fa-solid fa-angle-down pl-2"></i>
//                                     </span>

//                                 </Link>
//                                 <div className="dropdown-menu drop__administration" aria-labelledby="navbarDropdown13">
//                                     <div className="row">

//                                         <div className="col-sm-6">
//                                             <div className="nav-item">
//                                                 <Link to={`former-of-cheif-sp`} className="dropdown-item">
//                                                     <span>
//                                                         <div className="ps-2">
//                                                             <p
//                                                                 style={{
//                                                                     color: '#c40a2a',
//                                                                     fontWeight: "400",
//                                                                     fontSize: "14px",
//                                                                     marginBottom: "0px",
//                                                                 }}
//                                                             >সাবেক পুলিশ সুপার</p>
//                                                         </div>
//                                                     </span>
//                                                 </Link>
//                                             </div>
//                                         </div>

//                                         {
//                                             adminData !== undefined && adminData?.sort((a, b) => a.index - b.index).map((item, i) => {
//                                                 return (
//                                                     <div key={i} className="col-sm-6">
//                                                         <div className="nav-item">
//                                                             <Link key={i} to={item?.subPages?.length > 0 ? "#" : `administration-page-details/${item?.id}`} className="dropdown-item">
//                                                                 <span>
//                                                                     <div className="ps-2">
//                                                                         <p
//                                                                             style={{
//                                                                                 color: '#c40a2a',
//                                                                                 fontWeight: "400",
//                                                                                 fontSize: "14px",
//                                                                                 marginBottom: "0px",
//                                                                             }}
//                                                                         >{item.title}</p>
//                                                                     </div>
//                                                                 </span>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                 )
//                                             })
//                                         }

//                                         <div className="col-sm-6">
//                                             <div className="nav-item">
//                                                 <Link to={`officers`} className="dropdown-item">
//                                                     <span>
//                                                         <div className="ps-2">
//                                                             <p
//                                                                 style={{
//                                                                     color: '#c40a2a',
//                                                                     fontWeight: "400",
//                                                                     fontSize: "14px",
//                                                                     marginBottom: "0px",
//                                                                 }}
//                                                             >কর্মকর্তাগণ</p>
//                                                         </div>
//                                                     </span>
//                                                 </Link>
//                                             </div>
//                                         </div>

//                                         <div className="col-sm-6">
//                                             <div className="nav-item">
//                                                 <Link to={`employees`} className="dropdown-item">
//                                                     <span>
//                                                         <div className="ps-2">
//                                                             <p
//                                                                 style={{
//                                                                     color: '#c40a2a',
//                                                                     fontWeight: "400",
//                                                                     fontSize: "14px",
//                                                                     marginBottom: "0px",
//                                                                 }}
//                                                             >কর্মচারীবৃন্দ</p>
//                                                         </div>
//                                                     </span>
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                         {/* <div className="col-sm-6">
//                                             <div className="nav-item">
//                                                 <Link to={`former-of-cheif-sp`} className="dropdown-item">
//                                                     <span>
//                                                         <div className="ps-2">
//                                                             <p
//                                                                 style={{
//                                                                     color: '#c40a2a',
//                                                                     fontWeight: "400",
//                                                                     fontSize: "14px",
//                                                                     marginBottom: "0px",
//                                                                 }}
//                                                             >সাবেক পুলিশ সুপার</p>
//                                                         </div>
//                                                     </span>
//                                                 </Link>
//                                             </div>
//                                         </div> */}
//                                         {/* <div className="col-sm-6">
//                                             <div className="nav-item">
//                                                 <Link to={`officers`} className="dropdown-item">
//                                                     <span>
//                                                         <div className="ps-2">
//                                                             <p
//                                                                 style={{
//                                                                     color: '#c40a2a',
//                                                                     fontWeight: "400",
//                                                                     fontSize: "14px",
//                                                                     marginBottom: "0px",
//                                                                 }}
//                                                             >কর্মকর্তাগণ</p>
//                                                         </div>
//                                                     </span>
//                                                 </Link>
//                                             </div>
//                                         </div> */}
//                                     </div>
//                                 </div>
//                             </li>


//                             <li className="nav-item dropdown">
//                                 <Link to='#' className={`navbar-brand drop__units__hover  ${location.pathname === "" && "active-nav"}`} id="navbarDropdown13" role="button" data-bs-toggle="dropdown" aria-expanded="false"
//                                     style={{
//                                         marginRight: "0px",
//                                         fontSize: "14px",
//                                         // backgroundColor: item.bg_color,
//                                         padding: "0.4rem",
//                                         display: "block",
//                                         // color: '#8b8d8f',
//                                         color: '#098346'
//                                     }}
//                                 >
//                                     {/* <span>ইউনিট সমূহ<i className="fa-solid fa-angle-down pl-2"></i></span> */}

//                                     <span className="link-title">
//                                         {menuTitle.map((title, index) => (
//                                             <span key={index} className="link-title">
//                                                 {/* {index === 0 && `${title} is index no ${index + 1}`} */}
//                                                 {index === 2 && `${title}`}
//                                             </span>
//                                         ))}
//                                         <i className="fa-solid fa-angle-down pl-2"></i>
//                                     </span>

//                                 </Link>
//                                 <div className="dropdown-menu drop__units" aria-labelledby="navbarDropdown13">

//                                     <div className="row">
//                                         {
//                                             unitsData?.sort((a, b) => a.index - b.index).map((item, i) => {
//                                                 return (
//                                                     <div key={i} className="col-sm-6">
//                                                         <div className="nav-item">
//                                                             <Link to={item?.sub_units?.length > 0 ? "#" : `unit-details/${item?.id}`} className="dropdown-item">
//                                                                 <span>
//                                                                     <div className="ps-2">
//                                                                         <p
//                                                                             style={{
//                                                                                 color: "#098346",
//                                                                                 fontWeight: 400,
//                                                                                 fontSize: "14px",
//                                                                                 marginBottom: "0px",
//                                                                             }}>{item.title}</p>
//                                                                     </div>
//                                                                 </span>
//                                                             </Link>
//                                                             <div className="row">
//                                                                 {
//                                                                     item.sub_units !== undefined && item.sub_units?.sort((a, b) => a.index - b.index).map((subItem, i) => {
//                                                                         return (
//                                                                             <div key={i} className="col-sm-6">
//                                                                                 <Link to={`sub-unit-details/${subItem?.id}`} className="dropdown-item">
//                                                                                     <span>
//                                                                                         <div className="ps-2">
//                                                                                             <p
//                                                                                                 style={{
//                                                                                                     color: '#8b8d8f',
//                                                                                                     fontWeight: 400,
//                                                                                                     fontSize: "14px",
//                                                                                                     marginBottom: "0px",
//                                                                                                 }}
//                                                                                             >{subItem.title}</p>
//                                                                                         </div>
//                                                                                     </span>
//                                                                                 </Link>
//                                                                             </div>
//                                                                         )
//                                                                     })
//                                                                 }
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 )
//                                             })
//                                         }
//                                     </div>
//                                 </div>

//                             </li>


//                             <li className="nav-item dropdown">
//                                 <Link to='#' className={`navbar-brand drop__activities__hover  ${location.pathname === "" && "active-nav"}`} id="navbarDropdown13" role="button" data-bs-toggle="dropdown" aria-expanded="false"
//                                     style={{
//                                         marginRight: '0px',
//                                         // color: '#8b8d8f',
//                                         color: '#1399be',
//                                         fontSize: '14px',
//                                         // backgroundColor: item.bg_color,
//                                         padding: "0.4rem",
//                                         display: "block",
//                                     }}
//                                 >
//                                     {/* <span>কার্যক্রম <i className="fa-solid fa-angle-down pl-2"></i></span> */}

//                                     <span className="link-title">
//                                         {menuTitle.map((title, index) => (
//                                             <span key={index} className="link-title">
//                                                 {/* {index === 0 && `${title} is index no ${index + 1}`} */}
//                                                 {index === 3 && `${title}`}
//                                             </span>
//                                         ))}
//                                         <i className="fa-solid fa-angle-down pl-2"></i>
//                                     </span>

//                                 </Link>
//                                 <div className="dropdown-menu drop__activities" aria-labelledby="navbarDropdown13">
//                                     <div className="row g-2">
//                                         {
//                                             activitiesData?.sort((a, b) => a.index - b.index).map((item, i) => {
//                                                 return (
//                                                     <div key={i} className="col-sm-3">
//                                                         <div className="nav-item">
//                                                             <Link to={item?.subPages?.length > 0 ? "#" : `activities-details/${item.id}`} className="dropdown-item">
//                                                                 <span>
//                                                                     <div className="ps-2">
//                                                                         <p
//                                                                             style={{
//                                                                                 color: '#1399be',
//                                                                                 fontWeight: 400,
//                                                                                 fontSize: "14px",
//                                                                                 marginBottom: "0px",
//                                                                             }}>{item.title}</p>
//                                                                     </div>
//                                                                 </span>
//                                                             </Link>
//                                                             {
//                                                                 item?.subPages !== undefined && item.subPages?.sort((a, b) => a.index - b.index).map((subPage, i) => {
//                                                                     return (
//                                                                         <Link key={i} to={`activities-sub-page-details/${subPage.id}`} className="dropdown-item">
//                                                                             <span>
//                                                                                 <div className="ps-2">
//                                                                                     <p
//                                                                                         style={{
//                                                                                             color: '#8b8d8f',
//                                                                                             fontWeight: 400,
//                                                                                             fontSize: "14px",
//                                                                                             marginBottom: "0px",
//                                                                                         }}
//                                                                                     >{subPage.title}</p>
//                                                                                 </div>
//                                                                             </span>
//                                                                         </Link>
//                                                                     )
//                                                                 })
//                                                             }
//                                                         </div>
//                                                     </div>
//                                                 )
//                                             })
//                                         }
//                                     </div>
//                                 </div>

//                             </li>

//                             <li className="nav-item dropdown">
//                                 <Link to='#' className={`navbar-brand drop__services__hover ${location.pathname === "" && "active-nav"}`} id="navbarDropdown13" role="button" data-bs-toggle="dropdown" aria-expanded="false"
//                                     style={{
//                                         marginRight: "0px",
//                                         // color: "#8b8d8f",
//                                         color: '#EE9421',
//                                         fontSize: "14px",
//                                         // backgroundColor: item.bg_color,
//                                         padding: "0.4rem",
//                                         display: "block",
//                                     }}
//                                 >
//                                     {/* <span>সেবা <i className="fa-solid fa-angle-down pl-2"></i></span> */}

//                                     <span className="link-title">
//                                         {menuTitle.map((title, index) => (
//                                             <span key={index} className="link-title">
//                                                 {/* {index === 0 && `${title} is index no ${index + 1}`} */}
//                                                 {index === 4 && `${title}`}
//                                             </span>
//                                         ))}
//                                         <i className="fa-solid fa-angle-down pl-2"></i>
//                                     </span>

//                                 </Link>
//                                 <div className="dropdown-menu drop__services" aria-labelledby="navbarDropdown13">
//                                     <div className="row">
//                                         {
//                                             servicesData !== undefined && servicesData?.sort((a, b) => a.index - b.index).map((item, i) => {
//                                                 return (
//                                                     <div key={i} className="col-sm-4">
//                                                         <div className="nav-item">
//                                                             <Link to={item?.subPages?.length > 0 ? "#" : `service-details/${item.id}`} className="dropdown-item">
//                                                                 <span>
//                                                                     <div className="ps-2">
//                                                                         <p
//                                                                             style={{
//                                                                                 color: '#EE9421',
//                                                                                 fontWeight: 400,
//                                                                                 fontSize: '14px',
//                                                                                 marginBottom: '0px'
//                                                                             }}
//                                                                         >{item.title}</p>
//                                                                     </div>
//                                                                 </span>
//                                                             </Link>
//                                                             {
//                                                                 item.subPages !== undefined && item.subPages?.sort((a, b) => a.index - b.index).map((sub, i) => {
//                                                                     return (
//                                                                         <Link key={i} to={`services-submenu-details/${sub.id}`} className="dropdown-item">
//                                                                             <span>
//                                                                                 <div className="ps-2">
//                                                                                     <p
//                                                                                         style={{
//                                                                                             color: '#8b8d8f',
//                                                                                             fontWeight: 400,
//                                                                                             fontSize: "14px",
//                                                                                             marginBottom: "0px",
//                                                                                         }}
//                                                                                     >{sub.title}</p>
//                                                                                 </div>
//                                                                             </span>
//                                                                         </Link>
//                                                                     )
//                                                                 })
//                                                             }
//                                                         </div>
//                                                     </div>
//                                                 )
//                                             })
//                                         }
//                                     </div>
//                                 </div>
//                             </li>

//                             <li className="nav-item dropdown">
//                                 <Link to='#' className={`navbar-brand drop__crime__manage__hover ${location.pathname === "" && "active-nav"}`} id="navbarDropdown13" role="button" data-bs-toggle="dropdown" aria-expanded="false"
//                                     style={{
//                                         marginRight: "0px",
//                                         color: '#8768de',
//                                         fontSize: '14px',
//                                         // backgroundColor: item.bg_color,
//                                         padding: "0.4rem",
//                                         display: 'block',
//                                     }}
//                                 >
//                                     {/* <span>অপরাধ ব্যাবস্থাপনা <i className="fa-solid fa-angle-down pl-2"></i></span> */}

//                                     <span className="link-title">
//                                         {menuTitle.map((title, index) => (
//                                             <span key={index} className="link-title">
//                                                 {/* {index === 0 && `${title} is index no ${index + 1}`} */}
//                                                 {index === 5 && `${title}`}
//                                             </span>
//                                         ))}
//                                         <i className="fa-solid fa-angle-down pl-2"></i>
//                                     </span>

//                                 </Link>
//                                 <div className="dropdown-menu drop__crime__manage" aria-labelledby="navbarDropdown13">
//                                     <div className="row">
//                                         {
//                                             crimeManagementData !== undefined && crimeManagementData?.sort((a, b) => a.index - b.index).map((item, i) => {
//                                                 return (
//                                                     <div key={i} className="col-sm-12">
//                                                         <div className="nav-item">
//                                                             <Link to={`crime-management-details/${item.id}`} className="dropdown-item">
//                                                                 <span>
//                                                                     <div className="ps-2">
//                                                                         <p
//                                                                             style={{
//                                                                                 color: '#8768de',
//                                                                                 fontWeight: 400,
//                                                                                 fontSize: '14px',
//                                                                                 marginBottom: '0px',
//                                                                             }}
//                                                                         >{item.title}</p>
//                                                                     </div>
//                                                                 </span>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                 )
//                                             })
//                                         }
//                                     </div>
//                                 </div>
//                             </li>


//                             <li className="nav-item dropdown">
//                                 <Link to='#' className={`navbar-brand drop__notice__board__hover ${location.pathname === "" && "active-nav"}`} id="navbarDropdown13" role="button" data-bs-toggle="dropdown" aria-expanded="false"
//                                     style={{
//                                         marginRight: '0px',
//                                         color: '#F0849D',
//                                         fontSize: '14px',
//                                         // backgroundColor: item.bg_color,
//                                         padding: '0.4rem',
//                                         display: 'block',
//                                     }}
//                                 >
//                                     {/* <span>নোটিশ বোর্ড <i className="fa-solid fa-angle-down pl-2"></i></span> */}

//                                     <span className="link-title">
//                                         {menuTitle.map((title, index) => (
//                                             <span key={index} className="link-title">
//                                                 {/* {index === 0 && `${title} is index no ${index + 1}`} */}
//                                                 {index === 6 && `${title}`}
//                                             </span>
//                                         ))}
//                                         <i className="fa-solid fa-angle-down pl-2"></i>
//                                     </span>

//                                 </Link>
//                                 <div className="dropdown-menu drop__notice__board" aria-labelledby="navbarDropdown13">
//                                     <div className="row">
//                                         {
//                                             noticeBoardData !== undefined && noticeBoardData?.sort((a, b) => a.index - b.index).map((item, i) => {
//                                                 return (
//                                                     <div key={i} className="col-sm-12">
//                                                         <div className="nav-item">
//                                                             <Link to={item?.subPages?.length > 0 ? "#" : `notices/${item.id}`} className="dropdown-item">
//                                                                 <span>
//                                                                     <div className="ps-2">
//                                                                         <p
//                                                                             style={{
//                                                                                 color: '#DE3163',
//                                                                                 fontWeight: 400,
//                                                                                 fontSize: '14px',
//                                                                                 marginBottom: '0px',
//                                                                             }}
//                                                                         >{item.title}</p>
//                                                                     </div>
//                                                                 </span>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                 )
//                                             })
//                                         }
//                                     </div>
//                                 </div>
//                             </li>
//                             {
//                                 galleryData !== undefined && galleryData.map((item, i) => {
//                                     return (
//                                         <li key={i} className="nav-item dropdown">
//                                             <Link to='#' className={`navbar-brand drop__gallery__hover ${location.pathname === "" && "active-nav"}`} id="navbarDropdown13" role="button" data-bs-toggle="dropdown" aria-expanded="false"
//                                                 style={{
//                                                     marginRight: item.margin_right,
//                                                     color: item.color,
//                                                     fontSize: item.font_size,
//                                                     // backgroundColor: item.bg_color,
//                                                     padding: item.padding,
//                                                     display: item.display,
//                                                 }}
//                                             >
//                                                 <span>{item.name} <i className="fa-solid fa-angle-down pl-2"></i></span>
//                                             </Link>
//                                             <div className="dropdown-menu drop__gallery" aria-labelledby="navbarDropdown13">
//                                                 <div className="row">
//                                                     {
//                                                         item.subMenu !== undefined && item.subMenu.map((item, i) => {
//                                                             return (
//                                                                 <div key={i} className="col-sm-12">
//                                                                     <div className="nav-item">
//                                                                         <Link to={item.link} className="dropdown-item">
//                                                                             <span>
//                                                                                 <div className="ps-2">
//                                                                                     <p
//                                                                                         style={{
//                                                                                             color: item.color,
//                                                                                             fontWeight: item.font_weight,
//                                                                                             fontSize: item.font_size,
//                                                                                             marginBottom: item.margin_bottom,
//                                                                                         }}
//                                                                                     >{item.name}</p>
//                                                                                 </div>
//                                                                             </span>
//                                                                         </Link>
//                                                                     </div>
//                                                                 </div>
//                                                             )
//                                                         })
//                                                     }
//                                                 </div>
//                                             </div>
//                                         </li>
//                                     )
//                                 })
//                             }

//                             <li className="nav-item dropdown">
//                                 <Link to='#' className={`navbar-brand drop__bit__policing__hover ${location.pathname === "" && "active-nav"}`} id="navbarDropdown13" role="button" data-bs-toggle="dropdown" aria-expanded="false"
//                                     style={{
//                                         marginRight: '0px',
//                                         // color: '#01DFD7',
//                                         color: "#03bbb5",
//                                         fontSize: '14px',
//                                         // backgroundColor: item.bg_color,
//                                         padding: '0.4rem',
//                                         display: 'block',
//                                     }}
//                                 >
//                                     {/* <span>বিট পুলিশিং  <i className="fa-solid fa-angle-down pl-2"></i></span> */}

//                                     <span className="link-title">
//                                         {menuTitle.map((title, index) => (
//                                             <span key={index} className="link-title">
//                                                 {/* {index === 0 && `${title} is index no ${index + 1}`} */}
//                                                 {index === 7 && `${title}`}
//                                             </span>
//                                         ))}
//                                         <i className="fa-solid fa-angle-down pl-2"></i>
//                                     </span>

//                                 </Link>
//                                 <div className="dropdown-menu drop__bit__policing" aria-labelledby="navbarDropdown13">
//                                     <div className="row">
//                                         {
//                                             bitPolicingData !== undefined && bitPolicingData?.sort((a, b) => a.index - b.index).map((item, index) => {
//                                                 return (
//                                                     <div key={index} className="col-sm-12">
//                                                         <div className="nav-item">
//                                                             <Link to={`bit-policing-details/${item.id}`} className="dropdown-item">
//                                                                 <span>
//                                                                     <div className="ps-2">
//                                                                         <p
//                                                                             style={{
//                                                                                 // color: '#01DFD7',
//                                                                                 color: "#03bbb5",
//                                                                                 fontWeight: '400',
//                                                                                 fontSize: '14px',
//                                                                                 marginBottom: '0px',
//                                                                             }}
//                                                                         >{item.title}</p>
//                                                                     </div>
//                                                                 </span>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                 )
//                                             })
//                                         }
//                                         <div className="col-sm-12">
//                                             <div className="nav-item">
//                                                 <Link to={`info-bit-officers`} className="dropdown-item">
//                                                     <span>
//                                                         <div className="ps-2">
//                                                             <p
//                                                                 style={{
//                                                                     // color: '#01DFD7',
//                                                                     color: "#03bbb5",
//                                                                     fontWeight: '400',
//                                                                     fontSize: '14px',
//                                                                     marginBottom: '0px',
//                                                                 }}
//                                                             >বিট অফিসারগণের তথ্য</p>
//                                                         </div>
//                                                     </span>
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </li>
//                             {
//                                 communicationAddressData !== undefined && communicationAddressData.map((item, index) => {
//                                     return (
//                                         <li key={index} className="nav-item dropdown">
//                                             <Link to='#' className={`navbar-brand drop__communication__hover ${location.pathname === "" && "active-nav"}`} id="navbarDropdown13" role="button" data-bs-toggle="dropdown" aria-expanded="false"
//                                                 style={{
//                                                     marginRight: item.margin_right,
//                                                     color: item.color,
//                                                     // color: "692E8F",
//                                                     fontSize: item.font_size,
//                                                     // backgroundColor: item.bg_color,
//                                                     padding: item.padding,
//                                                     display: item.display,
//                                                 }}
//                                             >
//                                                 <span>{item.name} <i className="fa-solid fa-angle-down pl-2"></i></span>
//                                             </Link>
//                                             <div className="dropdown-menu drop__communication" aria-labelledby="navbarDropdown13">
//                                                 <div className="row">
//                                                     {
//                                                         item.subMenu !== undefined && item.subMenu.map((item, index) => {
//                                                             return (
//                                                                 <div key={index} className="col-sm-12">
//                                                                     <div className="nav-item">
//                                                                         <Link to={item.link} className="dropdown-item">
//                                                                             <span>
//                                                                                 <div className="ps-2">
//                                                                                     <p
//                                                                                         style={{
//                                                                                             color: item.color,
//                                                                                             fontWeight: item.font_weight,
//                                                                                             fontSize: item.font_size,
//                                                                                             marginBottom: item.margin_bottom,
//                                                                                         }}
//                                                                                     >{item.name}</p>
//                                                                                 </div>
//                                                                             </span>
//                                                                         </Link>
//                                                                     </div>
//                                                                 </div>
//                                                             )
//                                                         })
//                                                     }
//                                                 </div>
//                                             </div>
//                                         </li>
//                                     )
//                                 })
//                             }
//                             {/* <li className="nav-item mx-1">
//                                 <Link to='/pricing' className={`navbar-brand nav-link ${location.pathname === "/pricing" && "active-nav"}`} ><span>Pricing</span></Link>
//                             </li>
//                             <li className="nav-item dropdown mx-1">
//                                 <Link to='#' className={`navbar-brand nav-link  ${location.pathname === "" && "active-nav"}`} id="navbarDropdown13" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span>About Us <i className="fa-solid fa-angle-down pl-2"></i></span></Link>

//                                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown13">
//                                     <li className="nav-item">
//                                         <Link to="who-we-are" className="dropdown-item drop__nav__link">
//                                             <span>Who We Are</span>
//                                         </Link>
//                                     </li>
//                                     <li className="nav-item">
//                                         <Link to="why-choose-us" className="dropdown-item drop__nav__link">
//                                             <span>Why Choose Us</span>
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to='/about' className={`navbar-brand nav-link ${location.pathname === "/about" && "active-nav"}`} ><span>About Us</span></Link>
//                             </li> */}
//                         </ul>

//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default HeaderNew;
