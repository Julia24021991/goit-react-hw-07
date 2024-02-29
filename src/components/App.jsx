import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';

import 'modern-normalize';
import './App.css';
import { useEffect } from 'react';
import { selectLoading, selectError } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  });
  return (
    <div>
      <h1>Phonebook</h1>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
export default App;
