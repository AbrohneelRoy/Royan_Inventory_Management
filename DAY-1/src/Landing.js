import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'; 

const Landing = () => {
  return (
    <>
      <h2 className='h1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Royan</h2>
      <div className="container1">
        <h1 className='h2'>Finally a Modern Inventory System</h1>
        <p className='c1'>Reduce stockouts, speed up operations, optimize routes and get real-time</p>
        <p className='c1'>visibility with Royan's inventory management app.</p>
        <Link to="/Login">
          <button className="b1">Login Form</button>
        </Link>
        <Link to="/sign">
          <button className="b1">Sign up</button>
        </Link>
      </div>
      <br /><br /><br />
      <div className="para1">
        <h1 className='d1'>&nbsp;Flawless replenishments</h1>
        <p className='c2'>&nbsp;Never run out-of-stock with smart replenishment strategies like min-max rules, MTO, or 
          the master production schedule. Let Odoo propose, or trigger purchase orders automatically. 
          Then automate vendor follow-ups to minimize communication risks: PO acknowledgment, 
          receipt schedule confirmation a few days before, etc.</p>
      </div>

      <div className="para1" style={{ float: 'right' }}>
        <h1 className='d1'>&nbsp;Speed up receipt, quality control and storage</h1>
        <p className='c2'>&nbsp;Control incoming and outgoing shipments with push and pull rules, GS-1 codes, and customizable routes.
        Use put-away strategies to optimize your storage: slow-fast movers, ABC analysis, cross-dock... all you need to reduce the number
         of parts moved, and distances.</p>
      </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="para1">
        <h1 className='d1'>&nbsp;Optimize your warehouse</h1>
        <p className='c2'>&nbsp;Real-time inventory management with all the features: serial numbers, lots, packaging, 
        reservation strategies, cycle counting, KPIs, and more... Blazing-fast inventory lookup: instantly know the location of all your products
         across multiple warehouses or multiple companies.</p>
      </div>

      <div className="para1" style={{ float: 'right' }}>
        <h1 className='d1'>&nbsp;Minimize picking movements</h1>
        <p className='c2'>&nbsp;Choose the right strategy for you: single, cluster, wave, or batch picking. Trigger goods to release 
        using multiple reservation strategies. Implementing the rights strategies allows to pick and pack 30% extra products with the same team.</p>
      </div>
    </>
  );
};

export default Landing;
