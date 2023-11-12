import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NOC_TqXXv6ye1zb3Aj9SCzkf from "../../assets/NOC_TqXXv6ye1zb3Aj9SCzkf.pdf";
import pdf_icon from "../../assets/pdf_icon.png";

const Noc = () => {
    const [nocData, setNocData] = useState([
        {
            id: 1,
            title_name: "ইন্সঃজনাব মোহাম্মাদ দাউদ এর বিভাগীয় অনাপত্তি পত্র (NOC)",
            date_of_publication: "December 06, 2022",
            dwonload_lnik: "",
        },
        {
            id: 2,
            title_name: "টিআই সৈয়দ মনিরুজ্জামান, এনওসি",
            date_of_publication: "November 24, 2022",
            dwonload_lnik: "",
        },
        {
            id: 3,
            title_name: "বহির্গমণ ছুটি",
            date_of_publication: "November 02, 2022",
            dwonload_lnik: "",
        },
        {
            id: 4,
            title_name: "এসআই/ পারভীন আক্তারের এনওসি",
            date_of_publication: "November 01, 2022",
            dwonload_lnik: "",
        },
        {
            id: 5,
            title_name: "test10001 (NOC)",
            date_of_publication: "August 12, 2020",
            dwonload_lnik: "",
        },
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
                                    nocData.length!==undefined && nocData.map((item, i) => {
                                        return (
                                            <tr key={i} className="tr__body">
                                                <td>{i}.</td>
                                                <td>
                                                    <Link to={`/notice-board-details/${item.id}`} className="notice__tenders__link" rel="bookmark" title={item.title}>
                                                        {item.title_name}
                                                    </Link>
                                                </td>
                                                <td className="text-center">{item.date_of_publication}</td>
                                                <td className="text-center" >
                                                    <a data-toggle="tooltip" title={item.title_name} target="_blank" href="https://kishoreganj.police.gov.bd/public/storage/posts/December2022/TqXXv6ye1zb3Aj9SCzkf.pdf">
                                                        <img  className="img-fluid" src={pdf_icon} />
                                                    </a>

                                                    {/* <iframe src={NOC_TqXXv6ye1zb3Aj9SCzkf} frameBorder="0"
                                                            className="ifrme__pdf" target="_blank"
                                                            style={{ objectFit: 'cover', width: "100%", height: "500px" }}
                                                        ></iframe> */}
                                                </td>
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

export default Noc;