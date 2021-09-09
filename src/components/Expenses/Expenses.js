import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        />

        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
