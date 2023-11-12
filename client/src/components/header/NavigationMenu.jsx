// import React, { useState } from 'react';
// import '../header/NavigationMenu.css';
// import { Link } from 'react-router-dom';
// // import Logo_resize from '../../assets/Logo_resize.png';
// // import Australia from '../../assets/Australia.png';
// // import USA from '../../assets/USA.png';
// // import Canada from '../../assets/Canada.png';
// import SidebarItem from './SidebarItem';
// import { MenuItems } from './MenuItems';



// const NavigationMenu = ({ isNavExpanded, setIsNavExpanded }) => {
//     const [items, setitems] = useState(MenuItems);
//     // console.log("items", items);
//     // const [isNavExpanded, setIsNavExpanded] = useState(false);
//     // const menuItems = [
//     //     {
//     //         name: 'HOME',
//     //         link: '/',
//     //         icon: "bi-house-fill",
//     //         mega_menu: false,

//     //     },
//     //     {
//     //         name: 'ABOUT',
//     //         link: '#',
//     //         icon: "",
//     //         mega_menu: false,
//     //         subMenu: [
//     //             {
//     //                 name: 'ABOUT US',
//     //                 link: 'about',
//     //                 icon: "",
//     //             },
//     //             {
//     //                 name: 'MANAGEMENT TEAM',
//     //                 link: 'our-management-team',
//     //                 icon: "",
//     //             },
//     //             {
//     //                 name: 'CAREER',
//     //                 link: 'career',
//     //                 icon: "",
//     //             },
//     //         ],
//     //     },
//     //     {
//     //         name: 'SERVICES',
//     //         link: '#',
//     //         icon: "",
//     //         mega_menu: true,
//     //         subMenu: [
//     //             {
//     //                 name: 'USA SERVICES',
//     //                 link: 'usa-services',
//     //                 icon: "",
//     //                 subMenu: [
//     //                     {
//     //                         id: 1,
//     //                         name: "INDIVIDUAL TAX FEDERAL & STATE",
//     //                         link: "usa-services/1",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 2,
//     //                         name: "PARTNERSHIP TAX FEDERAL & STATE",
//     //                         link: "usa-services/2",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 3,
//     //                         name: "CORPORATE TAX FEDERAL & STATE",
//     //                         link: "usa-services/3",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 4,
//     //                         name: "ESTATE & TRUST FEDERAL & STATE",
//     //                         link: "usa-services/4",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 5,
//     //                         name: "INTERNATIONAL INDIVIDUAL TAX",
//     //                         link: "usa-services/5",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 6,
//     //                         name: "INTERNATIONAL BUSINESS TAX",
//     //                         link: "usa-services/6",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 7,
//     //                         name: "AMENDED & LATE TAX RETURN",
//     //                         link: "usa-services/7",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 8,
//     //                         name: "BOOKKEEPING & PAYROLL",
//     //                         link: "usa-services/8",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 9,
//     //                         name: "REPORTING",
//     //                         link: "usa-services/9",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 10,
//     //                         name: "ENTITY SETUP-USA",
//     //                         link: "usa-services/10",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 11,
//     //                         name: "ENTITY SETUP-FOREIGNER",
//     //                         link: "usa-services/11",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 12,
//     //                         name: "REPRESENTATION",
//     //                         link: "usa-services/12",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 13,
//     //                         name: "ADVISORY",
//     //                         link: "usa-services/13",
//     //                         icon: "",
//     //                     },
//     //                     // {
//     //                     // subMenu: [
//     //                     //     {
//     //                     //         name: 'and more',
//     //                     // link: '#',
//     //                     // icon: "",//         
//     //                     //         subMenu: [
//     //                     //             {
//     //                     //                 name: 'and even more',
//     //                     // link: '#',
//     //                     // icon: "",//                 
//     //                     //             },
//     //                     //             // Add more sub-menus if needed
//     //                     //         ],
//     //                     //     },
//     //                     //     {
//     //                     //         name: 'and more',
//     //                     // link: '#',
//     //                     // icon: "",//         
//     //                     //     },
//     //                     // ],
//     //                     // },
//     //                 ],
//     //             },
//     //             {
//     //                 name: 'AUSTRALIA SERVICES',
//     //                 link: 'australian-services',
//     //                 icon: "",
//     //                 subMenu: [
//     //                     {
//     //                         id: 1,
//     //                         name: "DOMESTIC TAXATION",
//     //                         link: "australian-services/1",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 2,
//     //                         name: "CROSS-BORDER TAXATION",
//     //                         link: "australian-services/2",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 3,
//     //                         name: "FINANCIAL ACCOUNTING",
//     //                         link: "australian-services/3",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 4,
//     //                         name: "LOCAL ENTITY FORMATION",
//     //                         link: "australian-services/4",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 5,
//     //                         name: "INTERNATIONAL EXPANSION",
//     //                         link: "australian-services/5",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 6,
//     //                         name: "AUSTRALIAN MARKET ENTRY",
//     //                         link: "australian-services/6",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 7,
//     //                         name: "AUDITING, PAYROLL TAX AND OTHERS",
//     //                         link: "australian-services/7",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 8,
//     //                         name: "BUSINESS ADVISORY",
//     //                         link: "australian-services/8",
//     //                         icon: "",
//     //                     },
//     //                 ],
//     //             },
//     //             {
//     //                 name: 'CANADIAN SERVICES',
//     //                 link: 'canadian-services',
//     //                 icon: "",
//     //                 subMenu: [
//     //                     {
//     //                         id: 1,
//     //                         name: "LOCAL TAX",
//     //                         link: "canadian-services/1",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 2,
//     //                         name: "CROSS-BORDER TAX",
//     //                         link: "canadian-services/2",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 3,
//     //                         name: "ACCOUNTING & BOOKKEEPING",
//     //                         link: "canadian-services/3",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 4,
//     //                         name: "ENTITY SERVICES",
//     //                         link: "canadian-services/4",
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 5,
//     //                         name: "ADVISORY SERVICES",
//     //                         link: "canadian-services/5",
//     //                         icon: "",
//     //                     },
//     //                 ],
//     //             },
//     //         ],
//     //     },
//     //     {
//     //         name: 'WHY',
//     //         link: '#',
//     //         icon: "",
//     //         mega_menu: false,
//     //         subMenu: [
//     //             {
//     //                 name: 'WHY US',
//     //                 link: 'why-us',
//     //                 icon: "",
//     //             },
//     //             {
//     //                 name: 'PRIVACY POLICY',
//     //                 link: 'privacy-policy',
//     //                 icon: "",
//     //             },
//     //             {
//     //                 name: 'TECH PARTNERS',
//     //                 link: 'tech-partners',
//     //                 icon: "",
//     //             },
//     //             {
//     //                 name: 'ই-সিটিজেন',
//     //                 link: '#',
//     //                 icon: "",
//     //                 subMenu: [
//     //                     {
//     //                         id: 1,
//     //                         name: 'আইন ও বিধি',
//     //                         link: 'laws-and-regulations',
//     //                         icon: "",
//     //                     },
//     //                     {
//     //                         id: 2,
//     //                         name: 'তথ্য অধিকার',
//     //                         link: 'right-to-information',
//     //                         icon: "",
//     //                     },
//     //                 ],
//     //             },
//     //         ],
//     //     },
//     //     {
//     //         name: 'TESTIMONIAL',
//     //         link: 'testimonial',
//     //         icon: "",
//     //         mega_menu: false,
//     //     },
//     //     {
//     //         name: 'REVIEWS',
//     //         link: 'reviews',
//     //         icon: "",
//     //         mega_menu: false,
//     //     },
//     //     {
//     //         name: 'FAQS',
//     //         link: 'faqs',
//     //         icon: "",
//     //         mega_menu: false,
//     //     },
//     //     {
//     //         name: 'RESOURCES',
//     //         link: 'resources',
//     //         icon: "",
//     //         mega_menu: false,
//     //     },
//     //     {
//     //         name: 'APPOINTMENT',
//     //         link: 'appointment',
//     //         icon: "",
//     //         mega_menu: false,
//     //     },
//     //     {
//     //         name: 'PAYMENT',
//     //         link: 'payment',
//     //         icon: "",
//     //         mega_menu: false,
//     //     },
//     // ];


