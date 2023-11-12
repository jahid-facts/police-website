

// import React from 'react';
// import '../header/Header.css';
// import { Link } from 'react-router-dom';

// const NavigationMenu = () => {
//     const menuItems = [
//         {
//             name: 'প্রথম পাতা',
//             link: '/',
//             bg_color: '#999',
//             color: '#fff',
//         },
//         {
//             name: 'জেলা পুলিশ',
//             link: '#',
//             bg_color: '#84154D',
//             color: '#fff',
//             subMenu: [
//                 {
//                     name: 'ভৌগলিক পরিচিতি',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'জেলা পুলিশের ইতিহাস',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'জেলার ম্যাপ',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'আমাদের লক্ষ্য ও উদ্দেশ্য',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'সাংগঠনিক কাঠামো',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'এক নজরে জেলা পুলিশ',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'জেলার দর্শনীয় স্থানসমূহ',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'নাগরিক সেবা',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'ই-সিটিজেন',
//                     link: '#',
//                     bg_color: '#84154D',
//                     color: '#fff',
//                     subMenu: [
//                         {
//                             name: 'আইন ও বিধি',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'তথ্য অধিকার',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                     ],
//                 },
//                 {
//                     name: 'ডিও সংক্রান্ত',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'তথ্য র্কমর্কতার নাম',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//             ],
//         },
//         {
//             name: 'প্রশাসন',
//             link: '#',
//             bg_color: '#84154D',
//             color: '#fff',
//             subMenu: [
//                 {
//                     name: 'পুলিশ সুপার',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'পুলিশ সুপারের বার্তা',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'পুলিশ সুপার দায়িত্ব ও কর্তব্য',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'সাবেক পুলিশ সুপার',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'অতিরিক্ত পুলিশ সুপার (প্রশাসন ও অর্থ)',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'অতিরিক্ত পুলিশ সুপার (ডিএসবি)',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'কর্মকর্তাগণ',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'কর্মচারীবৃন্দ',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//             ],
//         },
//         {
//             name: 'ইউনিট সমূহ',
//             link: '#',
//             bg_color: '#84154D',
//             color: '#fff',
//             subMenu: [
//                 {
//                     name: 'সার্কেল অফিস',
//                     link: '#',
//                     bg_color: '#84154D',
//                     color: '#fff',
//                     subMenu: [
//                         {
//                             name: 'কিশোরগঞ্জ সদর সার্কেল',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'করিমগঞ্জ সার্কেল',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'অষ্টগ্রাম সার্কেল',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'হোসেনপুর সার্কেল',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'বাজিতপুর সার্কেল',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'ভৈরব সার্কেল',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                     ],
//                 },
//                 {
//                     name: 'থানা',
//                     link: '#',
//                     bg_color: '#84154D',
//                     color: '#fff',
//                     subMenu: [
//                         {
//                             name: 'কিশোরগঞ্জ-সদর-থানা',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'করিমগঞ্জ থানা',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'তাড়াইল থানা',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'অষ্টগ্রাম থানা',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'ইটনা থানা',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'মিঠামইন থানা',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'নিকলী থানা',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'পাকুন্দিয়া থানা',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'হোসেনপুর থানা',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'কটিয়াদী মডেল থানা',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'বাজিতপুর থানা',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'কুলিয়ারচর থানা',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'ভৈরব থানা',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                     ],
//                 },
//                 {
//                     name: 'জেলা বিশেষ শাখা (ডিএসবি)',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'জেলা গোয়েন্দা শাখা (ডিবি)',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'সদর কোর্ট',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'পুলিশ লাইন্স',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'ট্রাফিক বিভাগ',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'তদন্ত কেন্দ্র',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'ফাঁড়ি',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'ক্যাম্প',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'ক্রাইম শাখা',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'প্রসিকিউশন',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'ইন্টেলিজেন্স',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'স্টেট এন্ড ডেভেলপমেন্ট',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
               
