import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short! Min 3 symbols')
    .max(50, 'Too long! Max 50 symbols')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short! Min 3 symbols')
    .max(50, 'Too long! Max 50 symbols')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ id: nanoid(5), ...values }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={css.allForm}>
          <div className={css.form}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field type="text" name="name" id={nameFieldId} />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <div className={css.form}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field type="text" name="number" id={numberFieldId} />
            <ErrorMessage className={css.error} name="number" component="span" />
          </div>
          <div className={css.buttonContainer}>
            <button type="submit" className={css.button}>
              Add contacts
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
export default ContactForm;
