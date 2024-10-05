import React from 'react';
import './DashboardGrid.css';


const DashboardGrid = () => {
  return (
    <div className="dashboard-grid " >
      <div className="grid-item small-box ">
         <img className="backpng"src="source/orderplaced.png" alt="img"  /> 
        No of Orders Delivered
        </div>
      <div className="grid-item small-box ">
        <img className="backpng1"src="source/currachh.png" alt="img" />
        Current Achievements
    </div>
      <div className="grid-item small-box "><img className="backpng1"src="source/earnpoint.png" alt="img" />points Earned Today</div>
      <div className="grid-item large-box">Orders</div>

      {/* Map section (can render Google Maps or any component inside) */}
      <div className="grid-item large-box1 ">
      <img className="Maps1"src="source/maps1.jpg" alt="img"  />  {/* Use your MapComponent to render the Google Map here */}
      </div>

    
      <div className="grid-item wide-box ">Recent Shipments</div>
    </div>
  );
};

export default DashboardGrid;
