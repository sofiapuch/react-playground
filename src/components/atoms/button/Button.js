import './Button.scss';

const Button = (props) => {
  const { modifier, label, type, onClick, disabled } = props;

  return (
    <button 
      className={`btn btn--${modifier} ${disabled? 'disabled' : ''}`}
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button;