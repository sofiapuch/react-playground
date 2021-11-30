import { useEffect, useReducer } from 'react';

import Card from '../../../layout/card/Card';
import Button from '../../atoms/button/Button';

const formReducer = (state, action) => {
  if (action.type === 'EMAIL') {
    return {
      ...state,
      email: action.value
    }
  }
  else if (action.type === 'PASSWORD') {
    return {
      ...state,
      password: action.value
    }
  }

  if (action.type === 'IS_VALID') {
    return {
      ...state,
      isValid: state.email.match(/@/g) && state.password.length >= 4
    }
  }

  return {
    isValid: false,
    email: '',
    password: ''
  }
};

const LoginForm = (props) => {

  const [formState, dispatchForm] = useReducer(
    formReducer,
    {
      isValid: false,
      email: '',
      password: ''
    });

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatchForm({type: 'IS_VALID'})
    }, 500);

    // Clear timer before a new one is set
    return () => {
      clearTimeout(timer);
    }
  }, [formState.email, formState.password]);

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
                    onChange={(e)=>dispatchForm({type: 'EMAIL', value: e.target.value})}
                  />
                </div>
                <div className="cell">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    onChange={(e)=>dispatchForm({type: 'PASSWORD', value: e.target.value})}
                  />
                </div>
                <div className="cell">
                  <Button modifier="primary" type="submit" label="Login" disabled={!formState.isValid} />
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