// ItemList.tsx
import React, { useState } from 'react';
import CategoryFormModal from './CategoryFormModal';
import ItemForm from './ItemForm';
import CategoryList from './CategoryList';

const ItemList: React.FC = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showItemForm, setShowItemForm] = useState(false);

  const handleAddCategoryClick = () => {
    setShowCategoryModal(true);
  };

  const handleAddItemClick = () => {
    setShowItemForm(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Price List</h1>
      <div className="mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          onClick={handleAddCategoryClick}
        >
          Add Category
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={handleAddItemClick}
        >
          Add Item
        </button>
      </div>
      <CategoryFormModal show={showCategoryModal} onClose={() => setShowCategoryModal(false)} />
      <ItemForm show={showItemForm} onClose={() => setShowItemForm(false)} />
      <CategoryList />
    </div>
  );
};

export default ItemList;
