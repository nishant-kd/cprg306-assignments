"use client";

import React ,{ useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';


function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newitem) => {
      setItems([...items, newitem]);
    };
    return (
    <div className="min-h-screen bg-gradient-to-r from-lime-500 to-cyan-500 py-2 ">
      <h1 className=" text-3xl  font-bold  ml-10 mb-4 text-black">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items = {items} />
      </div>
  );
}
export default Page;
