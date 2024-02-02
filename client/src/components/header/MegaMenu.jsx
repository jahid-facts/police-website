import React from 'react';
import '../header/MegaMenu.css';
import { Link } from 'react-router-dom';
// import { MenuItems } from './MenuItems';


// const MenuItems = [
//     {
//         name: 'প্রথম পাতা',
//         link: '/',
//         bg_color: '#999',
//         color: '#fff',
//         mega_menu: false,
//     },
//     {
//         name: 'জেলা পুলিশ',
//         link: '#',
//         icon: "",
//         mega_menu: false,
//         subMenu: [
//             {
//                 name: 'ভৌগলিক পরিচিতি',
//                 link: 'geographical-familiarity',
//                 icon: "",
//             },
//             {
//                 name: 'জেলা পুলিশের ইতিহাস',
//                 link: 'history-of-district-police',
//                 icon: "",
//             },
//             {
//                 name: 'জেলার ম্যাপ',
//                 link: 'district-map',
//                 icon: "",
//             },
//             {
//                 name: 'আমাদের লক্ষ্য ও উদ্দেশ্য',
//                 link: 'our-aims-and-objectives',
//                 icon: "",
//             },
//             {
//                 name: 'সাংগঠনিক কাঠামো',
//                 link: 'organizational-structure',
//                 icon: "",
//             },
//             {
//                 name: 'এক নজরে জেলা পুলিশ',
//                 link: 'district-police-at-glance',
//                 icon: "",
//             },
//             {
//                 name: 'জেলার দর্শনীয় স্থানসমূহ',
//                 link: 'sightseeing-places-district',
//                 icon: "",
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'নাগরিক সেবা',
//                 link: 'civil-service',
//                 icon: "",
//             },
//             {
//                 name: 'ডিও সংক্রান্ত',
//                 link: 'do-regarding',
//                 icon: "",
//             },
//             {
//                 name: 'তথ্য র্কমর্কতার নাম',
//                 link: 'name-of-information-officer',
//                 icon: "",
//             },
//             {
//                 name: 'ই-সিটিজেন',
//                 link: '#',
//                 icon: "",
//                 subMenu: [
//                     {
//                         id: 1,
//                         name: 'আইন ও বিধি',
//                         link: 'laws-and-regulations',
//                         icon: "",
//                     },
//                     {
//                         id: 2,
//                         name: 'তথ্য অধিকার',
//                         link: 'right-to-information',
//                         icon: "",
//                     },
//                 ],
//                 position: "absolute",
//                 right: "8px",
//                 content: "\f0d7",
//                 float: "right",
//                 border: "none",
//                 font_family: 'FontAwesome',
//             },
//         ],
//     },
// ];


