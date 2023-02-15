import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);


  async function getVideos() {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const response = await data.json();
    setVideos(response.items);
  };

  return (
    <div className='flex flex-wrap '>
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))};
    </div>
  );

  // return (
  //   <div className='flex flex-wrap'>
  //     {videos.map((video) => (
  //       <Link key={video.id} to={"/watch?v=" + video.id}><VideoCard info={video} /></Link>))};
  //   </div>
  // );

};

export default VideoContainer;