//     const renderSubMenu = (subMenu) => {
//         if (!subMenu) return null;

//         return (
//             <ul className="nav__menu__ul">
//                 {subMenu.map((item) => (
//                     <li key={item.name}>
//                         <Link to={`/${item.link}`} className="nav__link">{item.name}</Link>
//                         {renderSubMenu(item.subMenu)}
//                     </li>
//                 ))}
//             </ul>
//         );
//     };
//     const [isClicked, setIsClicked] = useState(false);
//     const expand = () => {
//         setIsNavExpanded(!isNavExpanded)
//         setTimeout(() => {
//             setIsNavExpanded(false)
//         }, 7000);
//     }

//     return (
//         <div className="ht__nav">
//             <nav className="container container-fluid">
//                 <div className="row d-flex justify-content-between align-items-center">

//                     <div className="col-auto">
//                         <div className="nav__menu">
//                             <ul className="nav__menu__ul">
//                                 {items.map((item) => (
//                                     item.mega_menu ? <>
//                                         <div key={item.name} className="nav__mega__menu">
//                                             <Link to={item.link} className="nav__link">{item.name}</Link>
//                                             <div className="dropdown-content">
//                                                 <div className="container">
//                                                     <div className="row py-3 d-flex justify-content-center">
//                                                         {item.subMenu.map((item) => (
//                                                             <div className="col-md-4" key={item.name}>
//                                                                 <Link to={item.link} className="nav__link__services">{item.name}</Link>
//                                                                 <div className="pt-1">
//                                                                     {item.subMenu.map((itemmenu) => {
//                                                                         return (
//                                                                             <p key={itemmenu.name} className="mega__menu__link__p">
//                                                                                 <Link to={itemmenu.link} className="mega__menu__link">{itemmenu.name}</Link>
//                                                                             </p>
//                                                                         )
//                                                                     })}
//                                                                 </div>
//                                                             </div>
//                                                         ))}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </> :
//                                         <li key={item.name}>
//                                             <Link to={item.link} className="nav__link">{item.name}</Link>
//                                             {renderSubMenu(item.subMenu)}
//                                         </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         {/* Mobile responsive menu */}
//                         {/* <div className="nav__menu__bar">
                           
