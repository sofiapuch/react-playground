import './ChartBar.scss';

const ChartBar = (props) => {
  const { label, value, maxValue } = props;

  const getBarHeight = () => {
    let height = 0;

    if (maxValue > 0) {
      return `${Math.round(( value / maxValue ) * 100)}%`;
    }
    return `${height}%`;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: getBarHeight()}}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  )
};

export default ChartBar;