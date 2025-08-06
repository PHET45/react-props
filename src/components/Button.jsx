
// Button.jsx
import PropTypes from 'prop-types';


const Button = ({ buttonText, buttonStyle }) => {
  return (
    <button className={buttonStyle}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    buttonStyle: PropTypes.string,
  };
export default Button;