//             ],
//         },
//         {
//             name: 'কার্যক্রম',
//             link: '#',
//             bg_color: '#84154D',
//             color: '#fff',
//             subMenu: [
//                 {
//                     name: 'জননিরাপত্তা ও শৃংখলা',
//                     link: '#',
//                     bg_color: '#84154D',
//                     color: '#fff',
//                     subMenu: [
//                         {
//                             name: 'টহল',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'কেপিআই',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'সভা সমাবেশ',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'ভিআইপি',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'চেকপোস্ট',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                     ],
//                 },
//                 {
//                     name: 'অপরাধ তদন্ত',
//                     link: '#',
//                     bg_color: '#84154D',
//                     color: '#fff',
//                     subMenu: [
//                         {
//                             name: 'মামলা কার্যক্রম',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'জিডি কার্যক্রম',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                     ],
//                 },
//                 {
//                     name: 'কমিউনিটি পুলিশিং',
//                     link: '#',
//                     bg_color: '#84154D',
//                     color: '#fff',
//                     subMenu: [
//                         {
//                             name: 'ওপেন হাউজ ডে',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'মতবিনিময় সভা',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                     ],
//                 },
//                 {
//                     name: 'ট্রাফিক ব্যবস্থাপনা',
//                     link: '#',
//                     bg_color: '#84154D',
//                     color: '#fff',
//                 },
//             ],
//         },
//         {
//             name: 'সেবা',
//             link: '#',
//             bg_color: '#84154D',
//             color: '#fff',
//             subMenu: [
//                 {
//                     name: 'পুলিশ ক্লিয়ারেন্স',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'পাসপোর্ট ভেরিফিকেশন',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'চাকুরির ভেরিফিকেশন',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'অর্থ পরিবহনে সহায়তা',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'অসনাক্তকৃত মৃতদেহ-ছবি সহ',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'হারানো ও প্রাপ্তি',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'নিখোঁজ ব্যক্তি সংক্রান্ত তথ্য–ছবি সহ',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'উইমেন্স সাপোর্ট সেন্টার',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'নারী, শিশু ও প্রতিবন্ধী ডেস্ক',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'সিটিজেন চার্টার',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//             ],
//         },
//         {
//             name: 'অপরাধ ব্যবস্হাপনা',
//             link: '#',
//             bg_color: '#84154D',
//             color: '#fff',
//             subMenu: [
//                 {
//                     name: 'মাসিক অপরাধ পরিসংখ্যান',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'বাৎসরিক অপরাধ পরিসংখ্যান',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'মোস্ট ওয়ান্টেড',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'সাজা প্রাপ্ত তালিকা',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'রেড নোটিশ',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//             ],
//         },
//         {
//             name: 'উল্লেখযোগ্য অর্জন',
//             link: '#',
//             bg_color: '#84154D',
//             color: '#fff',
//             subMenu: [
//                 {
//                     name: 'উৎঘাটিত গুরুত্বপূর্ন মামলা সমূহ',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'উদ্ধার',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'গ্রেফতার',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//             ],
//         },
//         {
//             name: 'আত্মত্যাগ',
//             link: '#',
//             bg_color: '#C40A2A',
//             color: '#fff',
//         },
//         {
//             name: 'নোটিশ বোর্ড',
//             link: '#',
//             bg_color: '#84154D',
//             color: '#fff',
//             subMenu: [
//                 {
//                     name: 'টেন্ডার',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'নোটিশ',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'নিয়োগ বিজ্ঞপ্তি',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//             ],
//         },
//         {
//             name: 'এনওসি',
//             link: '#',
//             bg_color: '#C40A2A',
//             color: '#fff',
//         },
//         {
//             name: 'গ্যালারী',
//             link: '#',
//             bg_color: '#84154D',
//             color: '#fff',
//             subMenu: [
//                 {
//                     name: 'ফটো গ্যালারী',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'ভিডিও গ্যালারী',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//             ],
//         },
//         {
//             name: 'ফোন ডিরেক্টরি',
//             link: '#',
//             bg_color: '#C40A2A',
//             color: '#fff',
//         },
//         {
//             name: 'বিট পুলিশিং',
//             link: '#',
//             bg_color: '#84154D',
//             color: '#fff',
//             subMenu: [
//                 {
//                     name: 'বিট পরিচিতি',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'বিট অফিসারগণের তথ্য',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'অভিযোগ',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//             ],
//         },
//         {
//             name: 'যোগাযোগ',
//             link: '#',
//             bg_color: '#C40A2A',
//             color: '#fff',
//         },
//     ];

//     const renderSubMenu = (subMenu) => {
//         if (!subMenu) return null;

//         return (
//             <ul>
//                 {subMenu.map((item) => (
//                     <li key={item.name}>
//                         <Link to={item.link}>{item.name}</Link>
//                         {renderSubMenu(item.subMenu)}
//                     </li>
//                 ))}
//             </ul>
//         );
//     };

