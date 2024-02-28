import { FaUser, FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));
  return (
    <div className={css.contact}>
      <div>
        <p className={css.name}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.number}>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
