// CategoryFormModal.tsx
import React, { useState } from 'react';

interface CategoryFormModalProps {
  show: boolean;
  onClose: () => void;
}

const CategoryFormModal: React.FC<CategoryFormModalProps> = ({ show, onClose }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic to submit category data (e.g., API call)
    console.log('Submitting category:', categoryName);
    setCategoryName('');
    onClose(); // Close modal after submission
  };

  return (
    <>
      {show && (
        <div className="w-full fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="w-1/2 max-sm:w-5/6 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Add Category</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
                  Category Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  value={categoryName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex gap-2 justify-end">
                
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#716acd] text-white rounded-md"
                >
                  Add Category
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md mr-2"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryFormModal;
