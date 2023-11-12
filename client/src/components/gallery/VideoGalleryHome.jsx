import  { useEffect, useState } from 'react';
import VideoPlayer from './VideoPlayer';
import axios from 'axios';
import imgUrl from '../../imgUrl';


const VideoGalleryHome = () => {
    const [selectedLink, setSelectedLink] = useState("link1");
const [links,setLinks] = useState([]);
    // const links = [
    //     { id: "link1", image: bpa_img, title: "বাংলাদেশ পুলিশ একাডেমী", content: "https://www.youtube.com/watch?v=6rMVDD-VWkU&t=1s" },
    //     { id: "link2", image: igp_img, title: "আইজিপি হলেন বেনজীর আহমেদ", content: "https://www.youtube.com/watch?v=z8YjKYFE9P8" },
    //     // { id: "link3", title: "Link 3", content: "video3" },
    // ];
useEffect(()=>{
    axios.get('video-gallery')
    .then(res=>{
        setLinks(res.data);
        setSelectedLink(res.data[0].id);
    })
    .catch(err=>{
        console.log(err);
    })
},[]);
    const handleLinkClick = (linkId) => {
        setSelectedLink(linkId);
    };

    const renderContent = () => {
        const selectedContent = links.find((link) => link.id === selectedLink);
        if (selectedContent) {
            let videoUrl = selectedContent.content;
            if (videoUrl.includes('youtube.com/watch')) {
                const videoId = videoUrl.split('v=')[1].split('&')[0];
                videoUrl = `https://www.youtube.com/embed/${videoId}`;
            }
            return <VideoPlayer videoUrl={videoUrl} />;
        }
        return null;
    };

    return (
        <>
            <h6 className="rc__hd__txt">ভিডিও গ্যালারি</h6>
            <div className="row g-2">
                <div className="col-9">
                    {renderContent()}
                </div>
                <div className="col-3 ps-md-3">
                    <div className="vedio__gallery">
                        <div className="setup-card">
                            <div className="scroll-sidebar g-doc-scroll">
                                <div className="video__gallery__sidebar">
                                    <ul className="list-unstyled">
                                        {links.map((link) => (
                                            <li key={link.id} className="mb-2">
                                                <div
                                                    className={selectedLink === link.id ? "active" : ""}
                                                    onClick={() => handleLinkClick(link.id)}
                                                >
                                                    <div className='video__gallery__img'>
                                                        <img src={`${imgUrl}/${link.image}`} alt="image" className="img__size" loading='lazy' />
                                                    </div>
                                                    <p className="vg__sidebar__txt">{link.title}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoGalleryHome;



// import VideoPlayer from './VideoPlayer';

// const VideoGalleryHome = () => {
//   const [selectedLink, setSelectedLink] = useState("link1");

//   const links = [
//     { id: "link1", title: "Link 1", content: "https://www.youtube.com/watch?v=6rMVDD-VWkU&t=1s" },
//     { id: "link2", title: "Link 2", content: "https://www.youtube.com/watch?v=z8YjKYFE9P8" },
//     { id: "link3", title: "Link 3", content: "video3" },
//   ];

//   const handleLinkClick = (linkId) => {
//     setSelectedLink(linkId);
//   };

//   const renderContent = () => {
//     const selectedContent = links.find((link) => link.id === selectedLink);
//     if (selectedContent) {
//       const videoUrl = `https://www.youtube.com/embed/${selectedContent.content}`;
//       return <VideoPlayer videoUrl={videoUrl} />;
//     }
//     return null;
//   };

//   return (
//     <>
//       <h6 className="rc__hd__txt">ভিডিও গ্যালারি</h6>
//       <div className="d-flex">
//         <div className="container">
//           {renderContent()}
//         </div>
//         <div className="partner__sidebar">
//           <ul className="list-unstyled">
//             {links.map((link) => (
//               <li key={link.id}>
//                 <span
//                   className={selectedLink === link.id ? "active" : ""}
//                   onClick={() => handleLinkClick(link.id)}
//                 >
//                   {link.title}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default VideoGalleryHome;


// import React, { useState } from 'react';
// import VideoPlayer from './VideoPlayer';

// const VideoGalleryHome = () => {
//   const [selectedLink, setSelectedLink] = useState("link1");

//   const links = [
//     { id: "link1", title: "Link 1", content: "https://www.youtube.com/embed/video1" },
//     { id: "link2", title: "Link 2", content: "https://www.youtube.com/embed/video2" },
//     { id: "link3", title: "Link 3", content: "https://www.youtube.com/embed/video3" },
//   ];

//   const handleLinkClick = (linkId) => {
//     setSelectedLink(linkId);
//   };

//   const renderContent = () => {
//     const selectedContent = links.find((link) => link.id === selectedLink);
//     if (selectedContent) {
//       return <VideoPlayer videoUrl={selectedContent.content} />;
//     }
//     return null;
//   };

//   return (
//     <>
//       <h6 className="rc__hd__txt">ভিডিও গ্যালারি</h6>
//       <div className="d-flex">
//         <div className="container">
//           {renderContent()}
//         </div>
//         <div className="partner__sidebar">
//           <ul className="list-unstyled">
//             {links.map((link) => (
//               <li key={link.id}>
//                 <span
//                   className={selectedLink === link.id ? "active" : ""}
//                   onClick={() => handleLinkClick(link.id)}
//                 >
//                   {link.title}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default VideoGalleryHome;



// import React, { useState } from 'react';
// import VideoPlayer from './VideoPlayer';

// const VideoGalleryHome = () => {
//     const [selectedLink, setSelectedLink] = useState("link1");

//     const links = [
//         { id: "link1", title: "Link 1", content: <div> <VideoPlayer /></div> },
//         { id: "link2", title: "Link 2", content: <div>Content for Link 2</div> },
//         { id: "link3", title: "Link 3", content: <div>Content for Link 3</div> },
//     ];

//     const handleLinkClick = (linkId) => {
//         setSelectedLink(linkId);
//     };

//     const renderContent = () => {
//         const selectedContent = links.find((link) => link.id === selectedLink);
//         return selectedContent ? selectedContent.content : null;
//     };

//     return (
//         <>
//             <h6 className="rc__hd__txt">ভিডিও গ্যালারি</h6>
//             <div className="d-flex">
//                 <div className="container">
//                     {renderContent()}
//                 </div>
//                 <div className="partner__sidebar">
//                     <ul className="list-unstyled">
//                         {links.map((link) => (
//                             <li key={link.id}>
//                                 <span
//                                     className={selectedLink === link.id ? "active" : ""}
//                                     onClick={() => handleLinkClick(link.id)}
//                                 >
//                                     {link.title}
//                                 </span>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default VideoGalleryHome;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import bpa_video from '../../assets/bpa_video.mp4';
// import igp_video from '../../assets/igp_video.mp4';
// import YoutubeEmbed from './YoutubeEmbed';
// import VideoPlayer from './VideoPlayer';

// const VideoGalleryHome = () => {
//   const [selectedLink, setSelectedLink] = useState("div1");

//   const links = [
//     { id: "div1", title: "Link 1" },
//     { id: "div2", title: "Link 2" },
//     { id: "div3", title: "Link 3" },
//   ];

//   const handleLinkClick = (linkId) => {
//     setSelectedLink(linkId);
//   };

//   return (
//     <>
//       <h6 className="rc__hd__txt">ভিডিও গ্যালারি</h6>
//       <div className="d-flex">
//         <div className="container">
//           {selectedLink === 'div1' && (
//             <div>
//               {/* <video className="banner__video" autoPlay muted loop>
//                 <source src={bpa_video} type="video/mp4" />
//               </video> */}
//               {/* <YoutubeEmbed embedId="rokGy0huYEA" /> */}
//               <VideoPlayer />
//             </div>
//           )}
//           {selectedLink === 'div2' && (
//             <div>
//               <video className="banner__video" autoPlay muted loop>
//                 <source src={igp_video} type="video/mp4" />
//               </video>
//             </div>
//           )}
//           {selectedLink === 'div3' && <div>Content for div 3</div>}
//         </div>
//         <div className="partner__sidebar">
//           <ul className="list-unstyled">
//             {links.map((link) => (
//               <li key={link.id}>
//                 <span
//                   className={`btn__link__par ${selectedLink === link.id ? "active" : ""}`}
//                   onClick={() => handleLinkClick(link.id)}
//                 >
//                   {link.title}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default VideoGalleryHome;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import bpa_video from '../../assets/bpa_video.mp4';
// import igp_video from '../../assets/igp_video.mp4';
// import YoutubeEmbed from './YoutubeEmbed';
// import VideoPlayer from './VideoPlayer';

// const VideoGalleryHome = () => {

//     const [selectedLink, setSelectedLink] = useState("div1");

//     function handleLinkClick(link) {
//         setSelectedLink(link);
//     };

   
//     return (
//         <>
//             <h6 className="rc__hd__txt">ভিডিও গ্যালারি</h6>
//             <div className="d-flex">
//                 <div className="container">
//                     {selectedLink === 'div1' && <div>
//                         {/* <video className="banner__video" autoPlay muted loop>
//                             <source src={bpa_video} type="video/mp4" />
//                         </video> */}
//                         {/* <YoutubeEmbed embedId="rokGy0huYEA" /> */}
//                         <VideoPlayer />
                
//                     </div>}
//                     {selectedLink === 'div2' && <div>
//                         <video className="banner__video" autoPlay muted loop>
//                             <source src={igp_video} type="video/mp4" />
//                         </video>
//                     </div>}
//                     {selectedLink === 'div3' && <div>Content for div 3</div>}
//                 </div>
//                 <div className="partner__sidebar">
//                     <ul className="list-unstyled">
//                         <li>
//                             <span className="btn__link__par" onClick={() => handleLinkClick("div1")}>Link 1</span>
//                         </li>
//                         <li>
//                             <span className="btn__link__par" onClick={() => handleLinkClick("div2")}>Link 2</span>
//                         </li>
//                         <li>
//                             <span className="btn__link__par" onClick={() => handleLinkClick("div3")}>Link 3</span>
//                         </li>
//                     </ul>
//                 </div>

//             </div>
//         </>
//     );
// }

// export default VideoGalleryHome;

///// daynamically create links
// import React, { useState } from 'react';
// const VideoGalleryHome = () => {
//   const [selectedLink, setSelectedLink] = useState("link1");

//   const links = [
//     { id: "link1", title: "Link 1", content: <div>Content for Link 1</div> },
//     { id: "link2", title: "Link 2", content: <div>Content for Link 2</div> },
//     { id: "link3", title: "Link 3", content: <div>Content for Link 3</div> },
//   ];

//   const handleLinkClick = (linkId) => {
//     setSelectedLink(linkId);
//   };

//   const renderContent = () => {
//     const selectedContent = links.find((link) => link.id === selectedLink);
//     return selectedContent ? selectedContent.content : null;
//   };

//   return (
//     <>
//       <h6>Video Gallery</h6>
//       <div>
//         <div>
//           {renderContent()}
//         </div>
//         <div>
//           <ul>
//             {links.map((link) => (
//               <li key={link.id}>
//                 <span
//                   className={selectedLink === link.id ? "active" : ""}
//                   onClick={() => handleLinkClick(link.id)}
//                 >
//                   {link.title}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default VideoGalleryHome;