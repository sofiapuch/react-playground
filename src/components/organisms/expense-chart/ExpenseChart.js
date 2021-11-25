import dayjs from 'dayjs';

import Chart from '../../molecules/chart/Chart';

const ExpenseChart = (props) => {
  
  const expenses = props.expenses;

  const dataPoints = [
    { label:'Jan', value: 0 },
    { label:'Feb', value: 0 },
    { label:'March', value: 0 },
    { label:'April', value: 0 },
    { label:'May', value: 0 },
    { label:'June', value: 0 },
    { label:'July', value: 0 },
    { label:'Aug', value: 0 },
    { label:'Sept', value: 0 },
    { label:'Oct', value: 0 },
    { label:'Nov', value: 0 },
    { label:'Dec', value: 0 },
  ];

  for (const i in expenses) {

    if (expenses.hasOwnProperty(i)) {
      const expenseMonth = dayjs(expenses[i].date).get('month');

      dataPoints[expenseMonth].value += expenses[i].amount;
    }
  }

  return (
    <Chart dataPoints={dataPoints} />
  )
}

export default ExpenseChart;