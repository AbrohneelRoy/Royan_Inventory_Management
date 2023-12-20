// Inventory.js
import React, { useState, useEffect } from 'react';
import InventoryList from './InventoryList';
import InventoryForm from './InventoryForm';
import InventoryItem from './InventoryItem';
import Sidebar from './Sidebar'; // Import Sidebar component
import './assests/Inventory.css';

const Inventory = ({ onInventoryChange }) => {
  const initialInventory = JSON.parse(localStorage.getItem('inventory')) || [];
  const [inventory, setInventory] = useState(initialInventory);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    localStorage.setItem('inventory', JSON.stringify(inventory));
    onInventoryChange(inventory); // Notify App component about the inventory change
  }, [inventory, onInventoryChange]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleAddItem = (newItem) => {
    setInventory([...inventory, { id: Date.now(), ...newItem }]);
  };

  const handleDeleteItem = (itemId) => {
    const updatedInventory = inventory.filter((item) => item.id !== itemId);
    setInventory(updatedInventory);
    setSelectedItem(null); // Deselect the item after deletion
  };

  return (
    <div className="main-container">
      <Sidebar />
      <div className="inventory-container">
        <InventoryList inventory={inventory} onItemClick={handleItemClick} onDeleteItem={handleDeleteItem} />
        <InventoryForm onSubmit={handleAddItem} />
        {selectedItem && <InventoryItem item={selectedItem} />}
      </div>
    </div>
  );
};

export default Inventory;
