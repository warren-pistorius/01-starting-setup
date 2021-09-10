import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import AddNewExpense from "./components/NewExpense/AddNewExpense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1 d",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [showExpenseFormValue, setShowExpenseFormValue] = useState(false);

  const showExpenseFormHandler = () => {
    setShowExpenseFormValue(true);
  };

  const hideExpenseFormHandler = () => {
    setShowExpenseFormValue(false);
  };

  const addExpenseHandler = (expense) => {
    console.log("In app component");
    console.log(expense);

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      {showExpenseFormValue ? (
        <NewExpense onAddExpense={addExpenseHandler} onCancelEditing={hideExpenseFormHandler} />
      ) : (
        <AddNewExpense onAddNewExpense={showExpenseFormHandler} />
      )}
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
