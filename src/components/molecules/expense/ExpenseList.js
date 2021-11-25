import ExpenseItem from './ExpenseItem';

import './ExpenseList.scss';

const ExpenseList = (props) => {
  const { items, year } = props;

  if (items.length === 0) {
    return <p>No expenses found for {year}</p>;
  }

  return (
    <ul className="expense-list">
      {items.map((item, index) => (
        <ExpenseItem
          expense={item}
          key={index}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;