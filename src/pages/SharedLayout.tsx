import { Outlet } from 'react-router';
import SideBar from '../components/navbar/SideBar';
import NavBar from '../components/navbar/NavBar';
import React from 'react';

const SharedLayout:React.FC = () => {
  return (
    <div className="flex w-full h-screen border-8 border-orange-500 items-start overflow-y-hidden ">
      <SideBar />
      <div className='w-full '>
        {' '}
        <NavBar />
        <div className=''>
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;
