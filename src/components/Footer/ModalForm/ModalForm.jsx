import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { ErrorMessage, Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import MessageField from '../MessageField/MessageField';
import InputField from '../InputField/InputField';
import { ReactComponent as CloseBtn } from '../../../images/Music/svg/icon-close.svg';
import { ReactComponent as SendIcon } from '../../../images/Footer/send.svg';

import scss from '../Footer.module.scss';

axios.defaults.baseURL = 'https://jukrassik-pork.onrender.com/api/contact';
const EMAIL_REGEX =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/; // eslint-disable-line

const ModalForm = ({ onClose, isModalOpen, isInitialLoad }) => {
  const [symbolCount, setSymbolCount] = useState(0);
  const { t } = useTranslation();
  const modal = document.querySelector('#modal-form');

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const submitContactForm = async data => {
    try {
      await axios.post('/', data);

      Notify.success(t('submit_success'), () => {}, {
        width: '252px',
        borderRadius: '0px',
        position: 'center-top',
        fontFamily: 'Mulish',
        timeout: 1000,
        fontSize: '14px',
        success: {
          background: '#363636',
          textColor: '#00fe00',
          notiflixIconColor: '#00fe00',
        },
      });
    } catch (error) {
      Notify.failure(t('submit_error'), () => {}, {
        width: '224px',
        borderRadius: '0px',
        position: 'center-top',
        fontFamily: 'Mulish',
        timeout: 1000,
        fontSize: '14px',
        failure: {
          background: '#363636',
          textColor: '#ff2929',
          notiflixIconColor: '#ff2929',
        },
      });
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
    <div
      className={
        isInitialLoad
          ? `hidden`
          : isModalOpen
          ? `${scss.overlay} ${scss.on}`
          : `${scss.overlay} ${scss.off}`
      }
      onMouseDown={handleBackdropClick}
    >
      <div className={scss.modal}>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={yup.object().shape({
            name: yup
              .string()
              .min(2, t('min_char_2'))
              .max(32, t('max_char_32')),
            email: yup
              .string()
              .matches(EMAIL_REGEX, t('must_be_valid_email'))
              .required(t('email_required')),
            message: yup
              .string()
              .min(4, t('min_char_4'))
              .required(t('message_required')),
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            await submitContactForm(values);
            setSubmitting(false);
            resetForm();
            onClose();
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form className={scss.contact_form} onSubmit={handleSubmit}>
              <div className={scss.contact_form__head_wrap}>
                <h3 className={scss.form_title}>{t('contact_form')}</h3>

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
                <label htmlFor="name">{t('your_name')}</label>
                <InputField id="name" type="text" name="name" />
                <ErrorMessage
                  className={scss.contact_form__support_text}
                  name="name"
                  component="div"
                />
              </div>

              {/* email field */}
              <div className={scss.contact_form__input_wrap}>
                <label htmlFor="email">{t('email_form_title')}</label>
                <InputField id="email" type="text" name="email" />
                <ErrorMessage
                  className={scss.contact_form__support_text}
                  name="email"
                  component="div"
                />
              </div>

              {/* message field */}
              <div className={scss.contact_form__input_wrap}>
                <label htmlFor="message">{t('message_form_field')}</label>
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
                className={`${scss.contact_form__btn} ${
                  isSubmitting && scss.shine
                }`}
                type="submit"
              >
                <SendIcon className={scss.send_icon} />

                {isSubmitting
                  ? t('sending_form_status')
                  : t('idle_form_status')}
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
  isModalOpen: PropTypes.bool.isRequired,
  isInitialLoad: PropTypes.bool.isRequired,
};

export default ModalForm;
