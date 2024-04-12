import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavLinks } from '../data/Navlinks';

const NavBar: React.FC = () => {
  const [active, setActive] = React.useState<string | null>(null);

  const setActiveBgColor = (title: string) => {
    setActive(title === active ? null : title);
  };

  return (
    <div className="grid grid-cols-[2fr,3fr] bg-base-100 py-4">
      <div className="flex-1">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <div className="mb-5 flex flex-col text-slate-500   text-base">
              {NavLinks.map((link) => (
                <div
                  key={link.title}
                  className={`py-2 mt-3 px-4 flex gap-2 hover:bg-[#716acd] hover:text-white rounded-lg cursor-pointer transition-all duration-200 group ${
                    active === link.title ? 'bg-[#716acd] text-white' : ''
                  }`}
                  onClick={() => setActiveBgColor(link.title)}>
                  <div>{React.createElement(link.icon)}</div>
                  <Link
                    to={link.path}
                    className={`active:bg-[#716acd] focus:bg-[#716acd]`}>
                    {link.title}
                  </Link>
                </div>
              ))}
            </div>
          </ul>
        </div>
        <Link
          to={'/'}
          className="btn btn-ghost text-xl">
          DashBoard
        </Link>
      </div>
      <div className="w-full flex justify-between gap-2">
        <div className="form-control relative hidden md:block lg:block">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-full pl-8"
          />
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <Search
              size={20}
              className="text-[#716acd]"
            />
          </div>
        </div>
        <div>
          <ul className="menu menu-horizontal px-1">
            <li>
              <details className='flex-col gap-4'>
                <summary>Language</summary>
                <ul className="p-2">
                  <li className="py-2">English</li>
                  <li>Other Language</li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
