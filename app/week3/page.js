import React from 'react';
import ItemList from './item-list'; // Import the ItemList component

const Page = () => {
  return (
    <main className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;