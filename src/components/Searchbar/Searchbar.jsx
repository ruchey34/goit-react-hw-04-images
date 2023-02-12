import s from './Searchbar.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmitForm }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = e => {
    setInputValue(e.target.value);
  };

  return (
    <form
      className={s.form}
      onSubmit={e => {
        onSubmitForm(e, inputValue);
      }}
    >
      <button type="submit" className={s.form_btn}>
        <span>Search</span>
      </button>
      <input
        type="text"
        className={s.form_input}
        autoComplete="off"
        placeholder="Search images and photos"
        onChange={handleChangeInput}
      />
    </form>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};