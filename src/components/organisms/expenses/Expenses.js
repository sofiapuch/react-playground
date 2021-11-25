import { useState } from 'react';
import dayjs from 'dayjs';

import ExpenseChart from '../expense-chart/ExpenseChart';
import ExpenseList from '../../molecules/expense/ExpenseList';
import Filter from '../../atoms/filter/Filter';

import './Expenses.scss';

const Expenses = (props) => {
  const [ filteredYear, setFilteredYear] = useState('2021');

  const getFilteredYear = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter(expense => {
    return dayjs(expense.date).format('YYYY') === filteredYear;
  });

  return (
    <div className="expenses grid-container">
      <ExpenseChart expenses={filteredExpenses} />
      <Filter
        selected={filteredYear}
        onFilterYears={getFilteredYear}
      />
      <ExpenseList 
        items={filteredExpenses} 
        year={filteredYear}
      />
    </div>
  );
}

export default Expenses;