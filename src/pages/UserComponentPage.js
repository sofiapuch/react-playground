import { useState } from 'react';

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
    <div>
      <UserForm onSubmitUser={addUser}/>
      <UserCards usersList={usersList}/>
    </div> 
  )
}

export default UserComponentPage;