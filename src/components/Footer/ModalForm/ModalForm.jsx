import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { ReactComponent as CloseBtn } from '../../../images/Music/svg/icon-close.svg';
import scss from '../Footer.module.scss';

const ModalForm = ({ onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const modal = document.querySelector('#modal-form');

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={scss.overlay} onClick={handleBackdropClick}>
      <div className={scss.modal}>
        Here lies the Form
        <CloseBtn className={scss.close_btn} type="button" onClick={onClose}>
          Close
        </CloseBtn>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={yup.object().shape({
            name: yup.string().min(2).max(32),
            email: yup
              .string()
              .email('Invalid email')
              .required('Email is required'),
            message: yup.string().min(4).required('Message is required'),
          })}
          onSubmit={(values, { setSubmitting, handleReset }) => {
            setTimeout(() => {
              console.log(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ handleSubmit, isSubmitting, handleReset }) => (
            <Form onSubmit={handleSubmit}>
              <Field className={scss.form_field} type="text" name="name" />
              <ErrorMessage name="name" component="div" />

              <Field className={scss.form_field} type="email" name="email" />
              <ErrorMessage name="email" component="div" />

              <Field
                className={scss.form_message}
                name="message"
                as="textarea"
              />
              <ErrorMessage name="message" component="div" />

              <button type="submit" disabled={isSubmitting}>
                Send Email
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>,
    modal
  );
};

ModalForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalForm;
