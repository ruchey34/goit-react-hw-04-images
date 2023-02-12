import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ handleButtonClick }) => {
  return (
    <div className={s.boxBtn}>
      <button
        type="button"
        className={s.loadmoreBtn}
        onClick={() => handleButtonClick()}
      >
        Load more
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};