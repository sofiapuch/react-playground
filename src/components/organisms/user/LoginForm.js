import { useRef } from 'react';

import Card from '../../../layout/card/Card';
import Button from '../../atoms/button/Button';

const LoginForm = () => {
  const emailInput = useRef();
  const passwordInput = useRef();

  const submitForm = (event) => {
    event.preventDefault();

    console.log("Submit Form");
  }

  return (
    <div className="login-form grid-container">
      <div className="grid-x grid-margin-x">
        <div className="cell medium-6 medium-offset-3">
          <Card className="login-form">
            <form onSubmit={submitForm}>
              <div className="grid-x grid-margin-x">
                <div className="cell">
                  <label htmlFor="email">Email</label>
                  <input
                    ref={emailInput}
                    id="email"
                    type="email"
                  />
                </div>
                <div className="cell">
                  <label htmlFor="password">Password</label>
                  <input
                    ref={passwordInput}
                    id="password"
                    type="password"
                  />
                </div>
                <div className="cell">
                  <Button modifier="primary" type="submit" label="Login" />
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