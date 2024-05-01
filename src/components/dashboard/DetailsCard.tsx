import React from 'react';
import { DetailsData } from './data';

const Details: React.FC = () => {
  return (
    <div>
      {/* card */}
      <div className="w-full px-6">
        <div className="w-full grid lg:grid-cols-4 gap-4">
          {DetailsData.map((detail, index) => (
            <div
              key={index}
              className="flex justify-around  border-2 rounded-lg bg-white">
              <div className="items-start p-4 ">
                <p className="text-2xl py-2 font-bold text-[#716acd]">
                  {detail.total}
                </p>
                <h2 className="text-xs py-2 font-semibold">{detail.title}</h2>
              </div>
              <div
                style={{ color: detail.color[0] }}
                className="flex p-4  ">
                {detail.icon.map((icon, iconIndex) => (
                  <img
                    key={iconIndex}
                    src={icon}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white -ml-4"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
