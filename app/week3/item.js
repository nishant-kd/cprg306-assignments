import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="border p-4 m-2 rounded-lg shadow-lg">
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-gray-600">Category: {category}</p>
      <p className="text-gray-600">Quantity: {quantity}</p>
    </li>
  );
};

export default Item;