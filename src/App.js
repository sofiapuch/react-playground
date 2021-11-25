import { useState } from 'react';

import Navigation from './layout/navigation/Navigation';
import ExpenseForm from './components/organisms/expenses/ExpenseForm';
import Expenses from './components/organisms/expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    title: 'Bike',
    amount: 545,
    date: new Date(2021, 2, 8),
  },
  {
    title: 'Boots',
    amount: 109,
    date: new Date(2021, 6, 2),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const getFormData = (formData) => {
    // Depends on an older snapshot of expenses
    setExpenses(prevExpenses => {
      console.log('set expenses: ', formData);
      return [formData, ...prevExpenses];
    });
  };

  return (
    <div>
      <Navigation />
      <ExpenseForm onSaveForm={getFormData} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