//                                 <button className={`${isNavExpanded ? 'menu__btn__active' : 'menu__btn'}`}
//                                     onClick={expand}
//                                 >
//                                     {isNavExpanded ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
//                                 </button>
                            

//                             <div className={`wrapper ${isNavExpanded == true ? 'active' : ''}`}>
                               
//                                 <div className="sidebar">
//                                     {items.map((item, i) => <SidebarItem key={item.i} menuItems={item} props={{ isNavExpanded, setIsNavExpanded }} />)}
//                                 </div>
//                             </div>
//                         </div> */}

//                     </div>


//                 </div>
//             </nav >
//             {
//                 isNavExpanded &&
//                 <div className="nav__menu__bar">
//                     <div className={`wrapper ${isNavExpanded == true ? 'active' : ''}`}>

//                         <div className="sidebar">
//                             {items.map((item) => <SidebarItem key={item.i} menuItems={item} props={{ isNavExpanded, setIsNavExpanded, isClicked, setIsClicked }} />)}
//                         </div>
//                     </div>
//                 </div>

//             }

//         </div >
//     );
// };

// export default NavigationMenu;


// // // ///// backup
// // import React, { useState } from 'react';
// // import '../header/NavigationMenu.css';
// // import { Link } from 'react-router-dom';
// // import SidebarItem from './SidebarItem';
// // import { MenuItems } from './MenuItems';


// // const NavigationMenu = ({ isNavExpanded, setIsNavExpanded }) => {
// //     const [items, setitems] = useState(MenuItems);
// //     // console.log("items", items);
// //     const [isNavExpanded, setIsNavExpanded] = useState(false);
// //     const menuItems = [
// //         {
// //             name: 'HOME',
// //             link: '/',
// //             icon: "bi-house-fill",
// //             mega_menu: false,

