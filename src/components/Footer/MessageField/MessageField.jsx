import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field, useFormikContext } from 'formik';
import scss from '../Footer.module.scss';

const MessageField = ({ id, type, name, setCounter }) => {
  const { values, errors, touched } = useFormikContext();

  useEffect(() => {
    setCounter(values.message.length);
  }, [setCounter, values]);

  return (
    <Field
      className={`${
        errors[name] && touched[name]
          ? `${scss.input_error} ${scss.contact_form__message}`
          : scss.contact_form__message
      }`}
      id={id}
      as={type}
      name={name}
      maxLength={200}
      value={values[name].replace(/\s+/g, ' ')}
    />
  );
};

MessageField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setCounter: PropTypes.func.isRequired,
};

export default MessageField;
