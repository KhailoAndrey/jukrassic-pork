import { Field, useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import scss from '../Footer.module.scss';

const InputField = ({ id, type, name }) => {
  const { errors, touched, values } = useFormikContext();

  return (
    <Field
      className={`${
        errors[name] && touched[name]
          ? `${scss.input_error} ${scss.contact_form__field}`
          : scss.contact_form__field
      }`}
      id={id}
      type={type}
      name={name}
      value={
        name === 'email'
          ? values.email.trim().toLowerCase()
          : values[name].replace(/\s+/g, ' ')
      }
    />
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputField;