// //         },
// //         {
// //             name: 'ABOUT',
// //             link: '#',
// //             icon: "",
// //             mega_menu: false,
// //             subMenu: [
// //                 {
// //                     name: 'ABOUT US',
// //                     link: 'about',
// //                     icon: "",
// //                 },
// //                 {
// //                     name: 'MANAGEMENT TEAM',
// //                     link: 'our-management-team',
// //                     icon: "",
// //                 },
// //                 {
// //                     name: 'CAREER',
// //                     link: 'career',
// //                     icon: "",
// //                 },
// //             ],
// //         },
// //         {
// //             name: 'SERVICES',
// //             link: '#',
// //             icon: "",
// //             mega_menu: true,
// //             subMenu: [
// //                 {
// //                     name: 'TESTIMONIAL',
// //                     link: 'testimonial',
// //                     icon: "",
// //                     mega_menu: false,
// //                 },
// //                 {
// //                     name: 'USA SERVICES',
// //                     link: 'usa-services',
// //                     icon: "",
// //                     subMenu: [
// //                         {
// //                             id: 1,
// //                             name: "INDIVIDUAL TAX FEDERAL & STATE",
// //                             link: "usa-services/1",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 2,
// //                             name: "PARTNERSHIP TAX FEDERAL & STATE",
// //                             link: "usa-services/2",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 3,
// //                             name: "CORPORATE TAX FEDERAL & STATE",
// //                             link: "usa-services/3",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 4,
// //                             name: "ESTATE & TRUST FEDERAL & STATE",
// //                             link: "usa-services/4",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 5,
// //                             name: "INTERNATIONAL INDIVIDUAL TAX",
// //                             link: "usa-services/5",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 6,
// //                             name: "INTERNATIONAL BUSINESS TAX",
// //                             link: "usa-services/6",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 7,
// //                             name: "AMENDED & LATE TAX RETURN",
// //                             link: "usa-services/7",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 8,
// //                             name: "BOOKKEEPING & PAYROLL",
// //                             link: "usa-services/8",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 9,
// //                             name: "REPORTING",
// //                             link: "usa-services/9",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 10,
// //                             name: "ENTITY SETUP-USA",
// //                             link: "usa-services/10",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 11,
// //                             name: "ENTITY SETUP-FOREIGNER",
// //                             link: "usa-services/11",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 12,
// //                             name: "REPRESENTATION",
// //                             link: "usa-services/12",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 13,
// //                             name: "ADVISORY",
// //                             link: "usa-services/13",
// //                             icon: "",
// //                         },
// //                         // {
// //                         // subMenu: [
// //                         //     {
// //                         //         name: 'and more',
// //                         // link: '#',
// //                         // icon: "",//         
// //                         //         subMenu: [
// //                         //             {
// //                         //                 name: 'and even more',
// //                         // link: '#',
// //                         // icon: "",//                 
// //                         //             },
// //                         //             // Add more sub-menus if needed
// //                         //         ],
// //                         //     },
// //                         //     {
// //                         //         name: 'and more',
// //                         // link: '#',
// //                         // icon: "",//         
// //                         //     },
// //                         // ],
// //                         // },
// //                     ],
// //                 },
// //                 {
// //                     name: 'AUSTRALIA SERVICES',
// //                     link: 'australian-services',
// //                     icon: "",
// //                     subMenu: [
// //                         {
// //                             id: 1,
// //                             name: "DOMESTIC TAXATION",
// //                             link: "australian-services/1",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 2,
// //                             name: "CROSS-BORDER TAXATION",
// //                             link: "australian-services/2",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 3,
// //                             name: "FINANCIAL ACCOUNTING",
// //                             link: "australian-services/3",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 4,
// //                             name: "LOCAL ENTITY FORMATION",
// //                             link: "australian-services/4",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 5,
// //                             name: "INTERNATIONAL EXPANSION",
// //                             link: "australian-services/5",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 6,
// //                             name: "AUSTRALIAN MARKET ENTRY",
// //                             link: "australian-services/6",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 7,
// //                             name: "AUDITING, PAYROLL TAX AND OTHERS",
// //                             link: "australian-services/7",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 8,
// //                             name: "BUSINESS ADVISORY",
// //                             link: "australian-services/8",
// //                             icon: "",
// //                         },
// //                     ],
// //                 },
// //                 {
// //                     name: 'CANADIAN SERVICES',
// //                     link: 'canadian-services',
// //                     icon: "",
// //                     subMenu: [
// //                         {
// //                             id: 1,
// //                             name: "LOCAL TAX",
// //                             link: "canadian-services/1",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 2,
// //                             name: "CROSS-BORDER TAX",
// //                             link: "canadian-services/2",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 3,
// //                             name: "ACCOUNTING & BOOKKEEPING",
// //                             link: "canadian-services/3",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 4,
// //                             name: "ENTITY SERVICES",
// //                             link: "canadian-services/4",
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 5,
// //                             name: "ADVISORY SERVICES",
// //                             link: "canadian-services/5",
// //                             icon: "",
// //                         },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             name: 'WHY',
// //             link: '#',
// //             icon: "",
// //             mega_menu: false,
// //             subMenu: [
// //                 {
// //                     name: 'WHY US',
// //                     link: 'why-us',
// //                     icon: "",
// //                 },
// //                 {
// //                     name: 'PRIVACY POLICY',
// //                     link: 'privacy-policy',
// //                     icon: "",
// //                 },
// //                 {
// //                     name: 'TECH PARTNERS',
// //                     link: 'tech-partners',
// //                     icon: "",
// //                 },
// //                 {
// //                     name: 'ই-সিটিজেন',
// //                     link: '#',
// //                     icon: "",
// //                     subMenu: [
// //                         {
// //                             id: 1,
// //                             name: 'আইন ও বিধি',
// //                             link: 'laws-and-regulations',
// //                             icon: "",
// //                         },
// //                         {
// //                             id: 2,
// //                             name: 'তথ্য অধিকার',
// //                             link: 'right-to-information',
// //                             icon: "",
// //                         },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             name: 'TESTIMONIAL',
// //             link: 'testimonial',
// //             icon: "",
// //             mega_menu: false,
// //         },
// //     ];


