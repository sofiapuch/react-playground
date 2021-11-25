import './Button.scss';

const Button = (props) => {
  const { modifier, label, type, onClick } = props;

  return (
    <button 
      className={`btn btn--${modifier}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button;