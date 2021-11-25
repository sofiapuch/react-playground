import { useState } from 'react';

import Button from '../../atoms/button/Button';

import './ExpenseForm.scss';

const ExpenseForm = (props) => {
  const [ formIsVisible, setFormVisibility ] = useState(false);

  const [ userInput, setUserInput ] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const titleChanged = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value }
    })
  };

  const amountChanged = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: parseInt(event.target.value) }
    })
  };

  const dateChanged = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value }
    })
  };

  const toggleExpenseForm = (event) => {
    event.preventDefault();
    setFormVisibility((prevState) => !prevState);
  }

  const submitForm = (event) => {
    event.preventDefault();
    props.onSaveForm(userInput);

    setUserInput(() => {
      return { title: '', amount: '', date: '' }
    });

    setFormVisibility(false);
  }

  if (!formIsVisible) {
    return (
      <div className="expense-form grid-container">
        <div className="grid-x align-center">
          <Button modifier="primary" label="New expense" onClick={toggleExpenseForm} />
        </div>
      </div>
    )
  } else {
    return (
      <div className="expense-form grid-container">
        <form onSubmit={submitForm}>
          <div className="grid-x grid-margin-x">
            <div className="cell small-12 medium-8">
              <label htmlFor="title">Title</label>
              <input id="title" type="text" value={userInput.title} onChange={titleChanged} />
            </div>
          </div>
          <div className="grid-x grid-margin-x">
            <div className="cell small-12 medium-4">
              <label htmlFor="amount">Amount</label>
              <input id="amount" type="number" value={userInput.amount} min="0.01" step="0.01" onChange={amountChanged} />
            </div>
            <div className="cell small-12 medium-4">
              <label htmlFor="date">Date</label>
              <input id="date" type="date" value={userInput.date} min="2019-01-01" max="2022-12-31" onChange={dateChanged} />
            </div>
              <div className="expense-form__button-wrapper">
                <Button modifier="secondary" label="Cancel" onClick={toggleExpenseForm} />
                <Button modifier="primary" type="submit" label="Add" />
              </div>
            </div>
        </form>
      </div>
    )
  }
};

export default ExpenseForm;