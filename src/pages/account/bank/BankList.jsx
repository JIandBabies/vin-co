import { useState } from "react";

const BankList = ({ list }) => {
  return (
    <div className="bank-list">
      <div>
        {list.bankName} {list.accountNumber}
      </div>
      <div>계좌 잔액: {list.balance.toLocaleString()}</div>
      <button type="button" className="delete-btn">
        삭제
      </button>
    </div>
  );
};

export default BankList;
