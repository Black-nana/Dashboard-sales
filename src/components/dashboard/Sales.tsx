import React from 'react';
import {
  Upload,
  AreaChart,
  ClipboardPenLine,
  Tag,
  UserPlus,
} from 'lucide-react';

const Sales: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 rounded-lg p-4 ">
      <div className="w-full flex justify-between mb-10 ">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-slate-900">
            Today's Sales
          </h1>
          <h4 className="text-slate-400">sales Summary</h4>
        </div>
        <div className="relative">
          <button className="btn bg-[#716acd] text-white hover:bg-[#8d98d9] pl-8 font-sans">
            Export
          </button>
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <Upload
              size={20}
              color="white"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-start items-start gap-2 mt-4">
      <div className="flex flex-col bg-pink-100 rounded-xl p-2">
          <div className="w-fit p-1 rounded-full bg-pink-400">
            <AreaChart
              size={20}
              color="rgb(244 114 182 / var(--tw-bg-opacity))"
              className="bg-white rounded-xl  p-1"
            />
          </div>
          <h4 className="font-semibold font-sans text-3xl text-blue-950">
            $1K
          </h4>
          <p className="text-slate-600 font-medium text-base">Total Sales</p>
          <p className="text-xs text-blue-600 font-medium py-1">
            +8% from yesterday
          </p>
        </div>
        <div className="flex flex-col bg-orange-100 rounded-xl p-2">
          <div className="w-fit p-1 rounded-full bg-orange-400">
            <ClipboardPenLine
              size={20}
              color="rgb(251 146 60 / var(--tw-bg-opacity))"
              className="bg-white rounded-xl  p-1"
            />
          </div>
          <h4 className="font-semibold font-sans text-3xl  text-blue-950">
            300
          </h4>
          <p className="text-slate-600  font-medium text-base">Total Orders</p>
          <p className="text-xs text-blue-600 font-medium py-1">
            +8% from yesterday
          </p>
        </div>
        <div className="flex flex-col bg-green-100 rounded-xl p-2">
          <div className="w-fit p-1 rounded-full bg-green-400">
            <Tag
              size={20}
              color="rgb(74 222 128 / var(--tw-bg-opacity))"
              className="bg-white rounded-xl  p-1"
            />
          </div>
          <h4 className="font-semibold font-sans text-3xl text-blue-950">5</h4>
          <p className="text-slate-600  font-medium text-base">Products Sold</p>
          <p className="text-xs text-blue-600 font-medium ">
            +8% from yesterday
          </p>
        </div>
        <div className="flex flex-col bg-purple-100 rounded-xl p-2">
          <div className="w-fit p-1 rounded-full bg-purple-400">
            <UserPlus
              size={20}
              color="rgb(192 132 252 / var(--tw-bg-opacity))"
              className="bg-white rounded-xl  p-1"
            />
          </div>
          <h4 className="font-semibold font-sans text-3xl text-blue-950">8</h4>
          <p className="text-slate-600  font-medium text-base ">
            New Customers
          </p>
          <p className="text-xs text-blue-600 font-medium ">
            +8% from yesterday
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sales;
