import { NavLink } from 'react-router-dom';

import Login from '../../components/molecules/login/Login';

import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="grid-container navigation__inner">
        <nav className="navigation__main">
          <NavLink className="navigation__link" to="/expenses">Expenses</NavLink>
          <NavLink className="navigation__link" to="/user-component">User Component</NavLink>
        </nav>
        <nav className="navigation__main--right">
          <Login className="navigation__link" />
        </nav>
      </div>
    </div>
  )
}

export default Navigation;