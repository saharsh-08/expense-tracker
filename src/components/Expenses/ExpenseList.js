import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

export const ExpesesList = (props) => {
    if (props.item.length === 0) {
        return (
            <div className="nothing">
            <h3>You haven't made any expense in {props.year}</h3>
            </div>
        );
    }
    
    return (
        <ul className="expenses-list">
            {
                props.item.map((ele) => (
                    <ExpenseItem
                        key={ele.id}
                        title={ele.title}
                        amount={ele.amount}
                        date={ele.date}
                    />
                ))
            }
        </ul>
    );
};