import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  const saveExpenseDataHandler = (enteredEexpenseData) => {
    const expenseData = {
      ...enteredEexpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
