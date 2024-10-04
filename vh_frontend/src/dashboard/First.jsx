import React from "react";
import './Dashboard.css'

const FirstPage = () =>
{
    return(
        <div className="dashboard-container">
        <div className="stats-grid">
          <div className="card">
            <h4>Total Delivered</h4>
            <h1>400,913</h1>
            <p className="growth positive">+2.9%</p>
          </div>
  
          <div className="card">
            <h4>Pickup Package</h4>
            <h1>400,913</h1>
            <p className="growth positive">+2.9%</p>
          </div>
  
          <div className="card">
            <h4>Pending Package</h4>
            <h1>400,913</h1>
            <p className="growth negative">-2.9%</p>
          </div>
  
          <div className="card">
            <h4>Delivery Shipments</h4>
            <h1>400,913</h1>
            <p className="growth positive">+2.9%</p>
          </div>
        </div>
  
        {/* Traffic Section */}
        <div className="traffic-section">
          <h4>Traffic</h4>
          <div className="chart-placeholder">
            Traffic Chart Placeholder
          </div>
        </div>
  
        {/* Shipment Tracking and Info */}
        <div className="tracking-shipment">
          <div className="tracking-card">
            <h4>Tracking Delivery</h4>
            <p>Shipment ID: #505-257-bkl</p>
            <p>Status: <span className="status">In transit</span></p>
            <div className="map-placeholder">Map Placeholder</div>
          </div>
  
          <div className="shipment-info">
            <h4>Shipment</h4>
            <p><b>Shipment ID:</b> #505-257-bkl</p>
            <p><b>Destination:</b> Garman</p>
            <p><b>Status:</b> Pickup</p>
            <p><b>Date of Arrival:</b> 14-29 Sep 2023</p>
          </div>
        </div>
      </div>
           )
}

export default FirstPage;