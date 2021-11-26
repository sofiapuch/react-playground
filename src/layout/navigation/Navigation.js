import { Link } from 'react-router-dom';

import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="grid-container">
        <nav className="navigation__main">
          <Link className="navigation__link" to="/expenses">Expenses</Link>
          <Link className="navigation__link" to="/user-component">User Component</Link>
        </nav>
      </div>
    </div>
  )
}

export default Navigation;