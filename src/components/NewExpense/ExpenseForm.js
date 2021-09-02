import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    // const [enteredTitle, setEneteredTitle] = useState('');
    // const [enteredAmount, setEneteredAmount] = useState('');
    // const [enteredDate, setEneteredDate] = useState('');

    // We can use state only once
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        //setEneteredTitle(event.target.value);
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });
    };

    const amountChangeHandler = (event) => {
        //setEneteredAmount(event.target.value);
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        });
    };

    const dateChangeHandler = (event) => {
        //setEneteredDate(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        });
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <lable>Title</lable>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <lable>Amount</lable>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <lable>Date</lable>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>

                <div className="new-expense_actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;