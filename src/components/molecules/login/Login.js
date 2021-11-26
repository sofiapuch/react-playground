import { NavLink } from 'react-router-dom';

const Login = (props) => {
  return (
    <NavLink className={props.className} to="/login">Login</NavLink>
  )
}

export default Login;