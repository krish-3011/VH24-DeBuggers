import React from "react";
import './token.css';

const Token = ({ tokens, handleAddTokens, handlePurchase, items }) => {
  return (
    <div className="shop-container">
    
      <div className="items-list">
        {items.map(item => (
          <div key={item.id} className="item-row">
            <span className="item-name">{item.name}</span>
            <span className="item-cost">Cost: {item.cost} tokens</span>
            <button
              onClick={() => handlePurchase(item)}
              disabled={tokens < item.cost} // Disable button if not enough tokens
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Token;
