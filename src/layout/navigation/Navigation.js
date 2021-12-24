import { NavLink } from 'react-router-dom';
import Button from '../../components/atoms/button/Button';

import './Navigation.scss';

const Navigation = (props) => {
  return (
    <div className="navigation">
      <div className="grid-container navigation__inner">
        <nav className="navigation__main">
          <NavLink className="navigation__link" to="/expenses">Expenses</NavLink>
          <NavLink className="navigation__link" to="/user-component">User Component</NavLink>
        </nav>
        <nav className="navigation__main--right">
          {props.userSignedIn
            ? <Button
                label="Logout"
                modifier="text"
                onClick={props.onSignOut}
              />
            : <NavLink className={props.className} to="/login">Login</NavLink>
          }
        </nav>
      </div>
    </div>
  )
}

export default Navigation;