// InventoryList.js
import React from 'react';

const InventoryList = ({ inventory, onItemClick, onDeleteItem }) => {
  return (
    <div className="inventory-list">
      <h3>Inventory List</h3>
      <ul>
        {inventory.map((item) => (
          <li key={item.id} className="inventory-list-item" onClick={() => onItemClick(item)}>
            {item.name}
            <button onClick={() => onDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
