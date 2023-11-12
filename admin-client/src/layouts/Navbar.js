import React from 'react';
import '../CSS/Navbar.css'
import dummyImage from '../front_assets/images/avatar.png'
import AuthUser from '../components/AuthUser';
import { Link } from 'react-router-dom';
import { FiKey } from 'react-icons/fi';


const Navbar = () => {
    const { logout, user } = AuthUser();
    const userInfo = user;
    
    return (
        <div className='custom_navbar'>
            <nav className="navbar">
                <a href="#" className="sidebar-toggler">
                    <i data-feather="menu" />
                </a>
                <div className="navbar-content">
                    {/* <SearchBar/> */}
                    <form className="search-form">
                        <div className="input-group">
                            <div className="input-group-text">
                                <i data-feather="search" />
                            </div>
                            <input type="text" className="form-control" id="navbarForm" placeholder="Search here..." />
                        </div>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="languageDropdown" role="button" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i className="flag-icon flag-icon-us mt-1" title="us" /> <span
                                    className="ms-1 me-1 d-none d-md-inline-block">English</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="languageDropdown">
                                <a href="javascript:;" className="dropdown-item py-2"><i className="flag-icon flag-icon-us" title="us" id="us" /> <span
                                    className="ms-1"> English </span></a>
                                <a href="javascript:;" className="dropdown-item py-2"><i className="flag-icon flag-icon-fr" title="fr" id="fr" /> <span
                                    className="ms-1"> French </span></a>
                                <a href="javascript:;" className="dropdown-item py-2"><i className="flag-icon flag-icon-de" title="de" id="de" /> <span
                                    className="ms-1"> German </span></a>
                                <a href="javascript:;" className="dropdown-item py-2"><i className="flag-icon flag-icon-pt" title="pt" id="pt" /> <span
                                    className="ms-1"> Portuguese </span></a>
                                <a href="javascript:;" className="dropdown-item py-2"><i className="flag-icon flag-icon-es" title="es" id="es" /> <span
                                    className="ms-1"> Spanish </span></a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="appsDropdown" role="button" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i data-feather="grid" />
                            </a>
                            <div className="dropdown-menu p-0" aria-labelledby="appsDropdown">
                                <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                                    <p className="mb-0 fw-bold">Web Apps</p>
                                    <a href="javascript:;" className="text-muted">Edit</a>
                                </div>
                                <div className="row g-0 p-1">
                                    <div className="col-3 text-center">
                                        <a href="pages/apps/chat.html"
                                            className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"><i
                                                data-feather="message-square" className="icon-lg mb-1" /><p className="tx-12">Chat</p></a>
                                    </div>
                                    <div className="col-3 text-center">
                                        <a href="pages/apps/calendar.html"
                                            className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"><i
                                                data-feather="calendar" className="icon-lg mb-1" /><p className="tx-12">Calendar</p></a>
                                    </div>
                                    <div className="col-3 text-center">
                                        <a href="pages/email/inbox.html"
                                            className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"><i
                                                data-feather="mail" className="icon-lg mb-1" /><p className="tx-12">Email</p></a>
                                    </div>
                                    <div className="col-3 text-center">
                                        <a href="pages/general/profile.html"
                                            className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"><i
                                                data-feather="instagram" className="icon-lg mb-1" /><p className="tx-12">Profile</p></a>
                                    </div>
                                </div>
                                <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                                    <a href="javascript:;">View all</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i data-feather="mail" />
                            </a>
                            <div className="dropdown-menu p-0" aria-labelledby="messageDropdown">
                                <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                                    <p>9 New Messages</p>
                                    <a href="javascript:;" className="text-muted">Clear all</a>
                                </div>
                                <div className="p-1">
                                    <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                                        <div className="me-3">
                                            <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr" />
                                        </div>
                                        <div className="d-flex justify-content-between flex-grow-1">
                                            <div className="me-4">
                                                <p>Leonardo Payne</p>
                                                <p className="tx-12 text-muted">Project status</p>
                                            </div>
                                            <p className="tx-12 text-muted">2 min ago</p>
                                        </div>
                                    </a>
                                    <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                                        <div className="me-3">
                                            <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr" />
                                        </div>
                                        <div className="d-flex justify-content-between flex-grow-1">
                                            <div className="me-4">
                                                <p>Carl Henson</p>
                                                <p className="tx-12 text-muted">Client meeting</p>
                                            </div>
                                            <p className="tx-12 text-muted">30 min ago</p>
                                        </div>
                                    </a>
                                    <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                                        <div className="me-3">
                                            <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr" />
                                        </div>
                                        <div className="d-flex justify-content-between flex-grow-1">
                                            <div className="me-4">
                                                <p>Jensen Combs</p>
                                                <p className="tx-12 text-muted">Project updates</p>
                                            </div>
                                            <p className="tx-12 text-muted">1 hrs ago</p>
                                        </div>
                                    </a>
                                    <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                                        <div className="me-3">
                                            <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr" />
                                        </div>
                                        <div className="d-flex justify-content-between flex-grow-1">
                                            <div className="me-4">
                                                <p>Amiah Burton</p>
                                                <p className="tx-12 text-muted">Project deatline</p>
                                            </div>
                                            <p className="tx-12 text-muted">2 hrs ago</p>
                                        </div>
                                    </a>
                                    <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                                        <div className="me-3">
                                            <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr" />
                                        </div>
                                        <div className="d-flex justify-content-between flex-grow-1">
                                            <div className="me-4">
                                                <p>Yaretzi Mayo</p>
                                                <p className="tx-12 text-muted">New record</p>
                                            </div>
                                            <p className="tx-12 text-muted">5 hrs ago</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                                    <a href="javascript:;">View all</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                {/* {
                                    user.user_image 
                                    ?
                                    <>
                                        <img className="wd-30 ht-30 rounded-circle" src={user.user_image} alt="profile"/>
                                    </>
                                    :
                                    <>
                                        <img className="wd-30 ht-30 rounded-circle" src={dummyImage} alt="profile"/>
                                    </>
                                } */}
                                <img className="wd-30 ht-30 rounded-circle" src={dummyImage} alt="profile" />
                            </a>
                            <div className="dropdown-menu p-0" aria-labelledby="profileDropdown">
                                <div className="d-flex flex-column align-items-center border-bottom px-5 py-3">
                                    <div className="mb-3">
                                        {
                                            user?.user_image
                                                ?
                                                <>
                                                    <img className="wd-80 ht-80 rounded-circle" src={user?.user_image} alt="profile" />
                                                </>
                                                :
                                                <>
                                                    <img className="wd-80 ht-80 rounded-circle" src={dummyImage} alt="profile" />
                                                </>
                                        }
                                    </div>
                                    <div className="text-center">
                                        <p className="tx-16 fw-bolder">{
                                            userInfo != null ? userInfo?.name : "Dr. Jone"
                                        }</p>
                                        <p className="tx-12 text-muted">{
                                            userInfo != null ? userInfo?.email : "Dr. Jone"
                                        }</p>
                                    </div>
                                </div>
                                <ul className="list-unstyled p-1">
                                    <li style={{ cursor: 'pointer' }} className="dropdown-item py-2">
                                        <Link to="/change-password" className="text-body ms-0">
                                            <FiKey className="me-2 icon-md" />
                                            <span>Change Password</span>
                                        </Link>
                                    </li>
                                    <li onClick={logout} style={{ cursor: 'pointer' }} className="dropdown-item py-2">
                                        <a className="text-body ms-0">
                                            <i className="me-2 icon-md" data-feather="log-out" />
                                            <span>Log Out</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;


// import React from 'react'
// import AuthUser from '../components/AuthUser';
// import {useEffect, useState} from 'react';
// import http from "../http";
// import {Link} from 'react-router-dom'
// import moment from 'moment';
// import Swal from "sweetalert2";
// import SearchBar from './SearchBar';
// import dummyImage from '../front_assets/user_images/dummy.jpg'
// import '../CSS/Navbar.css'


// export default function Navbar() {

//     const {http, token, logout, user} = AuthUser();
//     const [mng_req_notifications, setMngRqNotification] = useState([]);
//     const [sls_req_notifications, setSlsRqNotification] = useState([]);
//     const [spplr_req_notifications, setSpplrRqNotification] = useState([]);
//     const userLogout = () => {
//         if (token != undefined) {
//             logout();
//         }
//     }

//     // console.log(user.name)
//     const [mng_status_upd, setMngStatusUpd] = useState();

//     useEffect(() => {
//         http.get(`/managers-notifications`).then(res => {
//             // console.log("req data", res.data.sales);
//             if (res.status === 200) {
//                 setMngRqNotification(res.data.data);
//                 setSlsRqNotification(res.data.sales);
//                 setSpplrRqNotification(res.data.supplier);
//             }
//         });
//     }, [mng_status_upd]);


//     const [userInfo, setuserInfo] = useState();


//     useEffect(() => {
//         setuserInfo(user)
//     }, [])



//     const salesData = (e, id) => {
//         // e.preventDefault();
//         http.delete(`/update-requisition-notifications/${id}`).then(res => {
//         });
//     }


//     const managerData = (e, id) => {
//         // e.preventDefault();
//         http.delete(`/update-manager-requisition-notifications/${id}`).then(res => {
//             setMngStatusUpd(Math.random())
//         });
//     }
//     const supplierData = (e, id) => {
//         // e.preventDefault();
//         http.delete(`/update-supplier-requisition-notifications/${id}`).then(res => {
//             setMngStatusUpd(Math.random())
//         });
//     }

//     const supplierPoData = (e, id) => {
//         // e.preventDefault();
//         http.delete(`/update-supplier-po-notifications/${id}`).then(res => {
//             setMngStatusUpd(Math.random())
//         });
//     }
//     const salesPoData = (e, id) => {
//         // e.preventDefault();
//         http.delete(`/update-sales-po-notifications/${id}`).then(res => {
//             setMngStatusUpd(Math.random())
//         });
//     }

//     return (
//         <div className='custom_navbar'>
//             <nav className="navbar">
//                 <a href="#" className="sidebar-toggler">
//                     <i data-feather="menu"/>
//                 </a>
//                 <div className="navbar-content">
//                     {/* <SearchBar/> */}
//                     {/* <form className="search-form">
//                         <div className="input-group">
//                             <div className="input-group-text">
//                                 <i data-feather="search"/>
//                             </div>
//                             <input type="text" className="form-control" id="navbarForm" placeholder="Search here..."/>
//                         </div>
//                     </form> */}
//                     <ul className="navbar-nav">
//                         {/* <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle" href="#" id="languageDropdown" role="button" data-bs-toggle="dropdown"
//                                aria-haspopup="true" aria-expanded="false">
//                                 <i className="flag-icon flag-icon-us mt-1" title="us"/> <span
//                                 className="ms-1 me-1 d-none d-md-inline-block">English</span>
//                             </a>
//                             <div className="dropdown-menu" aria-labelledby="languageDropdown">
//                                 <a href="javascript:;" className="dropdown-item py-2"><i className="flag-icon flag-icon-us" title="us" id="us"/> <span
//                                     className="ms-1"> English </span></a>
//                                 <a href="javascript:;" className="dropdown-item py-2"><i className="flag-icon flag-icon-fr" title="fr" id="fr"/> <span
//                                     className="ms-1"> French </span></a>
//                                 <a href="javascript:;" className="dropdown-item py-2"><i className="flag-icon flag-icon-de" title="de" id="de"/> <span
//                                     className="ms-1"> German </span></a>
//                                 <a href="javascript:;" className="dropdown-item py-2"><i className="flag-icon flag-icon-pt" title="pt" id="pt"/> <span
//                                     className="ms-1"> Portuguese </span></a>
//                                 <a href="javascript:;" className="dropdown-item py-2"><i className="flag-icon flag-icon-es" title="es" id="es"/> <span
//                                     className="ms-1"> Spanish </span></a>
//                             </div>
//                         </li> */}
//                         {/* <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle" href="#" id="appsDropdown" role="button" data-bs-toggle="dropdown"
//                                aria-haspopup="true" aria-expanded="false">
//                                 <i data-feather="grid"/>
//                             </a>
//                             <div className="dropdown-menu p-0" aria-labelledby="appsDropdown">
//                                 <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
//                                     <p className="mb-0 fw-bold">Web Apps</p>
//                                     <a href="javascript:;" className="text-muted">Edit</a>
//                                 </div>
//                                 <div className="row g-0 p-1">
//                                     <div className="col-3 text-center">
//                                         <a href="pages/apps/chat.html"
//                                            className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"><i
//                                             data-feather="message-square" className="icon-lg mb-1"/><p className="tx-12">Chat</p></a>
//                                     </div>
//                                     <div className="col-3 text-center">
//                                         <a href="pages/apps/calendar.html"
//                                            className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"><i
//                                             data-feather="calendar" className="icon-lg mb-1"/><p className="tx-12">Calendar</p></a>
//                                     </div>
//                                     <div className="col-3 text-center">
//                                         <a href="pages/email/inbox.html"
//                                            className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"><i
//                                             data-feather="mail" className="icon-lg mb-1"/><p className="tx-12">Email</p></a>
//                                     </div>
//                                     <div className="col-3 text-center">
//                                         <a href="pages/general/profile.html"
//                                            className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"><i
//                                             data-feather="instagram" className="icon-lg mb-1"/><p className="tx-12">Profile</p></a>
//                                     </div>
//                                 </div>
//                                 <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
//                                     <a href="javascript:;">View all</a>
//                                 </div>
//                             </div>
//                         </li> */}
//                         {/* <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-bs-toggle="dropdown"
//                                aria-haspopup="true" aria-expanded="false">
//                                 <i data-feather="mail"/>
//                             </a>
//                             <div className="dropdown-menu p-0" aria-labelledby="messageDropdown">
//                                 <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
//                                     <p>9 New Messages</p>
//                                     <a href="javascript:;" className="text-muted">Clear all</a>
//                                 </div>
//                                 <div className="p-1">
//                                     <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
//                                         <div className="me-3">
//                                             <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr"/>
//                                         </div>
//                                         <div className="d-flex justify-content-between flex-grow-1">
//                                             <div className="me-4">
//                                                 <p>Leonardo Payne</p>
//                                                 <p className="tx-12 text-muted">Project status</p>
//                                             </div>
//                                             <p className="tx-12 text-muted">2 min ago</p>
//                                         </div>
//                                     </a>
//                                     <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
//                                         <div className="me-3">
//                                             <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr"/>
//                                         </div>
//                                         <div className="d-flex justify-content-between flex-grow-1">
//                                             <div className="me-4">
//                                                 <p>Carl Henson</p>
//                                                 <p className="tx-12 text-muted">Client meeting</p>
//                                             </div>
//                                             <p className="tx-12 text-muted">30 min ago</p>
//                                         </div>
//                                     </a>
//                                     <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
//                                         <div className="me-3">
//                                             <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr"/>
//                                         </div>
//                                         <div className="d-flex justify-content-between flex-grow-1">
//                                             <div className="me-4">
//                                                 <p>Jensen Combs</p>
//                                                 <p className="tx-12 text-muted">Project updates</p>
//                                             </div>
//                                             <p className="tx-12 text-muted">1 hrs ago</p>
//                                         </div>
//                                     </a>
//                                     <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
//                                         <div className="me-3">
//                                             <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr"/>
//                                         </div>
//                                         <div className="d-flex justify-content-between flex-grow-1">
//                                             <div className="me-4">
//                                                 <p>Amiah Burton</p>
//                                                 <p className="tx-12 text-muted">Project deatline</p>
//                                             </div>
//                                             <p className="tx-12 text-muted">2 hrs ago</p>
//                                         </div>
//                                     </a>
//                                     <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
//                                         <div className="me-3">
//                                             <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr"/>
//                                         </div>
//                                         <div className="d-flex justify-content-between flex-grow-1">
//                                             <div className="me-4">
//                                                 <p>Yaretzi Mayo</p>
//                                                 <p className="tx-12 text-muted">New record</p>
//                                             </div>
//                                             <p className="tx-12 text-muted">5 hrs ago</p>
//                                         </div>
//                                     </a>
//                                 </div>
//                                 <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
//                                     <a href="javascript:;">View all</a>
//                                 </div>
//                             </div>
//                         </li> */}
//                         {
//                             user.user_type === "sales" || user.user_type === "admin"?
//                                 <li className="nav-item dropdown">
//                                     {/* <a className="nav-link dropdown-toggle" href="#" id="notificationDropdown" role="button" data-bs-toggle="dropdown"
//                                        aria-haspopup="true" aria-expanded="false">
//                                         <i data-feather="bell"/>
//                                         <div className="indicator">
//                                             <div className="circle"/>
//                                         </div>
//                                     </a> */}
//                                     <div className="dropdown-menu p-0" aria-labelledby="notificationDropdown">
//                                         <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
//                                             <p>{sls_req_notifications.length} New Notifications</p>
//                                             {/*<Link to="manager-requisition" className="text-muted mx-4">Requisition List</Link>*/}
//                                         </div>
//                                         <div className="manager_notifications">

//                                             {
//                                                 sls_req_notifications.map((item) => {
//                                                     return (
//                                                         <>
//                                                             <Link to={`${item.action_users_role=='supplier-confirm-po' ? 'view-purchase-order': 'proceeded-requisition'}/${item.requisition_id}`} onClick={(e) => {item.action_users_role=='supplier-confirm-po' ? salesPoData(e, item.id) : salesData(e, item.id) } }
//                                                                   className={`dropdown-item d-flex align-items-center py-2 ${item.sales_read_status==='yes' ? 'read' : 'not_read'}`}>
//                                                                 <div
//                                                                     className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
//                                                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                                                                          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                                                                          stroke-linejoin="round" className="feather feather-gift icon-sm text-white">
//                                                                         <polyline points="20 12 20 22 4 22 4 12"></polyline>
//                                                                         <rect x="2" y="7" width="20" height="5"></rect>
//                                                                         <line x1="12" y1="22" x2="12" y2="7"></line>
//                                                                         <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
//                                                                         <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
//                                                                     </svg>
//                                                                 </div>
//                                                                 <div className="flex-grow-1 me-2">
//                                                                     <p>({ item.action_users_role=='supplier-confirm-po' ? item.purchase_order_no : item.requisition_no}) {item.action_users_role=='manager-cancelled' ? 'Manager cancelled this requisition.' : item.action_users_role=='supplier-askforpo' ? 'Supplier ask for P.O.' : item.action_users_role=='supplier-confirmed' ? 'Requisition confirmed by supplier.' : item.action_users_role=='manager-approved' ? 'Requisition approved by manager.' : item.action_users_role=='supplier-confirm-po' ? 'Supplier Confirmed this P.O.' : ' ' } </p>
//                                                                     <p className="tx-12 text-muted">{moment(item.created_at).fromNow()}</p>
//                                                                 </div>
//                                                             </Link>
//                                                         </>

//                                                     )
//                                                 })
//                                             }

//                                         </div>
//                                         <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
//                                             <Link to="manager-requisition" className="text-muted mx-4">Requisition List</Link>

//                                             {/*<a href="javascript:;">View all</a>*/}
//                                         </div>
//                                     </div>
//                                 </li>
//                                 : ""
//                         }

//                         {
//                             user.user_type === "manager"?
//                                 <li className="nav-item dropdown">
//                                     {/* <a className="nav-link dropdown-toggle" href="#" id="notificationDropdown" role="button" data-bs-toggle="dropdown"
//                                        aria-haspopup="true" aria-expanded="false">
//                                         <i data-feather="bell"/>
//                                         <div className="indicator">
//                                             <div className="circle"/>
//                                         </div>
//                                     </a> */}
//                                     <div className="dropdown-menu p-0" aria-labelledby="notificationDropdown">
//                                         <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
//                                             <p>{mng_req_notifications.length} New Notifications</p>
//                                             {/*<Link to="manager-requisition" className="text-muted mx-4">Requisition List</Link>*/}
//                                         </div>
//                                         <div className="manager_notifications">

//                                             {
//                                                 mng_req_notifications.map((item) => {
//                                                     return (
//                                                         <>
//                                                             <Link to={`edit-manager-requisition/${item.requisition_id}`} onClick={(e) => managerData(e, item.id)}
//                                                                   className={`dropdown-item d-flex align-items-center py-2 ${item.manager_read_status==='yes' ? 'read' : 'not_read'}`}>
//                                                                 <div
//                                                                     className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
//                                                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                                                                          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                                                                          stroke-linejoin="round" className="feather feather-gift icon-sm text-white">
//                                                                         <polyline points="20 12 20 22 4 22 4 12"></polyline>
//                                                                         <rect x="2" y="7" width="20" height="5"></rect>
//                                                                         <line x1="12" y1="22" x2="12" y2="7"></line>
//                                                                         <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
//                                                                         <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
//                                                                     </svg>
//                                                                 </div>
//                                                                 <div className="flex-grow-1 me-2">
//                                                                     <p>({item.requisition_no}) {item.action_users_role=='sales' ? 'You have a new requisition approval request.' : item.action_users_role=='supplier-confirmed' ? 'Requisition confirmed by supplier.' : item.action_users_role=='supplier-askforpo' ? 'Supplier ask for P.O.' : ' ' } </p>
//                                                                     <p className="tx-12 text-muted">{moment(item.created_at).fromNow()}</p>
//                                                                 </div>
//                                                             </Link>
//                                                         </>

//                                                     )
//                                                 })
//                                             }

//                                         </div>
//                                         <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
//                                             <Link to="manager-requisition" className="text-muted mx-4">Requisition List</Link>

//                                             {/*<a href="javascript:;">View all</a>*/}
//                                         </div>
//                                     </div>
//                                 </li>
//                                 : ""
//                         }
//                         {
//                             user.user_type === "supplier"?
//                                 <li className="nav-item dropdown">
//                                     {/* <a className="nav-link dropdown-toggle" href="#" id="notificationDropdown" role="button" data-bs-toggle="dropdown"
//                                        aria-haspopup="true" aria-expanded="false">
//                                         <i data-feather="bell"/>
//                                         <div className="indicator">
//                                             <div className="circle"/>
//                                         </div>
//                                     </a> */}
//                                     <div className="dropdown-menu p-0" aria-labelledby="notificationDropdown">
//                                         <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
//                                             <p>{spplr_req_notifications.length} New Notifications</p>
//                                             {/*<Link to="manager-requisition" className="text-muted mx-4">Requisition List</Link>*/}
//                                         </div>
//                                         <div className="manager_notifications">

//                                             {
//                                                 spplr_req_notifications.map((item) => {
//                                                     return (
//                                                         <>
//                                                             <Link to={`${item.action_users_role=='sales-po' ? 'view-supplier-purchase-order': 'edit-manager-requisition'}/${item.requisition_id}`} onClick={(e) => {item.action_users_role=='sales-po' ? supplierPoData(e, item.id) : supplierData(e, item.id) } }
//                                                                   className={`dropdown-item d-flex align-items-center py-2 ${item.supplier_read_status==='yes' ? 'read' : 'not_read'}`}>
//                                                                 <div
//                                                                     className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
//                                                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                                                                          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                                                                          stroke-linejoin="round" className="feather feather-gift icon-sm text-white">
//                                                                         <polyline points="20 12 20 22 4 22 4 12"></polyline>
//                                                                         <rect x="2" y="7" width="20" height="5"></rect>
//                                                                         <line x1="12" y1="22" x2="12" y2="7"></line>
//                                                                         <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
//                                                                         <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
//                                                                     </svg>
//                                                                 </div>
//                                                                 <div className="flex-grow-1 me-2">
//                                                                     <p>({ item.action_users_role=='sales-po' ? item.purchase_order_no : item.requisition_no}) {item.action_users_role=='sales-po' ? 'You have a new P.O. request.' : item.action_users_role=='manager-approved' ? 'New requisition confirmation request' : ' ' } </p>

//                                                                     {/*<p>({item.requisition_no}) New requisition confirmation request</p>*/}
//                                                                     <p className="tx-12 text-muted">{moment(item.created_at).fromNow()}</p>
//                                                                 </div>
//                                                             </Link>
//                                                         </>

//                                                     )
//                                                 })
//                                             }

//                                         </div>
//                                         <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
//                                             <Link to="manager-requisition" className="text-muted mx-4">Requisition List</Link>

//                                             {/*<a href="javascript:;">View all</a>*/}
//                                         </div>
//                                     </div>
//                                 </li>
//                                 : ""
//                         }

//                         <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown"
//                                aria-haspopup="true" aria-expanded="false">
//                                 {
//                                     user.user_image
//                                     ?
//                                     <>
//                                         <img className="wd-30 ht-30 rounded-circle" src={user.user_image} alt="profile"/>
//                                     </>
//                                     :
//                                     <>
//                                         <img className="wd-30 ht-30 rounded-circle" src={dummyImage} alt="profile"/>
//                                     </>
//                                 }
//                                 {/* <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="profile"/> */}
//                             </a>
//                             <div className="dropdown-menu p-0" aria-labelledby="profileDropdown">
//                                 <div className="d-flex flex-column align-items-center border-bottom px-5 py-3">
//                                     <div className="mb-3">
//                                         {/* <img className="wd-80 ht-80 rounded-circle" src="https://via.placeholder.com/80x80" alt/> */}
//                                         {
//                                             user.user_image
//                                             ?
//                                             <>
//                                                 <img className="wd-80 ht-80 rounded-circle" src={user.user_image} alt="profile"/>
//                                             </>
//                                             :
//                                             <>
//                                                 <img className="wd-80 ht-80 rounded-circle" src={dummyImage} alt="profile"/>
//                                             </>
//                                         }
//                                     </div>
//                                     <div className="text-center">
//                                         <p className="tx-16 fw-bolder">{
//                                             userInfo != null ? userInfo.name : "Dr. Jone"
//                                         }</p>
//                                         <p className="tx-12 text-muted">{
//                                             userInfo != null ? userInfo.email : "Dr. Jone"
//                                         }</p>
//                                     </div>
//                                 </div>
//                                 <ul className="list-unstyled p-1">
//                                     {/* <li className="dropdown-item py-2">
//                                         <a href="pages/general/profile.html" className="text-body ms-0">
//                                             <i className="me-2 icon-md" data-feather="user"/>
//                                             <span>Profile</span>
//                                         </a>
//                                     </li> */}
//                                     {/* <li className="dropdown-item py-2">
//                                         <a href="javascript:;" className="text-body ms-0">
//                                             <i className="me-2 icon-md" data-feather="edit"/>
//                                             <span>Edit Profile</span>
//                                         </a>
//                                     </li> */}
//                                     {/* <li className="dropdown-item py-2">
//                                         <a href="javascript:;" className="text-body ms-0">
//                                             <i className="me-2 icon-md" data-feather="repeat"/>
//                                             <span>Switch User</span>
//                                         </a>
//                                     </li> */}
//                                     <li onClick={userLogout} style={{cursor:'pointer'}} className="dropdown-item py-2">
//                                         <a className="text-body ms-0">
//                                             <i className="me-2 icon-md" data-feather="log-out"/>
//                                             <span>Log Out</span>
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         </div>
//     )
// }
