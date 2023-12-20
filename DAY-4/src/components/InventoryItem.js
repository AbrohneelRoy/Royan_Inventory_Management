// InventoryItem.js
import React from 'react';

const InventoryItem = ({ item }) => {
  return (
    <div className="inventory-item"> {/* Use inventory-item class */}
      <h3>Item Details</h3>
      <div className="inventory-item-details">
        <p>ID: {item.id}</p>
        <p>Name: {item.name}</p>
        <p>Quantity: {item.quantity}</p> {/* Display quantity */}
      </div>
      {/* Add more details as needed */}
    </div>
  );
};

export default InventoryItem;
