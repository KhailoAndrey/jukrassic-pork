import { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { ErrorMessage, Form, Formik } from 'formik';

import MessageField from '../MessageField/MessageField';
import InputField from '../InputField/InputField';
import { LanguageContext } from 'utils/LanguageContext';
import { ReactComponent as CloseBtn } from '../../../images/Music/svg/icon-close.svg';
import { ReactComponent as SendIcon } from '../../../images/Footer/send.svg';

import scss from '../Footer.module.scss';

axios.defaults.baseURL = 'https://jukrassik-pork.onrender.com/api/contact';
const EMAIL_REGEX =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/; // eslint-disable-line

const ModalForm = ({ onClose }) => {
  const [symbolCount, setSymbolCount] = useState(0);
  const { currentLanguage } = useContext(LanguageContext);
  const modal = document.querySelector('#modal-form');

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const submitContactForm = async data => {
    try {
      // TODO: delete console.log after testing
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
            name: yup
              .string()
              .min(2, `Minimum characters 2`)
              .max(32, `Maximum characters 32`),
            email: yup
              .string()
              .matches(EMAIL_REGEX, `Must be a valid email`)
              .required(`Email is required`),
            message: yup
              .string()
              .min(4, `Minimum characters 4`)
              .required(`Message is required`),
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
                <h3 className={scss.form_title}>
                  {/* FIXME: fix with i18next */}
                  {currentLanguage === 'en'
                    ? `Contact Form`
                    : `Контактна форма`}
                </h3>

                {/* close button */}
                <div className={scss.close_btn__wrap}>
                  <CloseBtn
                    className={scss.close_btn}
                    type="button"
                    onClick={onClose}
                  />
                </div>
              </div>

              {/* name field */}
              <div className={scss.contact_form__input_wrap}>
                <label className={scss.contact_form__label} htmlFor="name">
                  {/* FIXME: fix with i18next */}
                  {currentLanguage === 'en' ? `Your name` : `Ваше ім'я`}
                </label>
                <InputField id="name" type="text" name="name" />
                <ErrorMessage
                  className={scss.contact_form__support_text}
                  name="name"
                  component="div"
                />
              </div>

              {/* email field */}
              <div className={scss.contact_form__input_wrap}>
                <label className={scss.contact_form__label} htmlFor="email">
                  {/* FIXME: fix with i18next */}
                  {currentLanguage === 'en' ? `Email` : `Ел. пошта`}
                </label>
                <InputField id="email" type="text" name="email" />
                <ErrorMessage
                  className={scss.contact_form__support_text}
                  name="email"
                  component="div"
                />
              </div>

              {/* message field */}
              <div className={scss.contact_form__input_wrap}>
                <label className={scss.contact_form__label} htmlFor="message">
                  {/* FIXME: fix with i18next */}
                  {currentLanguage === 'en' ? `Message` : `Повідомлення`}
                </label>
                <MessageField
                  id="message"
                  type="textarea"
                  name="message"
                  setCounter={setSymbolCount}
                />
                <div className={scss.contact_form__support_text_wrap}>
                  <ErrorMessage
                    className={scss.contact_form__support_text}
                    name="message"
                    component="div"
                  />

                  {/* counter */}
                  <span className={scss.contact_form__symbol_counter}>
                    {symbolCount}/200
                  </span>
                </div>
              </div>

              {/* submit button */}
              <button
                className={scss.contact_form__btn}
                type="submit"
                disabled={isSubmitting}
              >
                <SendIcon className={scss.send_icon} />

                {/* FIXME: fix with i18next */}
                {currentLanguage === 'en'
                  ? isSubmitting
                    ? `Sending...`
                    : `Send Email`
                  : isSubmitting
                  ? `Відправка...`
                  : `Відправити`}
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