// //     const renderSubMenu = (subMenu) => {
// //         if (!subMenu) return null;

// //         return (
// //             <ul className="nav__menu__ul">
// //                 {subMenu.map((item) => (
// //                     <li key={item.name}>
// //                         <Link to={`/${item.link}`} className="nav__link">{item.name}</Link>
// //                         {renderSubMenu(item.subMenu)}
// //                     </li>
// //                 ))}
// //             </ul>
// //         );
// //     };
// //     const [isClicked, setIsClicked] = useState(false);
// //     const expand = () => {
// //         setIsNavExpanded(!isNavExpanded)
// //         setTimeout(() => {
// //             setIsNavExpanded(false)
// //         }, 7000);
// //     }

// //     return (
// //         <div className="ht__nav">
// //             <nav className="container container-fluid">
// //                 <div className="row d-flex justify-content-between align-items-center">

// //                     <div className="col-auto">
// //                         <div className="nav__menu">
// //                             <ul className="nav__menu__ul">
// //                                 {items.map((item) => (
// //                                     item.mega_menu ? <>
// //                                         <div key={item.name} className="nav__mega__menu">
// //                                             <Link to={item.link} className="nav__link">{item.name}</Link>
// //                                             <div className="dropdown-content">
// //                                                 <div className="container">
// //                                                     <div className="row py-3 d-flex justify-content-center">
// //                                                         {item.subMenu.map((item) => (
// //                                                             <div className="col-md-4" key={item.name}>
// //                                                                 <Link to={item.link} className="nav__link__services">{item.name}</Link>
// //                                                                 <div className="pt-1">
// //                                                                     {item.subMenu.map((itemmenu) => {
// //                                                                         return (
// //                                                                             <p key={itemmenu.name} className="mega__menu__link__p">
// //                                                                                 <Link to={itemmenu.link} className="mega__menu__link">{itemmenu.name}</Link>
// //                                                                             </p>
// //                                                                         )
// //                                                                     })}
// //                                                                 </div>
// //                                                             </div>
// //                                                         ))}
// //                                                     </div>
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                     </> :
// //                                         <li key={item.name}>
// //                                             <Link to={item.link} className="nav__link">{item.name}</Link>
// //                                             {renderSubMenu(item.subMenu)}
// //                                         </li>
// //                                 ))}
// //                             </ul>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </nav >

// //         </div >
// //     );
// // };

// // export default NavigationMenu;

