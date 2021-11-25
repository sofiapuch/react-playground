import Card from '../../../layout/card/Card';
import DateTile from '../../atoms/date-tile/DateTile';

import './ExpenseItem.scss';

const ExpenseItem = (props) => {
  const { title, date, amount } = props.expense;

  return (
    <li>
      <Card className="expense-item">
        <DateTile date={date} />
        <div className="expense-item__description">
          <h2 className="expense-item__title">{title}</h2>
          <p>{amount} €</p>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;