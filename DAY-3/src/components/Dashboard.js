import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Sidebar from './Sidebar';
import 'chart.js/auto'; // Import Chart.js styles
import './assests/Dashboard.css';

const Dashboard = ({ inventory }) => {
  const [totalItems, setTotalItems] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [chartData, setChartData] = useState(null);
  const [lastAddedItem, setLastAddedItem] = useState(null);

  useEffect(() => {
    const itemsCount = inventory.length;
    const itemsQuantity = inventory.reduce((total, item) => total + (parseInt(item.quantity, 10) || 0), 0);

    setTotalItems(itemsCount);
    setTotalQuantity(itemsQuantity);

    // Generate chart data from inventory
    const labels = inventory.map((item) => item.name);
    const data = inventory.map((item) => parseInt(item.quantity, 10) || 0);

    setChartData({
      labels,
      datasets: [
        {
          label: 'Quantity',
          data,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    });

    // Find the last added item
    if (itemsCount > 0) {
      setLastAddedItem({
        name: inventory[itemsCount - 1].name,
        quantity: parseInt(inventory[itemsCount - 1].quantity, 10) || 0,
      });
    } else {
      setLastAddedItem(null);
    }
  }, [inventory]);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h2>Dashboard</h2>
        <div className="dashboard-summary">
          <h3>Summary</h3>
          <p>Total Products: {totalItems}</p>
          <p>Total Quantity: {totalQuantity}</p>
        </div>
        <div className="dashboard-charts">
          <h3>Charts</h3>
          <div className="bar-chart">
            {chartData && <Bar data={chartData} />}
          </div>
        </div>
        <div className="dashboard-last-added">
          <h3>Last Added Item</h3>
          {lastAddedItem ? (
            <p>
              Name: {lastAddedItem.name}, Quantity: {lastAddedItem.quantity}
            </p>
          ) : (
            <p>No items added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
