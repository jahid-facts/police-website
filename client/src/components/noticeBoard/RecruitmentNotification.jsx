import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RecruitmentNotification = () => {
    const [rnData, setRnData] = useState([
        {
            id: 1,
            title_name: "পুলিশ কস্টেবল পদে নিয়োগ বিজ্ঞপ্তি।",
            date_of_publication: "December 06, 2022",
            dwonload_lnik: "",
        },
        {
            id: 2,
            title_name: "test20001",
            date_of_publication: "February 04, 2021",
            dwonload_lnik: "",
        },
        // {
        //     id: 1,
        //     title_name: "বহির্গমণ ছুটি",
        //     date_of_publication: "November 02, 2022",
        //     dwonload_lnik: "",
        // },
        // {
        //     id: 1,
        //     title_name: "বাংলাদেশ পুলিশের ক্যাডেট সাব ইন্সপেক্টর পদে নিয়োগ/২০২১ এর কার্যক্রম",
        //     date_of_publication: "December 05, 2021",
        //     dwonload_lnik: "",
        // },
        // {
        //     id: 1,
        //     title_name: "কনস্টেবল পদে নিয়োগ বিজ্ঞপ্তি (সংশোধিত)",
        //     date_of_publication: "November 12, 2021",
        //     dwonload_lnik: "",
        // },
        // {
        //     id: 1,
        //     title_name: "প্রবেশপত্র / প্রতিপাদন পত্র",
        //     date_of_publication: "August 22, 2020",
        //     dwonload_lnik: "",
        // },
        // {
        //     id: 1,
        //     title_name: "প্রতিপাদন পত্র",
        //     date_of_publication: "August 21, 2020",
        //     dwonload_lnik: "",
        // },
        // {
        //     id: 1,
        //     title_name: "চাকরির আবেদন ফর্ম",
        //     date_of_publication: "August 21, 2020",
        //     dwonload_lnik: "",
        // },
        // {
        //     id: 1,
        //     title_name: "জেলা পুলিশ কিশোরগঞ্জের টেন্ডার নোটিশ 01/03/2020",
        //     date_of_publication: "August 21, 2020",
        //     dwonload_lnik: "",
        // },
    ]);




    return (
        <div className="container py-3">
            <div className="row g-3 pt-2 ">
                <div className="col-12">
                    <div className="d-flex justify-content-start">
                        <table className="table table-bordered notice__tenders__table">
                            <thead>
                                <tr>
                                    <th className="th__sr">Sr. No.</th>
                                    <th>Title</th>
                                    <th>Date of Publication</th>
                                    <th>Download</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    rnData.length > 0 && rnData.map((item, i) => {
                                        return (
                                            <tr key={i} className="tr__body">
                                                <td>{i}.</td>
                                                <td>
                                                    <Link to={`/notice-board-details/${item.id}`} className="notice__tenders__link"  rel="bookmark" title={item.title}>
                                                        {item.title_name}
                                                    </Link>
                                                </td>
                                                <td className="text-center">{item.date_of_publication}</td>
                                                <td>{item.dwonload_lnik}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RecruitmentNotification;