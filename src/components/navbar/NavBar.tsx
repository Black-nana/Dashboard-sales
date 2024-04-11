import React from 'react';
import { Search } from 'lucide-react';

const NavBar: React.FC = () => {
  return (
    <div className="grid grid-cols-[2fr,3fr] bg-base-100 py-4">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">DashBoard</a>
      </div>
      <div className="w-full flex justify-between gap-2">
        <div className="form-control relative">
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
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
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
