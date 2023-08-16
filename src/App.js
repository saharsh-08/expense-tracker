import React from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

function App() {
  const dummy_data = [
    { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
  ];

  const [expenses, setExpenses] = useState(dummy_data);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div> 
  );

  /*
  createElement has 3 parameters:
  (i) The name of the element that has to be created
  (ii) The attributes of that element
  (ii) The content in that element
  */

  // return React.createElement('div', {}, 
  //   React.createElement('h2', {}, 'Let\'s get started'),
  //   React.createElement(Expenses, {items: expense})
  // );
}

export default App;