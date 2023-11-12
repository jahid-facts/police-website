import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import imgUrl from '../../imgUrl';
import pdf_icon from "../../assets/pdf_icon.png";

const NoticeBoardTenders = () => {
    const [noticeTendersData, setNoticeTendersData] = useState([]);
    useEffect(() => {
        axios.get(`notice`)
            .then(res => setNoticeTendersData(res.data))
    }, [])



    return (
        <div className="container py-3">
            <div className="row g-3 pt-2 ">
                <div className="col-12">
                    <div className="table-responsive d-flex justify-content-start">
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
                                    noticeTendersData.length > 0 && noticeTendersData.map((item, i) => {
                                        return (
                                            <tr key={i} className="tr__body">
                                                <td>{i}.</td>
                                                <td>
                                                    <Link to={`/notice-board-details/${item?.notice?.id}`} className="notice__tenders__link" rel="bookmark" title={item?.notice?.title}>
                                                        {item?.notice?.title}
                                                    </Link>
                                                </td>
                                                <td className="text-center">{moment(item?.notice?.updatedAt).format('DD-MM-YYYY')}</td>
                                                <td>{
                                                    item?.notice?.file &&
                                                    <a download href={`${imgUrl}/${item?.notice?.file}`} target="_blank" rel="noopener noreferrer">
                                                        <img className="img-fluid" src={pdf_icon} alt='icon' />
                                                    </a>

                                                }</td>
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

export default NoticeBoardTenders;