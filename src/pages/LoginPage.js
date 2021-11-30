import { useState, useEffect } from 'react';

import DefaultTemplate from '../templates/Default';

import LoginForm from '../components/organisms/user/LoginForm';
import WelcomeCard from '../components/molecules/cards/WelcomeCard';

const LoginPage = () => {
  const [isLoggedIn, updateLogin] = useState(false);

  useEffect(() => {
    const getUserState = localStorage.getItem('isLoggedIn');
    if (getUserState === 'true') {
      updateLogin(true);
    }
  }, []);

  const signIn = () => {
    // Dummy login without checking creds
    if (isLoggedIn) {
      return;
    }

    localStorage.setItem('isLoggedIn', 'true');
    updateLogin(true);
  }

  return (
    <DefaultTemplate>
      <div className="grid-container">
        {!isLoggedIn && <LoginForm onSignIn={signIn}/>}
        {isLoggedIn && <WelcomeCard />}
      </div>
    </DefaultTemplate>
  )
}

export default LoginPage;