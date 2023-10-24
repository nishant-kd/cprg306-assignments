"use client";

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Item from './item';

function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((item1, item2) => {
    if (sortBy === "name") {
      return item1.name.localeCompare(item2.name);
    } else if (sortBy === "category") {
      return item1.category.localeCompare(item2.category);
    }
    return 0;
  });

  return (
    <div className="p-4">
      <div className="flex items-center ml-5">
        <span className="mr-2 text-lg text-black font-bold">Sort by:</span>
        <button
          onClick={() => setSortBy('name')}
          className={`${sortBy === 'name' ? 'active-class' : ''} m-2 bg-blue-900 text-white px-4 py-2 mr-2 `}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`${sortBy === 'category' ? 'active-class' : ''} m-2 bg-blue-900 text-white px-4 py-2 ml-2`}
        >
          Category
        </button>
      </div>
      <ul>
        {sortedItems.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ItemList;
