// BankStatement.js
import React from 'react';
import './BankStatement.css'; // Optional: Use for styling

const BankStatement = ({ accountHolder, accountNumber, balance, transactions }) => {
  return (
    <div className="statement-container">
      <h2>Bank Statement</h2>
      <div className="account-info">
        <p><strong>Account Holder:</strong> {accountHolder}</p>
        <p><strong>Account Number:</strong> {accountNumber}</p>
        <p><strong>Current Balance:</strong> ${balance.toFixed(2)}</p>
      </div>

      <div className="transactions">
        <h3>Recent Transactions</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount > 0 ? `+ $${transaction.amount.toFixed(2)}` : `- $${Math.abs(transaction.amount).toFixed(2)}`}</td>
                <td>{transaction.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BankStatement;
