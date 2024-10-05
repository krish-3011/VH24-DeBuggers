import React from "react";
import NavBar from "../dashboard/NavBar";
import Header1 from "../dashboard/Header";
import '../dashboard/Dashboard.css';
import BankStatement from "./BankStatement"; // Ensure this component is correctly defined and imported

const DeliveryPage = () => {
    const transactionsData = [
      { date: '2024-09-28', description: 'Salary Credit', amount: 1500.00, type: 'Credit' },
      { date: '2024-09-25', description: 'Electricity Bill', amount: -75.60, type: 'Debit' },
      { date: '2024-09-22', description: 'Amazon Purchase', amount: -120.40, type: 'Debit' },
    ];

    return (
      <div className="redeem-container">
        <NavBar />
        <div className="innercont">
          <Header1 />
          <BankStatement
            accountHolder="Jane Doe"
            accountNumber="1234567890"
            balance={1354.75}
            transactions={transactionsData}
          />
        </div>
      </div>
    );
};

export default DeliveryPage;
