import React, { useState } from 'react';
import Details from './DetailsCard';
import Index from './Listenings/Index';

const Dashboard: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const handleShowAll = () => {
    setShowAll(true);
  };
  return (
    <div className=" w-full h-screen overflow-y-auto ">
      {showAll && (
        <div>
          {' '}
          <div className="grid place-items-center ">
            <Details />
          </div>
          <div className="my-5 p-4 rounded-lg">
            <Index />
          </div>
        </div>
      )}
      {!showAll && (
        <div className="grid place-items-center ">
          <div className="flex justify-center items-center h-96">
            <h1 className="text-3xl font-bold text-gray-400">No items to show</h1>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <button
                onClick={handleShowAll}
                className="bg-[#716acd] text-white hover:bg-[#8d98d9] py-2 px-4 rounded-lg font-sans"
              >
                Add Listing
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
