const Filter = (props) => {
  const yearList = [
    { value: 2018, label: 2018 },
    { value: 2019, label: 2019 },
    { value: 2020, label: 2020 },
    { value: 2021, label: 2021 }
  ]

  const updateYear = (event) => {
    props.onFilterYears(event.target.value); 
  }

  return (
    <div className="filter">
      <label htmlFor="years">Filter by year:</label>
      <select name="years" id="years" value={props.selected} onChange={updateYear}>
        { yearList.map((item, index) => (
          <option value={item.value} key={index}>{item.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;