///// bangla data
const MenuItems = [
    {
        name: 'প্রথম পাতা',
        link: '/',
        bg_color: '#999',
        color: '#fff',
        mega_menu: false,
    },
    {
        name: 'জেলা পুলিশ',
        link: '#',
        bg_color: '#84154D',
        color: '#fff',
        mega_menu: true,
        submenu_width: "400px",
        submenu_transform: "translateX(0px)",
        sub_grid: "2",
        display: "grid",
        width: "100%",
        max_width: "750px",
        margin: "0 auto",
        grid_template_columns: "repeat(2, 48%)",
        grid_gap: "0px 20px",
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
        mega_menu: false,
        submenu_width: "260px",
        submenu_transform: "translateX(0px)",
        sub_grid: "2",
        display: "grid",
        width: "100%",
        max_width: "750px",
        margin: "0 auto",
        grid_template_columns: "repeat(1, 100%)",
        grid_gap: "0px 20px",
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
        mega_menu: false,
        submenu_width: "700px",
        submenu_transform: "translateX(0px)",
        sub_grid: "2",
        display: "grid",
        width: "100%",
        max_width: "750px",
        margin: "0 auto",
        grid_template_columns: "repeat(4, 31.33%)",
        grid_gap: "0px 20px",
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
                submenu_width: "215px",
                submenu_transform: "translateX(0px)",
                sub_grid: "2",
                display: "grid",
                width: "100%",
                max_width: "750px",
                margin: "0 auto",
                grid_template_columns: "repeat(2, 40%)",
                grid_gap: "0px 20px",
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
        mega_menu: false,
        submenu_width: "555px",
        submenu_transform: "translateX(0px)",
        sub_grid: "2",
        display: "grid",
        width: "100%",
        max_width: "750px",
        margin: "0 auto",
        grid_template_columns: "repeat(3, 30.33%)",
        grid_gap: "0px 20px",
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
        mega_menu: false,
        submenu_width: "235px",
        submenu_transform: "translateX(0px)",
        sub_grid: "2",
        display: "grid",
        width: "100%",
        max_width: "750px",
        margin: "0 auto",
        grid_template_columns: "repeat(1, 100%)",
        grid_gap: "0px 20px",
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
        mega_menu: false,
        submenu_width: "215px",
        submenu_transform: "translateX(0px)",
        sub_grid: "2",
        display: "grid",
        width: "100%",
        max_width: "750px",
        margin: "0 auto",
        grid_template_columns: "repeat(1, 100%)",
        grid_gap: "0px 20px",
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
        mega_menu: false,
        submenu_width: "220px",
        submenu_transform: "translateX(0px)",
        sub_grid: "2",
        display: "grid",
        width: "100%",
        max_width: "750px",
        margin: "0 auto",
        grid_template_columns: "repeat(1, 100%)",
        grid_gap: "0px 20px",
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
        mega_menu: false,
    },
    {
        name: 'নোটিশ বোর্ড',
        link: '#',
        bg_color: '#84154D',
        color: '#fff',
        mega_menu: false,
        submenu_width: "115px",
        submenu_transform: "translateX(0px)",
        sub_grid: "2",
        display: "grid",
        width: "100%",
        max_width: "750px",
        margin: "0 auto",
        grid_template_columns: "repeat(1, 100%)",
        grid_gap: "0px 20px",
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
        mega_menu: false,
    },
    {
        name: 'গ্যালারী',
        link: '#',
        bg_color: '#84154D',
        color: '#fff',
        mega_menu: false,
        submenu_width: "120px",
        submenu_transform: "translateX(-40px)",
        sub_grid: "2",
        display: "grid",
        width: "100%",
        max_width: "750px",
        margin: "0 auto",
        grid_template_columns: "repeat(1, 100%)",
        grid_gap: "0px 20px",
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
        mega_menu: false,
    },
    {
        name: 'বিট পুলিশিং',
        link: '#',
        bg_color: '#84154D',
        color: '#fff',
        mega_menu: false,
        submenu_width: "215px",
        submenu_transform: "translateX(0px)",
        sub_grid: "2",
        display: "grid",
        width: "100%",
        max_width: "750px",
        margin: "0 auto",
        grid_template_columns: "repeat(1, 100%)",
        grid_gap: "0px 20px",
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
        mega_menu: false,
    },
];
const MegaMenu = () => {
    // const [items, setItems] = useState(MenuItems);


    return (
        <div className="mega__menu__section">
            <nav className="container container-fluid">

                <ul className="row mega__menu">
                    {MenuItems.map((item, index) => (
                        <li key={index} className="col-md-auto menu-item border">
                            <Link to={item.link} className="menu__link">
                                {item.name}
                            </Link>

                            {item.subMenu && (
                                <div className="sub-menu" style={{width: item.submenu_width, transform: item.submenu_transform}}>
                                    <div 
                                    // className="row g-0" 
                                    style={{ marginTop: "0px !important",
                                    gridTemplateColumns: item.grid_template_columns,
                                    gridGap: item.grid_gap,
                                    display: item.display,
                                    width: item.width,
                                    margin: item.margin,
                                    }}>
                                        {item.subMenu.map((subItem, subIndex) => (
                                            <div 
                                            // className="col-md-3"
                                            >
                                                <Link key={subIndex} to={subItem.link} className="nav__link">
                                                    {subItem.name}
                                                </Link>
                                                <ul className="row list-unstyled">
                                                    {subItem.subMenu !== undefined && subItem.subMenu.map((subSubItem, subSubIndex) => (
                                                        <li key={subSubIndex} className="col-md-12"><Link to={subSubItem.link} className="nav__link">{subSubItem.name}</Link></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default MegaMenu;


// //// backup
// import React from 'react';
// import '../header/MegaMenu.css';
// import { Link } from 'react-router-dom';
// // import { MenuItems } from './MenuItems';


// const MenuItems = [
//     {
//         name: 'প্রথম পাতা',
//         link: '/',
//         bg_color: '#999',
//         color: '#fff',
//         mega_menu: false,
//     },
//     {
//         name: 'জেলা পুলিশ',
//         link: '#',
//         icon: "",
//         mega_menu: false,
//         subMenu: [
//             {
//                 name: 'ভৌগলিক পরিচিতি',
//                 link: 'geographical-familiarity',
//                 icon: "",
//             },
//             {
//                 name: 'জেলা পুলিশের ইতিহাস',
//                 link: 'history-of-district-police',
//                 icon: "",
//             },
//             {
//                 name: 'জেলার ম্যাপ',
//                 link: 'district-map',
//                 icon: "",
//             },
//             {
//                 name: 'আমাদের লক্ষ্য ও উদ্দেশ্য',
//                 link: 'our-aims-and-objectives',
//                 icon: "",
//             },
//             {
//                 name: 'সাংগঠনিক কাঠামো',
//                 link: 'organizational-structure',
//                 icon: "",
//             },
//             {
//                 name: 'এক নজরে জেলা পুলিশ',
//                 link: 'district-police-at-glance',
//                 icon: "",
//             },
//             {
//                 name: 'জেলার দর্শনীয় স্থানসমূহ',
//                 link: 'sightseeing-places-district',
//                 icon: "",
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'নাগরিক সেবা',
//                 link: 'civil-service',
//                 icon: "",
//             },
//             {
//                 name: 'ডিও সংক্রান্ত',
//                 link: 'do-regarding',
//                 icon: "",
//             },
//             {
//                 name: 'তথ্য র্কমর্কতার নাম',
//                 link: 'name-of-information-officer',
//                 icon: "",
//             },
//             {
//                 name: 'ই-সিটিজেন',
//                 link: '#',
//                 icon: "",
//                 subMenu: [
//                     {
//                         id: 1,
//                         name: 'আইন ও বিধি',
//                         link: 'laws-and-regulations',
//                         icon: "",
//                     },
//                     {
//                         id: 2,
//                         name: 'তথ্য অধিকার',
//                         link: 'right-to-information',
//                         icon: "",
//                     },
//                 ],
//                 position: "absolute",
//                 right: "8px",
//                 content: "\f0d7",
//                 float: "right",
//                 border: "none",
//                 font_family: 'FontAwesome',
//             },
//         ],
//     },
// ];


// ///// bangla data
// const MenuItems = [
//     {
//         name: 'প্রথম পাতা',
//         link: '/',
//         bg_color: '#999',
//         color: '#fff',
//         mega_menu: false,
//     },
//     {
//         name: 'জেলা পুলিশ',
//         link: '#',
//         bg_color: '#84154D',
//         color: '#fff',
//         mega_menu: true,
//         submenu_width: "700px",
//         subMenu: [
//             {
//                 name: 'ভৌগলিক পরিচিতি',
//                 link: 'geographical-familiarity',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'জেলা পুলিশের ইতিহাস',
//                 link: 'history-of-district-police',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'জেলার ম্যাপ',
//                 link: 'district-map',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'আমাদের লক্ষ্য ও উদ্দেশ্য',
//                 link: 'our-aims-and-objectives',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'সাংগঠনিক কাঠামো',
//                 link: 'organizational-structure',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'এক নজরে জেলা পুলিশ',
//                 link: 'district-police-at-glance',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'জেলার দর্শনীয় স্থানসমূহ',
//                 link: 'sightseeing-places-district',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'নাগরিক সেবা',
//                 link: 'civil-service',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'ই-সিটিজেন',
//                 link: '#',
//                 bg_color: '#84154D',
//                 color: '#fff',
//                 subMenu: [
//                     {
//                         name: 'আইন ও বিধি',
//                         link: 'laws-and-regulations',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'তথ্য অধিকার',
//                         link: 'right-to-information',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                 ],
//             },
//             {
//                 name: 'ডিও সংক্রান্ত',
//                 link: 'do-regarding',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'তথ্য র্কমর্কতার নাম',
//                 link: 'name-of-information-officer',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//         ],
//     },
//     {
//         name: 'প্রশাসন',
//         link: '#',
//         bg_color: '#84154D',
//         color: '#fff',
//         mega_menu: false,
//         submenu_width: "710px",
//         subMenu: [
//             {
//                 name: 'পুলিশ সুপার',
//                 link: 'dig-details/2',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'পুলিশ সুপারের বার্তা',
//                 link: 'sp-message',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'পুলিশ সুপার দায়িত্ব ও কর্তব্য',
//                 link: 'sp-duties-and-res',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'সাবেক পুলিশ সুপার',
//                 link: 'former-of-cheif-sp',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'অতিরিক্ত পুলিশ সুপার (প্রশাসন ও অর্থ)',
//                 link: 'additional-sp-addministration',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'অতিরিক্ত পুলিশ সুপার ( ক্রাইম অ্যান্ড অপস্ )',
//                 link: 'additional-sp-crime',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'অতিরিক্ত পুলিশ সুপার (ডিএসবি)',
//                 link: 'additional-sp-dop',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'কর্মকর্তাগণ',
//                 link: 'officers',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'কর্মচারীবৃন্দ',
//                 link: 'employees',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//         ],
//     },
//     {
//         name: 'ইউনিট সমূহ',
//         link: '#',
//         bg_color: '#84154D',
//         color: '#fff',
//         mega_menu: false,
//         submenu_width: "700px",
//         subMenu: [
//             {
//                 name: 'সার্কেল অফিস',
//                 link: '#',
//                 bg_color: '#84154D',
//                 color: '#fff',
//                 subMenu: [
//                     {
//                         name: 'কিশোরগঞ্জ সদর সার্কেল',
//                         link: 'kishoreganj-sadar-circle',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'করিমগঞ্জ সার্কেল',
//                         link: 'karimgonj-circle',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'অষ্টগ্রাম সার্কেল',
//                         link: 'ostagram-circle',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'হোসেনপুর সার্কেল',
//                         link: 'hossainpur-circle',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'বাজিতপুর সার্কেল',
//                         link: 'bajitpur-circle',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'ভৈরব সার্কেল',
//                         link: 'bhairav-circle',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                 ],
//             },
//             {
//                 name: 'থানা',
//                 link: '#',
//                 bg_color: '#84154D',
//                 color: '#fff',
//                 subMenu: [
//                     {
//                         name: 'কিশোরগঞ্জ-সদর-থানা',
//                         link: 'thana/1',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'করিমগঞ্জ থানা',
//                         link: 'thana/2',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'তাড়াইল থানা',
//                         link: '#',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'অষ্টগ্রাম থানা',
//                         link: '#',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'ইটনা থানা',
//                         link: '#',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'মিঠামইন থানা',
//                         link: '#',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'নিকলী থানা',
//                         link: '#',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'পাকুন্দিয়া থানা',
//                         link: '#',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'হোসেনপুর থানা',
//                         link: '#',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'কটিয়াদী মডেল থানা',
//                         link: '#',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'বাজিতপুর থানা',
//                         link: '#',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'কুলিয়ারচর থানা',
//                         link: '#',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'ভৈরব থানা',
//                         link: '#',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                 ],
//             },
//             {
//                 name: 'জেলা বিশেষ শাখা (ডিএসবি)',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'জেলা গোয়েন্দা শাখা (ডিবি)',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'সদর কোর্ট',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'পুলিশ লাইন্স',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'ট্রাফিক বিভাগ',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'তদন্ত কেন্দ্র',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'ফাঁড়ি',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'ক্যাম্প',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'ক্রাইম শাখা',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'প্রসিকিউশন',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'ইন্টেলিজেন্স',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'স্টেট এন্ড ডেভেলপমেন্ট',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },

//         ],
//     },
//     {
//         name: 'কার্যক্রম',
//         link: '#',
//         bg_color: '#84154D',
//         color: '#fff',
//         mega_menu: false,
//         submenu_width: "700px",
//         subMenu: [
//             {
//                 name: 'জননিরাপত্তা ও শৃংখলা',
//                 link: '#',
//                 bg_color: '#84154D',
//                 color: '#fff',
//                 subMenu: [
//                     {
//                         name: 'টহল',
//                         link: '#',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'কেপিআই',
//                         link: '#',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'সভা সমাবেশ',
//                         link: '#',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'ভিআইপি',
//                         link: '#',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'চেকপোস্ট',
//                         link: '#',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                 ],
//             },
//             {
//                 name: 'অপরাধ তদন্ত',
//                 link: '#',
//                 bg_color: '#84154D',
//                 color: '#fff',
//                 subMenu: [
//                     {
//                         name: 'মামলা কার্যক্রম',
//                         link: '#',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'জিডি কার্যক্রম',
//                         link: '#',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                 ],
//             },
//             {
//                 name: 'কমিউনিটি পুলিশিং',
//                 link: '#',
//                 bg_color: '#84154D',
//                 color: '#fff',
//                 subMenu: [
//                     {
//                         name: 'ওপেন হাউজ ডে',
//                         link: '#',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                     {
//                         name: 'মতবিনিময় সভা',
//                         link: '#',
//                         bg_color: '#fff',
//                         color: '#000',
//                     },
//                 ],
//             },
//             {
//                 name: 'ট্রাফিক ব্যবস্থাপনা',
//                 link: '#',
//                 bg_color: '#84154D',
//                 color: '#fff',
//             },
//         ],
//     },
//     {
//         name: 'সেবা',
//         link: '#',
//         bg_color: '#84154D',
//         color: '#fff',
//         mega_menu: false,
//         submenu_width: "760px",
//         submenu_transform: "translateX(-90px)",
//         subMenu: [
//             {
//                 name: 'পুলিশ ক্লিয়ারেন্স',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'পাসপোর্ট ভেরিফিকেশন',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'চাকুরির ভেরিফিকেশন',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'অর্থ পরিবহনে সহায়তা',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'অসনাক্তকৃত মৃতদেহ-ছবি সহ',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'হারানো ও প্রাপ্তি',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'নিখোঁজ ব্যক্তি সংক্রান্ত তথ্য–ছবি সহ',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'উইমেন্স সাপোর্ট সেন্টার',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'নারী, শিশু ও প্রতিবন্ধী ডেস্ক',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'সিটিজেন চার্টার',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//         ],
//     },
//     {
//         name: 'অপরাধ ব্যবস্হাপনা',
//         link: '#',
//         bg_color: '#84154D',
//         color: '#fff',
//         mega_menu: false,
//         submenu_width: "760px",
//         submenu_transform: "translateX(-140px)",
//         subMenu: [
//             {
//                 name: 'মাসিক অপরাধ পরিসংখ্যান',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'বাৎসরিক অপরাধ পরিসংখ্যান',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'মোস্ট ওয়ান্টেড',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'সাজা প্রাপ্ত তালিকা',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'রেড নোটিশ',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//         ],
//     },
//     {
//         name: 'উল্লেখযোগ্য অর্জন',
//         link: '#',
//         bg_color: '#84154D',
//         color: '#fff',
//         mega_menu: false,
//         submenu_width: "300px",
//         // submenu_transform: "translateX(-190px)",
//         subMenu: [
//             {
//                 name: 'উৎঘাটিত গুরুত্বপূর্ন মামলা সমূহ',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'উদ্ধার',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'গ্রেফতার',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//         ],
//     },
//     {
//         name: 'আত্মত্যাগ',
//         link: '#',
//         bg_color: '#C40A2A',
//         color: '#fff',
//         mega_menu: false,
//     },
//     {
//         name: 'নোটিশ বোর্ড',
//         link: '#',
//         bg_color: '#84154D',
//         color: '#fff',
//         mega_menu: false,
//         subMenu: [
//             {
//                 name: 'টেন্ডার',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'নোটিশ',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'নিয়োগ বিজ্ঞপ্তি',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//         ],
//     },
//     {
//         name: 'এনওসি',
//         link: '#',
//         bg_color: '#C40A2A',
//         color: '#fff',
//         mega_menu: false,
//     },
//     {
//         name: 'গ্যালারী',
//         link: '#',
//         bg_color: '#84154D',
//         color: '#fff',
//         mega_menu: false,
//         subMenu: [
//             {
//                 name: 'ফটো গ্যালারী',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'ভিডিও গ্যালারী',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//         ],
//     },
//     {
//         name: 'ফোন ডিরেক্টরি',
//         link: '#',
//         bg_color: '#C40A2A',
//         color: '#fff',
//         mega_menu: false,
//     },
//     {
//         name: 'বিট পুলিশিং',
//         link: '#',
//         bg_color: '#84154D',
//         color: '#fff',
//         mega_menu: false,
//         subMenu: [
//             {
//                 name: 'বিট পরিচিতি',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'বিট অফিসারগণের তথ্য',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//             {
//                 name: 'অভিযোগ',
//                 link: '#',
//                 bg_color: '#fff',
//                 color: '#000',
//             },
//         ],
//     },
//     {
//         name: 'যোগাযোগ',
//         link: '#',
//         bg_color: '#C40A2A',
//         color: '#fff',
//         mega_menu: false,
//     },
// ];
// const MegaMenu = () => {
//     // const [items, setItems] = useState(MenuItems);


//     return (
//         <div className="mega__menu__section">
//             <nav className="container container-fluid">

//                 <ul className="row mega__menu">
//                     {MenuItems.map((item, index) => (
//                         <li key={index} className="col-md-auto menu-item border">
//                             <Link to={item.link} className="menu__link">
//                                 {item.name}
//                             </Link>

//                             {item.subMenu && (
//                                 <div className="sub-menu" style={{width: item.submenu_width, transform: item.submenu_transform}}>
//                                     <div className="row g-0" style={{ marginTop: "0px !important" }}>
//                                         {item.subMenu.map((subItem, subIndex) => (
//                                             <div className="col-md-3">
//                                                 <Link key={subIndex} to={subItem.link} className="nav__link">
//                                                     {subItem.name}
//                                                 </Link>
//                                                 <ul className="row list-unstyled">
//                                                     {subItem.subMenu !== undefined && subItem.subMenu.map((subSubItem, subSubIndex) => (
//                                                         <li key={subSubIndex} className="col-md-12"><Link to={subSubItem.link} className="nav__link">{subSubItem.name}</Link></li>
//                                                     ))}
//                                                 </ul>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}
//                         </li>
//                     ))}
//                 </ul>
//             </nav>
//         </div>
//     );
// };

// export default MegaMenu;