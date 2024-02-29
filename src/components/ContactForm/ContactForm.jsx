import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short! Min 3 symbols')
    .max(50, 'Too long! Max 50 symbols')
    .required('Required'),
  phone: Yup.string()
    .min(3, 'Too short! Min 3 symbols')
    .max(50, 'Too long! Max 50 symbols')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
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
            <label htmlFor={phoneFieldId}>Number</label>
            <Field type="text" name="phone" id={phoneFieldId} />
            <ErrorMessage className={css.error} name="phone" component="span" />
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
