import "./AddNewExpense.css";
 

const AddNewExpense = (props) => {
  
    console.log(props);
    const addExpenseClicked = () => {
        props.onAddNewExpense(true);
    }
  
    return (
    <div className="add-new-expense">
    
      <div className="add-new-expense__controls">
        <div className="add-new-expense__actions">
          <button onClick={addExpenseClicked}>Add New Expense</button>
        </div>
      </div>
    
    </div>
  );
};

export default AddNewExpense;
