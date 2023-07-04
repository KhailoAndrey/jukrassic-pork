import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field, useFormikContext } from 'formik';
import scss from '../Footer.module.scss';

const MessageField = ({ setCounter }) => {
  const { values } = useFormikContext();

  useEffect(() => {
    setCounter(values.message.length);
  }, [setCounter, values]);

  return (
    <Field
      className={scss.contact_form__message}
      id="message"
      name="message"
      as="textarea"
      maxLength={200}
    />
  );
};

MessageField.propTypes = {
  setCounter: PropTypes.func.isRequired,
};

export default MessageField;
