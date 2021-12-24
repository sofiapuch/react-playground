import { useState, useEffect } from 'react';

import DefaultTemplate from '../templates/Default';

import LoginForm from '../components/organisms/user/LoginForm';
import WelcomeCard from '../components/molecules/cards/WelcomeCard';

const LoginPage = (props) => {
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

  const signOut = () => {
    if (!isLoggedIn) {
      return;
    }

    localStorage.setItem('isLoggedIn', 'false');
    updateLogin(false);
  }

  return (
    <DefaultTemplate userSignedIn={isLoggedIn} onSignOut={signOut}>
      <div className="grid-container">
        {!isLoggedIn && <LoginForm onSignIn={signIn}/>}
        {isLoggedIn && <WelcomeCard />}
      </div>
    </DefaultTemplate>
  )
}

export default LoginPage;