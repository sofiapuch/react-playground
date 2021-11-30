import { useState, useRef } from 'react';

import Card from '../../../layout/card/Card';
import Button from '../../atoms/button/Button';

const LoginForm = (props) => {
  const [isFormValid, setFormValidity] = useState(false);
  const emailInput = useRef();
  const passwordInput = useRef();

  const checkValidity = () => {
    if (emailInput.current.value.match(/@/g) && passwordInput.current.value.length >= 4 ) {
      setFormValidity(true);
    }
  }

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
                    ref={emailInput}
                    id="email"
                    type="email"
                    onChange={checkValidity}
                  />
                </div>
                <div className="cell">
                  <label htmlFor="password">Password</label>
                  <input
                    ref={passwordInput}
                    id="password"
                    type="password"
                    onChange={checkValidity}
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