import React, { useState } from 'react';

import DefaultTemplate from '../templates/Default';

import UserForm from "../components/organisms/user/UserForm";
import UserCards from '../components/organisms/user/UserCards';

const UserComponentPage = () => {

  const [ usersList, addUserToList ] = useState([]);

  const addUser = (userData) => {
    addUserToList(prevUsers => {
      return [userData, ...prevUsers];
    });
  }

  return (
    <DefaultTemplate>
      <UserForm onSubmitUser={addUser}/>
      <UserCards usersList={usersList}/>
    </DefaultTemplate>
  )
}

export default UserComponentPage;