//     return (
//         <div className="ht__nav">
//             <nav className="container container-fluid">
//                 <ul className="row">
//                     {menuItems.map((item) => (
//                         <li className="col-auto border" key={item.name}>
//                             <Link to={item.link} className="nav-link text-center">{item.name}</Link>
//                             {renderSubMenu(item.subMenu)}
//                         </li>
//                     ))}
//                 </ul>
//             </nav>
//         </div>
//     );
// };

// export default NavigationMenu;



import React from 'react';
import '../header/Header.css';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
    const menuItems = [
        {
            name: 'প্রথম পাতা',
            link: '/',
            bg_color: '#999',
            color: '#fff',
        },
        {
            name: 'জেলা পুলিশ',
            link: '#',
            bg_color: '#84154D',
            color: '#fff',
            subMenu: [
                {
                    name: 'ভৌগলিক পরিচিতি',
                    link: 'geographical-familiarity',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'জেলা পুলিশের ইতিহাস',
                    link: 'history-of-district-police',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'জেলার ম্যাপ',
                    link: 'district-map',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'আমাদের লক্ষ্য ও উদ্দেশ্য',
                    link: 'our-aims-and-objectives',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'সাংগঠনিক কাঠামো',
                    link: 'organizational-structure',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'এক নজরে জেলা পুলিশ',
                    link: 'district-police-at-glance',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'জেলার দর্শনীয় স্থানসমূহ',
                    link: 'sightseeing-places-district',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'নাগরিক সেবা',
                    link: 'civil-service',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'ই-সিটিজেন',
                    link: '#',
                    bg_color: '#84154D',
                    color: '#fff',
                    subMenu: [
                        {
                            name: 'আইন ও বিধি',
                            link: 'laws-and-regulations',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'তথ্য অধিকার',
                            link: 'right-to-information',
                            bg_color: '#fff',
                            color: '#000',
                        },
                    ],
                },
                {
                    name: 'ডিও সংক্রান্ত',
                    link: 'do-regarding',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'তথ্য র্কমর্কতার নাম',
                    link: 'name-of-information-officer',
                    bg_color: '#fff',
                    color: '#000',
                },
            ],
        },
        {
            name: 'প্রশাসন',
            link: '#',
            bg_color: '#84154D',
            color: '#fff',
            subMenu: [
                {
                    name: 'পুলিশ সুপার',
                    link: 'dig-details/2',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'পুলিশ সুপারের বার্তা',
                    link: 'sp-message',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'পুলিশ সুপার দায়িত্ব ও কর্তব্য',
                    link: 'sp-duties-and-res',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'সাবেক পুলিশ সুপার',
                    link: 'former-of-cheif-sp',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'অতিরিক্ত পুলিশ সুপার (প্রশাসন ও অর্থ)',
                    link: 'additional-sp-addministration',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'অতিরিক্ত পুলিশ সুপার ( ক্রাইম অ্যান্ড অপস্ )',
                    link: 'additional-sp-crime',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'অতিরিক্ত পুলিশ সুপার (ডিএসবি)',
                    link: 'additional-sp-dop',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'কর্মকর্তাগণ',
                    link: 'officers',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'কর্মচারীবৃন্দ',
                    link: 'employees',
                    bg_color: '#fff',
                    color: '#000',
                },
            ],
        },
        {
            name: 'ইউনিট সমূহ',
            link: '#',
            bg_color: '#84154D',
            color: '#fff',
            subMenu: [
                {
                    name: 'সার্কেল অফিস',
                    link: '#',
                    bg_color: '#84154D',
                    color: '#fff',
                    subMenu: [
                        {
                            name: 'কিশোরগঞ্জ সদর সার্কেল',
                            link: 'kishoreganj-sadar-circle',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'করিমগঞ্জ সার্কেল',
                            link: 'karimgonj-circle',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'অষ্টগ্রাম সার্কেল',
                            link: 'ostagram-circle',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'হোসেনপুর সার্কেল',
                            link: 'hossainpur-circle',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'বাজিতপুর সার্কেল',
                            link: 'bajitpur-circle',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'ভৈরব সার্কেল',
                            link: 'bhairav-circle',
                            bg_color: '#fff',
                            color: '#000',
                        },
                    ],
                },
                {
                    name: 'থানা',
                    link: '#',
                    bg_color: '#84154D',
                    color: '#fff',
                    subMenu: [
                        {
                            name: 'কিশোরগঞ্জ-সদর-থানা',
                            link: 'thana/1',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'করিমগঞ্জ থানা',
                            link: 'thana/2',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'তাড়াইল থানা',
                            link: '#',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'অষ্টগ্রাম থানা',
                            link: '#',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'ইটনা থানা',
                            link: '#',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'মিঠামইন থানা',
                            link: '#',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'নিকলী থানা',
                            link: '#',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'পাকুন্দিয়া থানা',
                            link: '#',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'হোসেনপুর থানা',
                            link: '#',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'কটিয়াদী মডেল থানা',
                            link: '#',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'বাজিতপুর থানা',
                            link: '#',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'কুলিয়ারচর থানা',
                            link: '#',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'ভৈরব থানা',
                            link: '#',
                            bg_color: '#fff',
                            color: '#000',
                        },
                    ],
                },
                {
                    name: 'জেলা বিশেষ শাখা (ডিএসবি)',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'জেলা গোয়েন্দা শাখা (ডিবি)',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'সদর কোর্ট',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'পুলিশ লাইন্স',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'ট্রাফিক বিভাগ',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'তদন্ত কেন্দ্র',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'ফাঁড়ি',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'ক্যাম্প',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'ক্রাইম শাখা',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'প্রসিকিউশন',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'ইন্টেলিজেন্স',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'স্টেট এন্ড ডেভেলপমেন্ট',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },

            ],
        },
        {
            name: 'কার্যক্রম',
            link: '#',
            bg_color: '#84154D',
            color: '#fff',
            subMenu: [
                {
                    name: 'জননিরাপত্তা ও শৃংখলা',
                    link: '#',
                    bg_color: '#84154D',
                    color: '#fff',
                    subMenu: [
                        {
                            name: 'টহল',
                            link: '#',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'কেপিআই',
                            link: '#',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'সভা সমাবেশ',
                            link: '#',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'ভিআইপি',
                            link: '#',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'চেকপোস্ট',
                            link: '#',
                            bg_color: '#fff',
                            color: '#000',
                        },
                    ],
                },
                {
                    name: 'অপরাধ তদন্ত',
                    link: '#',
                    bg_color: '#84154D',
                    color: '#fff',
                    subMenu: [
                        {
                            name: 'মামলা কার্যক্রম',
                            link: '#',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'জিডি কার্যক্রম',
                            link: '#',
                            bg_color: '#fff',
                            color: '#000',
                        },
                    ],
                },
                {
                    name: 'কমিউনিটি পুলিশিং',
                    link: '#',
                    bg_color: '#84154D',
                    color: '#fff',
                    subMenu: [
                        {
                            name: 'ওপেন হাউজ ডে',
                            link: '#',
                            bg_color: '#fff',
                            color: '#000',
                        },
                        {
                            name: 'মতবিনিময় সভা',
                            link: '#',
                            bg_color: '#fff',
                            color: '#000',
                        },
                    ],
                },
                {
                    name: 'ট্রাফিক ব্যবস্থাপনা',
                    link: '#',
                    bg_color: '#84154D',
                    color: '#fff',
                },
            ],
        },
        {
            name: 'সেবা',
            link: '#',
            bg_color: '#84154D',
            color: '#fff',
            subMenu: [
                {
                    name: 'পুলিশ ক্লিয়ারেন্স',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'পাসপোর্ট ভেরিফিকেশন',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'চাকুরির ভেরিফিকেশন',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'অর্থ পরিবহনে সহায়তা',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'অসনাক্তকৃত মৃতদেহ-ছবি সহ',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'হারানো ও প্রাপ্তি',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'নিখোঁজ ব্যক্তি সংক্রান্ত তথ্য–ছবি সহ',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'উইমেন্স সাপোর্ট সেন্টার',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'নারী, শিশু ও প্রতিবন্ধী ডেস্ক',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'সিটিজেন চার্টার',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
            ],
        },
        {
            name: 'অপরাধ ব্যবস্হাপনা',
            link: '#',
            bg_color: '#84154D',
            color: '#fff',
            subMenu: [
                {
                    name: 'মাসিক অপরাধ পরিসংখ্যান',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'বাৎসরিক অপরাধ পরিসংখ্যান',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'মোস্ট ওয়ান্টেড',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'সাজা প্রাপ্ত তালিকা',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'রেড নোটিশ',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
            ],
        },
        {
            name: 'উল্লেখযোগ্য অর্জন',
            link: '#',
            bg_color: '#84154D',
            color: '#fff',
            subMenu: [
                {
                    name: 'উৎঘাটিত গুরুত্বপূর্ন মামলা সমূহ',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'উদ্ধার',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'গ্রেফতার',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
            ],
        },
        {
            name: 'আত্মত্যাগ',
            link: '#',
            bg_color: '#C40A2A',
            color: '#fff',
        },
        {
            name: 'নোটিশ বোর্ড',
            link: '#',
            bg_color: '#84154D',
            color: '#fff',
            subMenu: [
                {
                    name: 'টেন্ডার',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'নোটিশ',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'নিয়োগ বিজ্ঞপ্তি',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
            ],
        },
        {
            name: 'এনওসি',
            link: '#',
            bg_color: '#C40A2A',
            color: '#fff',
        },
        {
            name: 'গ্যালারী',
            link: '#',
            bg_color: '#84154D',
            color: '#fff',
            subMenu: [
                {
                    name: 'ফটো গ্যালারী',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'ভিডিও গ্যালারী',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
            ],
        },
        {
            name: 'ফোন ডিরেক্টরি',
            link: '#',
            bg_color: '#C40A2A',
            color: '#fff',
        },
        {
            name: 'বিট পুলিশিং',
            link: '#',
            bg_color: '#84154D',
            color: '#fff',
            subMenu: [
                {
                    name: 'বিট পরিচিতি',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'বিট অফিসারগণের তথ্য',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
                {
                    name: 'অভিযোগ',
                    link: '#',
                    bg_color: '#fff',
                    color: '#000',
                },
            ],
        },
        {
            name: 'যোগাযোগ',
            link: '#',
            bg_color: '#C40A2A',
            color: '#fff',
        },
        // {
        //     name: 'প্রথম পাতা',
        //     link: '/',
        //     bg_color: '#999',
        //     color: '#fff',
        // },
        // {
        //     name: 'জেলা পুলিশ',
        //     link: '#',
        //     bg_color: '#FF6600',
        //     color: '#fff',
        //     subMenu: [
        //         {
        //             name: 'Introduction to HTML',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //             subMenu: [
        //                 {
        //                     name: 'Metadata',
        //                     link: '#',
        //                     bg_color: '#fff',
        //                     color: '#000',
        //                 },
        //                 {
        //                     name: 'Text Fundamentals',
        //                     link: '#',
        //                     bg_color: '#fff',
        //                     color: '#000',
        //                 },
        //                 {
        //                     name: 'Hyperlinks',
        //                     link: '#',
        //                     bg_color: '#fff',
        //                     color: '#000',
        //                 },
        //                 {
        //                     name: 'more',
        //                     link: '#',
        //                     bg_color: '#fff',
        //                     color: '#000',
        //                     // subMenu: [
        //                     //     {
        //                     //         name: 'and more',
        //                     //         link: '#',
        //                     //         subMenu: [
        //                     //             {
        //                     //                 name: 'and even more',
        //                     //                 link: '#',
        //                     //             },
        //                     //             // Add more sub-menus if needed
        //                     //         ],
        //                     //     },
        //                     //     {
        //                     //         name: 'and more',
        //                     //         link: '#',
        //                     //     },
        //                     // ],
        //                 },
        //             ],
        //         },
        //         {
        //             name: 'Multimedia and Embedding',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //         {
        //             name: 'HTML Tables',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //     ],
        // },
        // {
        //     name: 'প্রশাসন',
        //     link: '#',
        //     bg_color: '#84154D',
        //     color: '#fff',
        //     subMenu: [
        //         {
        //             name: 'JavaScript Objects',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //         {
        //             name: 'Asynchronous JavaScript',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //         {
        //             name: 'Client-side web APIs',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //     ],
        // },
        // {
        //     name: 'ইউনিট সমূহ',
        //     link: '#',
        //     bg_color: '#FF6600',
        //     color: '#fff',
        //     subMenu: [
        //         {
        //             name: 'Introduction to HTML',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //             subMenu: [
        //                 {
        //                     name: 'Metadata',
        //                     link: '#',
        //                     bg_color: '#fff',
        //                     color: '#000',
        //                 },
        //                 {
        //                     name: 'Text Fundamentals',
        //                     link: '#',
        //                     bg_color: '#fff',
        //                     color: '#000',
        //                 },
        //                 {
        //                     name: 'Hyperlinks',
        //                     link: '#',
        //                     bg_color: '#fff',
        //                     color: '#000',
        //                 },
        //                 {
        //                     name: 'more',
        //                     link: '#',
        //                     bg_color: '#fff',
        //                     color: '#000',
        //                     // subMenu: [
        //                     //     {
        //                     //         name: 'and more',
        //                     //         link: '#',
        //                     //         subMenu: [
        //                     //             {
        //                     //                 name: 'and even more',
        //                     //                 link: '#',
        //                     //             },
        //                     //             // Add more sub-menus if needed
        //                     //         ],
        //                     //     },
        //                     //     {
        //                     //         name: 'and more',
        //                     //         link: '#',
        //                     //     },
        //                     // ],
        //                 },
        //             ],
        //         },
        //         {
        //             name: 'Multimedia and Embedding',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //         {
        //             name: 'HTML Tables',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //     ],
        // },
        // {
        //     name: 'কার্যক্রম',
        //     link: '#',
        //     bg_color: '#FF6600',
        //     color: '#fff',
        //     subMenu: [
        //         {
        //             name: 'Introduction to HTML',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //             subMenu: [
        //                 {
        //                     name: 'Metadata',
        //                     link: '#',
        //                     bg_color: '#fff',
        //                     color: '#000',
        //                 },
        //                 {
        //                     name: 'Text Fundamentals',
        //                     link: '#',
        //                     bg_color: '#fff',
        //                     color: '#000',
        //                 },
        //                 {
        //                     name: 'Hyperlinks',
        //                     link: '#',
        //                     bg_color: '#fff',
        //                     color: '#000',
        //                 },
        //                 {
        //                     name: 'more',
        //                     link: '#',
        //                     bg_color: '#fff',
        //                     color: '#000',
        //                     // subMenu: [
        //                     //     {
        //                     //         name: 'and more',
        //                     //         link: '#',
        //                     //         subMenu: [
        //                     //             {
        //                     //                 name: 'and even more',
        //                     //                 link: '#',
        //                     //             },
        //                     //             // Add more sub-menus if needed
        //                     //         ],
        //                     //     },
        //                     //     {
        //                     //         name: 'and more',
        //                     //         link: '#',
        //                     //     },
        //                     // ],
        //                 },
        //             ],
        //         },
        //         {
        //             name: 'Multimedia and Embedding',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //         {
        //             name: 'HTML Tables',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //     ],
        // },
        // {
        //     name: 'সেবা',
        //     link: '#',
        //     bg_color: '#84154D',
        //     color: '#fff',
        //     subMenu: [
        //         {
        //             name: 'JavaScript Objects',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //         {
        //             name: 'Asynchronous JavaScript',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //         {
        //             name: 'Client-side web APIs',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //     ],
        // },
        // {
        //     name: 'অপরাধ ব্যবস্হাপনা',
        //     link: '#',
        //     bg_color: '#84154D',
        //     color: '#fff',
        //     subMenu: [
        //         {
        //             name: 'JavaScript Objects',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //         {
        //             name: 'Asynchronous JavaScript',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //         {
        //             name: 'Client-side web APIs',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //     ],
        // },
        // {
        //     name: 'উল্লেখযোগ্য অর্জন',
        //     link: '#',
        //     bg_color: '#84154D',
        //     color: '#fff',
        //     subMenu: [
        //         {
        //             name: 'JavaScript Objects',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //         {
        //             name: 'Asynchronous JavaScript',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //         {
        //             name: 'Client-side web APIs',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //     ],
        // },
        // {
        //     name: 'আত্মত্যাগ',
        //     link: '#',
        //     bg_color: '#C40A2A',
        //     color: '#fff',
        // },
        // {
        //     name: 'নোটিশ বোর্ড',
        //     link: '#',
        //     bg_color: '#84154D',
        //     color: '#fff',
        //     subMenu: [
        //         {
        //             name: 'JavaScript Objects',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //         {
        //             name: 'Asynchronous JavaScript',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //         {
        //             name: 'Client-side web APIs',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //     ],
        // },
        // {
        //     name: 'এনওসি',
        //     link: '#',
        //     bg_color: '#C40A2A',
        //     color: '#fff',
        // },
        // {
        //     name: 'গ্যালারী',
        //     link: '#',
        //     bg_color: '#84154D',
        //     color: '#fff',
        //     subMenu: [
        //         {
        //             name: 'JavaScript Objects',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //         {
        //             name: 'Asynchronous JavaScript',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //         {
        //             name: 'Client-side web APIs',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //     ],
        // },
        // {
        //     name: 'ফোন ডিরেক্টরি',
        //     link: '#',
        //     bg_color: '#098346',
        //     color: '#fff',
        // },
        // {
        //     name: 'বিট পুলিশিং',
        //     link: '#',
        //     bg_color: '#84154D',
        //     color: '#fff',
        //     subMenu: [
        //         {
        //             name: 'JavaScript Objects',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //         {
        //             name: 'Asynchronous JavaScript',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //         {
        //             name: 'Client-side web APIs',
        //             link: '#',
        //             bg_color: '#fff',
        //             color: '#000',
        //         },
        //     ],
        // },
        // {
        //     name: 'যোগাযোগ',
        //     link: '#',
        //     bg_color: '#1399BE',
        //     color: '#fff',
        // },
    ];

    const renderSubMenu = (subMenu) => {
        if (!subMenu) return null;

        return (
            <ul>
                {subMenu.map((item) => (
                    <li key={item.name}>
                        <Link to={item.link}  className="nav__link">{item.name}</Link>
                        {renderSubMenu(item.subMenu)}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="ht__nav">
            <nav className="container container-fluid">
                <ul className="row">
                    {menuItems.map((item) => (
                        <li className="col-md-auto border" key={item.name}>
                            <Link to={item.link} className="nav__link">{item.name}</Link>
                            {renderSubMenu(item.subMenu)}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default NavigationMenu;



// import React from 'react';
// import '../header/Header.css';
// import { Link } from 'react-router-dom';

// const NavigationMenu = () => {
//     const menuItems = [

//         {
//             name: 'HTML',
//             link: '#',
//             bg_color: '#FF6600',
//             color: '#fff',
//             subMenu: [
//                 {
//                     name: 'Introduction to HTML',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                     subMenu: [
//                         {
//                             name: 'Metadata',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'Text Fundamentals',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'Hyperlinks',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'more',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                             // subMenu: [
//                             //     {
//                             //         name: 'and more',
//                             //         link: '#',
//                             //         subMenu: [
//                             //             {
//                             //                 name: 'and even more',
//                             //                 link: '#',
//                             //             },
//                             //             // Add more sub-menus if needed
//                             //         ],
//                             //     },
//                             //     {
//                             //         name: 'and more',
//                             //         link: '#',
//                             //     },
//                             // ],
//                         },
//                     ],
//                 },
//                 {
//                     name: 'Multimedia and Embedding',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'HTML Tables',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//             ],
//         },
//         {
//             name: 'HTML',
//             link: '#',
//             bg_color: '#FF6600',
//             color: '#fff',
//             subMenu: [
//                 {
//                     name: 'Introduction to HTML',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                     subMenu: [
//                         {
//                             name: 'Metadata',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'Text Fundamentals',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'Hyperlinks',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'more',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                             // subMenu: [
//                             //     {
//                             //         name: 'and more',
//                             //         link: '#',
//                             //         subMenu: [
//                             //             {
//                             //                 name: 'and even more',
//                             //                 link: '#',
//                             //             },
//                             //             // Add more sub-menus if needed
//                             //         ],
//                             //     },
//                             //     {
//                             //         name: 'and more',
//                             //         link: '#',
//                             //     },
//                             // ],
//                         },
//                     ],
//                 },
//                 {
//                     name: 'Multimedia and Embedding',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'HTML Tables',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//             ],
//         },
//         {
//             name: 'CSS',
//             link: '#',
//             bg_color: '#C40A2A',
//             color: '#fff',
//         },
//         {
//             name: 'JavaScript',
//             link: '#',
//             bg_color: '#84154D',
//             color: '#fff',
//             subMenu: [
//                 {
//                     name: 'JavaScript Objects',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'Asynchronous JavaScript',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'Client',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//             ],
//         },
//         {
//             name: 'About',
//             link: '#',
//             bg_color: '#098346',
//             color: '#fff',
//         },
//     ];

//     const renderSubMenu = (subMenu) => {
//         if (!subMenu) return null;

//         return (
//             <ul>
//                 {subMenu.map((item) => (
//                     <li key={item.name}>
//                         <Link to={item.link}>{item.name}</Link>
//                         {renderSubMenu(item.subMenu)}
//                     </li>
//                 ))}
//             </ul>
//         );
//     };

//     return (
//         <div className="ht__nav">
//             <nav className="container container-fluid">
//                 <ul>
//                     {menuItems.map((item) => (
//                         <li key={item.name}>
//                             <Link to={item.link}>{item.name}</Link>
//                             {renderSubMenu(item.subMenu)}
//                         </li>
//                     ))}
//                 </ul>
//             </nav>
//         </div>
//     );
// };

// export default NavigationMenu;



// import React, { useState } from 'react';
// import './Header.css';

// const NavigationMenu = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State to track the mobile menu open/close

//   const menuItems = [
//     // Menu items...
//   ];

//   const renderSubMenu = (subMenu) => {
//     if (!subMenu) return null;

//     return (
//       <ul>
//         {subMenu.map((item) => (
//           <li key={item.name}>
//             <a href={item.link}>{item.name}</a>
//             {renderSubMenu(item.subMenu)}
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav>
//       <div className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
//         {/* Mobile menu toggle button or icon */}
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//       <ul className={`menu-items ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
//         {menuItems.map((item) => (
//           <li key={item.name}>
//             <a href={item.link}>{item.name}</a>
//             {renderSubMenu(item.subMenu)}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default NavigationMenu;











// import React, { useState } from 'react';
// import '../header/Header.css';

// const NavigationMenu = () => {
//     const menuItems = [
//         {
//             name: 'Home',
//             link: '#',
//             bg_color: '#999',
//             color: '#fff',
//         },
//         {
//             name: 'HTML',
//             link: '#',
//             bg_color: '#FF6600',
//             color: '#fff',
//             subMenu: [
//                 {
//                     name: 'Introduction to HTML',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                     subMenu: [
//                         {
//                             name: 'Metadata',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'Text Fundamentals',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'Hyperlinks',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                         },
//                         {
//                             name: 'more',
//                             link: '#',
//                             bg_color: '#fff',
//                             color: '#000',
//                             // subMenu: [
//                             //     {
//                             //         name: 'and more',
//                             //         link: '#',
//                             //         subMenu: [
//                             //             {
//                             //                 name: 'and even more',
//                             //                 link: '#',
//                             //             },
//                             //             // Add more sub-menus if needed
//                             //         ],
//                             //     },
//                             //     {
//                             //         name: 'and more',
//                             //         link: '#',
//                             //     },
//                             // ],
//                         },
//                     ],
//                 },
//                 {
//                     name: 'Multimedia and Embedding',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'HTML Tables',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//             ],
//         },
//         {
//             name: 'CSS',
//             link: '#',
//             bg_color: '#C40A2A',
//             color: '#fff',
//         },
//         {
//             name: 'JavaScript',
//             link: '#',
//             bg_color: '#84154D',
//             color: '#fff',
//             subMenu: [
//                 {
//                     name: 'JavaScript Objects',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'Asynchronous JavaScript',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//                 {
//                     name: 'Client-side web APIs',
//                     link: '#',
//                     bg_color: '#fff',
//                     color: '#000',
//                 },
//             ],
//         },
//         {
//             name: 'About',
//             link: '#',
//             bg_color: '#098346',
//             color: '#fff',
//         },
//         {
//             name: 'Contact',
//             link: '#',
//             bg_color: '#1399BE',
//             color: '#fff',
//         },
//         {
//             name: 'Contact',
//             link: '#',
//             bg_color: '#8768DE',
//             color: '#fff',
//         },
//         {
//             name: 'Contact',
//             link: '#',
//             bg_color: '#609513',
//             color: '#fff',
//         },
//         {
//             name: 'Contact',
//             link: '#',
//             bg_color: '#8768DE',
//             color: '#fff',
//         },
//     ];


//     const [showMenu, setShowMenu] = useState(false);

//     const handleMouseEnter = () => {
//       setShowMenu(true);
//     };
  
//     const handleMouseLeave = () => {
//       setShowMenu(false);
//     };
  
//     return (
//       <nav>
//         <ul className="d-flex justify-content-between">
//           {menuItems.map((item) => (
//             <li
//               key={item.name}
//               onMouseEnter={item.subMenu ? handleMouseEnter : null}
//               onMouseLeave={item.subMenu ? handleMouseLeave : null}
//             >
//               <a href={item.link} style={{ backgroundColor: item.bg_color, color: item.color }}>
//                 {item.name}
//               </a>
//               {item.subMenu && showMenu && (
//                 <ul>
//                   {item.subMenu.map((subItem) => (
//                     <li key={subItem.name}>
//                       <a href={subItem.link} style={{ backgroundColor: subItem.bg_color, color: subItem.color }}>
//                         {subItem.name}
//                       </a>
//                       {subItem.subMenu && (
//                         <ul>
//                           {subItem.subMenu.map((nestedItem) => (
//                             <li key={nestedItem.name}>
//                               <a href={nestedItem.link} style={{ backgroundColor: nestedItem.bg_color, color: nestedItem.color }}>
//                                 {nestedItem.name}
//                               </a>
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </nav>
//     );
//   };
  

// export default NavigationMenu;

