import { useState, useEffect } from 'react';

import Card from '../../../layout/card/Card';
import Button from '../../atoms/button/Button';

const LoginForm = (props) => {
  const [isFormValid, setFormValidity] = useState(false);
  const [emailInput, setEmail] = useState('');
  const [passwordInput, setPassword] = useState('');

  useEffect(() => {
    setFormValidity(
      emailInput.match(/@/g) && passwordInput.length >= 4
    );
  }, [emailInput, passwordInput]);

  const submitForm = (event) => {
    event.preventDefault();
    props.onSignIn();
  }

  return (
    <div className="login-form">
      <div className="grid-x grid-margin-x">
        <div className="cell medium-6 medium-offset-3">
          <Card className="login-form">
            <form onSubmit={submitForm}>
              <div className="grid-x grid-margin-x">
                <div className="cell">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div className="cell">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <div className="cell">
                  <Button modifier="primary" type="submit" label="Login" disabled={!isFormValid} />
                </div>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;