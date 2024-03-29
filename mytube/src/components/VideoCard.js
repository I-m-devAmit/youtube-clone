import React from 'react';

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img className="rounded-lg" alt="video" src={thumbnails.medium.url} />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle.toUpperCase()}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className='p-1 m-1 border border-red-900 shadow-lg'>
      <VideoCard info={info} />
      <div><b>Ad .</b> Entertainment</div>
    </div>
  );
};



export default VideoCard;