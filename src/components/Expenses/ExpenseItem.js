import React, {useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Updated");
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item-description">
                <h2> {title} </h2>
                <div className="expense-item-price"> {props.amount} </div>
                <button onClick={clickHandler} > Click to change title </button>
            </div>
        </Card>
    );
}

export default ExpenseItem;