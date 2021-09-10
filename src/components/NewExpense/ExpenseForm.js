import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const setTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const setAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const setDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const cancelEditing = () =>{
    props.onCancelEditing(true);
  }

  const submitHandler = (event) => {
    event.preventDefault(); //Prevent default form behavior

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    cancelEditing(true);
  };

  return (

    
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type={enteredTitle}
            onChange={setTitleHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Number</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={setAmountHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-01-01"
            onChange={setDateHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelEditing}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