import React, { useState } from 'react';
import '../header/NavigationMenu.css';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  const [items] = useState([
    {
      name: 'HOME',
      link: '/',
      icon: 'bi-house-fill',
      mega_menu: false,
    },
    {
      name: 'ABOUT',
      link: '#',
      icon: '',
      mega_menu: false,
      subMenu: [
        {
          name: 'ABOUT US',
          link: 'about',
          icon: '',
        },
        {
          name: 'MANAGEMENT TEAM',
          link: 'our-management-team',
          icon: '',
        },
        {
          name: 'CAREER',
          link: 'career',
          icon: '',
        },
      ],
    },
    {
      name: 'SERVICES',
      link: '#',
      icon: '',
      mega_menu: true,
      subMenu: [
        {
          name: 'TESTIMONIAL',
          link: 'testimonial',
          icon: '',
          mega_menu: false,
        },
        {
          name: 'USA SERVICES',
          link: 'usa-services',
          icon: '',
          subMenu: [
            {
              id: 1,
              name: 'INDIVIDUAL TAX FEDERAL & STATE',
              link: 'usa-services/1',
              icon: '',
            },
            // ...rest of the sub-menu items
          ],
        },
        {
          name: 'AUSTRALIA SERVICES',
          link: 'australian-services',
          icon: '',
          subMenu: [
            {
              id: 1,
              name: 'DOMESTIC TAXATION',
              link: 'australian-services/1',
              icon: '',
            },
            // ...rest of the sub-menu items
          ],
        },
        {
          name: 'CANADIAN SERVICES',
          link: 'canadian-services',
          icon: '',
          subMenu: [
            {
              id: 1,
              name: 'LOCAL TAX',
              link: 'canadian-services/1',
              icon: '',
            },
            // ...rest of the sub-menu items
          ],
        },
      ],
    },
    {
      name: 'WHY',
      link: '#',
      icon: '',
      mega_menu: false,
      subMenu: [
        {
          name: 'WHY US',
          link: 'why-us',
          icon: '',
        },
        {
          name: 'PRIVACY POLICY',
          link: 'privacy-policy',
          icon: '',
        },
        {
          name: 'TECH PARTNERS',
          link: 'tech-partners',
          icon: '',
        },
        {
          name: 'ই-সিটিজেন',
          link: '#',
          icon: '',
          subMenu: [
            {
              id: 1,
              name: 'আইন ও বিধি',
              link: 'laws-and-regulations',
              icon: '',
            },
            // ...rest of the sub-menu items
          ],
        },
      ],
    },
    {
      name: 'TESTIMONIAL',
      link: 'testimonial',
      icon: '',
      mega_menu: false,
    },
  ]);

console.log("items", items);


const renderSubMenu = (subMenu) => {
    if (!subMenu) return null;

    return (
      <ul className="nav__menu__ul">
        {subMenu.map((item) => (
          <li key={item.name}>
            <Link to={`/${item.link}`} className="nav__link">
              {item.name}
            </Link>
            {renderSubMenu(item.subMenu)}
          </li>
        ))}
      </ul>
    );
  };

  const renderMegaMenu = (menuItem) => {
    if (!menuItem.mega_menu) return null;

    return (
      <div key={menuItem.name} className="nav__mega__menu">
        <Link to={menuItem.link} className="nav__link">
          {menuItem.name}
        </Link>
        <div className="dropdown-content">
          <div className="container">
            <div className="row py-3 d-flex justify-content-center">
              {menuItem.subMenu.map((subMenuItem) => (
                <div className="col-md-3" key={subMenuItem.name}>
                  <Link
                    to={subMenuItem.link}
                    className="nav__link__services"
                  >
                    {subMenuItem.name}
                  </Link>
                  {renderSubMenu(subMenuItem.subMenu)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="ht__nav">
      <nav className="container container-fluid">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-auto">
            <div className="nav__menu">
              <ul className="nav__menu__ul">
                {items.map((item) => (
                  item.mega_menu
                    ? renderMegaMenu(item)
                    : (
                      <li key={item.name}>
                        <Link to={item.link} className="nav__link">
                          {item.name}
                        </Link>
                        {renderSubMenu(item.subMenu)}
                      </li>
                    )
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationMenu;