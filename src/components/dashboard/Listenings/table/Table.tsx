import React from 'react';
import { tableData } from './data';
import { Share2,Eye, Upload } from 'lucide-react';

const Table: React.FC = () => {
  return (
    <div className='w-full bg-white py-10'>
      <div className='flex gap-6 justify-end mr-5'>
        <div className='flex gap-2 justify-center items-center'>
          <label htmlFor="search" className='font-semibold'>Search</label>
          <input type="text" name="search" id="search" className='rounded-lg p-1 border-2'/>
        </div>
        <div className="flex justify-center items-center relative">
          <button className=" bg-[#716acd] text-white hover:bg-[#8d98d9] pl-8 pr-2 py-1 rounded-lg font-sans">
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
      <div className="w-full">
        <table className="table py-6">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                  />
                </label>
              </th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Status</th>
              <th>Account Type</th>
              <th>Phone</th>
              <th>National ID</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tableData.map((data, index) => (
              <tr key={index} className='text-xs'>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                    />
                  </label>
                </td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
                <td>{data.address}</td>
                <td>
                  <span className='text-orange-400 bg-orange-100 py-1 px-2 rounded-lg'>{data.status}</span>
                  </td>
                <td>{data.accountType}</td>
                <td>{data.phone}</td>
                <td>{data.NationalID}</td>
                <td className='flex'>
                  <button className="w-ful text-[0.rem] text-white bg-[#716acd] py-1 px-2 rounded-lg">Approve</button>
                  <div className='flex'>
                    <Share2
                      size={16}
                      className="ml-2"
                    />
                    <Eye
                    size={16}
                    className='ml-2'
                    />
                  </div>
                  
                </td>
              </tr>
            ))
            }
          </tbody>

          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Status</th>
              <th>Account Type</th>
              <th>Phone</th>
              <th>National ID</th>
              <th>Action</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Table;
