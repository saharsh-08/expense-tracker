import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const dropDownHandler = (event) => {
        props.onChangeYear(event.target.value);
    };

    return(
        <div className="expenses-filter">
            <label> Filter by Year </label>
            <select value={props.selected} onChange={dropDownHandler}>
                <option value="2023"> 2023 </option>
                <option value="2022"> 2022 </option>
                <option value="2021"> 2021 </option>
                <option value="2020"> 2020 </option>
                <option value="2019"> 2019 </option>
                <option value="2018"> 2018 </option>
            </select>
        </div>
    );
};

export default ExpenseFilter;