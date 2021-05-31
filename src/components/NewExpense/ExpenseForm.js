import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredNumber: "",
    enteredDate: "",
  });

  const setTitleHandler = (event) => {
    setUserInput((prev) => {
      return { ...prev, enteredTitle: event.target.value };
    });
  };

  const setNumberHandler = (event) => {
    setUserInput((prev) => {
      return { ...prev, enteredNumber: event.target.vale };
    });
  };

  const setDateHandler = (event) => {
    setUserInput((prev) => {
      return { ...userInput, enteredDate: event.target.vale };
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={setTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Number</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={setNumberHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-01-01"
            onChange={setDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
