import React, { useState } from 'react';
import { PieChart, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavLinks } from './data/Navlinks';
import logo from '../assets/dummy logo.png';
import Badge from './Badge';



const SideBar: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<boolean>(true);

  const setActiveBgColor = (title: string) => {
    setActive(title === active ? null : title);
  };

  return (
    <div
      className={`relative py-2 px-10 lg:flex hidden flex-col items-center border border-r-1 w-1/5 h-screen ${
        expanded ? 'w-1/5' : 'w-12'
      }`}>
      <div className="flex justify-center items-center gap-4">
        <img
          src={logo}
          alt="logo"
          className="w-full h-full"
        />
        <header
          className={`font-extrabold text-3xl ${
            expanded ? 'inline-block' : 'hidden'
          }`}>
          Mateen
        </header>
      </div>

    <div>
    <div className="flex gap-4 justify-center items-center mx-4 ">
        <Link to={'/dashboard'}>
        <div
          className={`w-fit font-bold flex text-2xl bg-[#716acd] py-2 px-2 -ml-2 rounded-xl text-white text-center overflow-hidden transition-all duration-200 group`}>
          <PieChart
            size={32}
            className="inline-block mr-2 text-[#f1f7fa]"
          />
          <span className={`${expanded ? 'inline-block' : 'hidden'}`}>
            Dashboard
          </span>
          {!expanded && (
            <div className="-mt-0 absolute left-full  -translate-x-3 rounded-md px-2 ml-6 bg-indigo-100 text-indigo-800 text-sm opacity-0 transition-colors group-hover:opacity-100 group-hover:translate-x-0 invisible group-hover:visible">
              <p>Dashboard</p>
            </div>
          )}
        </div>
        </Link>

        <button
          className="border-2 rounded-xl py-1 text-[#ffff] bg-[#716acd] absolute -right-4 top-12 transition-all duration-200 "
          onClick={() => setExpanded((curr) => !curr)}
          aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}>
          {expanded ? <ChevronLeft size={25} /> : <ChevronRight size={25} />}
        </button>
      </div>

      <div className="mb-5 flex flex-col text-slate-500   text-base">
        {NavLinks.map((link) => (
          <div
            key={link.title}
            className={`py-2 mt-3 px-4 flex  hover:bg-[#716acd] hover:text-white rounded-lg cursor-pointer transition-all duration-200 group ${
              active === link.title ? 'bg-[#716acd] text-white' : ''
            }`}
            onClick={() => setActiveBgColor(link.title)}>
            <div>
              {React.createElement(link.icon) }
              {!expanded && (
                <div className="w-full -mt-6 absolute left-full -translate-x-3 rounded-md px-2 py-2 ml-6 bg-indigo-100 text-indigo-800 text-sm opacity-0 transition-colors group-hover:opacity-100 group-hover:translate-x-0 invisible group-hover:visible">
                  {link.title}
                </div>
              )}
            </div>
            <Link
              to={link.path}
              className={`active:bg-[#716acd] focus:bg-[#716acd] ${
                expanded ? 'w-full' : 'hidden'
              }`}>
              {link.title}
            </Link>
          </div>
        ))}
      </div>

    </div>
        <div className={`h-fit ${expanded ? '':'hidden'}`}>
          <Badge/>
        </div>
    </div>
  );
};

export default SideBar;
