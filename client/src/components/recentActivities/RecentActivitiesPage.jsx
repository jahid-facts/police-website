import { useEffect, useState } from 'react';
import axios from 'axios';
import imgUrl from '../../imgUrl';
import { Link } from 'react-router-dom';
// import "./RecentActivitiesPage.css"

const RecentActivitiesPage = () => {
    const [recentActivityData, setRecentActivityData] = useState([ ])


    useEffect(() => {
        axios.get("/recent-activity").then((response) => {
            console.log(response.data);
            setRecentActivityData(response.data);
        }).catch((error) => {
            console.log(error);
        })
    },[])
    // console.log("rcData", rcData);

    return (
        <div className="container pt-4">
            <h6 className="rc__hd__txt">সাম্প্রতিক কার্যক্রম সমূহ</h6>
            <div className="row g-3">
                {
                    recentActivityData !== undefined && recentActivityData.map((item) => {
                        return (
                            <div key={item.id} className="col-md-3">
                                <Link to={`/recent-activites-details/${item.id}`} style={{ textDecoration: "none" }} >
                                    <div className="rca__card">
                                        <div className="card">
                                            <div className="card__rca__img">
                                            <img src={`${imgUrl}/${item.image}`} className="img-fluid" alt="..." loading='lazy' />
                                            </div>
                                            <div className="card-body">
                                                <p className="card__rca__desc">{item.heading}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default RecentActivitiesPage;

// RecentActivitiesPage.js

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import imgUrl from '../../imgUrl';
// import { Link } from 'react-router-dom';

// const RecentActivitiesPage = () => {
//     const [recentActivityData, setRecentActivityData] = useState([]);

//     useEffect(() => {
//         axios.get("/recent-activity")  // Add sorting and limit parameters
//             .then((response) => {
//                 setRecentActivityData(response.data);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, []);

//     return (
//         <div className="container pt-4">
//             <h6 className="rc__hd__txt">সাম্প্রতিক কার্যক্রম সমূহ</h6>
//             <div className="row g-3">
//                 {recentActivityData.map((item) => (
//                     <div key={item.id} className="col-md-3">
//                         <Link to={`/recent-activites-details/${item.id}`} style={{ textDecoration: "none" }}>
//                             <div className="rca__card">
//                                 <div className="card">
//                                     <div className="card__rca__img">
//                                         <img src={`${imgUrl}/${item.image}`} className="img-fluid" alt="..." loading='lazy' />
//                                     </div>
//                                     <div className="card-body">
//                                         <p className="card__rca__desc">{item.heading}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default RecentActivitiesPage;
