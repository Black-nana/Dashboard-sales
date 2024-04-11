import React from 'react';

const Table: React.FC = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Job Title</th>
              <th className="px-4 py-2">Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th className="px-4 py-2">1</th>
              <td className="px-4 py-2">Cy Ganderton</td>
              <td className="px-4 py-2">Quality Control Specialist</td>
              <td className="px-4 py-2">Blue</td>
            </tr>
            {/* row 2 */}
            <tr className="hover:bg-gray-100">
              <th className="px-4 py-2">2</th>
              <td className="px-4 py-2">Hart Hagerty</td>
              <td className="px-4 py-2">Desktop Support Technician</td>
              <td className="px-4 py-2">Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th className="px-4 py-2">3</th>
              <td className="px-4 py-2">Brice Swyre</td>
              <td className="px-4 py-2">Tax Accountant</td>
              <td className="px-4 py-2">Red</td>
            </tr> {/* row 4*/}
            <tr>
              <th className="px-4 py-2">4</th>
              <td className="px-4 py-2">Brice Swyre</td>
              <td className="px-4 py-2">Tax Accountant</td>
              <td className="px-4 py-2">Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
