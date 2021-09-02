import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // opt 1. Multi state approach
    const [enteredTitle, setEneteredTitle] = useState('');
    const [enteredAmount, setEneteredAmount] = useState('');
    const [enteredDate, setEneteredDate] = useState('');

    // opt 2. We can use state only once
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        // opt 1. Individual variables
        setEneteredTitle(event.target.value);

        // opt 2. Array of states
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });

        // opt 3. using prevState snapshot
        // Better than opt 2 because React schedules update of states
        // and in this case it guarantees it will always be the latest snapshot
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        // opt 1
        setEneteredAmount(event.target.value);

        // opt 2
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });

        // opt 3
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value };
        // });
    };

    const dateChangeHandler = (event) => {
        // opt 1
        setEneteredDate(event.target.value);

        // opt 2
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });

        // opt 3
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value };
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        //console.log(expenseData);
        props.onSaveExpenseData(expenseData);

        // clean all fields after submission
        setEneteredTitle('');
        setEneteredAmount('');
        setEneteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <lable>Title </lable>
                    <input 
                        type="text" 
                        value={enteredTitle} 
                        onChange={titleChangeHandler} 
                    />
                </div>
                <div className="new-expense__control">
                    <lable>Amount </lable>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        value={enteredAmount} 
                        onChange={amountChangeHandler} 
                    />
                </div>
                <div className="new-expense__control">
                    <lable>Date </lable>
                    <input 
                        type="date" 
                        min="2019-01-01" 
                        max="2022-12-31" 
                        value={enteredDate} 
                        onChange={dateChangeHandler} 
                    />
                </div>

                <div className="new-expense_actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;