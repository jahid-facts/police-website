import axios from 'axios';
import moment from 'moment';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import pdf_icon from "../../assets/pdf_icon.png";
import imgUrl from '../../imgUrl';
import LeftHomePage from '../mainHomePage/LeftHomePage';


const Notice = () => {
    const [noticeBoardData, setNoticeBoardData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`notice-by-category/${id}`)
            .then(res => {
                setNoticeBoardData(res.data?.reverse())
            })
    }, [id]);

    return (
        <div className="container py-3">
            <div className="row g-3 pt-2 ">
                <div className="col-md-9">
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
                                    noticeBoardData.length > 0 && noticeBoardData.map((item, i) => {
                                        return (
                                            <tr key={i} className="tr__body">
                                                <td>{i + 1}.</td>
                                                <td>
                                                    <Link to={`/notice-board-details/${item?.notice?.id}`} className="notice__tenders__link" rel="bookmark" title={item?.notice?.title}>
                                                        {item?.notice?.title}
                                                    </Link>
                                                </td>
                                                <td className="text-center">{moment(item?.notice?.updatedAt).format("DD-MM-YYYY")}</td>
                                                <td className='text-center'>
                                                    {
                                                        item?.notice?.file &&
                                                        <a download href={`${imgUrl}/${item?.notice?.file}`} target="_blank" rel="noopener noreferrer">
                                                            <img className="img-fluid" src={pdf_icon} alt='icon' />
                                                        </a>

                                                    }

                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="col-md-3">
                    <LeftHomePage />
                </div>
            </div>
        </div>
    );
};

export default Notice;