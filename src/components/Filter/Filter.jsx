// import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsStorageReducer';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={css.filter}>
      <input
        placeholder="Contact search"
        className={css.input}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};
