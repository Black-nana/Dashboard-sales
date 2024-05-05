// CollapsibleCategoryList.tsx
import React, { useState } from 'react';

interface Category {
  id: string;
  name: string;
  items: string[];
}

const categories: Category[] = [
  { id: '1', name: 'Category 1', items: ['Item 1', 'Item 2', 'Item 3'] },
  { id: '2', name: 'Category 2', items: ['Item 4', 'Item 5','item 6'] },
  { id: '3', name: 'Category 3', items: ['Item 7', 'Item 8','item 9'] },
  // Add more categories as needed
];

const CategoryList: React.FC = () => {
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setOpenCategoryId(openCategoryId === categoryId ? null : categoryId);
  };

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id} className="mb-4">
          <button
            className="flex items-center justify-between w-full px-4 py-2 bg-gray-200 rounded-md"
            onClick={() => toggleCategory(category.id)}
          >
            <span>{category.name}</span>
            <svg
              className={`w-4 h-4 transition-transform transform ${
                openCategoryId === category.id ? 'rotate-180' : ''
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {openCategoryId === category.id && (
            <ul className="mt-2 ml-4 bg-blue-50 p-2">
              {category.items.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
