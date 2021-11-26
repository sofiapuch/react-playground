import { useRef } from 'react';

import Button from '../../atoms/button/Button';

import './UserForm.scss';

const UserForm = (props) => {
  const nameInput = useRef();
  const ageInput = useRef();

  const resetForm = () => {
    nameInput.current.value = '';
    ageInput.current.value = '';
  }

  const submitForm = (event) => {
    event.preventDefault();

    props.onSubmitUser({
      name: nameInput.current.value,
      age: ageInput.current.value
    });

    resetForm();
  }

  return (
    <div className="user-form grid-container">
      <form onSubmit={submitForm}>
        <div className="grid-x grid-margin-x">
          <div className="cell medium-6">
            <label htmlFor="title">Name</label>
            <input
              ref={nameInput}
              id="name"
              type="text"
            />
          </div>
          <div className="cell medium-2">
            <label htmlFor="amount">Age</label>
            <input
              ref={ageInput}
              id="age"
              type="number"
              min="0"
              step="1"
            />
          </div>
        </div>
        <div className="grid-x grid-margin-x">
          <div className="cell medium-8">
            <Button modifier="primary" type="submit" label="Add" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserForm;