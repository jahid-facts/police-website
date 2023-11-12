

import React from 'react';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div>
      <iframe
        title="Video Player"
        width="560"
        height="315"
        className="video__player__iframe"
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;


// import React from 'react';

// const VideoPlayer = ({ videoUrl }) => {
//   return (
//     <div className="video-player">
//       <video controls>
//         <source src={videoUrl} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default VideoPlayer;


///// right code
// import React from 'react';
// const VideoPlayer = () => {
//     //   const videoUrl = 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID';
//     const videoUrl = 'https://www.youtube.com/watch?v=6rMVDD-VWkU';

//     const getYouTubeVideoId = (url) => {
//         const match = url.match(/(?:\?v=|\/embed\/|\.be\/)([\w-]+)/);
//         return match ? match[1] : null;
//     };

//     const videoId = getYouTubeVideoId(videoUrl);

//     return (
//         <div className="video__player">
//             {videoId ? (
//                 <iframe
//                     title="YouTube Video Player"
//                     //   width="560"
//                     //   height="315"
//                     className="video__player__iframe"
//                     src={`https://www.youtube.com/embed/${videoId}`}
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                 ></iframe>
//             ) : (
//                 <p>Invalid YouTube video URL</p>
//             )}
//         </div>
//     );
// };

// export default VideoPlayer;




// export default function VideoPlayer() {
//     const convertLinkToEmbedId = () => {
//           const link = "https://www.youtube.com/watch?v=6rMVDD-VWkU";
//         const urlParams = new URLSearchParams(new URL(link).search);
//         return urlParams.get("v");
//     };

//     return (
//         <div>
//             <iframe
//                 width='560'
//                 height='315'
//                 src={`https://www.youtube.com/embed/${convertLinkToEmbedId()}`}
//                 title='YouTube video player'
//                 frameBorder='0'
//                 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;'
//                 allowFullScreen
//             ></iframe>
//         </div>
//     );
// }
