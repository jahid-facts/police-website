import axios from 'axios';
import moment from 'moment';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import pdf_icon from "../../assets/pdf_icon.png";
import imgUrl from '../../imgUrl';
import LeftHomePage from '../mainHomePage/LeftHomePage';


const News = () => {
    const [noticeBoardData, setNoticeBoardData] = useState([]);

    useEffect(() => {
        axios.get(`news`)
            .then(res => {
                setNoticeBoardData(res.data)
            })
    }, [])

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
                                                    <Link to={`/news-details/${item.id}`} className="notice__tenders__link" rel="bookmark" title={item.title}>
                                                        {item.title}
                                                    </Link>
                                                </td>
                                                <td className="text-center">{moment(item.updatedAt).format("DD-MM-YYYY")}</td>
                                                <td className='text-center'>
                                                    {
                                                        item.file &&
                                                        <a download href={`${imgUrl}/${item.file}`} target="_blank" rel="noopener noreferrer">
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

export default News;