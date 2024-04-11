import { Outlet } from 'react-router';
import SideBar from '../components/SideBar';
import NavBar from '../components/navbar/NavBar';

const SharedLayout = () => {
  return (
    <div className="flex w-screen h-screen items-start overflow-hidden">
      <SideBar />
      <div className='w-full px-10'>
        {' '}
        <NavBar />
        <div className='overflow-hidden'>
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;
