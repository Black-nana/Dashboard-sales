import React from 'react';
import logo from '../assets/Logo.png';

const Badge: React.FC = () => {
  return (
    <div className="bg-blue-600 flex text-white justify-center items-center flex-col py-2 px-2 rounded-xl">
      <img
        src={logo}
        alt="Logo"
        className="w-12 py-1"
      />
      <h1 className="font-extrabold text-xl">Mateen Pro</h1>
      <p className="text-xs text-center">
        Get access to all features on tetumbas
      </p>
      <button className="rounded-lg font-extrabold bg-slate-50 text-blue-600 my-2 px-6 py-2 ">
        Get Pro
      </button>
    </div>
  );
};

export default Badge;
