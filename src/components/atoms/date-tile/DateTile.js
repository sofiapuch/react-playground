import dayjs from 'dayjs';

import './DateTile.scss';

const DateTile = (props) => {
  const date = props.date;

  return (
    <div className="date-tile">
      <p className="date-tile__month">
        {dayjs(date).format('MM')}
      </p>
      <p className="date-tile__year">
      {dayjs(date).format('YYYY')}
      </p>
      <p className="date-tile__day">
        {dayjs(date).format('DD')}
      </p>
    </div>
  )
}

export default DateTile;