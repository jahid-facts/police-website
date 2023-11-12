import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import imgUrl from '../../imgUrl';
import LeftHomePage from '../mainHomePage/LeftHomePage';


const NewsDetails = () => {

    const [noticeBoardData, setNoticeBoardData] = useState();

    const { id } = useParams();
    useEffect(() => {
        axios.get(`news/${id}`)
            .then(res => {
                setNoticeBoardData(res.data)
            })
    },[id])

    return (
        <div className="container pt-4">
            <div className="col-12">
                <h4 className="hd__txt">{noticeBoardData?.title}</h4>
                <div className="row g-3">
                    <div className="col-md-9">
                        {
                            noticeBoardData?.content &&
                            <div dangerouslySetInnerHTML={{ __html: noticeBoardData?.content }}></div>
                        }

                        {
                            noticeBoardData?.file &&
                            <>
                                {

                                    noticeBoardData?.file?.endsWith('.pdf') ?
                                        <iframe
                                            width="100%"
                                            height="600px"
                                            src={`${imgUrl}/${noticeBoardData?.file}`}

                                            frameBorder="0"
                                            style={{ objectFit: "cover" }}
                                        ></iframe>
                                        :
                                        <img className="img-fluid" src={`${imgUrl}/${noticeBoardData?.file}`} />
                                }
                            </>

                        }

                    </div>
                    <div className="col-md-3">
                        <LeftHomePage />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;


