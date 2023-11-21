
import { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import imgUrl from '../../imgUrl';
import { useEffect } from 'react';
import axios from 'axios';


const VideoGallery = () => {
    const [selectedLink, setSelectedLink] = useState("link1");

    const [links, setLinks] = useState([]);
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
        <div className="container pt-2 mb-5">
            <div className="row g-3">
                <div className="col-md-9">
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
                </div>

                <div className="col-md-3">
                    <LeftHomePage />
                </div>
            </div>
        </div>
    );
};

export default VideoGallery;
