// ItemForm.tsx
import React, { useState } from 'react';

interface ItemFormProps {
  show: boolean;
  onClose: () => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ show, onClose }) => {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'itemName') setItemName(value);
    else if (name === 'category') setCategory(value);
    else if (name === 'price') setPrice(value);
    else if (name === 'status') setStatus(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic to submit item data (e.g., API call)
    console.log('Submitting item:', { itemName, category, price, status });
    // Reset form fields
    setItemName('');
    setCategory('');
    setPrice('');
    setStatus('');
    onClose(); // Close modal after submission
  };

  return (
    <>
      {show && (
        <div className="w-full fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Add Item</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">
                  Item Name
                </label>
                <input
                  type="text"
                  id="itemName"
                  name="itemName"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  value={itemName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  value={category}
                  onChange={handleInputChange}
                  required
                >
                  {/* Populate categories dynamically */}
                  <option value="">Select Category</option>
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  value={price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  value={status}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div className="flex gap-2 justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#716acd] text-white rounded-md"
                >
                  Add Item
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

export default ItemForm;
