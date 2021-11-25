import { useState } from 'react';

import Button from '../../atoms/button/Button';

import './UserForm.scss';

const UserForm = (props) => {

  const [formData, updateForm] = useState({
    name: '',
    age: '',
  });

  const updateName = (event) => {
    updateForm((prevState) => {
      return { ...prevState, name: event.target.value }
    });
  };

  const updateAge = (event) => {
    updateForm((prevState) => {
      return { ...prevState, age: event.target.value }
    });
  };

  const resetForm = () => {
    updateForm(() => {
      return { name: '', age: '' }
    });
  }

  const submitForm = (event) => {
    event.preventDefault();
    props.onSubmitUser(formData);

    resetForm();
  }

  return (
    <div className="user-form grid-container">
      <form onSubmit={submitForm}>
        <div className="grid-x grid-margin-x">
          <div className="cell medium-6">
            <label htmlFor="title">Name</label>
            <input id="name" type="text" value={formData.name} onChange={updateName} />
          </div>
          <div className="cell medium-2">
            <label htmlFor="amount">Age</label>
            <input id="age" type="number" value={formData.age} min="0" step="1" onChange={updateAge} />
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