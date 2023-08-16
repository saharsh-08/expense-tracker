import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: ""
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });

        // Since React schedules state updates i.e. it does not perform them instantly, 
        // if a lot of updates are scheduled simultaneously, the function code might consider incorrect state values
        // To ensure that we always work on the latest state snapshot, the below method is preferred

        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const ExpenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        // console.log(ExpenseData);

        // Since, the saveExpenseDateHandler is a pointer to the function in NewExpense.js, it will be executed in NewExpense.js
        props.onSaveExpenseData(ExpenseData);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label> Title </label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense-control">
                    <label> Amount </label>
                    <input type="num" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense-control">
                    <label> Date </label>
                    <input type="date" value={enteredDate} min="2018-01-01" max="2023-06-01" onChange={dateChangeHandler} />
                </div>
            </div>

            <div className="new-expense-actions">
                <button type="submit"> Add Expense </button>
            </div>
        </form>
    );
};

export default ExpenseForm;