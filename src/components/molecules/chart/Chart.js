import ChartBar from '../../atoms/chart-bar/ChartBar';

import './Chart.scss';

const Chart = (props) => {
  const dataPoints = props.dataPoints;

  const valuesArray = dataPoints.map(dataPoint => dataPoint.value);
  const maxValue = Math.max(...valuesArray);

  return (
    <div className="chart grid-container">
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={`${dataPoint.label}-${dataPoint.value}`}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValue}
          />
        )
      })}
    </div>
  )
};

export default Chart;