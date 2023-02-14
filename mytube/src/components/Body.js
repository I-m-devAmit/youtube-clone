import React from 'react';
import Sidebar from "./Sidebar";
import { Outlet } from 'react-router-dom';
// import MainContainer from "./MainContainer";
// import WatchPage from './WatchPage';

const Body = () => {
  return (
    <div className='flex'>
      <Sidebar />
      {/* Outlet will do Dynamix routing for below components */}
      <Outlet />
      {/* <MainContainer />
      <WatchPage/> */}
    </div>
  );
}

export default Body