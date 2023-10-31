import React from 'react';

function Item({ name, quantity, category ,onSelect}) {
  return (
    <div className="bg-blue-200  border p-4 m-5  shadow-md mb-4 max-w-md cursor-pointer"
          onClick={() => onSelect({name})}>
      <h3 className="font-bold text-xl mb-2 text-blue-700">{name}</h3>
      <p className="text-gray-800 text-base mb-1 "> Buy {quantity} in {category}</p>
    </div>
  );
}

export default Item;