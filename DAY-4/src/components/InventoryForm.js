// InventoryForm.js
import React, { useState } from 'react';

const InventoryForm = ({ onSubmit }) => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(0); // Add quantity state

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name: itemName, quantity }); // Pass quantity to onSubmit
    setItemName('');
    setQuantity(0);
  };

  return (
    <div className="inventory-form"> {/* Use inventory-form class */}
      <h3>Add Item to Inventory</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default InventoryForm;