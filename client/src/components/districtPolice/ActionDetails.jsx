import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ActionDetails = () => {
    const { id } = useParams();
    const [data,setData] = useState();
    useEffect(() => {
        axios.get(`work/${id}`)
        .then(res => {
            setData (res.data)
        })
    },[id])
    return (
        <div className="container py-3">
            <div className="row">
                <div dangerouslySetInnerHTML={{ __html: data?.content }} className="col-12 content-table">
                    
                </div>
            </div>
        </div>
    );
};

export default ActionDetails;