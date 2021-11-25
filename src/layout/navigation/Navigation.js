import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <nav>
        <Link to="/expenses">Expenses</Link>
        <Link to="/user-component">User Component</Link>
      </nav>
    </div>
  )
}

export default Navigation;