"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    useEffect(() => {
        loadItems();
    }, []);

    async function loadItems() {
        const currentUserId = "placeholder-user-id";
        const fetchedItems = await getItems(currentUserId);
        setItems(fetchedItems);
    }

    async function handleAddItem(item) {
        const currentUserId = "placeholder-user-id";
        const newItemRef = await addItem(currentUserId, item);
        setItems([...items, { ...item, id: newItemRef.id }]);
    }

    function handleItemSelect(itemName) {
        let newName = itemName.split(",")[0].trim();
        newName = newName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();  
        setSelectedItemName(newName);
    }

    return (
        <main>
            <h1 className="text-3xl font-bold text-left mt-4 ml-4">Shopping List</h1>
            <div className="flex">
                <div className="flex">
                    <NewItem onAddItem={handleAddItem}/>
                    <ItemList items={items} onItemSelect={handleItemSelect}/>
                </div>
                <div>
                    <MealIdeas ingredient={selectedItemName}/>
                </div>
            </div>
        </main>
    );
}