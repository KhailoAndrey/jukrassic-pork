import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ReactComponent as CloseBtn } from '../../../images/Music/svg/icon-close.svg';
import { ReactComponent as SendIcon } from '../../../images/Footer/send.svg';
import scss from '../Footer.module.scss';
import MessageField from '../MessageField/MessageField';

axios.defaults.baseURL = 'https://jukrassik-pork.onrender.com/api/contact';

const ModalForm = ({ onClose }) => {
  const [symbolCount, setSymbolCount] = useState(0);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const modal = document.querySelector('#modal-form');

  const submitContactForm = async data => {
    try {
      console.log('data:', data);
      await axios.post('/', data);
    } catch (error) {
      console.log('error:', error);
      console.log('error.message:', error.message);
    }
  };

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
          onSubmit={async (values, { setSubmitting }) => {
            await submitContactForm(values);
            setSubmitting(false);
            onClose();
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form className={scss.contact_form} onSubmit={handleSubmit}>
              <div className={scss.contact_form__head_wrap}>
                <h3 className={scss.form_title}>Contact Form</h3>
                <div className={scss.close_btn__wrap}>
                  <CloseBtn
                    className={scss.close_btn}
                    type="button"
                    onClick={onClose}
                  >
                    Close
                  </CloseBtn>
                </div>
              </div>

              <div className={scss.contact_form__input_wrap}>
                <label className={scss.contact_form__label} htmlFor="name">
                  Your name
                </label>
                <Field
                  className={scss.contact_form__field}
                  id="name"
                  type="text"
                  name="name"
                />
                <ErrorMessage
                  className={scss.contact_form__support_text}
                  name="name"
                  component="div"
                />
              </div>

              <div className={scss.contact_form__input_wrap}>
                <label className={scss.contact_form__label} htmlFor="email">
                  Email
                </label>
                <Field
                  className={scss.contact_form__field}
                  id="email"
                  type="email"
                  name="email"
                />
                <ErrorMessage
                  className={scss.contact_form__support_text}
                  name="email"
                  component="div"
                />
              </div>

              <div className={scss.contact_form__input_wrap}>
                <label className={scss.contact_form__label} htmlFor="message">
                  Message
                </label>
                <MessageField setCounter={setSymbolCount}></MessageField>

                <div className={scss.contact_form__support_text_wrap}>
                  <ErrorMessage
                    className={scss.contact_form__support_text}
                    name="message"
                    component="div"
                  />

                  <span className={scss.contact_form__symbol_counter}>
                    {symbolCount}/200
                  </span>
                </div>
              </div>

              <button
                className={scss.contact_form__button}
                type="submit"
                disabled={isSubmitting}
              >
                <SendIcon className={scss.send_icon} />
                {isSubmitting ? `Sending...` : `Send Email`}
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
