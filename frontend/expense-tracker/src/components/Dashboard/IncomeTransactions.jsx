import React from "react";
import { FiArrowRight } from "react-icons/fi";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import moment from "moment";

const IncomeTransactions = ({ transactions, onSeeMore, onDelete }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Income</h5>
        <button className="card-btn" onClick={onSeeMore}>
          See All <FiArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6">
        {transactions?.slice(0, 5).map((income) => (
          <TransactionInfoCard
            key={income._id}
            title={income.source}
            icon={income.icon}
            date={moment(income.date).format("Do MMM YYYY")}
            amount={income.amount}
            type="income"
            onDelete={() => onDelete(income)} // ✅ Delete handler
          />
        ))}
      </div>
    </div>
  );
};

export default IncomeTransactions;
