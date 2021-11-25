import { useState } from 'react';

import ExpenseForm from '../components/organisms/expenses/ExpenseForm';
import Expenses from '../components/organisms/expenses/Expenses';

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

const ExpensesPage = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const getFormData = (formData) => {
    setExpenses(prevExpenses => {
      console.log('set expenses: ', formData);
      return [formData, ...prevExpenses];
    });
  };

  return (
    <div>
      <ExpenseForm onSaveForm={getFormData} />
      <Expenses items={expenses} />
    </div>
  )
}

export default ExpensesPage;