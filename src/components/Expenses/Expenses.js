import React, {useState} from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import { ExpesesList } from './ExpenseList';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");

    const changeYearHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const selectedExpenses = props.items.filter(
        (ele) => ele.date.getFullYear().toString() === filteredYear
    );


    return (
        <Card className="expenses">
            <ExpenseFilter onChangeYear={changeYearHandler} selected={filteredYear} />
            <ExpesesList item={selectedExpenses} year={filteredYear} />
        </Card>
    );
}

export default Expenses;