import React, { useEffect } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';

const VideoContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);

  return <div>VideoContainer</div>;

  async function getVideos() {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const response = await data.json();
    console.log("Response: ", response);
  };

};

export default VideoContainer;