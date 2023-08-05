import css from './PhonebookFilter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const PhonebookFilter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };
  return (
    <>
      <label className={css.filter}>
        <p>Search contacts by name</p>
        <input
          name="filter"
          onInput={onChange}
          type="text"
          placeholder="Search contacts by name"
          // value={filter}
        />
      </label>
    </>
  );
};

export default PhonebookFilter;
