import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const onChange = event => dispatch(filterContact(event.target.value));
  const value = useSelector(state => state.filter);
  const id = useId();

  return (
    <div className={css.searchBar}>
      <label htmlFor={id}>Find contact by name</label>
      <input type="text" id={id} value={value} onChange={onChange} />
    </div>
  );
};
export default SearchBox;
