import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { LogTimeDifference } from "../Utils/Utils";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    
    let startDateTime = new Date();
    
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);

    LogTimeDifference("Test", startDateTime, new Date());
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelEditing={props.onCancelEditing} />
    </div>
  );
};

export default NewExpense;
